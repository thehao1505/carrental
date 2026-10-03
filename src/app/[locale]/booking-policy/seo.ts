import { generateBreadcrumb } from "@/lib/schema";
import { siteUrl, url, type Locale } from "@/lib/i18n";
import type { PageSeo } from "../page-seo";

const viUrl = url("shippingPolicy", "vi") as string;
const enUrl = url("shippingPolicy", "en") as string;

/**
 * Both locales now declare OpenGraph and a breadcrumb, which only the English
 * page used to do. The two were never meant to differ — the English page was
 * simply written later.
 */
export const bookingPolicySeo: Record<Locale, PageSeo> = {
  vi: {
    title: "Chính Sách Vận Chuyển",
    description: "Chính sách vận chuyển của DVDL Đại Dương Ban Mê – quy định đặt xe, hủy chuyến, bồi thường và trách nhiệm các bên.",
    og: { title: "Chính Sách Vận Chuyển", description: "Chính sách vận chuyển của DVDL Đại Dương Ban Mê – quy định đặt xe, hủy chuyến, bồi thường và trách nhiệm các bên." },
    schemas: [
      generateBreadcrumb([
        { name: "Trang chủ", url: siteUrl },
        { name: "Chính sách vận chuyển", url: viUrl },
      ]),
    ],
  },
  en: {
    title: "Booking & Cancellation Policy",
    description: "Booking, cancellation, refund and liability terms for car rental with driver and tours from DVDL Dai Duong Ban Me in Buon Ma Thuot, Dak Lak.",
    og: { title: "Booking & Cancellation Policy", description: "Booking, cancellation, refund and liability terms for car rental with driver and tours from DVDL Dai Duong Ban Me in Buon Ma Thuot, Dak Lak." },
    schemas: [
      generateBreadcrumb([
        { name: "Home", url: `${siteUrl}/en` },
        { name: "Booking & Cancellation Policy", url: enUrl },
      ]),
    ],
  },
};
