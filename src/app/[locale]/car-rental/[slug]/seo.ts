import type { Locale } from "@/lib/i18n";

/**
 * Per-locale copy for a vehicle detail page. `{title}` is filled with the
 * vehicle name via `interpolate`; see src/lib/i18n/interpolate.ts.
 */
export type DetailSeo = {
  /** Shown when the slug matches no vehicle. */
  fallbackTitle: string;
  description: string;
  keywords: (title: string) => string[];
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  breadcrumb: { home: string; listing: string };
  areaServed: { city: string; region: string };
};

export const detailSeo: Record<Locale, DetailSeo> = {
  vi: {
    fallbackTitle: "Dịch Vụ Thuê Xe",
    description:
      "Dịch vụ {title} tại DVDL Đại Dương Ban Mê. Xe đời mới, tài xế chuyên nghiệp, an toàn và uy tín tại Buôn Ma Thuột - Đắk Lắk.",
    keywords: (title) => [
      title,
      "thuê xe du lịch Đắk Lắk",
      "thuê xe Buôn Ma Thuột",
      "DVDL Đại Dương Ban Mê",
      "xe có tài xế BMT",
    ],
    ogTitle: "{title} | DVDL Đại Dương Ban Mê",
    ogDescription:
      "Dịch vụ {title} - xe đời mới, tài xế chuyên nghiệp tại Buôn Ma Thuột.",
    twitterTitle: "{title} | DVDL Đại Dương Ban Mê",
    twitterDescription: "Dịch vụ {title} tại Buôn Ma Thuột - Đắk Lắk.",
    breadcrumb: { home: "Trang chủ", listing: "Thuê xe" },
    areaServed: { city: "Buôn Ma Thuột", region: "Đắk Lắk" },
  },
  en: {
    fallbackTitle: "Car Rental Service",
    description:
      "{title} from DVDL Dai Duong Ban Me. Late-model vehicles and professional drivers, safe and dependable in Buon Ma Thuot - Dak Lak.",
    keywords: (title) => [
      title,
      "car rental Dak Lak",
      "car rental Buon Ma Thuot",
      "car with driver Buon Ma Thuot",
    ],
    ogTitle: "{title} | DVDL Dai Duong Ban Me",
    ogDescription:
      "{title} — late-model vehicles and professional drivers in Buon Ma Thuot.",
    twitterTitle: "{title} | DVDL Dai Duong Ban Me",
    twitterDescription: "{title} in Buon Ma Thuot - Dak Lak.",
    breadcrumb: { home: "Home", listing: "Car Rental" },
    areaServed: { city: "Buon Ma Thuot", region: "Dak Lak" },
  },
};
