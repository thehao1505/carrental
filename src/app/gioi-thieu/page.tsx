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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "CarRental"],
  "@id": "https://www.dvdldaiduong.com/#business",
  name: "DVDL Đại Dương Ban Mê",
  url: "https://www.dvdldaiduong.com",
  logo: "https://www.dvdldaiduong.com/images/logo-light.png",
  description:
    "Công ty du lịch chuyên tour nội địa, thuê xe đời mới, tổ chức team building và sự kiện tại Đắk Lắk.",
  foundingDate: "2018",
  telephone: "+84941437070",
  address: {
    "@type": "PostalAddress",
    streetAddress: "252/6 Phan Huy Chú",
    addressLocality: "Buôn Ma Thuột",
    addressRegion: "Đắk Lắk",
    postalCode: "630000",
    addressCountry: "VN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84941437070",
    contactType: "Customer Service",
    availableLanguage: "Vietnamese",
  },
  hasMap: "https://maps.app.goo.gl/7AeopSFXS4vKVxwL6",
  sameAs: [
    "https://www.facebook.com/dvdldaiduong",
    "https://maps.app.goo.gl/7AeopSFXS4vKVxwL6",
  ],
};

export default function GioiThieu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <GioiThieuCard />
    </>
  );
}
