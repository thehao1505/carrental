import { generateBreadcrumb } from "@/lib/schema";
import { siteUrl, url, type Locale } from "@/lib/i18n";
import type { PageSeo } from "../page-seo";

const viUrl = url("contact", "vi") as string;
const enUrl = url("contact", "en") as string;

export const contactSeo: Record<Locale, PageSeo> = {
  vi: {
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
    og: {
      title: "Liên Hệ | DVDL Đại Dương Ban Mê",
      description:
        "Liên hệ ngay để được tư vấn tour du lịch, thuê xe hoặc báo giá nhanh. Hotline: 0941.437.070.",
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
      title: "Liên Hệ | DVDL Đại Dương Ban Mê",
      description:
        "Liên hệ ngay để được tư vấn tour du lịch và thuê xe tại Đắk Lắk.",
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${viUrl}#contactpage`,
        url: viUrl,
        name: "Liên Hệ DVDL Đại Dương Ban Mê",
        description:
          "Liên hệ DVDL Đại Dương Ban Mê - hotline, email, địa chỉ văn phòng và bản đồ tại Buôn Ma Thuột, Đắk Lắk.",
        inLanguage: "vi-VN",
        mainEntity: { "@id": `${siteUrl}/#business` },
        breadcrumb: {
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
              name: "Liên hệ",
              item: viUrl,
            },
          ],
        },
      },
    ],
  },
  en: {
    title: "Contact Us",
    description:
      "Contact DVDL Dai Duong Ban Me for car rental quotes and tour advice in Buon Ma Thuot, Dak Lak. Phone, Zalo, email and our office address.",
    og: {
      title: "Contact DVDL Dai Duong Ban Me",
      description:
        "Phone, Zalo, email and office address for car rental and tours in Buon Ma Thuot, Dak Lak.",
    },
    schemas: [
      generateBreadcrumb([
        { name: "Home", url: `${siteUrl}/en` },
        { name: "Contact", url: enUrl },
      ]),
    ],
  },
};
