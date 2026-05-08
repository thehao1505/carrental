import { BangGiaCard } from "@/features/bang-gia/bang-gia-card";
import { Metadata } from "next";

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
  return <BangGiaCard />;
}
