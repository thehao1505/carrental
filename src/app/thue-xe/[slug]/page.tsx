import { ThueXeSlugPage } from "@/features/thue-xe/thue-xe-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thuê Xe | DVDL Đại Dương Ban Mê",
  description: "Thuê xe có tài xế, chuyên nghiệp tận tâm uy tín tại DVDL Đại Dương Ban Mê",
  keywords: [
    "thuê xe 4 chỗ",
    "thuê xe 7 chỗ",
    "thuê xe 16 chỗ",
    "thuê xe 29 chỗ",
    "thuê xe 45 chỗ",
    "thuê xe limousine",
    "thuê xe du lịch",
    "DVDL Đại Dương Ban Mê",
    "tour Daklak",
    "tour riêng BMT",
    "tổ chức sự kiện Đắk Lắk",
    "dịch vụ du lịch Daklak",
  ],
  openGraph: {
    title: "Thuê Xe | DVDL Đại Dương Ban Mê",
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

export default function ThueXePage() {
  return <ThueXeSlugPage />;
}
