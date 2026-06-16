import { Metadata } from "next";
import GioiThieuCard from "@/features/gioi-thieu/gioi-thieu";

export const metadata: Metadata = {
  title: "Giới Thiệu",
  description:
    "DVDL Đại Dương Ban Mê – Thuê xe 4-45 chỗ, tour nội địa, team building và sự kiện tại Buôn Ma Thuột, Đắk Lắk.",
  keywords: [
    "giới thiệu DVDL Đại Dương Ban Mê",
    "du lịch Buôn Ma Thuột",
    "công ty du lịch Đắk Lắk",
    "tour Daklak uy tín",
    "thuê xe du lịch BMT",
    "tổ chức sự kiện Đắk Lắk",
  ],
  alternates: {
    canonical: "https://www.dvdldaiduong.com/gioi-thieu",
  },
  openGraph: {
    title: "Giới Thiệu | DVDL Đại Dương Ban Mê",
    description:
      "Chúng tôi mang đến trải nghiệm du lịch cá nhân hóa, an toàn, minh bạch và tận tâm tại Buôn Ma Thuột - Đắk Lắk.",
    url: "https://www.dvdldaiduong.com/gioi-thieu",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Giới thiệu DVDL Đại Dương Ban Mê",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giới Thiệu | DVDL Đại Dương Ban Mê",
    description:
      "Đơn vị chuyên cung cấp dịch vụ thuê xe du lịch, tour nội địa tại Đắk Lắk.",
  },
};

const siteUrl = "https://www.dvdldaiduong.com";
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/gioi-thieu#aboutpage`,
  url: `${siteUrl}/gioi-thieu`,
  name: "Giới Thiệu DVDL Đại Dương Ban Mê",
  description:
    "Đơn vị chuyên thuê xe du lịch 4-45 chỗ, tour nội địa và team building tại Buôn Ma Thuột, Đắk Lắk. Hoạt động từ 2018.",
  inLanguage: "vi-VN",
  mainEntity: { "@id": `${siteUrl}/#business` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Giới thiệu",
        item: `${siteUrl}/gioi-thieu`,
      },
    ],
  },
};

export default function GioiThieu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <GioiThieuCard />
    </>
  );
}
