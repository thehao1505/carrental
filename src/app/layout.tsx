import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/features/header";
import Footer from "@/features/footer";
import SubHeader from "@/features/sub-header";
import FloatingContactButtons from "@/features/floating-button";
import BackToTopButton from "@/features/backtotop-button";

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
    default:
      "Cho Thuê Xe Đắk Lắk Uy Tín | Xe 4-45 Chỗ Có Tài Xế - Đại Dương Ban Mê",
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
  alternates: {
    canonical: siteUrl,
  },
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
    title:
      "Cho Thuê Xe Đắk Lắk Uy Tín | Xe 4-45 Chỗ Có Tài Xế - Đại Dương Ban Mê",
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
    title:
      "Cho Thuê Xe Đắk Lắk Uy Tín | Xe 4-45 Chỗ Có Tài Xế - Đại Dương Ban Mê",
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
  openingHours: "Mo-Su 06:00-22:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "252/6 Phan Huy Chú",
    addressLocality: "Buôn Ma Thuột",
    addressRegion: "Đắk Lắk",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.6424628,
    longitude: 107.9978574,
  },
  telephone: "+84941437070",
  priceRange: "$$",
  areaServed: {
    "@type": "State",
    name: "Đắk Lắk",
  },
  sameAs: ["https://www.facebook.com/share/1AczYur4wu/"],
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SubHeader />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
        <FloatingContactButtons phoneNumber="0941437070" />
      </body>
    </html>
  );
}
