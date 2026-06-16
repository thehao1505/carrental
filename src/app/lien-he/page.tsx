import { Metadata } from "next";
import LienHeCard from "@/features/lien-he/lien-he-card";

const siteUrl = "https://www.dvdldaiduong.com";
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/lien-he#contactpage`,
  url: `${siteUrl}/lien-he`,
  name: "Liên Hệ DVDL Đại Dương Ban Mê",
  description:
    "Liên hệ DVDL Đại Dương Ban Mê - hotline, email, địa chỉ văn phòng và bản đồ tại Buôn Ma Thuột, Đắk Lắk.",
  inLanguage: "vi-VN",
  mainEntity: { "@id": `${siteUrl}/#business` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Liên hệ",
        item: `${siteUrl}/lien-he`,
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Liên Hệ",
  description:
    "Liên hệ ngay để được tư vấn tour du lịch, thuê xe hoặc báo giá nhanh từ DVDL Đại Dương Ban Mê. Hotline: 0941.437.070 - Phục vụ 7/7.",
  keywords: [
    "liên hệ DVDL Đại Dương Ban Mê",
    "thuê xe du lịch Buôn Ma Thuột",
    "báo giá tour du lịch Đắk Lắk",
    "hotline thuê xe Đắk Lắk",
    "tư vấn du lịch BMT",
  ],
  alternates: {
    canonical: "https://www.dvdldaiduong.com/lien-he",
  },
  openGraph: {
    title: "Liên Hệ | DVDL Đại Dương Ban Mê",
    description:
      "Liên hệ ngay để được tư vấn tour du lịch, thuê xe hoặc báo giá nhanh. Hotline: 0941.437.070.",
    url: "https://www.dvdldaiduong.com/lien-he",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Liên hệ DVDL Đại Dương Ban Mê",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liên Hệ | DVDL Đại Dương Ban Mê",
    description:
      "Liên hệ ngay để được tư vấn tour du lịch và thuê xe tại Đắk Lắk.",
  },
};

export default function LienHePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <LienHeCard />
    </>
  );
}
