import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/features/header";
import Footer from "@/features/footer";
import SubHeader from "@/features/sub-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Đại Dương Travel',
  description:
    'Khám phá hành trình du lịch cùng Đại Dương Travel - chuyên tour nội địa, thuê xe đời mới, tổ chức team building và sự kiện trọn gói.',
  keywords: [
    // TODO: nhét thêm keywords
    'du lịch Buôn Ma Thuột',
    'thuê xe du lịch',
    'Đại Dương Travel',
    'tour Daklak',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SubHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
