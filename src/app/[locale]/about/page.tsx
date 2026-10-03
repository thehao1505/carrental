import type { Metadata } from "next";
import GioiThieuCard from "@/features/gioi-thieu/gioi-thieu";
import { getDictionary, path } from "@/lib/i18n";
import { requireLocale, resolveLocale, type LocaleParams } from "../locale-params";
import { buildMetadata } from "../page-seo";
import { JsonLd } from "../json-ld";
import { aboutSeo } from "./seo";

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
  return buildMetadata("about", locale, aboutSeo[locale]);
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = requireLocale((await params).locale);
  const dict = await getDictionary(locale);

  return (
    <>
      <JsonLd schemas={aboutSeo[locale].schemas} />
      <GioiThieuCard
        dict={dict.pages.about}
        contactHref={path("contact", locale) ?? "/"}
      />
    </>
  );
}
