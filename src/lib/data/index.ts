import type { Locale } from "@/lib/i18n/config";
import { carRentalSlugs, vehicleIds, type VehicleId } from "@/lib/i18n/routes";
import { carRentalVi } from "./car-rental";
import { carRentalEn } from "./car-rental.en";
import { testimonials } from "./testimonials";
import { testimonialsEn } from "./testimonials.en";
import type { CarRentalCopy } from "./types";

export * from "./testimonials";
export type { CarRentalCopy } from "./types";

export type CarRentalItem = CarRentalCopy & {
  id: VehicleId;
  slug: string;
  image: string;
};

/**
 * Vehicle copy per locale. Each table is `Record<VehicleId, CarRentalCopy>`, so
 * a vehicle missing from one language is a compile error rather than a page
 * that silently 404s in that locale.
 */
const carRentalCopy: Record<Locale, Record<VehicleId, CarRentalCopy>> = {
  vi: carRentalVi,
  en: carRentalEn,
};

/** Listing/hero image per vehicle — the same photo in every locale. */
const vehicleImage: Record<VehicleId, string> = {
  "4-seat": "/images/thue-xe-4-cho.webp",
  "7-seat": "/images/thue-xe-7-cho.webp",
  "16-seat": "/images/thue-xe-16-cho.webp",
  "29-seat": "/images/thue-xe-29-cho.webp",
  "45-seat": "/images/thue-xe-45-cho.webp",
  limousine: "/images/thue-xe-limousine.webp",
};

/**
 * Daily price range (VND) per vehicle, matching the range quoted in each tldr
 * in ./car-rental.ts. Used by the Service schema offers on the detail pages and
 * by /llms-full.txt.
 *
 * Keyed by vehicle id, not by slug: the per-locale slugs all address the same
 * six vehicles, and a table per slug could drift out of step without anything
 * failing. `Record<VehicleId, …>` also makes a new vehicle without a price a
 * compile error.
 *
 * Prices stay in VND for every locale: that is the currency the service is
 * actually transacted in.
 */
export const dailyPriceVND: Record<VehicleId, { low: number; high: number }> = {
  "4-seat": { low: 800000, high: 1500000 },
  "7-seat": { low: 1100000, high: 2200000 },
  "16-seat": { low: 1800000, high: 3500000 },
  "29-seat": { low: 3000000, high: 5500000 },
  "45-seat": { low: 4500000, high: 8000000 },
  limousine: { low: 1800000, high: 3500000 },
};

/**
 * Locale-scoped data accessors. Pages should use these rather than importing a
 * per-locale module directly, so adding a language only touches this file.
 */
export function getCarRentalData(locale: Locale): CarRentalItem[] {
  return vehicleIds.map((id) => ({
    id,
    slug: carRentalSlugs[id][locale],
    image: vehicleImage[id],
    ...carRentalCopy[locale][id],
  }));
}

const testimonialsByLocale: Record<Locale, typeof testimonials> = {
  vi: testimonials,
  en: testimonialsEn,
};

export function getTestimonials(locale: Locale) {
  return testimonialsByLocale[locale];
}
