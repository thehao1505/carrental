import { intlLocale, type Locale } from "./config";

const numberFormats = new Map<Locale, Intl.NumberFormat>();

/**
 * Groups digits the way `locale` writes them: 1.400.000 in Vietnamese,
 * 1,400,000 in English. The currency symbol and its position are spelled out in
 * the dictionary instead (see `pricing.priceFormat`) — `Intl`'s own VND style
 * would render "1.400.000 ₫", not the "1.400.000đ" the indexed pages use.
 */
export function formatNumber(value: number, locale: Locale): string {
  let format = numberFormats.get(locale);
  if (!format) {
    format = new Intl.NumberFormat(intlLocale[locale]);
    numberFormats.set(locale, format);
  }
  return format.format(value);
}
