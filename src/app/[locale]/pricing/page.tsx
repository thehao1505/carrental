import type { Metadata } from "next";
import { BangGiaCard } from "@/features/bang-gia/bang-gia-card";
import { getDictionary, path } from "@/lib/i18n";
import { requireLocale, resolveLocale, type LocaleParams } from "../locale-params";
import { buildMetadata } from "../page-seo";
import { JsonLd } from "../json-ld";
import { pricingSeo } from "./seo";

/**
 * `generateMetadata` resolves the locale without throwing. A `notFound()` raised
 * during metadata generation runs outside the render tree, so Next falls back to
 * its bare error shell instead of the not-found boundary inside this layout —
 * the page component below is what 404s, and that keeps the site chrome.
 */
export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  return buildMetadata("pricing", locale, pricingSeo[locale]);
}

export default async function PricingPage({ params }: LocaleParams) {
  const locale = requireLocale((await params).locale);
  const dict = await getDictionary(locale);

  return (
    <>
      <JsonLd schemas={pricingSeo[locale].schemas} />
      <BangGiaCard
        dict={dict.pricing}
        contactHref={path("contact", locale) ?? "/"}
      />
    </>
  );
}
