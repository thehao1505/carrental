import Link from "next/link";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultLocale, getDictionary, isLocale, path } from "@/lib/i18n";
import Header from "@/features/header";
import Footer from "@/features/footer";
import SubHeader from "@/features/sub-header";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * The site's 404 page.
 *
 * The root layout lives at app/[locale]/layout.tsx, and Next resolves a failed
 * route match against this top-level boundary rather than against a not-found
 * nested inside that layout — so nothing wraps this file and it renders its own
 * <html>, <body> and site chrome. Keeping a single 404 here means every kind of
 * miss (unknown path, unknown locale prefix, unknown slug) lands on the same
 * page instead of some of them falling through to Next's bare error shell.
 *
 * Analytics is deliberately left out: a 404 is not a pageview worth recording.
 *
 * The locale comes from the `x-locale` header set in src/proxy.ts, because
 * not-found.tsx never receives route params. That header is read here and
 * nowhere else.
 */
export default async function NotFound() {
  const raw = (await headers()).get("x-locale") ?? defaultLocale;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);
  const { notFound } = dict;

  return (
    <html lang={dict.htmlLang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SubHeader dict={dict.subHeader} />
        <Header
          dict={dict}
          homeHref={path("home", locale) ?? "/"}
          locale={locale}
        />
        <main>
          <div className="max-w-2xl mx-auto px-6 py-24 text-center">
            <p className="text-6xl font-bold text-forest-500 mb-4">404</p>
            <h1 className="text-2xl font-bold text-forest-600 mb-4">
              {notFound.heading}
            </h1>
            <p className="text-gray-600 mb-8">{notFound.body}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={path("home", locale) ?? "/"}
                className="rounded-md bg-forest-500 px-6 py-3 text-white hover:bg-forest-600"
              >
                {notFound.homeCta}
              </Link>
              <Link
                href={path("contact", locale) ?? "/"}
                className="rounded-md border border-forest-500 px-6 py-3 text-forest-500 hover:bg-forest-50"
              >
                {notFound.contactCta}
              </Link>
            </div>
          </div>
        </main>
        <Footer dict={dict} locale={locale} />
      </body>
    </html>
  );
}
