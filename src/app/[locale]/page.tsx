import type { Metadata } from "next";
import { Suspense } from "react";
import { NewsSection } from "@/features/trang-chu/news-section";
import StatsGrid from "@/features/trang-chu/section";
import { HeroSection } from "@/features/trang-chu/split-image";
import Testimonials from "@/features/trang-chu/testimonials";
import { getTestimonials } from "@/lib/data";
import {
  alternates,
  defaultLocale,
  getDictionary,
  locales,
  ogLocale,
  path,
  routePaths,
  siteUrl,
  url,
  type Locale,
} from "@/lib/i18n";
import { requireLocale, resolveLocale, type LocaleParams } from "./locale-params";

/**
 * Blog posts come from Sanity and have no `language` field, so they exist only
 * in Vietnamese. The home page therefore shows the news strip in the default
 * locale only — the same reason `news` sits in `hreflangExcluded`.
 */
const hasNewsContent = (locale: Locale) => locale === defaultLocale;

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
  const { site } = await getDictionary(locale);
  const homeUrl = url("home", locale) ?? siteUrl;

  return {
    title: { absolute: site.ogTitle },
    description: site.description,
    alternates: alternates("home", locale),
    openGraph: {
      title: site.ogTitle,
      description: site.description,
      url: homeUrl,
      locale: ogLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale && path("home", l) !== null)
        .map((l) => ogLocale[l]),
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: site.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.twitterTitle,
      description: site.description,
      images: ["/og-image.jpg"],
    },
  };
}

/**
 * The business entity is declared once, on the default-locale home page, and
 * every other page (including /en) points at it by @id. Redefining it per
 * locale would create duplicate entities in Google's knowledge graph.
 */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["RentalCarAgency", "TravelAgency"],
  "@id": `${siteUrl}/#business`,
  name: "DVDL Đại Dương Ban Mê",
  alternateName: "Đại Dương Ban Mê",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-light.png`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: "+84941437070",
  email: "dvdldaiduong@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "252/6 Phan Huy Chú",
    addressLocality: "Buôn Ma Thuột",
    addressRegion: "Đắk Lắk",
    postalCode: "630000",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.64246,
    longitude: 107.99786,
  },
  hasMap: "https://maps.app.goo.gl/7AeopSFXS4vKVxwL6",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "06:00",
      closes: "22:00",
    },
  ],
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Buôn Ma Thuột" },
    { "@type": "AdministrativeArea", name: "Đắk Lắk" },
  ],
  sameAs: [
    "https://www.facebook.com/dvdldaiduong",
    // TODO: replace with the canonical CID URL from the GBP dashboard,
    // e.g. "https://www.google.com/maps?cid=XXXXXX"
    "https://www.google.com/maps/search/DVDL+%C4%90%E1%BA%A1i+D%C6%B0%C6%A1ng+Ban+M%C3%AA/@12.64246,107.99786,17z",
  ],
  foundingDate: "2018",
};

const websiteSchema: Record<Locale, Record<string, unknown>> = {
  vi: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "DVDL Đại Dương Ban Mê",
    description:
      "Cho thuê xe du lịch có tài xế tại Buôn Ma Thuột, Đắk Lắk – xe 4 đến 45 chỗ, tour Tây Nguyên",
    inLanguage: "vi-VN",
    publisher: { "@id": `${siteUrl}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}${routePaths.news.vi}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  en: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/en#website`,
    url: `${siteUrl}/en`,
    name: "DVDL Dai Duong Ban Me",
    description:
      "Car rental with driver in Buon Ma Thuot, Dak Lak – 4 to 45-seat vehicles and Central Highlands tours",
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#business` },
  },
};

export default async function Home({ params }: LocaleParams) {
  const locale = requireLocale((await params).locale);
  const dict = await getDictionary(locale);

  return (
    <>
      {locale === defaultLocale && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema[locale]),
        }}
      />
      <HeroSection
        dict={dict.pages.home.hero}
        pricingHref={path("pricing", locale) ?? "/"}
        contactHref={path("contact", locale) ?? "/"}
      />
      <StatsGrid
        items={dict.pages.home.vehicles}
        carRentalBasePath={routePaths.carRental[locale]}
      />
      {hasNewsContent(locale) && (
        <Suspense>
          <NewsSection
            dict={dict.newsSection}
            locale={locale}
            basePath={path("news", locale) ?? "/"}
          />
        </Suspense>
      )}
      <Testimonials dict={dict.testimonials} items={getTestimonials(locale)} />
    </>
  );
}
