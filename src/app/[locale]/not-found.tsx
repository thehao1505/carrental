import Link from "next/link";
import { headers } from "next/headers";
import { defaultLocale, getDictionary, isLocale, path } from "@/lib/i18n";

/**
 * 404 for a route that matched but then called `notFound()` — an unknown locale
 * segment, or an article slug that doesn't exist.
 *
 * Next picks the boundary by *why* the 404 happened: a URL that matches no
 * route at all goes to app/not-found.tsx, which renders its own shell; a
 * `notFound()` thrown inside a matched route comes here, where the surrounding
 * app/[locale]/layout.tsx already supplies <html>, header and footer. Both
 * files are needed — one alone leaves the other case on Next's bare error page.
 *
 * Locale comes from the `x-locale` header (src/proxy.ts): not-found.tsx never
 * receives route params.
 */
export default async function LocaleNotFound() {
  const raw = (await headers()).get("x-locale") ?? defaultLocale;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const { notFound } = await getDictionary(locale);

  return (
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
  );
}
