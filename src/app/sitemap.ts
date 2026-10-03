import { execSync } from "node:child_process";
import { client } from "@/sanity/client";
import type { MetadataRoute } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import {
  carRentalSlugPairs,
  carRentalUrl,
  hreflangExcluded,
  routePaths,
  url as routeUrl,
  type RouteKey,
} from "@/lib/i18n/routes";
import { getUniqueCarRentalData } from "@/lib/data";

const siteUrl = "https://www.dvdldaiduong.com";

const POSTS_SITEMAP_QUERY = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current,
  publishedAt,
  _updatedAt
}`;

const repoRoot = process.cwd();
const dateCache = new Map<string, string | null>();

// Returns YYYY-MM-DD of the most recent commit touching any of `paths`, or null
// if git is unavailable (e.g. ISR revalidation on a serverless runtime without
// .git). Memoized so multiple routes that share a source file only shell out once.
function gitLastModified(paths: string[]): string | null {
  const key = paths.join("|");
  if (dateCache.has(key)) return dateCache.get(key) ?? null;
  try {
    // `:(literal)` is required because the app paths contain [locale], and git
    // would otherwise read the brackets as a pathspec glob and match nothing.
    const args = paths
      .map((p) => JSON.stringify(`:(literal)${p}`))
      .join(" ");
    const out = execSync(`git log -1 --format=%cs -- ${args}`, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const result = /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
    dateCache.set(key, result);
    return result;
  } catch {
    dateCache.set(key, null);
    return null;
  }
}

// Per-route source files + a fallback date that should be bumped manually when
// the route's content materially changes. Fallbacks fire when git isn't
// available (runtime regen on serverless); during `next build` real git dates
// take precedence.
//
// Each entry emits one URL per locale that has a path for it (see routePaths),
// with hreflang alternates so Google sees the reciprocal set in the sitemap too.
const STATIC_ROUTES: Array<{
  key: RouteKey;
  files: string[];
  fallback: string;
}> = [
  { key: "home", files: ["src/app/[locale]/page.tsx"], fallback: "2026-06-07" },
  { key: "pricing", files: ["src/app/[locale]/pricing"], fallback: "2026-06-08" },
  { key: "about", files: ["src/app/[locale]/about"], fallback: "2026-06-08" },
  { key: "contact", files: ["src/app/[locale]/contact"], fallback: "2026-05-08" },
  { key: "news", files: ["src/app/[locale]/news"], fallback: "2026-06-08" },
  {
    key: "carRental",
    files: ["src/app/[locale]/car-rental", "src/lib/data/car-rental.ts"],
    fallback: "2026-06-09",
  },
  { key: "tours", files: ["src/app/[locale]/dak-lak-tours"], fallback: "2026-06-07" },
  {
    key: "carRentalTravel",
    files: ["src/app/[locale]/car-rental/dak-lak-travel"],
    fallback: "2026-06-08",
  },
  {
    key: "carRentalCorporate",
    files: ["src/app/[locale]/car-rental/corporate"],
    fallback: "2026-06-15",
  },
  {
    key: "privacyPolicy",
    files: ["src/app/[locale]/privacy-policy"],
    fallback: "2026-06-08",
  },
  {
    key: "shippingPolicy",
    files: ["src/app/[locale]/booking-policy"],
    fallback: "2026-06-08",
  },
];

/** hreflang map for a route, skipping locales with no translation. */
/**
 * hreflang map for a route. Mirrors `alternates()` in src/lib/i18n/routes.ts —
 * same locales, same x-default, same exclusions — so the sitemap and the page's
 * own <link rel="alternate"> tags never disagree. Google cross-checks them.
 */
function languagesFor(key: RouteKey): Record<string, string> | undefined {
  if (hreflangExcluded.has(key)) return undefined;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    const href = routeUrl(key, l);
    if (href !== null) languages[l] = href;
  }
  if (Object.keys(languages).length < 2) return undefined;

  const fallback = routeUrl(key, defaultLocale);
  if (fallback !== null) languages["x-default"] = fallback;
  return languages;
}

const CAR_RENTAL_DATA_FILE = "src/lib/data/car-rental.ts";
const CAR_RENTAL_FALLBACK = "2026-06-09";

function toYmd(value: string | undefined): string | null {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().split("T")[0];
}

async function getCarRentalUrls(): Promise<MetadataRoute.Sitemap> {
  try {
    const lastModified =
      gitLastModified([CAR_RENTAL_DATA_FILE]) ?? CAR_RENTAL_FALLBACK;

    const entries: MetadataRoute.Sitemap = [];
    for (const locale of locales) {
      for (const item of getUniqueCarRentalData(locale)) {
        const pair = carRentalSlugPairs.find((p) => p[locale] === item.slug);
        entries.push({
          url: carRentalUrl(item.slug, locale),
          lastModified,
          ...(pair
            ? {
                alternates: {
                  languages: {
                    ...Object.fromEntries(
                      locales.map((l) => [l, carRentalUrl(pair[l], l)]),
                    ),
                    "x-default": carRentalUrl(pair[defaultLocale], defaultLocale),
                  },
                },
              }
            : {}),
        });
      }
    }
    return entries;
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls: MetadataRoute.Sitemap = STATIC_ROUTES.flatMap((route) => {
    const lastModified = gitLastModified(route.files) ?? route.fallback;
    const languages = languagesFor(route.key);

    return locales.flatMap((locale: Locale) => {
      const href = routeUrl(route.key, locale);
      if (href === null) return [];
      return [
        {
          url: href,
          lastModified,
          ...(languages ? { alternates: { languages } } : {}),
        },
      ];
    });
  });

  let postUrls: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch<
      { slug: string; publishedAt?: string; _updatedAt?: string }[]
    >(POSTS_SITEMAP_QUERY, {}, { next: { revalidate: 3600 } });

    postUrls = posts.map((post) => ({
      url: `${siteUrl}${routePaths.news.vi}/${post.slug}`,
      lastModified:
        toYmd(post._updatedAt) ??
        toYmd(post.publishedAt) ??
        new Date().toISOString().split("T")[0],
    }));
  } catch {
    // fallback: don't crash if Sanity is unavailable
  }

  const carRentalUrls = await getCarRentalUrls();

  return [...staticUrls, ...postUrls, ...carRentalUrls];
}
