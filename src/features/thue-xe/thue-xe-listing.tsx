import Image from "next/image";
import Link from "next/link";
import type { CarRentalItem } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n/types";
import { interpolate } from "@/lib/i18n/interpolate";

type ThueXeListingProps = {
  dict: Dictionary["pages"]["carRentalListing"];
  items: CarRentalItem[];
  /** Locale-correct hrefs, resolved by the page from src/lib/i18n/routes.ts. */
  carRentalBasePath: string;
  /** Omit to hide the featured banner (e.g. the target page isn't translated). */
  featuredHref?: string;
  contactHref: string;
};

export function ThueXeListing({
  dict,
  items,
  carRentalBasePath,
  featuredHref,
  contactHref,
}: ThueXeListingProps) {
  const { hero, intro, priceTable, whyUs, process, cards, destinations } = dict;

  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="relative h-[340px] w-full">
        <Image
          src="/images/thue-xe-7-cho.webp"
          alt={hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-3 px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
            {hero.h1}
          </h1>
          <p className="text-white/85 text-base md:text-lg text-center max-w-2xl">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="tel:0941437070"
              className="bg-forest-500 text-lemon-500 px-6 py-3 rounded-3xl text-base font-semibold text-center hover:bg-forest-600 hover:scale-105 transition-all duration-200"
            >
              {hero.callCta}
            </a>
            <a
              href="https://zalo.me/0941437070"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-forest-500 px-6 py-3 rounded-3xl text-base font-semibold text-center hover:bg-lemon-500 hover:scale-105 transition-all duration-200"
            >
              {hero.zaloCta}
            </a>
          </div>
        </div>
      </section>

      {/* Intro content */}
      <section className="max-w-4xl mx-auto px-6 pt-14 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-forest-600 mb-5">
          {intro.h2}
        </h2>
        <p
          className="text-gray-700 leading-relaxed text-[15px] md:text-base"
          dangerouslySetInnerHTML={{ __html: intro.bodyHtml }}
        />
      </section>

      {/* Reference price table */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-forest-600 mb-4">
          {priceTable.h2}
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mb-5">
          {priceTable.lead}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm md:text-[15px]">
            <thead>
              <tr className="bg-forest-500 text-white">
                <th className="px-4 py-3 font-semibold rounded-tl-lg">
                  {priceTable.headers.type}
                </th>
                <th className="px-4 py-3 font-semibold">
                  {priceTable.headers.seats}
                </th>
                <th className="px-4 py-3 font-semibold">
                  {priceTable.headers.priceFrom}
                </th>
                <th className="px-4 py-3 font-semibold rounded-tr-lg">
                  {priceTable.headers.bestFor}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {priceTable.rows.map((row) => (
                <tr key={row.type} className="odd:bg-white even:bg-forest-50">
                  <td className="px-4 py-3 font-medium text-forest-600">
                    {row.type}
                  </td>
                  <td className="px-4 py-3">{row.seats}</td>
                  <td className="px-4 py-3">{row.price}</td>
                  <td className="px-4 py-3">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-forest-600 mb-4">
          {whyUs.h2}
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mb-5">
          {whyUs.lead}
        </p>
        <ul className="space-y-4">
          {whyUs.items.map((item) => (
            <li key={item.title} className="flex gap-3">
              <span className="text-lemon-500 font-bold text-lg shrink-0">✓</span>
              <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                <strong className="text-forest-600">{item.title}</strong>{" "}
                {item.body}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Booking process */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-forest-600 mb-4">
          {process.h2}
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mb-6">
          {process.lead}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {process.steps.map((step, index) => (
            <div key={step.title} className="border rounded-2xl p-5 bg-white">
              <div className="text-lemon-500 font-bold text-2xl mb-2">
                {index + 1}
              </div>
              <h3 className="font-semibold text-forest-600 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((xe) => (
            <Link
              key={xe.slug}
              href={`${carRentalBasePath}/${xe.slug}`}
              className="group border rounded-2xl shadow-sm overflow-hidden bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={xe.image}
                  alt={xe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2">
                <h2 className="text-lg font-semibold text-forest-600 leading-snug">
                  {xe.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cards.excerpts[xe.slug] ?? ""}
                </p>
                {cards.startingPrices[xe.slug] && (
                  <p className="text-sm font-semibold text-forest-600">
                    {interpolate(cards.priceFrom, {
                      price: cards.startingPrices[xe.slug],
                    })}
                  </p>
                )}
                <span className="inline-block text-forest-500 text-sm font-medium mt-1">
                  {cards.readMore}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-xl md:text-2xl font-bold text-forest-600 mb-4">
          {destinations.h2}
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mb-5">
          {destinations.lead}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 leading-relaxed text-[15px] md:text-base">
          {destinations.items.map((place) => (
            <li key={place.name}>
              <strong className="text-forest-600">{place.name}</strong>{" "}
              {place.body}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mt-5">
          {destinations.outro}
        </p>
      </section>

      {/* Featured landing page */}
      {featuredHref && (
      <section className="max-w-6xl mx-auto px-6 pb-4">
        <Link
          href={featuredHref}
          className="flex items-center justify-between gap-4 bg-forest-500 text-white rounded-2xl px-7 py-5 hover:bg-forest-600 transition group"
        >
          <div>
            <div className="font-bold text-lg leading-snug">
              {dict.featured.title}
            </div>
            <div className="text-white/75 text-sm mt-1">
              {dict.featured.subtitle}
            </div>
          </div>
          <span className="text-lemon-400 text-2xl font-bold group-hover:translate-x-1 transition-transform shrink-0">
            →
          </span>
        </Link>
      </section>
      )}

      {/* CTA */}
      <section className="bg-forest-50 py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-forest-600 mb-3">
          {dict.cta.h2}
        </h2>
        <p className="text-gray-600 mb-6">{dict.cta.body}</p>
        <Link
          href={contactHref}
          className="inline-block bg-forest-500 text-lemon-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition hover:scale-105"
        >
          {dict.cta.button}
        </Link>
      </section>
    </main>
  );
}
