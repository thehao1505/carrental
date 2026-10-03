import { generateBreadcrumb } from "@/lib/schema";
import { siteUrl, url, type Locale } from "@/lib/i18n";
import type { PageSeo } from "../page-seo";

const viUrl = url("about", "vi") as string;
const enUrl = url("about", "en") as string;

export const aboutSeo: Record<Locale, PageSeo> = {
  vi: {
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
    og: {
      title: "Giới Thiệu | DVDL Đại Dương Ban Mê",
      description:
        "Chúng tôi mang đến trải nghiệm du lịch cá nhân hóa, an toàn, minh bạch và tận tâm tại Buôn Ma Thuột - Đắk Lắk.",
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
      title: "Giới Thiệu | DVDL Đại Dương Ban Mê",
      description:
        "Đơn vị chuyên cung cấp dịch vụ thuê xe du lịch, tour nội địa tại Đắk Lắk.",
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${viUrl}#aboutpage`,
        url: viUrl,
        name: "Giới Thiệu DVDL Đại Dương Ban Mê",
        description:
          "Đơn vị chuyên thuê xe du lịch 4-45 chỗ, tour nội địa và team building tại Buôn Ma Thuột, Đắk Lắk. Hoạt động từ 2018.",
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
              name: "Giới thiệu",
              item: viUrl,
            },
          ],
        },
      },
    ],
  },
  en: {
    title: "About Us",
    description:
      "DVDL Dai Duong Ban Me has provided car rental and tours in Buon Ma Thuot, Dak Lak since 2018 — our story, values and service commitments.",
    og: {
      // Same string as dict.pages.about.hero.h1, which the English page used to
      // read directly.
      title: "About Us — DVDL Dai Duong Ban Me",
      description:
        "Our story, core values and service commitments — car rental and tours in Dak Lak since 2018.",
    },
    schemas: [
      generateBreadcrumb([
        { name: "Home", url: `${siteUrl}/en` },
        { name: "About Us", url: enUrl },
      ]),
    ],
  },
};
