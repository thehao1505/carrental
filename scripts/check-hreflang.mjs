#!/usr/bin/env node
/**
 * hreflang / canonical consistency check for dvdldaiduong.com.
 *
 * Walks every URL in /sitemap.xml (which is generated from `routePaths` and the
 * vehicle registry in src/lib/i18n/routes.ts, so it covers every route key in
 * every locale) and fails if any page:
 *
 *   - does not return 200
 *   - has a canonical that isn't its own URL
 *   - has an <html lang> that disagrees with its own hreflang entry
 *   - declares hreflang without listing itself or without x-default
 *   - points hreflang at a page that doesn't point back with the same set
 *   - disagrees with the xhtml:link alternates the sitemap lists for it
 *
 * Google drops hreflang silently when any of these is wrong, so nothing else
 * would catch a regression.
 *
 * Usage (against a running build):
 *   npm run build && npm run start &
 *   node scripts/check-hreflang.mjs                       # http://localhost:3000
 *   node scripts/check-hreflang.mjs https://www.dvdldaiduong.com
 */

const SITE = "https://www.dvdldaiduong.com";
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/+$/, "");
const CONCURRENCY = 6;

/** Production URL -> URL on the server under test. */
const local = (url) => (url === SITE ? `${base}/` : url.replace(SITE, base));

function attr(tag, name) {
  return tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"))?.[1] ?? null;
}

const decode = (s) => s.replaceAll("&amp;", "&");

function parsePage(html) {
  // Only the document head: hreflang links must not be picked up from an RSC
  // payload or article body further down.
  const head = html.slice(0, html.indexOf("</head>") + 1 || undefined);
  const links = head.match(/<link\s[^>]*>/gi) ?? [];

  let canonical = null;
  const hreflang = {};
  for (const tag of links) {
    const rel = attr(tag, "rel");
    const href = attr(tag, "href");
    if (!href) continue;
    if (rel === "canonical") canonical = decode(href);
    if (rel === "alternate") {
      const lang = attr(tag, "hreflang");
      if (lang) hreflang[lang] = decode(href);
    }
  }

  // The 404 page nests a second <html>; the first one carrying lang is real.
  const lang = (html.match(/<html\s[^>]*>/gi) ?? [])
    .map((t) => attr(t, "lang"))
    .find(Boolean);

  return { canonical, hreflang, lang: lang ?? null };
}

function parseSitemap(xml) {
  const entries = new Map();
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = decode(block.match(/<loc>([^<]+)<\/loc>/)[1]);
    const alternates = {};
    for (const tag of block.match(/<xhtml:link\s[^>]*>/g) ?? []) {
      alternates[attr(tag, "hreflang")] = decode(attr(tag, "href"));
    }
    entries.set(loc, alternates);
  }
  return entries;
}

const sameSet = (a, b) => {
  const ka = Object.keys(a).sort();
  const kb = Object.keys(b).sort();
  return ka.length === kb.length && ka.every((k, i) => k === kb[i] && a[k] === b[k]);
};

const show = (set) =>
  Object.keys(set).length === 0
    ? "(none)"
    : Object.entries(set)
        .map(([k, v]) => `${k}=${v.replace(SITE, "") || "/"}`)
        .join(" ");

// Next streams metadata into the body for browsers but renders it in <head>
// for crawlers. Fetch as Googlebot: that is both what Google sees and the only
// response where the <head> is guaranteed complete.
const USER_AGENT =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: "manual",
    headers: { "user-agent": USER_AGENT },
  });
  return { status: res.status, text: await res.text() };
}

async function main() {
  const sitemap = await fetchText(`${base}/sitemap.xml`);
  if (sitemap.status !== 200) {
    console.error(`sitemap.xml returned ${sitemap.status}`);
    process.exit(1);
  }
  const sitemapEntries = parseSitemap(sitemap.text);
  const urls = [...sitemapEntries.keys()];

  const pages = new Map();
  const queue = [...urls];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (queue.length) {
        const url = queue.shift();
        const { status, text } = await fetchText(local(url));
        pages.set(url, { status, ...parsePage(text) });
      }
    }),
  );

  const errors = [];
  const fail = (url, msg) => errors.push(`${url.replace(SITE, "") || "/"}: ${msg}`);

  for (const url of urls) {
    const page = pages.get(url);
    if (page.status !== 200) {
      fail(url, `status ${page.status}`);
      continue;
    }

    if (page.canonical !== url) fail(url, `canonical is ${page.canonical}`);

    const { hreflang } = page;
    const sitemapSet = sitemapEntries.get(url);
    if (!sameSet(hreflang, sitemapSet)) {
      fail(url, `page hreflang [${show(hreflang)}] != sitemap [${show(sitemapSet)}]`);
    }

    if (Object.keys(hreflang).length === 0) continue;

    const self = Object.entries(hreflang).find(
      ([lang, href]) => lang !== "x-default" && href === url,
    );
    if (!self) fail(url, "hreflang set does not include the page itself");
    else if (page.lang !== self[0]) {
      fail(url, `<html lang="${page.lang}"> but hreflang lists it as "${self[0]}"`);
    }
    if (!hreflang["x-default"]) fail(url, "no x-default");

    for (const [lang, href] of Object.entries(hreflang)) {
      if (lang === "x-default" || href === url) continue;
      const other = pages.get(href);
      if (!other) {
        fail(url, `hreflang ${lang} -> ${href} is not in the sitemap`);
      } else if (!sameSet(other.hreflang, hreflang)) {
        fail(url, `hreflang ${lang} -> ${href} does not reciprocate (it lists [${show(other.hreflang)}])`);
      }
    }
  }

  const paired = urls.filter((u) => Object.keys(pages.get(u).hreflang).length);
  console.log(
    `Checked ${urls.length} URLs from ${base} (${paired.length} with hreflang).`,
  );
  if (errors.length) {
    console.error(`\n${errors.length} problem(s):\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log("hreflang OK");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
