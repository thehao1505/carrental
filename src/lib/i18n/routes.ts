import { defaultLocale, locales, type Locale } from "./config";

export const siteUrl = "https://www.dvdldaiduong.com";

/**
 * Single source of truth for every page path, per locale.
 *
 * `null` means the page has no translation in that locale — it is skipped when
 * building navigation and, importantly, omitted from hreflang so we never point
 * Google at a URL that doesn't exist.
 *
 * Vietnamese paths are the ones already indexed; they must never change.
 */
export const routePaths = {
  home: { vi: "/", en: "/en" },
  carRental: { vi: "/thue-xe", en: "/en/car-rental" },
  carRentalTravel: {
    vi: "/thue-xe/du-lich-dak-lak",
    en: "/en/car-rental/dak-lak-travel",
  },
  carRentalCorporate: {
    vi: "/thue-xe/doanh-nghiep",
    en: "/en/car-rental/corporate",
  },
  pricing: { vi: "/bang-gia", en: "/en/pricing" },
  about: { vi: "/gioi-thieu", en: "/en/about" },
  contact: { vi: "/lien-he", en: "/en/contact" },
  tours: { vi: "/tour-dak-lak", en: "/en/dak-lak-tours" },
  privacyPolicy: { vi: "/chinh-sach-bao-mat", en: "/en/privacy-policy" },
  shippingPolicy: { vi: "/chinh-sach-van-chuyen", en: "/en/booking-policy" },
  // The listing page has an English shell, but every article body comes from
  // Sanity and is Vietnamese-only (posts have no `language` field). See
  // `hreflangExcluded` below for why this pair is kept out of hreflang.
  news: { vi: "/tin-tuc", en: "/en/news" },
} as const satisfies Record<string, Record<Locale, string | null>>;

export type RouteKey = keyof typeof routePaths;

/**
 * Routes that exist in both locales but must NOT advertise each other via
 * hreflang.
 *
 * /tin-tuc and /en/news share the same Vietnamese article list — only the
 * surrounding chrome is translated. hreflang tells Google "same content, other
 * language", which isn't true here: an English searcher sent to /en/news would
 * still land on Vietnamese articles. Both URLs stay indexable and self-canonical;
 * they just don't claim to be translations of one another.
 *
 * Remove a key from this set once its content is genuinely translated.
 */
export const hreflangExcluded: ReadonlySet<RouteKey> = new Set(["news"]);

/** Vehicle detail slugs, paired across locales so hreflang can cross-reference. */
export const carRentalSlugPairs: ReadonlyArray<Record<Locale, string>> = [
  { vi: "thue-xe-4-cho", en: "car-rental-4-seat" },
  { vi: "thue-xe-7-cho", en: "car-rental-7-seat" },
  { vi: "thue-xe-16-cho", en: "car-rental-16-seat" },
  { vi: "thue-xe-29-cho", en: "car-rental-29-seat" },
  { vi: "thue-xe-45-cho", en: "car-rental-45-seat" },
  { vi: "thue-xe-limousine", en: "car-rental-limousine" },
];

/** Finds the cross-locale slug pair for a vehicle, given its slug in `locale`. */
export function carRentalSlugPair(
  slug: string,
  locale: Locale,
): Record<Locale, string> | null {
  return carRentalSlugPairs.find((pair) => pair[locale] === slug) ?? null;
}

/** Path for a route in a locale, or `null` when untranslated. */
export function path(key: RouteKey, locale: Locale): string | null {
  return routePaths[key][locale];
}

/** Absolute URL for a route in a locale, or `null` when untranslated. */
export function url(key: RouteKey, locale: Locale): string | null {
  const p = path(key, locale);
  if (p === null) return null;
  return p === "/" ? siteUrl : `${siteUrl}${p}`;
}

/** Path for a vehicle detail page, e.g. /thue-xe/thue-xe-4-cho. */
export function carRentalPath(slug: string, locale: Locale): string {
  return `${routePaths.carRental[locale]}/${slug}`;
}

export function carRentalUrl(slug: string, locale: Locale): string {
  return `${siteUrl}${carRentalPath(slug, locale)}`;
}

type Alternates = {
  canonical: string;
  languages: Record<string, string>;
};

/**
 * Builds the `alternates` block for Next.js metadata: a self-referencing
 * canonical plus a reciprocal hreflang set.
 *
 * hreflang only works when both sides declare each other, so this always emits
 * the full set of translated locales (including `locale` itself) and points
 * x-default at the default locale. Locales whose path is `null` are omitted.
 */
export function alternates(key: RouteKey, locale: Locale): Alternates {
  const canonical = url(key, locale);
  if (canonical === null) {
    throw new Error(`Route "${key}" has no path for locale "${locale}"`);
  }

  // Self-canonical only: the locales are not translations of each other.
  if (hreflangExcluded.has(key)) return { canonical, languages: {} };

  const languages: Record<string, string> = {};
  for (const l of locales) {
    const href = url(key, l);
    if (href !== null) languages[l] = href;
  }

  const fallback = url(key, defaultLocale);
  if (fallback !== null) languages["x-default"] = fallback;

  return { canonical, languages };
}

/** Same as `alternates`, for a vehicle detail page. */
export function carRentalAlternates(slug: string, locale: Locale): Alternates {
  const canonical = carRentalUrl(slug, locale);
  const pair = carRentalSlugPair(slug, locale);

  // Unknown slug: self-canonical only, no hreflang claims we can't back up.
  if (!pair) return { canonical, languages: {} };

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = carRentalUrl(pair[l], l);
  languages["x-default"] = carRentalUrl(pair[defaultLocale], defaultLocale);

  return { canonical, languages };
}

/**
 * Maps the current pathname to the equivalent page in `target`, for the language
 * switcher. Falls back to the target locale's home page when the current page
 * has no counterpart (e.g. a blog post).
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/+$/, "") || "/";

  for (const key of Object.keys(routePaths) as RouteKey[]) {
    for (const l of locales) {
      if (routePaths[key][l] === clean) {
        return routePaths[key][target] ?? routePaths.home[target] ?? "/";
      }
    }
  }

  for (const l of locales) {
    const base = routePaths.carRental[l];
    if (clean.startsWith(`${base}/`)) {
      const slug = clean.slice(base.length + 1);
      const pair = carRentalSlugPair(slug, l);
      if (pair) return carRentalPath(pair[target], target);
    }
  }

  return routePaths.home[target] ?? "/";
}

/* ------------------------------------------------------------------ *
 * Public URL  <->  internal route mapping
 *
 * The app tree lives at src/app/[locale]/<segment>, where <segment> is the
 * English path. That makes every /en/* URL its own internal route, so only
 * Vietnamese URLs need a rewrite in src/proxy.ts:
 *
 *   /            -> /vi
 *   /thue-xe     -> /vi/car-rental
 *   /bang-gia    -> /vi/pricing
 *
 * The mapping is derived from routePaths rather than written out a second
 * time, so a new page can never have a public path and an internal path that
 * disagree.
 * ------------------------------------------------------------------ */

/** Internal (rewritten) path for a route in a locale, e.g. "/vi/car-rental". */
export function internalPath(key: RouteKey, locale: Locale): string | null {
  const en = routePaths[key].en;
  if (en === null) return null;
  // "/en/car-rental" -> "/car-rental";  "/en" -> ""
  const segment = en.slice("/en".length);
  return `/${locale}${segment}`;
}

/** Dynamic route bases: public prefix per locale -> internal segment. */
const dynamicBases = [
  { key: "carRental" as RouteKey, segment: "car-rental" },
  { key: "news" as RouteKey, segment: "news" },
];

/**
 * Maps a public pathname to the internal route that should render it, or null
 * when the request already addresses an internal route (every /en/* URL) or
 * matches nothing.
 */
export function toInternalPath(pathname: string): string | null {
  const clean = pathname.replace(/\/+$/, "") || "/";

  // Static routes, exact match. Checked before the dynamic bases so that
  // /thue-xe/doanh-nghiep resolves to the corporate page, not to a slug.
  for (const key of Object.keys(routePaths) as RouteKey[]) {
    if (routePaths[key][defaultLocale] === clean) {
      return internalPath(key, defaultLocale);
    }
  }

  // Dynamic routes: /thue-xe/<slug>, /tin-tuc/<slug>.
  for (const { key, segment } of dynamicBases) {
    const base = routePaths[key][defaultLocale];
    if (base !== null && clean.startsWith(`${base}/`)) {
      const rest = clean.slice(base.length + 1);
      if (rest.length > 0) return `/${defaultLocale}/${segment}/${rest}`;
    }
  }

  return null;
}

/**
 * Inverse of toInternalPath, for the internal paths of the default locale.
 *
 * Rewrites leave the internal URL reachable directly, which would serve the
 * same page at both /thue-xe and /vi/car-rental. src/proxy.ts uses this to
 * 301 the internal form back to the public one so Google only ever sees one.
 */
export function toPublicPath(pathname: string): string | null {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const prefix = `/${defaultLocale}`;
  if (clean !== prefix && !clean.startsWith(`${prefix}/`)) return null;

  for (const key of Object.keys(routePaths) as RouteKey[]) {
    if (internalPath(key, defaultLocale) === clean) {
      return routePaths[key][defaultLocale];
    }
  }

  for (const { key, segment } of dynamicBases) {
    const base = `${prefix}/${segment}/`;
    if (clean.startsWith(base)) {
      const publicBase = routePaths[key][defaultLocale];
      if (publicBase !== null) return `${publicBase}/${clean.slice(base.length)}`;
    }
  }

  // Under the default-locale prefix but not a route we know: still must not be
  // served at this URL. The caller turns a null here into a 404.
  return null;
}
