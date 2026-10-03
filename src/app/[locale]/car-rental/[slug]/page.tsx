import type { Metadata } from "next";
import { ThueXeSlugPage } from "@/features/thue-xe/thue-xe-card";
import { getCarRentalData } from "@/lib/data";
import {
  carRentalAlternates,
  carRentalUrl,
  defaultLocale,
  getDictionary,
  interpolate,
  locales,
  ogLocale,
  path,
  routePaths,
  siteUrl,
  url,
  type Locale,
} from "@/lib/i18n";
import { requireLocale, resolveLocale } from "../../locale-params";
import { priceFor } from "./prices";
import { detailSeo } from "./seo";

type Params = { params: Promise<{ locale: string; slug: string }> };
type Vehicle = { slug: string; title: string; image: string };

/**
 * The six vehicles are static data, so an unknown slug is never a page that
 * might exist later. Refusing to match it keeps arbitrary URLs from rendering a
 * page at all, rather than rendering one and calling notFound() from inside the
 * component.
 */
export const dynamicParams = false;

export function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  return getCarRentalData(locale).map((xe) => ({ slug: xe.slug }));
}

function buildServiceSchema(xe: Vehicle, locale: Locale) {
  const seo = detailSeo[locale];
  const canonicalUrl = carRentalUrl(xe.slug, locale);
  const price = priceFor(xe.slug, locale);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: xe.title,
    serviceType: "Car Rental",
    description: interpolate(seo.description, { title: xe.title }),
    url: canonicalUrl,
    ...(locale === defaultLocale ? {} : { inLanguage: locale }),
    image: xe.image.startsWith("http") ? xe.image : `${siteUrl}${xe.image}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: [
      { "@type": "City", name: seo.areaServed.city },
      { "@type": "AdministrativeArea", name: seo.areaServed.region },
    ],
    offers: price
      ? {
          "@type": "AggregateOffer",
          priceCurrency: "VND",
          lowPrice: price.low,
          highPrice: price.high,
          offerCount: 1,
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: price.low,
            priceCurrency: "VND",
            unitText: "DAY",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "DAY",
            },
          },
        }
      : {
          "@type": "Offer",
          priceCurrency: "VND",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
        },
  };
}

function buildBreadcrumbSchema(xe: Vehicle, locale: Locale) {
  const seo = detailSeo[locale];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: seo.breadcrumb.home,
        item: url("home", locale),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: seo.breadcrumb.listing,
        item: url("carRental", locale),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: xe.title,
        item: carRentalUrl(xe.slug, locale),
      },
    ],
  };
}

/**
 * `generateMetadata` resolves the locale without throwing. A `notFound()` raised
 * during metadata generation runs outside the render tree, so Next falls back to
 * its bare error shell instead of the not-found boundary inside this layout —
 * the page component below is what 404s, and that keeps the site chrome.
 */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const seo = detailSeo[locale];
  const xe = getCarRentalData(locale).find((x) => x.slug === slug);

  if (!xe) return { title: seo.fallbackTitle };

  const fill = (template: string) =>
    interpolate(template, { title: xe.title });

  return {
    title: xe.title,
    description: fill(seo.description),
    keywords: seo.keywords(xe.title),
    alternates: carRentalAlternates(slug, locale),
    openGraph: {
      title: fill(seo.ogTitle),
      description: fill(seo.ogDescription),
      url: carRentalUrl(slug, locale),
      locale: ogLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale && path("carRental", l) !== null)
        .map((l) => ogLocale[l]),
      type: "website",
      images: [
        xe.image
          ? { url: xe.image, width: 800, height: 500, alt: xe.title }
          : { url: "/og-image.jpg", width: 1200, height: 630, alt: xe.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fill(seo.twitterTitle),
      description: fill(seo.twitterDescription),
    },
  };
}

/**
 * The "back" link has always pointed at the home page in Vietnamese and at the
 * listing in English. Preserved as-is so this refactor changes no rendered
 * markup; unifying the two is a UX decision, not a refactor.
 */
const backHref = (locale: Locale) =>
  locale === defaultLocale
    ? (path("home", locale) ?? "/")
    : routePaths.carRental[locale];

export default async function CarRentalDetailPage({ params }: Params) {
  const { locale: rawLocale, slug } = await params;
  const locale = requireLocale(rawLocale);
  const items = getCarRentalData(locale);
  const xe = items.find((x) => x.slug === slug);
  const dict = await getDictionary(locale);

  return (
    <>
      {xe && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildServiceSchema(xe, locale)),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildBreadcrumbSchema(xe, locale)),
            }}
          />
        </>
      )}
      <ThueXeSlugPage
        dict={dict.carRentalDetail}
        items={items}
        slug={slug}
        backHref={backHref(locale)}
        contactHref={path("contact", locale) ?? "/"}
        carRentalBasePath={routePaths.carRental[locale]}
      />
    </>
  );
}
