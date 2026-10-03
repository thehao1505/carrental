import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "../globals.css";
import {
  alternates,
  getDictionary,
  locales,
  ogLocale,
  path,
  siteUrl,
  url,
} from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "./locale-params";
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = await getDictionary(locale);
  const { site } = dict;
  const homeUrl = url("home", locale) ?? siteUrl;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: site.titleDefault,
      template: site.titleTemplate,
    },
    description: site.description,
    keywords: site.keywords,
    applicationName: "DVDL Đại Dương Ban Mê",
    authors: [{ name: "DVDL Đại Dương Ban Mê", url: siteUrl }],
    creator: "DVDL Đại Dương Ban Mê",
    publisher: "DVDL Đại Dương Ban Mê",
    // Full hreflang set, not just a canonical: a page that forgets to declare
    // its own `alternates` then still inherits a correct reciprocal set for the
    // home route instead of silently shipping none.
    alternates: alternates("home", locale),
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
      title: site.ogTitle,
      description: site.description,
      url: homeUrl,
      siteName: "DVDL Đại Dương Ban Mê",
      locale: ogLocale[locale],
      // Only the other locales that actually have a home page, so og:locale:alternate
      // never advertises a URL hreflang doesn't back up.
      alternateLocale: locales
        .filter((l) => l !== locale && path("home", l) !== null)
        .map((l) => ogLocale[l]),
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: site.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.twitterTitle,
      description: site.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LocaleParams) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const locale = resolveLocale((await params).locale);
  const dict = await getDictionary(locale);

  return (
    <html lang={dict.htmlLang}>
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
        <SubHeader dict={dict.subHeader} />
        <Header
          dict={dict}
          homeHref={path("home", locale) ?? "/"}
          locale={locale}
        />
        <main>{children}</main>
        <Footer dict={dict} locale={locale} />
        <BackToTopButton />
        <FloatingContactButtons
          dict={dict.floating}
          phoneNumber="0941437070"
          zaloNumber="0941437070"
        />
      </body>
    </html>
  );
}
