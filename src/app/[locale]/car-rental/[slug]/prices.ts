import { dailyPriceVND } from "@/lib/data";
import { vehicleIdFromSlug, type Locale } from "@/lib/i18n";

/** Price range for a vehicle addressed by its slug in `locale`. */
export function priceFor(slug: string, locale: Locale) {
  const id = vehicleIdFromSlug(slug, locale);
  return id ? dailyPriceVND[id] : undefined;
}
