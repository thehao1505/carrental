import { defaultLocale, type Locale } from "@/lib/i18n";
import type { PageSeo } from "../page-seo";
import { toursContent } from "./content";

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
    mainEntity: toursContent[locale].faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

const touristTripSchema: Record<Locale, Record<string, unknown>> = {
  vi: {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Tour Đắk Lắk Xe Riêng Có Tài Xế",
    description: "Gói tour Đắk Lắk 1-3 ngày với xe riêng có tài xế bản địa. Khám phá Buôn Đôn, Hồ Lắk, Thác Dray Nur, Vườn Quốc Gia Yok Đôn và nhiều điểm đến nổi tiếng của Tây Nguyên.",
    url: "https://www.dvdldaiduong.com/tour-dak-lak",
    image: "https://www.dvdldaiduong.com/images/taynguyen.webp",
    touristType: [
      "Cultural tourism",
      "Adventure tourism",
      "Eco-tourism",
    ],
    provider: {
      "@id": "https://www.dvdldaiduong.com/#business",
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TouristDestination",
            name: "Bảo Tàng Đắk Lắk & Làng Cà Phê Trung Nguyên",
            description: "Di sản văn hóa Ê-đê, M'nông và trải nghiệm cà phê Tây Nguyên",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TouristDestination",
            name: "Thác Dray Nur & Buôn Đôn",
            description: "Thác hùng vĩ và làng dân tộc thiểu số nổi tiếng",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TouristDestination",
            name: "Hồ Lắk & Vườn Quốc Gia Yok Đôn",
            description: "Hồ nước ngọt lớn nhất Tây Nguyên và rừng khộp đặc trưng",
          },
        },
      ],
    },
    offers: [
      {
        "@type": "Offer",
        name: "Tour 1 ngày – Văn Hóa Buôn Ma Thuột",
        priceCurrency: "VND",
        price: "1200000",
        description: "Xe 4 chỗ, trọn ngày, bao gồm tài xế và nhiên liệu",
        availability: "https://schema.org/InStock",
        url: "https://www.dvdldaiduong.com/tour-dak-lak",
      },
      {
        "@type": "Offer",
        name: "Tour 2 ngày 1 đêm – Phiêu Lưu Tây Nguyên",
        priceCurrency: "VND",
        price: "2400000",
        description: "Xe 4 chỗ, 2 ngày 1 đêm, bao gồm tài xế và nhiên liệu",
        availability: "https://schema.org/InStock",
        url: "https://www.dvdldaiduong.com/tour-dak-lak",
      },
      {
        "@type": "Offer",
        name: "Tour 3 ngày 2 đêm – Khám Phá Tây Nguyên Toàn Diện",
        priceCurrency: "VND",
        price: "3600000",
        description: "Xe 4 chỗ, 3 ngày 2 đêm, bao gồm tài xế và nhiên liệu",
        availability: "https://schema.org/InStock",
        url: "https://www.dvdldaiduong.com/tour-dak-lak",
      },
    ],
  },
  en: {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Private Dak Lak Tour With a Driver",
    description: "One to three day Dak Lak tour packages with a private vehicle and a local driver. Buon Don, Lak Lake, Dray Nur Waterfall, Yok Don National Park and other well-known Central Highlands destinations.",
    url: "https://www.dvdldaiduong.com/en/dak-lak-tours",
    image: "https://www.dvdldaiduong.com/images/taynguyen.webp",
    touristType: [
      "Cultural tourism",
      "Adventure tourism",
      "Eco-tourism",
    ],
    provider: {
      "@id": "https://www.dvdldaiduong.com/#business",
    },
    inLanguage: "en",
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TouristDestination",
            name: "Dak Lak Museum & Trung Nguyen Coffee Village",
            description: "Ede and M'nong cultural heritage, and Central Highlands coffee first-hand",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TouristDestination",
            name: "Dray Nur Waterfall & Buon Don",
            description: "A majestic waterfall and the region's best-known ethnic minority village",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TouristDestination",
            name: "Lak Lake & Yok Don National Park",
            description: "The largest freshwater lake in the Central Highlands and its distinctive dipterocarp forest",
          },
        },
      ],
    },
    offers: [
      {
        "@type": "Offer",
        name: "1-day tour – Buon Ma Thuot culture",
        priceCurrency: "VND",
        price: "1200000",
        description: "4-seat car, full day, driver and fuel included",
        availability: "https://schema.org/InStock",
        url: "https://www.dvdldaiduong.com/en/dak-lak-tours",
      },
      {
        "@type": "Offer",
        name: "2 days 1 night – Central Highlands adventure",
        priceCurrency: "VND",
        price: "2400000",
        description: "4-seat car, 2 days 1 night, driver and fuel included",
        availability: "https://schema.org/InStock",
        url: "https://www.dvdldaiduong.com/en/dak-lak-tours",
      },
      {
        "@type": "Offer",
        name: "3 days 2 nights – the complete Central Highlands",
        priceCurrency: "VND",
        price: "3600000",
        description: "4-seat car, 3 days 2 nights, driver and fuel included",
        availability: "https://schema.org/InStock",
        url: "https://www.dvdldaiduong.com/en/dak-lak-tours",
      },
    ],
  },
};

const breadcrumbSchema: Record<Locale, Record<string, unknown>> = {
  vi: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://www.dvdldaiduong.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tour Đắk Lắk",
        item: "https://www.dvdldaiduong.com/tour-dak-lak",
      },
    ],
  },
  en: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dvdldaiduong.com/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dak Lak tours",
        item: "https://www.dvdldaiduong.com/en/dak-lak-tours",
      },
    ],
  },
};

export const toursSeo: Record<Locale, PageSeo> = {
  vi: {
    title: "Tour Đắk Lắk Xe Riêng | Từ 1.200.000đ/Xe",
    description: "Tour Đắk Lắk xe riêng có tài xế – giá từ 1.200.000đ/xe/ngày. 3 gói lịch trình: văn hóa 1 ngày, phiêu lưu 2N1Đ, toàn diện 3N2Đ. Tùy chỉnh tự do, không phụ thu ẩn.",
    keywords: ["tour Đắk Lắk", "tour Đắk Lắk 2 ngày 1 đêm", "tour Đắk Lắk 3 ngày 2 đêm", "tour Đắk Lắk xe riêng", "tour Tây Nguyên", "tour Buôn Ma Thuột", "tour Đắk Lắk bao nhiêu tiền", "tour Buôn Đôn", "tour Hồ Lắk", "thuê xe tour Đắk Lắk có tài xế", "DVDL Đại Dương Ban Mê"],
    og: {
      title: "Tour Đắk Lắk 2-3 Ngày: Xe Riêng Có Tài Xế | DVDL Đại Dương Ban Mê",
      description: "3 gói tour Đắk Lắk linh hoạt – xe riêng, tài xế bản địa, không chờ đợi. Giá từ 1.200.000đ/xe. Khám phá Buôn Đôn, Hồ Lắk, Dray Nur, Yok Đôn.",
      images: [
        {
          url: "/images/taynguyen.webp",
          width: 1200,
          height: 630,
          alt: "Tour Đắk Lắk xe riêng có tài xế – DVDL Đại Dương Ban Mê",
        },
      ],
    },
    twitter: {
      title: "Tour Đắk Lắk Xe Riêng 1-3 Ngày | DVDL Đại Dương Ban Mê",
      description: "Giá từ 1.200.000đ/xe/ngày. Khám phá Tây Nguyên thoải mái với lịch trình riêng tư, không chờ tour đoàn.",
    },
    schemas: [touristTripSchema.vi, faqSchema("vi"), breadcrumbSchema.vi],
  },
  en: {
    title: "Dak Lak Private Tours | From 1,200,000₫ per Vehicle",
    description: "Private Dak Lak tours with your own car and driver — from 1,200,000₫ per vehicle per day. Three itineraries: 1-day culture, 2D1N adventure, 3D2N complete. Fully customisable, no hidden extras.",
    keywords: ["Dak Lak tour", "Dak Lak tour 2 days 1 night", "Dak Lak tour 3 days 2 nights", "Dak Lak private tour", "Central Highlands tour", "Buon Ma Thuot tour", "how much is a Dak Lak tour", "Buon Don tour", "Lak Lake tour", "Dak Lak tour with private driver", "DVDL Dai Duong Ban Me"],
    og: {
      title: "Dak Lak Tours, 2-3 Days: Your Own Car and Driver | DVDL Dai Duong Ban Me",
      description: "Three flexible Dak Lak tour packages - private vehicle, local driver, no waiting around. From 1,200,000₫ per vehicle. Buon Don, Lak Lake, Dray Nur, Yok Don.",
      images: [
        {
          url: "/images/taynguyen.webp",
          width: 1200,
          height: 630,
          alt: "Private Dak Lak tour with a driver - DVDL Dai Duong Ban Me",
        },
      ],
    },
    twitter: {
      title: "Dak Lak Private Tours, 1-3 Days | DVDL Dai Duong Ban Me",
      description: "From 1,200,000₫ per vehicle per day. See the Central Highlands at your own pace, on your own itinerary.",
    },
    schemas: [touristTripSchema.en, faqSchema("en"), breadcrumbSchema.en],
  },
};
