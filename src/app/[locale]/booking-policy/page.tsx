import type { Metadata } from "next";
import { PolicyPage } from "@/features/policy/policy-page";
import { requireLocale, resolveLocale, type LocaleParams } from "../locale-params";
import { buildMetadata } from "../page-seo";
import { JsonLd } from "../json-ld";
import { bookingPolicyContent } from "./content";
import { bookingPolicySeo } from "./seo";

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
  return {
    ...buildMetadata("shippingPolicy", locale, bookingPolicySeo[locale]),
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }: LocaleParams) {
  const locale = requireLocale((await params).locale);
  return (
    <>
      <JsonLd schemas={bookingPolicySeo[locale].schemas} />
      <PolicyPage content={bookingPolicyContent[locale]} />
    </>
  );
}
