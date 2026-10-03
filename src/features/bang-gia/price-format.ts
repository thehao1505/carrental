import { formatNumber, interpolate, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n/types";

/** A price in VND: a flat amount, a per-km rate, or a "from" starting price. */
export type PriceCell = number | { perKm: number } | { from: number };

export function formatPriceCell(
  cell: PriceCell,
  format: Dictionary["pricing"]["priceFormat"],
  locale: Locale,
): string {
  if (typeof cell === "number") {
    return interpolate(format.amount, { amount: formatNumber(cell, locale) });
  }
  if ("perKm" in cell) {
    return interpolate(format.perKm, { amount: formatNumber(cell.perKm, locale) });
  }
  return interpolate(format.from, { amount: formatNumber(cell.from, locale) });
}
