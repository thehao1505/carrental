import { generateBreadcrumb } from "@/lib/schema";
import { siteUrl, url, type Locale } from "@/lib/i18n";
import type { PageSeo } from "../page-seo";

const viUrl = url("privacyPolicy", "vi") as string;
const enUrl = url("privacyPolicy", "en") as string;

/**
 * Both locales now declare OpenGraph and a breadcrumb, which only the English
 * page used to do. The two were never meant to differ — the English page was
 * simply written later.
 */
export const privacyPolicySeo: Record<Locale, PageSeo> = {
  vi: {
    title: "Chính Sách Bảo Mật",
    description: "Chính sách bảo mật của DVDL Đại Dương Ban Mê – cam kết bảo vệ thông tin cá nhân của khách hàng theo Nghị định 13/2023/NĐ-CP.",
    og: { title: "Chính Sách Bảo Mật", description: "Chính sách bảo mật của DVDL Đại Dương Ban Mê – cam kết bảo vệ thông tin cá nhân của khách hàng theo Nghị định 13/2023/NĐ-CP." },
    schemas: [
      generateBreadcrumb([
        { name: "Trang chủ", url: siteUrl },
        { name: "Chính sách bảo mật", url: viUrl },
      ]),
    ],
  },
  en: {
    title: "Privacy Policy",
    description: "Privacy policy of DVDL Dai Duong Ban Me — how we collect, use and protect your personal data under Vietnam's Decree 13/2023/ND-CP.",
    og: { title: "Privacy Policy", description: "Privacy policy of DVDL Dai Duong Ban Me — how we collect, use and protect your personal data under Vietnam's Decree 13/2023/ND-CP." },
    schemas: [
      generateBreadcrumb([
        { name: "Home", url: `${siteUrl}/en` },
        { name: "Privacy Policy", url: enUrl },
      ]),
    ],
  },
};
