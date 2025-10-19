import { Metadata } from "next";
import { TinTucCard } from "@/features/tin-tuc/tin-tuc-card";

export const metadata: Metadata = {
  title: "Tin Tức | DVDL Đại Dương Ban Mê",
  description:
    "Khám phá hành trình du lịch cùng DVDL Đại Dương Ban Mê - chuyên tour nội địa, thuê xe đời mới.",
  keywords: [
    "du lịch Buôn Ma Thuột",
    "thuê xe du lịch",
    "DVDL Đại Dương Ban Mê",
    "tour Daklak",
    "tour riêng BMT",
    "tổ chức sự kiện Đắk Lắk",
    "dịch vụ du lịch Daklak",
  ],
  metadataBase: new URL("https://dvdldaiduong.com"),
  openGraph: {
    title: "Tin Tức | DVDL Đại Dương Ban Mê",
    description:
      "Chúng tôi mang đến trải nghiệm du lịch cá nhân hóa, an toàn, minh bạch và tận tâm.",
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

export default function TinTucPage() {
  return <TinTucCard />;
}
