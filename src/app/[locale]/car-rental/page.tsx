import type { Metadata } from "next";
import { ThueXeListing } from "@/features/thue-xe/thue-xe-listing";
import { generateBreadcrumb } from "@/lib/schema";
import { getCarRentalData } from "@/lib/data";
import {
  alternates,
  defaultLocale,
  getDictionary,
  locales,
  ogLocale,
  path,
  routePaths,
  url,
  type Locale,
} from "@/lib/i18n";
import { requireLocale, resolveLocale, type LocaleParams } from "../locale-params";
import { listingSeo } from "./seo";

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
  const seo = listingSeo[locale];

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: alternates("carRental", locale),
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: url("carRental", locale) ?? undefined,
      locale: ogLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale && path("carRental", l) !== null)
        .map((l) => ogLocale[l]),
      type: "website",
      images: [
        {
          url: "/images/thue-xe-7-cho.webp",
          width: 1200,
          height: 630,
          alt: seo.ogImageAlt,
        },
      ],
    },
  };
}

/**
 * The Vietnamese page links its "featured" card at /thue-xe-du-lich-dak-lak,
 * which is a 301 source in next.config.ts. Preserved so this refactor changes
 * no markup; fixing the internal link to point straight at the destination is
 * tracked separately.
 */
const featuredHref = (locale: Locale) =>
  locale === defaultLocale
    ? "/thue-xe-du-lich-dak-lak"
    : routePaths.carRentalTravel[locale];

export default async function CarRentalListingPage({ params }: LocaleParams) {
  const locale = requireLocale((await params).locale);
  const dict = await getDictionary(locale);
  const seo = listingSeo[locale];

  const breadcrumbSchema = generateBreadcrumb([
    { name: seo.breadcrumb.home, url: url("home", locale) ?? "" },
    { name: seo.breadcrumb.current, url: url("carRental", locale) ?? "" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ThueXeListing
        dict={dict.pages.carRentalListing}
        items={getCarRentalData(locale)}
        carRentalBasePath={routePaths.carRental[locale]}
        featuredHref={featuredHref(locale)}
        contactHref={path("contact", locale) ?? "/"}
      />
    </>
  );
}
