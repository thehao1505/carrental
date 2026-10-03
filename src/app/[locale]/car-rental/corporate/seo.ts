import { generateBreadcrumb } from "@/lib/schema";
import { defaultLocale, url, type Locale } from "@/lib/i18n";
import type { PageSeo } from "../../page-seo";
import { corporateContent } from "./content";

/**
 * The FAQ rich result and the FAQ people actually read are the same questions,
 * so the schema is derived from the page content instead of being a second copy
 * that can drift out of step with it.
 */
function faqSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(locale === defaultLocale ? {} : { inLanguage: locale }),
    mainEntity: corporateContent[locale].faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const corporateSeo: Record<Locale, PageSeo> = {
  vi: {
    title: "Thuê Xe Doanh Nghiệp Đắk Lắk | Hợp Đồng + Xuất Hóa Đơn VAT",
    description: "Thuê xe doanh nghiệp tại Buôn Ma Thuột - Đắk Lắk: hợp đồng theo tháng/quý/năm, xuất hóa đơn VAT 10%, thanh toán chuyển khoản, đưa đón nhân viên, hội nghị, khách đối tác.",
    keywords: ["thuê xe doanh nghiệp Đắk Lắk", "thuê xe công ty Buôn Ma Thuột", "hợp đồng thuê xe doanh nghiệp", "thuê xe có hóa đơn VAT", "đưa đón nhân viên Đắk Lắk", "thuê xe hội nghị Buôn Ma Thuột", "thuê xe theo tháng BMT", "thuê xe đưa đón khách đối tác", "DVDL Đại Dương Ban Mê doanh nghiệp"],
    og: {
      title: "Thuê Xe Doanh Nghiệp Đắk Lắk - Hợp Đồng + VAT | DVDL Đại Dương Ban Mê",
      description: "Giải pháp thuê xe trọn gói cho doanh nghiệp tại Đắk Lắk: hợp đồng dài hạn, xuất hóa đơn VAT 10%, thanh toán công nợ linh hoạt, xe 4-45 chỗ có tài xế.",
      images: [
        {
          url: "/images/thue-xe-16-cho.webp",
          width: 1200,
          height: 630,
          alt: "Thuê xe doanh nghiệp Đắk Lắk - DVDL Đại Dương Ban Mê",
        },
      ],
    },
    twitter: {
      title: "Thuê Xe Doanh Nghiệp Đắk Lắk | DVDL Đại Dương Ban Mê",
      description: "Hợp đồng theo tháng/quý, xuất hóa đơn VAT 10%, thanh toán công nợ. Xe 4-45 chỗ có tài xế phục vụ B2B.",
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Thuê Xe Doanh Nghiệp Đắk Lắk",
        serviceType: "Corporate Car Rental",
        description: "Dịch vụ thuê xe doanh nghiệp tại Buôn Ma Thuột - Đắk Lắk: hợp đồng dài hạn theo tháng/quý/năm, xuất hóa đơn VAT 10%, đưa đón nhân viên, khách đối tác, phục vụ hội nghị và sự kiện công ty.",
        url: "https://www.dvdldaiduong.com/thue-xe/doanh-nghiep",
        image: "https://www.dvdldaiduong.com/images/thue-xe-16-cho.webp",
        provider: {
          "@id": "https://www.dvdldaiduong.com/#business",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Doanh nghiệp, công ty, tổ chức",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Buôn Ma Thuột",
          },
          {
            "@type": "AdministrativeArea",
            name: "Đắk Lắk",
          },
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          availability: "https://schema.org/InStock",
          url: "https://www.dvdldaiduong.com/thue-xe/doanh-nghiep",
          eligibleCustomerType: "https://schema.org/Business",
          description: "Báo giá theo nhu cầu cụ thể của doanh nghiệp. Hợp đồng tháng/quý/năm có chiết khấu. Xuất hóa đơn VAT 10%.",
        },
      },
      generateBreadcrumb([
        { name: "Trang chủ", url: url("home", "vi")! },
        { name: "Thuê xe", url: url("carRental", "vi")! },
        { name: "Thuê xe doanh nghiệp", url: url("carRentalCorporate", "vi")! },
      ]),
      faqSchema("vi"),
    ],
  },
  en: {
    title: "Corporate Car Rental in Dak Lak | Contracts + VAT Invoices",
    description: "Corporate car rental in Buon Ma Thuot, Dak Lak: monthly, quarterly and annual contracts, 10% VAT invoices, bank transfer on account, staff shuttles, conferences and partner transfers.",
    keywords: ["corporate car rental Dak Lak", "company car hire Buon Ma Thuot", "corporate car rental contract Vietnam", "car rental with VAT invoice", "staff shuttle Dak Lak", "conference transport Buon Ma Thuot", "monthly car rental BMT", "partner and VIP airport transfer Dak Lak", "DVDL Dai Duong Ban Me corporate"],
    og: {
      title: "Corporate Car Rental in Dak Lak - Contracts + VAT | DVDL Dai Duong Ban Me",
      description: "End-to-end corporate car rental in Dak Lak: long-term contracts, 10% VAT invoices, flexible payment on account, 4-45 seat vehicles with a driver.",
      images: [
        {
          url: "/images/thue-xe-16-cho.webp",
          width: 1200,
          height: 630,
          alt: "Corporate car rental in Dak Lak - DVDL Dai Duong Ban Me",
        },
      ],
    },
    twitter: {
      title: "Corporate Car Rental in Dak Lak | DVDL Dai Duong Ban Me",
      description: "Monthly and quarterly contracts, 10% VAT invoices, payment on account. 4-45 seat vehicles with a driver for B2B clients.",
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Corporate Car Rental in Dak Lak",
        serviceType: "Corporate Car Rental",
        description: "Corporate car rental in Buon Ma Thuot, Dak Lak: long-term monthly, quarterly and annual contracts, 10% VAT invoices, staff shuttles, partner transfers, conference and company event transport.",
        url: "https://www.dvdldaiduong.com/en/car-rental/corporate",
        image: "https://www.dvdldaiduong.com/images/thue-xe-16-cho.webp",
        provider: {
          "@id": "https://www.dvdldaiduong.com/#business",
        },
        inLanguage: "en",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Businesses, companies and organisations",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Buon Ma Thuot",
          },
          {
            "@type": "AdministrativeArea",
            name: "Dak Lak",
          },
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          availability: "https://schema.org/InStock",
          url: "https://www.dvdldaiduong.com/en/car-rental/corporate",
          eligibleCustomerType: "https://schema.org/Business",
          description: "Quoted against your specific requirements. Monthly, quarterly and annual contracts carry a discount. 10% VAT invoices issued.",
        },
      },
      generateBreadcrumb([
        { name: "Home", url: url("home", "en")! },
        { name: "Car rental", url: url("carRental", "en")! },
        { name: "Corporate car rental", url: url("carRentalCorporate", "en")! },
      ]),
      faqSchema("en"),
    ],
  },
};
