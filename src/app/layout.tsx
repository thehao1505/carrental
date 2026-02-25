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

const siteUrl = "https://www.dvdldaiduong.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DVDL Đại Dương Ban Mê - Thuê Xe & Tour Du Lịch Đắk Lắk",
    template: "%s | DVDL Đại Dương Ban Mê",
  },
  description:
    "Khám phá hành trình du lịch cùng DVDL Đại Dương Ban Mê - chuyên tour nội địa, thuê xe đời mới 4-45 chỗ, tổ chức team building và sự kiện trọn gói tại Buôn Ma Thuột.",
  keywords: [
    "du lịch Buôn Ma Thuột",
    "thuê xe du lịch Đắk Lắk",
    "DVDL Đại Dương Ban Mê",
    "tour Daklak",
    "tour riêng BMT",
    "tổ chức sự kiện Đắk Lắk",
    "dịch vụ du lịch Daklak",
    "thuê xe tự lái Buôn Ma Thuột",
    "team building Đắk Lắk",
    "tour Buôn Ma Thuột",
  ],
  applicationName: "DVDL Đại Dương Ban Mê",
  authors: [{ name: "DVDL Đại Dương Ban Mê", url: siteUrl }],
  creator: "DVDL Đại Dương Ban Mê",
  publisher: "DVDL Đại Dương Ban Mê",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DVDL Đại Dương Ban Mê - Thuê Xe & Tour Du Lịch Đắk Lắk",
    description:
      "Chúng tôi mang đến trải nghiệm du lịch cá nhân hóa, an toàn, minh bạch và tận tâm tại Buôn Ma Thuột - Đắk Lắk.",
    url: siteUrl,
    siteName: "DVDL Đại Dương Ban Mê",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DVDL Đại Dương Ban Mê - Tour du lịch và thuê xe Đắk Lắk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DVDL Đại Dương Ban Mê - Thuê Xe & Tour Du Lịch Đắk Lắk",
    description:
      "Chuyên tour nội địa, thuê xe đời mới, tổ chức team building và sự kiện tại Buôn Ma Thuột.",
    images: ["/og-image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "TravelAgency"],
  name: "DVDL Đại Dương Ban Mê",
  alternateName: "Đại Dương Ban Mê",
  url: siteUrl,
  logo: `${siteUrl}/logo-light.png`,
  image: `${siteUrl}/og-image.jpg`,
  description:
    "Chuyên cung cấp dịch vụ thuê xe du lịch, tour nội địa, tổ chức team building và sự kiện tại Buôn Ma Thuột - Đắk Lắk.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buôn Ma Thuột",
    addressRegion: "Đắk Lắk",
    addressCountry: "VN",
  },
  telephone: "+84941437070",
  priceRange: "$$",
  areaServed: {
    "@type": "State",
    name: "Đắk Lắk",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* JSON-LD Organization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
            gtag('config', 'G-53XQGRKZ1K');
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
