import { ThueXeListing } from "@/features/thue-xe/thue-xe-listing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch Vụ Thuê Xe Tại Buôn Ma Thuột | DVDL Đại Dương Ban Mê",
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
    title: "Dịch Vụ Thuê Xe Tại Buôn Ma Thuột | DVDL Đại Dương Ban Mê",
    description:
      "Đa dạng loại xe từ 4–45 chỗ & limousine. Tài xế chuyên nghiệp, xe đời mới, giá cả minh bạch tại Buôn Ma Thuột.",
    url: "https://www.dvdldaiduong.com/thue-xe",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/thuexe-7-cho.png",
        width: 1200,
        height: 630,
        alt: "Dịch vụ thuê xe tại Buôn Ma Thuột",
      },
    ],
  },
};

export default function ThueXePage() {
  return <ThueXeListing />;
}
