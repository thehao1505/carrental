import { notFound } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

/** Every page under app/[locale] receives the locale segment as a param. */
export type LocaleParams = { params: Promise<{ locale: string }> };

/**
 * Narrows the raw segment to a Locale, 404-ing on anything else.
 *
 * src/proxy.ts rewrites public URLs onto /[locale]/..., so a real request always
 * carries a known locale. A direct hit on an internal-looking path with no
 * locale prefix (e.g. /car-rental) also lands here, and must 404 rather than
 * render the site in the default language at a URL we never publish.
 */
export function requireLocale(value: string): Locale {
  if (!isLocale(value)) notFound();
  return value;
}

/**
 * Same narrowing, but falls back to the default locale instead of 404-ing.
 *
 * The layout uses this so that a 404 still renders inside the site chrome. If
 * the layout threw, the notFound boundary nested under it could never render
 * and Next would fall back to the bare global error page.
 */
export function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}
