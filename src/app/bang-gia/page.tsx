import { BangGiaCard } from "@/features/bang-gia/bang-gia-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảng Giá Thuê Xe Du Lịch | DVDL Đại Dương Ban Mê",
  description:
    "Xem bảng giá thuê xe 4 - 45 chỗ tại Buôn Ma Thuột - Đắk Lắk. Báo giá theo km và thời gian thuê. Liên hệ ngay để nhận ưu đãi.",
  keywords: [
    "bảng giá",
    "thuê xe du lịch",
    "DVDL Đại Dương Ban Mê",
    "tour Daklak",
    "tour riêng BMT",
    "tổ chức sự kiện Đắk Lắk",
    "dịch vụ du lịch Daklak",
    "bảng giá thuê ô tô",
    "thuê xe 16",
    "thuê xe ô tô",
  ],
  openGraph: {
    title: "Bảng Giá Thuê Xe Du Lịch | DVDL Đại Dương Ban Mê",
    description: "Bảng giá chi tiết hành trình các dịch vụ của DVDL Đại Dương Ban Mê.",
    images: [
      {
        url: "/logo-light.png",
        width: 800,
        height: 600,
        alt: "Logo DVDL Đại Dương Ban Mê",
      },
    ],
    type: "website",
  },
};

export default function BangGia() {
  return <BangGiaCard />;
}
