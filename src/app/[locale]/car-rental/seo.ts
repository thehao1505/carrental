import { siteUrl, url, type Locale } from "@/lib/i18n";

const viUrl = url("carRental", "vi") as string;
const enUrl = url("carRental", "en") as string;

/**
 * Per-locale metadata copy and JSON-LD for the car rental listing.
 *
 * These are translations of one another, not template output: keeping them in a
 * locale-keyed table lets page.tsx stay a single render path while the wording
 * stays hand-written per language. Moving this into the dictionary is tracked as
 * A10 in output/I18N-TODO.md.
 */
export type ListingSeo = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
  breadcrumb: { home: string; current: string };
  faqSchema: Record<string, unknown>;
  serviceSchema: Record<string, unknown>;
};

export const listingSeo: Record<Locale, ListingSeo> = {
  vi: {
    title: "Dịch Vụ Thuê Xe Tại Buôn Ma Thuột",
    description:
      "Thuê xe 4, 7, 16, 29, 45 chỗ và limousine tại Buôn Ma Thuột – Đắk Lắk. Xe đời mới, tài xế chuyên nghiệp, giá cả minh bạch. Đặt xe ngay hôm nay!",
    keywords: [
      "thuê xe Buôn Ma Thuột",
      "thuê xe Đắk Lắk",
      "thuê xe 4 chỗ BMT",
      "thuê xe 7 chỗ BMT",
      "thuê xe 16 chỗ",
      "thuê xe 29 chỗ",
      "thuê xe 45 chỗ",
      "thuê xe limousine Đắk Lắk",
      "DVDL Đại Dương Ban Mê",
    ],
    ogTitle: "Dịch Vụ Thuê Xe Tại Buôn Ma Thuột",
    ogDescription:
      "Đa dạng loại xe từ 4–45 chỗ & limousine. Tài xế chuyên nghiệp, xe đời mới, giá cả minh bạch tại Buôn Ma Thuột.",
    ogImageAlt: "Dịch vụ thuê xe tại Buôn Ma Thuột",
    breadcrumb: { home: "Trang chủ", current: "Thuê xe" },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Thuê xe có tài xế tại Buôn Ma Thuột cần chuẩn bị giấy tờ gì?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Khách hàng chỉ cần cung cấp tên, số điện thoại và địa chỉ đón khi đặt xe. Không yêu cầu giấy tờ tùy thân hay đặt cọc bắt buộc. Với hợp đồng doanh nghiệp dài hạn, chúng tôi sẽ ký biên bản thỏa thuận riêng.",
          },
        },
        {
          "@type": "Question",
          name: "Nên đặt xe trước bao lâu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nên đặt trước 1–2 ngày để đảm bảo có xe theo ý muốn. Dịp lễ tết hoặc mùa lễ hội cà phê (tháng 3) nên đặt trước 5–7 ngày. Xe đoàn từ 29 chỗ trở lên nên đặt ít nhất 3 ngày trước.",
          },
        },
        {
          "@type": "Question",
          name: "Giá thuê xe đã bao gồm những gì?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Giá niêm yết đã bao gồm tài xế chuyên nghiệp và nhiên liệu cho toàn bộ hành trình. Chưa bao gồm phí cầu đường, phí bến bãi tham quan và hóa đơn VAT (nếu có yêu cầu). Không phát sinh chi phí ẩn ngoài các khoản trên.",
          },
        },
        {
          "@type": "Question",
          name: "DVDL Đại Dương Ban Mê có cho thuê xe tự lái không?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hiện tại DVDL Đại Dương Ban Mê chủ yếu cung cấp dịch vụ thuê xe có tài xế để đảm bảo an toàn tối đa. Tài xế là người bản địa, am hiểu địa hình Tây Nguyên và có thể kiêm vai trò hướng dẫn viên không chính thức.",
          },
        },
        {
          "@type": "Question",
          name: "Nếu hủy chuyến, có bị mất phí không?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hủy trước 24 giờ: miễn phí hoàn toàn. Hủy trong vòng 24 giờ trước giờ khởi hành: có thể phát sinh phí theo thỏa thuận. Liên hệ hotline 0941.437.070 để được hỗ trợ điều chỉnh lịch trình linh hoạt.",
          },
        },
      ],
    },
    serviceSchema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${viUrl}#service`,
      name: "Thuê Xe Du Lịch Tại Buôn Ma Thuột",
      serviceType: "Car Rental",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: [
        { "@type": "City", name: "Buôn Ma Thuột" },
        { "@type": "AdministrativeArea", name: "Đắk Lắk" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Các loại xe cho thuê",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Thuê xe 4 chỗ" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Thuê xe 7 chỗ" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Thuê xe 16 chỗ" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Thuê xe 29 chỗ" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Thuê xe 45 chỗ" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Thuê xe Limousine" },
          },
        ],
      },
    },
  },
  en: {
    title: "Car Rental Service in Buon Ma Thuot",
    description:
      "Rent 4, 7, 16, 29 and 45-seat vehicles or a limousine in Buon Ma Thuot, Dak Lak. Late-model cars, professional English-friendly drivers, transparent pricing.",
    keywords: [
      "car rental Buon Ma Thuot",
      "car rental Dak Lak",
      "van rental Buon Ma Thuot",
      "minibus rental Dak Lak",
      "limousine rental Dak Lak",
      "car with driver Vietnam Central Highlands",
    ],
    // Same strings the English page previously read from dict hero.h1 /
    // hero.subtitle / hero.imageAlt, spelled out so both locales resolve their
    // OG copy from one place.
    ogTitle: "Car Rental Service in Buon Ma Thuot",
    ogDescription:
      "A full range of vehicles from 4 to 45 seats plus limousines. Professional drivers, late-model cars, transparent pricing.",
    ogImageAlt: "Car rental service in Buon Ma Thuot",
    breadcrumb: { home: "Home", current: "Car Rental" },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "en",
      mainEntity: [
        {
          "@type": "Question",
          name: "What documents do I need to rent a car with a driver in Buon Ma Thuot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You only need to give us a name, a phone number and a pick-up address. No identity documents or mandatory deposit are required. For long-term corporate contracts we sign a separate written agreement.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Book 1-2 days ahead to be sure of the vehicle you want. For public holidays or the coffee festival season in March, book 5-7 days ahead. Groups needing 29 seats or more should book at least 3 days ahead.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the rental price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The quoted price includes a professional driver and fuel for the whole journey. It excludes road tolls, parking and sightseeing entry fees, and VAT invoicing if requested. There are no hidden charges beyond these.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer self-drive rental?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We currently focus on rental with a driver to maximise safety. Our drivers are locals who know the Central Highlands terrain and can act as informal guides during the trip.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a cancellation fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cancelling more than 24 hours ahead is free. Cancelling within 24 hours of departure may incur a fee by agreement. Call +84 941 437 070 and we will help you adjust the schedule.",
          },
        },
      ],
    },
    serviceSchema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${enUrl}#service`,
      name: "Car Rental in Buon Ma Thuot",
      serviceType: "Car Rental",
      inLanguage: "en",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: [
        { "@type": "City", name: "Buon Ma Thuot" },
        { "@type": "AdministrativeArea", name: "Dak Lak" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Vehicles available for rental",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "4-seat car rental" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "7-seat car rental" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "16-seat van rental" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "29-seat bus rental" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "45-seat coach rental" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Limousine rental" } },
        ],
      },
    },
  },
};
