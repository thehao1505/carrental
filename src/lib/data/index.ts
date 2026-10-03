import type { Locale } from "@/lib/i18n/config";
import { carRentalData } from "./car-rental";
import { carRentalDataEn } from "./car-rental.en";
import { testimonials } from "./testimonials";
import { testimonialsEn } from "./testimonials.en";

export * from "./car-rental";
export * from "./testimonials";

export type CarRentalItem = {
  slug: string;
  title: string;
  image: string;
  content: string;
  tldr?: string;
};

/**
 * Locale-scoped data accessors. Pages should use these rather than importing a
 * `*.en` module directly, so adding a language only touches this file.
 */
export function getCarRentalData(locale: Locale): CarRentalItem[] {
  return locale === "en" ? carRentalDataEn : carRentalData;
}

export function getTestimonials(locale: Locale) {
  return locale === "en" ? testimonialsEn : testimonials;
}

/** De-duplicated by slug, as used by the sitemap and llms.txt routes. */
export function getUniqueCarRentalData(locale: Locale): CarRentalItem[] {
  return [
    ...new Map(getCarRentalData(locale).map((i) => [i.slug, i])).values(),
  ];
}
