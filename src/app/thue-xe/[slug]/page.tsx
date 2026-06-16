import { ThueXeSlugPage } from "@/features/thue-xe/thue-xe-card";
import { Metadata } from "next";
import { carRentalData } from "@/lib/data";

const siteUrl = "https://www.dvdldaiduong.com";

// Daily price range (VND) per vehicle slug — extracted from each tldr in src/lib/data/car-rental.ts
const dailyPriceVND: Record<string, { low: number; high: number }> = {
  "thue-xe-4-cho": { low: 800000, high: 1500000 },
  "thue-xe-7-cho": { low: 1100000, high: 2200000 },
  "thue-xe-16-cho": { low: 1800000, high: 3500000 },
  "thue-xe-29-cho": { low: 3000000, high: 5500000 },
  "thue-xe-45-cho": { low: 4500000, high: 8000000 },
  "thue-xe-limousine": { low: 1800000, high: 3500000 },
};

function buildServiceSchema(xe: { slug: string; title: string; image: string }) {
  const canonicalUrl = `${siteUrl}/thue-xe/${xe.slug}`;
  const description = `Dịch vụ ${xe.title} tại DVDL Đại Dương Ban Mê. Xe đời mới, tài xế chuyên nghiệp, an toàn và uy tín tại Buôn Ma Thuột - Đắk Lắk.`;
  const price = dailyPriceVND[xe.slug];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: xe.title,
    serviceType: "Car Rental",
    description,
    url: canonicalUrl,
    image: xe.image.startsWith("http") ? xe.image : `${siteUrl}${xe.image}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: [
      { "@type": "City", name: "Buôn Ma Thuột" },
      { "@type": "AdministrativeArea", name: "Đắk Lắk" },
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

function buildBreadcrumbSchema(xe: { slug: string; title: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Thuê xe",
        item: `${siteUrl}/thue-xe`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: xe.title,
        item: `${siteUrl}/thue-xe/${xe.slug}`,
      },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const xe = carRentalData.find((x) => x.slug === slug);

  if (!xe) {
    return {
      title: "Dịch Vụ Thuê Xe",
    };
  }

  const canonicalUrl = `${siteUrl}/thue-xe/${slug}`;
  const defaultDescription = `Dịch vụ ${xe.title} tại DVDL Đại Dương Ban Mê. Xe đời mới, tài xế chuyên nghiệp, an toàn và uy tín tại Buôn Ma Thuột - Đắk Lắk.`;

  return {
    title: xe.title,
    description: defaultDescription,
    keywords: [
      xe.title,
      "thuê xe du lịch Đắk Lắk",
      "thuê xe Buôn Ma Thuột",
      "DVDL Đại Dương Ban Mê",
      "xe có tài xế BMT",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${xe.title} | DVDL Đại Dương Ban Mê`,
      description: `Dịch vụ ${xe.title} - xe đời mới, tài xế chuyên nghiệp tại Buôn Ma Thuột.`,
      url: canonicalUrl,
      locale: "vi_VN",
      type: "website",
      images: [
        xe.image
          ? { url: xe.image, width: 800, height: 500, alt: xe.title }
          : { url: "/og-image.jpg", width: 1200, height: 630, alt: xe.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${xe.title} | DVDL Đại Dương Ban Mê`,
      description: `Dịch vụ ${xe.title} tại Buôn Ma Thuột - Đắk Lắk.`,
    },
  };
}

export default async function ThueXePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const xe = carRentalData.find((x) => x.slug === slug);

  return (
    <>
      {xe && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildServiceSchema(xe)),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildBreadcrumbSchema(xe)),
            }}
          />
        </>
      )}
      <ThueXeSlugPage />
    </>
  );
}
