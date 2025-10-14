import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/features/header";
import Footer from "@/features/footer";
import SubHeader from "@/features/sub-header";
import FloatingContactButtons from "@/features/floating-button";
import BackToTopButton from "@/features/backtotop-button";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DVDL Đại Dương Ban Mê",
  description:
    "Khám phá hành trình du lịch cùng DVDL Đại Dương Ban Mê - chuyên tour nội địa, thuê xe đời mới, tổ chức team building và sự kiện trọn gói.",
  keywords: [
    // TODO: nhét thêm keywords
    "du lịch Buôn Ma Thuột",
    "thuê xe du lịch",
    "DVDL Đại Dương Ban Mê",
    "tour Daklak",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17576533976"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17576533976');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SubHeader />
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
        <FloatingContactButtons phoneNumber="0941437070" />
      </body>
    </html>
  );
}
