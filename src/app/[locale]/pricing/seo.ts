import { generateBreadcrumb } from "@/lib/schema";
import { siteUrl, url, type Locale } from "@/lib/i18n";
import type { PageSeo } from "../page-seo";

const viUrl = url("pricing", "vi") as string;
const enUrl = url("pricing", "en") as string;

export const pricingSeo: Record<Locale, PageSeo> = {
  vi: {
    title: "Bảng Giá Thuê Xe Du Lịch",
    description:
      "Xem bảng giá thuê xe 4 - 45 chỗ tại Buôn Ma Thuột - Đắk Lắk. Báo giá theo km và thời gian thuê. Giá cạnh tranh, xe đời mới, tài xế chuyên nghiệp.",
    keywords: [
      "bảng giá thuê xe du lịch Đắk Lắk",
      "giá thuê xe 4 chỗ Buôn Ma Thuột",
      "giá thuê xe 7 chỗ BMT",
      "giá thuê xe 16 chỗ",
      "giá thuê xe 29 chỗ",
      "giá thuê xe 45 chỗ",
      "bảng giá thuê ô tô Đắk Lắk",
      "thuê xe limousine Buôn Ma Thuột",
      "DVDL Đại Dương Ban Mê",
    ],
    og: {
      title: "Bảng Giá Thuê Xe Du Lịch | DVDL Đại Dương Ban Mê",
      description:
        "Bảng giá thuê xe 4-45 chỗ tại Buôn Ma Thuột. Giá cạnh tranh, xe đời mới, tài xế chuyên nghiệp, phục vụ 7/7.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Bảng giá thuê xe DVDL Đại Dương Ban Mê",
        },
      ],
    },
    twitter: {
      title: "Bảng Giá Thuê Xe Du Lịch | DVDL Đại Dương Ban Mê",
      description: "Xem bảng giá thuê xe 4-45 chỗ tại Buôn Ma Thuột - Đắk Lắk.",
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Giá thuê xe 4 chỗ một ngày tại Buôn Ma Thuột là bao nhiêu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Giá thuê xe 4 chỗ nội thành Buôn Ma Thuột từ 900.000–1.200.000đ/ngày (tối đa 100km, 8 tiếng). Thuê nửa ngày (4 tiếng, tối đa 50km) từ 600.000–800.000đ. Đi ngoại tỉnh hoặc theo km: liên hệ hotline 0941.437.070 để báo giá chính xác.",
            },
          },
          {
            "@type": "Question",
            name: "Giá thuê xe đã bao gồm xăng dầu và tài xế chưa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Có. Tất cả mức giá niêm yết đã bao gồm tài xế chuyên nghiệp và nhiên liệu cho toàn hành trình. Khách hàng không cần trả thêm bất kỳ chi phí nào ngoài phí cầu đường, phí bến bãi (nếu phát sinh) và VAT khi có yêu cầu hóa đơn.",
            },
          },
          {
            "@type": "Question",
            name: "Đi ngoài giờ hoặc qua đêm có tính thêm phí không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dịch vụ phục vụ từ 06:00–22:00 theo giá chuẩn. Chuyến khởi hành trước 06:00 hoặc kết thúc sau 22:00 có thể phát sinh phụ phí. Hành trình qua đêm nhiều ngày sẽ được báo giá trọn gói, đã bao gồm chỗ nghỉ cho tài xế.",
            },
          },
          {
            "@type": "Question",
            name: "DVDL Đại Dương Ban Mê có xuất hóa đơn VAT không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Có. Chúng tôi xuất hóa đơn VAT theo yêu cầu cho cá nhân và doanh nghiệp. Vui lòng thông báo trước khi thanh toán để chúng tôi chuẩn bị đầy đủ thông tin hóa đơn.",
            },
          },
          {
            "@type": "Question",
            name: "Thuê nhiều xe hoặc dài ngày có được giảm giá không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Có. Hợp đồng thuê từ 3 ngày trở lên được giảm 10–15% tùy loại xe. Đoàn từ 2 xe trở lên hoặc hợp đồng doanh nghiệp dài hạn được áp dụng mức ưu đãi riêng. Liên hệ hotline 0941.437.070 để nhận báo giá theo nhu cầu cụ thể.",
            },
          },
        ],
      },
      generateBreadcrumb([
        { name: "Trang chủ", url: siteUrl },
        { name: "Bảng Giá", url: viUrl },
      ]),
    ],
  },
  en: {
    title: "Car Rental Price List",
    description:
      "Price list for 4 to 45-seat car rental in Buon Ma Thuot, Dak Lak. Quoted per kilometre and per hire period. Competitive rates, late-model vehicles, professional drivers.",
    keywords: [
      "Dak Lak car rental price list",
      "4 seat car hire price Buon Ma Thuot",
      "7 seat car hire price BMT",
      "16 seat van hire price",
      "29 seat coach hire price",
      "45 seat coach hire price",
      "car rental rates Dak Lak",
      "limousine hire Buon Ma Thuot",
      "DVDL Dai Duong Ban Me",
    ],
    og: {
      title: "Car Rental Price List | DVDL Dai Duong Ban Me",
      description:
        "Prices for 4-45 seat car rental in Buon Ma Thuot. Competitive rates, late-model vehicles, professional drivers, open 7 days.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "DVDL Dai Duong Ban Me car rental price list",
        },
      ],
    },
    twitter: {
      title: "Car Rental Price List | DVDL Dai Duong Ban Me",
      description: "Prices for 4-45 seat car rental in Buon Ma Thuot, Dak Lak.",
    },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: "en",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does it cost to hire a 4-seat car for a day in Buon Ma Thuot?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A 4-seat car within Buon Ma Thuot costs 900,000-1,200,000₫ per day (up to 100km over 8 hours). A half day (4 hours, up to 50km) is 600,000-800,000₫. For trips outside the province or priced per kilometre, call the hotline on 0941 437 070 for an exact quote.",
            },
          },
          {
            "@type": "Question",
            name: "Does the price include fuel and a driver?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Every listed price includes a professional driver and fuel for the whole journey. You pay nothing further apart from road tolls, parking fees where they arise, and VAT if you need an invoice.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a surcharge for travelling out of hours or overnight?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standard rates cover 06:00-22:00. Trips departing before 06:00 or finishing after 22:00 may carry a surcharge. Multi-day journeys with overnight stops are quoted as an all-inclusive package that already covers the driver's accommodation.",
            },
          },
          {
            "@type": "Question",
            name: "Does DVDL Dai Duong Ban Me issue VAT invoices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, on request, for both individuals and companies. Please tell us before you pay so we can prepare the full invoice details.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a discount for several vehicles or a long hire?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Hires of 3 days or more get 10-15% off depending on the vehicle. Groups taking two or more vehicles, and long-term corporate contracts, get their own rate. Call the hotline on 0941 437 070 for a quote against your requirements.",
            },
          },
        ],
      },
      generateBreadcrumb([
        { name: "Home", url: `${siteUrl}/en` },
        { name: "Price list", url: enUrl },
      ]),
    ],
  },
};
