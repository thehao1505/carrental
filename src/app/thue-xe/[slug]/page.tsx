import { ThueXeSlugPage } from "@/features/thue-xe/thue-xe-card";
import { Metadata } from "next";
import { carRentalData } from "@/lib/data";

const siteUrl = "https://www.dvdldaiduong.com";

function buildServiceSchema(xe: { slug: string; title: string; image: string }) {
  const canonicalUrl = `${siteUrl}/thue-xe/${xe.slug}`;
  const description = `Dịch vụ ${xe.title} tại DVDL Đại Dương Ban Mê. Xe đời mới, tài xế chuyên nghiệp, an toàn và uy tín tại Buôn Ma Thuột - Đắk Lắk.`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: xe.title,
    serviceType: "Car Rental",
    description,
    url: canonicalUrl,
    image: xe.image.startsWith("http") ? xe.image : `${siteUrl}${xe.image}`,
    provider: {
      "@type": "LocalBusiness",
      name: "DVDL Đại Dương Ban Mê",
      url: siteUrl,
      telephone: "+84941437070",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buôn Ma Thuột",
        addressRegion: "Đắk Lắk",
        addressCountry: "VN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Buôn Ma Thuột" },
      { "@type": "State", name: "Đắk Lắk" },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildServiceSchema(xe)),
          }}
        />
      )}
      <ThueXeSlugPage />
    </>
  );
}
