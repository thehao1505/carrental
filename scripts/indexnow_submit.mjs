#!/usr/bin/env node
/**
 * IndexNow submitter for dvdldaiduong.com
 *
 * IndexNow notifies search engines (Bing, Yandex, Naver, Seznam, Yep, IndexNow.org)
 * the moment a URL is created/updated/deleted - much faster than waiting for the
 * crawl queue. Google does NOT participate in IndexNow but they also receive
 * Bing-shared signals indirectly.
 *
 * Usage:
 *   node scripts/indexnow_submit.mjs                # submit every URL in sitemap.xml
 *   node scripts/indexnow_submit.mjs <url> [<url>]  # submit specific URLs
 *
 * Recommended CI hook (Vercel "Production Deployment Succeeded"):
 *   node scripts/indexnow_submit.mjs
 *
 * Verification: https://www.dvdldaiduong.com/a6166697b4656c68b9262b33878b5b64.txt
 * must return the same key string for the API to accept submissions.
 */

const HOST = "www.dvdldaiduong.com";
const KEY = "a6166697b4656c68b9262b33878b5b64";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";
const BATCH_LIMIT = 10000;

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: ${res.status}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  return [...new Set(urls)].filter((u) =>
    u.startsWith(`https://${HOST}`),
  );
}

async function submit(urls) {
  if (urls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }
  if (urls.length > BATCH_LIMIT) {
    console.warn(
      `Trimming submission from ${urls.length} to ${BATCH_LIMIT} URLs (IndexNow per-call cap).`,
    );
    urls = urls.slice(0, BATCH_LIMIT);
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  console.log(`Submitting ${urls.length} URL(s) to IndexNow...`);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow response: ${res.status} ${res.statusText}`);
  // 200 = accepted, 202 = accepted but not yet validated, 400/422 = bad data,
  // 403 = key not found at keyLocation, 429 = rate-limited.
  if (!res.ok && res.status !== 202) {
    const text = await res.text().catch(() => "");
    throw new Error(`Submission rejected: ${res.status} ${text}`);
  }
}

const args = process.argv.slice(2);
try {
  const urls =
    args.length > 0 ? args : await fetchSitemapUrls();
  await submit(urls);
  console.log("Done.");
} catch (err) {
  console.error("IndexNow submit failed:", err.message);
  process.exit(1);
}
