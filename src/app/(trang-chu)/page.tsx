import type { Metadata } from "next";
import { Suspense } from "react";
import { NewsSection } from "@/features/trang-chu/news-section";
import StatsGrid from "@/features/trang-chu/section";
import { HeroSection } from "@/features/trang-chu/split-image";
import Testimonials from "@/features/trang-chu/testimonials";

const siteUrl = "https://www.dvdldaiduong.com";

export const metadata: Metadata = {
  title: {
    absolute:
      "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế | DVDL Đại Dương Ban Mê",
  },
  description:
    "Cho thuê xe Đắk Lắk uy tín – xe 4-45 chỗ có tài xế, tour nội địa, team building và sự kiện tại Buôn Ma Thuột.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế | DVDL Đại Dương Ban Mê",
    description:
      "Cho thuê xe Đắk Lắk uy tín – xe 4-45 chỗ có tài xế, tour nội địa, team building và sự kiện tại Buôn Ma Thuột.",
    url: siteUrl,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DVDL Đại Dương Ban Mê - Cho thuê xe Đắk Lắk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế",
    description:
      "Cho thuê xe Đắk Lắk uy tín – xe 4-45 chỗ có tài xế, tour nội địa, team building và sự kiện tại Buôn Ma Thuột.",
    images: ["/og-image.jpg"],
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["CarRental", "TravelAgency"],
  "@id": `${siteUrl}/#business`,
  name: "DVDL Đại Dương Ban Mê",
  alternateName: "Đại Dương Ban Mê",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-light.png`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: "+84-941-437-070",
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
  sameAs: ["https://www.facebook.com/share/1AczYur4wu/"],
  foundingDate: "2018",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <HeroSection />
      <StatsGrid />
      <Suspense>
        <NewsSection />
      </Suspense>
      <Testimonials />
    </>
  );
}
