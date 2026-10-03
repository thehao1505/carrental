import { carRentalSlugPair, defaultLocale, type Locale } from "@/lib/i18n";

/**
 * Daily price range (VND) per vehicle, extracted from each tldr in
 * src/lib/data/car-rental.ts.
 *
 * Keyed by the Vietnamese slug only. The English slugs are translations of the
 * same six vehicles, so a second table keyed by English slug could drift out of
 * step with this one without anything failing — the pairing in
 * `carRentalSlugPairs` is what maps between them.
 *
 * Prices stay in VND for every locale: that is the currency the service is
 * actually transacted in.
 */
const dailyPriceVND: Record<string, { low: number; high: number }> = {
  "thue-xe-4-cho": { low: 800000, high: 1500000 },
  "thue-xe-7-cho": { low: 1100000, high: 2200000 },
  "thue-xe-16-cho": { low: 1800000, high: 3500000 },
  "thue-xe-29-cho": { low: 3000000, high: 5500000 },
  "thue-xe-45-cho": { low: 4500000, high: 8000000 },
  "thue-xe-limousine": { low: 1800000, high: 3500000 },
};

/** Price range for a vehicle addressed by its slug in `locale`. */
export function priceFor(slug: string, locale: Locale) {
  const viSlug =
    locale === defaultLocale
      ? slug
      : carRentalSlugPair(slug, locale)?.[defaultLocale];
  return viSlug ? dailyPriceVND[viSlug] : undefined;
}
