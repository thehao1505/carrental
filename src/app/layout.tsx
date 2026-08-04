import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
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
    default: "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế | DVDL",
    template: "%s | DVDL Đại Dương Ban Mê",
  },
  description:
    "Cho thuê xe Đắk Lắk uy tín – xe 4-45 chỗ có tài xế, tour nội địa, team building và sự kiện tại Buôn Ma Thuột.",
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
      "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế | DVDL Đại Dương Ban Mê",
    description:
      "Cho thuê xe Đắk Lắk uy tín – xe 4-45 chỗ có tài xế, tour nội địa, team building và sự kiện tại Buôn Ma Thuột.",
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
    title: "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế",
    description:
      "Cho thuê xe Đắk Lắk uy tín – xe 4-45 chỗ có tài xế, tour nội địa, team building và sự kiện tại Buôn Ma Thuột.",
    images: ["/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="vi">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload" nonce={nonce}>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KK22VG58');`}
        </Script>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9VSEK22HM5"
          strategy="lazyOnload"
          nonce={nonce}
        />
        <Script id="google-analytics" strategy="lazyOnload" nonce={nonce}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VSEK22HM5');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KK22VG58"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SubHeader />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
        <FloatingContactButtons phoneNumber="0941437070" zaloNumber="0941437070" />
      </body>
    </html>
  );
}
