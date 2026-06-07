import { BangGiaCard } from "@/features/bang-gia/bang-gia-card";
import { Metadata } from "next";

const siteUrl = "https://www.dvdldaiduong.com";

const faqSchema = {
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
};

export const metadata: Metadata = {
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
  alternates: {
    canonical: "https://www.dvdldaiduong.com/bang-gia",
  },
  openGraph: {
    title: "Bảng Giá Thuê Xe Du Lịch | DVDL Đại Dương Ban Mê",
    description:
      "Bảng giá thuê xe 4-45 chỗ tại Buôn Ma Thuột. Giá cạnh tranh, xe đời mới, tài xế chuyên nghiệp, phục vụ 7/7.",
    url: "https://www.dvdldaiduong.com/bang-gia",
    locale: "vi_VN",
    type: "website",
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
    card: "summary_large_image",
    title: "Bảng Giá Thuê Xe Du Lịch | DVDL Đại Dương Ban Mê",
    description: "Xem bảng giá thuê xe 4-45 chỗ tại Buôn Ma Thuột - Đắk Lắk.",
  },
};

export default function BangGia() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BangGiaCard />
    </>
  );
}
