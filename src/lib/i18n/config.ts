// Locale registry. Adding a language = add its code here, add a column to every
// entry in routes.ts, and add a dictionary under ./dictionaries.
export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

/** The default locale is served from the site root with no path prefix. */
export const defaultLocale: Locale = "vi";

/** Locales that carry a URL prefix (everything except the default). */
export const prefixedLocales = locales.filter(
  (l): l is Exclude<Locale, typeof defaultLocale> => l !== defaultLocale,
);

/** BCP-47 / OpenGraph tags per locale. */
export const ogLocale: Record<Locale, string> = {
  vi: "vi_VN",
  en: "en_US",
};

/** `Intl` locale used for date and number formatting. */
export const intlLocale: Record<Locale, string> = {
  vi: "vi-VN",
  en: "en-US",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
