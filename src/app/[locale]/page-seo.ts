import type { Metadata } from "next";
import {
  alternates,
  locales,
  ogLocale,
  path,
  url,
  type Locale,
  type RouteKey,
} from "@/lib/i18n";

type OgImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Per-locale SEO copy for one page.
 *
 * Every field is authored per language rather than templated, because these are
 * translations, not formatting. Pages keep their table in a colocated `seo.ts`
 * on purpose: it is page copy, not a UI string reused across components, so it
 * stays out of the shared dictionary (see A10 in output/I18N-TODO.md).
 */
export type PageSeo = {
  title: string;
  description: string;
  keywords?: string[];
  og?: {
    title: string;
    description: string;
    images?: OgImage[];
  };
  twitter?: {
    title: string;
    description: string;
  };
  /** JSON-LD emitted by the page, in order. */
  schemas?: Record<string, unknown>[];
};

/**
 * Assembles Next.js metadata from a page's per-locale copy.
 *
 * Centralising this is what keeps hreflang honest: `alternates()` and
 * `alternateLocale` are derived from the route registry on every page, so a new
 * page cannot ship with a canonical but no hreflang set.
 */
export function buildMetadata(
  key: RouteKey,
  locale: Locale,
  seo: PageSeo,
): Metadata {
  const alternateLocale = locales
    .filter((l) => l !== locale && path(key, l) !== null)
    .map((l) => ogLocale[l]);

  return {
    title: seo.title,
    description: seo.description,
    ...(seo.keywords ? { keywords: seo.keywords } : {}),
    alternates: alternates(key, locale),
    ...(seo.og
      ? {
          openGraph: {
            title: seo.og.title,
            description: seo.og.description,
            url: url(key, locale) ?? undefined,
            locale: ogLocale[locale],
            alternateLocale,
            type: "website",
            ...(seo.og.images ? { images: seo.og.images } : {}),
          },
        }
      : {}),
    ...(seo.twitter
      ? {
          twitter: {
            card: "summary_large_image",
            title: seo.twitter.title,
            description: seo.twitter.description,
          },
        }
      : {}),
  };
}
