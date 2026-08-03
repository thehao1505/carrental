import { ThueXeListing } from "@/features/thue-xe/thue-xe-listing";
import { Metadata } from "next";
import { generateBreadcrumb } from "@/lib/schema";

const siteUrl = "https://www.dvdldaiduong.com";

const breadcrumbSchema = generateBreadcrumb([
  { name: "Trang chủ", url: siteUrl },
  { name: "Thuê xe", url: `${siteUrl}/thue-xe` },
]);

const faqSchema = {
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
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/thue-xe#service`,
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
};

export const metadata: Metadata = {
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
  alternates: {
    canonical: "https://www.dvdldaiduong.com/thue-xe",
  },
  openGraph: {
    title: "Dịch Vụ Thuê Xe Tại Buôn Ma Thuột",
    description:
      "Đa dạng loại xe từ 4–45 chỗ & limousine. Tài xế chuyên nghiệp, xe đời mới, giá cả minh bạch tại Buôn Ma Thuột.",
    url: "https://www.dvdldaiduong.com/thue-xe",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/thue-xe-7-cho.webp",
        width: 1200,
        height: 630,
        alt: "Dịch vụ thuê xe tại Buôn Ma Thuột",
      },
    ],
  },
};

export default function ThueXePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ThueXeListing />
    </>
  );
}
