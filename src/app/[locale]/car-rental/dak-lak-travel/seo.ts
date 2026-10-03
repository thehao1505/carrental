import { defaultLocale, type Locale } from "@/lib/i18n";
import type { PageSeo } from "../../page-seo";
import { travelContent } from "./content";

/**
 * The FAQ rich result and the FAQ people read are the same questions, so the
 * schema is derived from the page content rather than kept as a second copy
 * that can drift out of step with it.
 */
function faqSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(locale === defaultLocale ? {} : { inLanguage: locale }),
    mainEntity: travelContent[locale].faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

const serviceSchema: Record<Locale, Record<string, unknown>> = {
  vi: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Thuê Xe Du Lịch Đắk Lắk",
    serviceType: "Car Rental",
    description: "Dịch vụ thuê xe du lịch Đắk Lắk – xe 4, 7, 16, 29, 45 chỗ và limousine có tài xế chuyên nghiệp. Phục vụ tham quan Buôn Đôn, Hồ Lắk, Thác Dray Nur và các tuyến liên tỉnh.",
    url: "https://www.dvdldaiduong.com/thue-xe/du-lich-dak-lak",
    image: "https://www.dvdldaiduong.com/images/thue-xe-7-cho.webp",
    provider: {
      "@id": "https://www.dvdldaiduong.com/#business",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Buôn Ma Thuột",
      },
      {
        "@type": "State",
        name: "Đắk Lắk",
      },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "13000",
        priceCurrency: "VND",
        unitText: "km",
      },
      availability: "https://schema.org/InStock",
      url: "https://www.dvdldaiduong.com/thue-xe/du-lich-dak-lak",
    },
  },
  en: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dak Lak Tourist Car Rental",
    serviceType: "Car Rental",
    description: "Tourist car rental in Dak Lak - 4, 7, 16, 29 and 45-seat vehicles plus limousines with professional drivers. Sightseeing at Buon Don, Lak Lake and Dray Nur Waterfall, and inter-provincial routes.",
    url: "https://www.dvdldaiduong.com/en/car-rental/dak-lak-travel",
    image: "https://www.dvdldaiduong.com/images/thue-xe-7-cho.webp",
    provider: {
      "@id": "https://www.dvdldaiduong.com/#business",
    },
    inLanguage: "en",
    areaServed: [
      {
        "@type": "City",
        name: "Buon Ma Thuot",
      },
      {
        "@type": "State",
        name: "Dak Lak",
      },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "13000",
        priceCurrency: "VND",
        unitText: "km",
      },
      availability: "https://schema.org/InStock",
      url: "https://www.dvdldaiduong.com/en/car-rental/dak-lak-travel",
    },
  },
};

export const travelSeo: Record<Locale, PageSeo> = {
  vi: {
    title: "Thuê Xe Du Lịch Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế",
    description: "Thuê xe du lịch Đắk Lắk – xe 4-45 chỗ & limousine có tài xế. Khám phá Buôn Đôn, Hồ Lắk, Thác Dray Nur. Giá từ 13.000đ/km.",
    keywords: ["thuê xe du lịch Đắk Lắk", "thuê xe Buôn Ma Thuột", "cho thuê xe du lịch Buôn Ma Thuột", "thuê xe có tài xế Đắk Lắk", "thuê xe 4 chỗ Đắk Lắk", "thuê xe 7 chỗ Đắk Lắk", "thuê xe 16 chỗ Đắk Lắk", "giá thuê xe du lịch Đắk Lắk", "thuê xe đi Buôn Đôn", "thuê xe đi Hồ Lắk", "DVDL Đại Dương Ban Mê"],
    og: {
      title: "Thuê Xe Du Lịch Đắk Lắk – Xe 4–45 Chỗ Có Tài Xế | DVDL Đại Dương Ban Mê",
      description: "Thuê xe du lịch Đắk Lắk uy tín – xe đời mới, tài xế chuyên nghiệp, giá từ 13.000đ/km. Phục vụ Buôn Đôn, Hồ Lắk, cà phê tour và các tuyến liên tỉnh.",
      images: [
        {
          url: "/images/thue-xe-7-cho.webp",
          width: 1200,
          height: 630,
          alt: "Thuê xe du lịch Đắk Lắk – DVDL Đại Dương Ban Mê",
        },
      ],
    },
    twitter: {
      title: "Thuê Xe Du Lịch Đắk Lắk | DVDL Đại Dương Ban Mê",
      description: "Xe 4–45 chỗ có tài xế, giá cạnh tranh. Khám phá Đắk Lắk thoải mái với DVDL Đại Dương Ban Mê.",
    },
    schemas: [serviceSchema.vi, faqSchema("vi")],
  },
  en: {
    title: "Dak Lak Tourist Car Rental | 4-45 Seat Cars With Driver",
    description: "Tourist car rental in Dak Lak — 4-45 seat vehicles and limousines with a driver. Visit Buon Don, Lak Lake and Dray Nur Waterfall. From 13,000₫/km.",
    keywords: ["Dak Lak tourist car rental", "car rental Buon Ma Thuot", "tourist car hire Buon Ma Thuot", "car with driver Dak Lak", "4 seat car rental Dak Lak", "7 seat car rental Dak Lak", "16 seat van rental Dak Lak", "Dak Lak car rental prices", "car to Buon Don", "car to Lak Lake", "DVDL Dai Duong Ban Me"],
    og: {
      title: "Dak Lak Tourist Car Rental - 4-45 Seat Cars With Driver | DVDL Dai Duong Ban Me",
      description: "Trusted tourist car rental in Dak Lak - late-model vehicles, professional drivers, from 13,000₫/km. Buon Don, Lak Lake, coffee tours and inter-provincial routes.",
      images: [
        {
          url: "/images/thue-xe-7-cho.webp",
          width: 1200,
          height: 630,
          alt: "Dak Lak tourist car rental - DVDL Dai Duong Ban Me",
        },
      ],
    },
    twitter: {
      title: "Dak Lak Tourist Car Rental | DVDL Dai Duong Ban Me",
      description: "4-45 seat vehicles with a driver at competitive rates. Explore Dak Lak in comfort with DVDL Dai Duong Ban Me.",
    },
    schemas: [serviceSchema.en, faqSchema("en")],
  },
};
