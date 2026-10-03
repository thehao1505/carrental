import Image from "next/image";
import Link from "next/link";
import TourBookingForm from "@/features/tour-dak-lak/booking-form";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

/**
 * The Dak Lak tours landing page.
 *
 * Layout lives here once; the words live in
 * src/app/[locale]/dak-lak-tours/content.ts, one entry per locale. `*Html`
 * fields are authored rich text with inline <strong> emphasis — repo content,
 * never user input, on the same basis as src/lib/data/car-rental.ts.
 */
export type ToursContent = {
  /**
   * In-page fragment ids. They differ per locale because each language uses its
   * own words, and they are what the hero and pricing CTAs jump to.
   */
  anchors: { itineraries: string; booking: string };
  hero: {
    imageAlt: string;
    badge: string;
    h1: string;
    subtitle: string;
    bookCta: string;
    itineraryCta: string;
  };
  tldr: { label: string; body: string };
  priceAnswer: { label: string; bodyHtml: string };
  intro: {
    h2: string;
    paragraphsHtml: string[];
    highlights: { icon: string; label: string; sub: string }[];
  };
  reasons: { h2: string; lead: string; items: { title: string; desc: string }[] };
  itineraries: {
    h2: string;
    lead: string;
    items: {
      id: string;
      tag: string;
      title: string;
      highlight: string;
      /** Whole phrase, e.g. "Từ 2.400.000đ/xe" — the wording differs per locale. */
      priceFrom: string;
      schedule: { time: string; label: string; desc: string }[];
    }[];
  };
  pricing: {
    h2: string;
    lead: string;
    headers: { label: string; sub: string }[];
    durationHeader: string;
    rows: {
      duration: string;
      cells: { total: string; perPerson: string }[];
    }[];
    note: string;
    cta: { h3: string; body: string; button: string };
  };
  booking: { h2: string; lead: string };
  faq: { h2: string; items: { q: string; a: string }[] };
  references: {
    h2: string;
    lead: string;
    items: { href: string; text: string; note: string }[];
  };
  finalCta: {
    h2: string;
    body: string;
    address: string;
    bookButton: string;
    callButton: string;
    links: { href: string; text: string }[];
  };
};

type Props = {
  content: ToursContent;
  bookingDict: Dictionary["tourBooking"];
  locale: Locale;
};

export function ToursPage({ content, bookingDict, locale }: Props) {
  return (
    <main className="text-gray-800">
      {/* ── Hero ── */}
      <section className="relative h-[420px] w-full">
        <Image
          src="/images/taynguyen.webp"
          alt={content.hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70 flex flex-col items-center justify-center gap-4 px-4">
          <div className="inline-flex items-center gap-2 bg-lemon-500/20 border border-lemon-400/40 text-lemon-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-1">
            {content.hero.badge}
          </div>
          <h1 className="text-3xl md:text-5xl text-white font-bold text-center leading-tight max-w-3xl">
            {content.hero.h1}
          </h1>
          <p className="text-white/85 text-base md:text-lg text-center max-w-2xl">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <a
              href={`#${content.anchors.booking}`}
              className="bg-lemon-500 text-forest-700 font-bold px-7 py-3 rounded-full text-base hover:bg-lemon-400 transition hover:scale-105 shadow-lg"
            >
              {content.hero.bookCta}
            </a>
            <a
              href={`#${content.anchors.itineraries}`}
              className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3 rounded-full text-base hover:bg-white/20 transition"
            >
              {content.hero.itineraryCta}
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick answer + intro ── */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        {/* TL;DR — 30–50 word definitive answer for AI extractors */}
        <div
          className="bg-forest-50 border-l-4 border-forest-500 rounded-r-2xl px-6 py-5 mb-6"
          data-testid="tldr"
        >
          <p className="font-bold text-forest-700 text-base mb-1">
            {content.tldr.label}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            {content.tldr.body}
          </p>
        </div>

        {/* Price answer box */}
        <div className="bg-lemon-50 border-l-4 border-lemon-500 rounded-r-2xl px-6 py-5 mb-8">
          <p className="font-bold text-forest-700 text-base mb-1">
            {content.priceAnswer.label}
          </p>
          <p
            className="text-gray-700 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content.priceAnswer.bodyHtml }}
          />
        </div>

        <h2 className="text-3xl font-bold text-forest-600 mb-6">
          {content.intro.h2}
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
          {content.intro.paragraphsHtml.map((paragraph, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {content.intro.highlights.map((item) => (
            <div
              key={item.label}
              className="bg-forest-50 rounded-2xl p-5 text-center border border-forest-100"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-forest-700 text-sm">
                {item.label}
              </div>
              <div className="text-xs text-gray-500 mt-1">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Private car vs group tour ── */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-600 mb-3 text-center">
            {content.reasons.h2}
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            {content.reasons.lead}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.reasons.items.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <div className="shrink-0 w-7 h-7 rounded-full bg-lemon-100 flex items-center justify-center text-forest-600 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </div>
                  <div className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Itineraries ── */}
      <section id={content.anchors.itineraries} className="bg-forest-50 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-forest-600 mb-2 text-center">
            {content.itineraries.h2}
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            {content.itineraries.lead}
          </p>
          <div className="space-y-8">
            {content.itineraries.items.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-lemon-500 text-forest-700 text-xs font-bold px-3 py-1 rounded-full">
                      {tour.tag}
                    </span>
                    <h3 className="text-xl font-bold text-forest-700">
                      {tour.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm shrink-0">
                    <span className="text-gray-500">{tour.highlight}</span>
                    <span className="font-bold text-forest-600 text-base">
                      {tour.priceFrom}
                    </span>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <div className="space-y-3">
                    {tour.schedule.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="shrink-0 w-24 text-xs font-semibold text-moss-600 pt-0.5">
                          {step.time}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 text-sm">
                            {step.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-forest-600 text-center mb-2">
          {content.pricing.h2}
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm">
          {content.pricing.lead}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 shadow-sm text-sm">
            <thead className="bg-moss-100 text-moss-700">
              <tr>
                <th className="py-3 px-4 text-left">
                  {content.pricing.durationHeader}
                </th>
                {content.pricing.headers.map((header) => (
                  <th key={header.label} className="py-3 px-4 text-center">
                    {header.label}
                    <span className="block text-xs font-normal text-gray-500">
                      {header.sub}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {content.pricing.rows.map((row, i) => (
                <tr
                  key={row.duration}
                  className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="py-3 px-4 font-medium">{row.duration}</td>
                  {row.cells.map((cell, j) => (
                    <td key={j} className="py-3 px-4 text-center">
                      <div className="font-bold text-forest-600">
                        {cell.total}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {cell.perPerson}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 italic">
          {content.pricing.note}
        </p>

        <div className="mt-8 bg-forest-500 rounded-2xl p-7 text-center text-white">
          <h3 className="text-lg font-bold mb-2">{content.pricing.cta.h3}</h3>
          <p className="text-white/80 text-sm mb-4">{content.pricing.cta.body}</p>
          <a
            href={`#${content.anchors.booking}`}
            className="inline-block bg-lemon-500 text-forest-700 font-bold px-8 py-3 rounded-full hover:bg-lemon-400 transition hover:scale-105"
          >
            {content.pricing.cta.button}
          </a>
        </div>
      </section>

      {/* ── Inline booking form ── */}
      <section id={content.anchors.booking} className="max-w-2xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-forest-600 mb-2 text-center">
          {content.booking.h2}
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm">
          {content.booking.lead}
        </p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
          <TourBookingForm dict={bookingDict} locale={locale} />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-4xl mx-auto px-6 pb-14">
        <h2 className="text-2xl font-bold text-forest-600 mb-8 text-center">
          {content.faq.h2}
        </h2>
        <div className="space-y-4">
          {content.faq.items.map((faq) => (
            <details
              key={faq.q}
              className="group border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <summary className="flex justify-between items-center cursor-pointer px-5 py-4 bg-white hover:bg-forest-50 transition font-medium text-gray-800 text-[15px] list-none">
                <span>{faq.q}</span>
                <span className="text-forest-500 text-xl font-bold ml-4 group-open:rotate-45 transition-transform duration-200 shrink-0">
                  +
                </span>
              </summary>
              <div className="px-5 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed border-t border-gray-100">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Authoritative references (E-E-A-T + GEO citation signal) ── */}
      <section className="max-w-4xl mx-auto px-6 pb-14">
        <h2 className="text-xl font-bold text-forest-600 mb-4">
          {content.references.h2}
        </h2>
        <p className="text-gray-600 text-sm mb-4">{content.references.lead}</p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          {content.references.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-forest-600 hover:underline font-medium"
              >
                {item.text}
              </a>{" "}
              {item.note}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-forest-500 py-14 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          {content.finalCta.h2}
        </h2>
        <p className="text-white/80 text-base mb-2 max-w-xl mx-auto">
          {content.finalCta.body}
        </p>
        <p className="text-lemon-400 font-bold text-lg mb-7">
          {content.finalCta.address}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`#${content.anchors.booking}`}
            className="bg-lemon-500 text-forest-700 font-bold px-9 py-4 rounded-full text-lg hover:bg-lemon-400 transition hover:scale-105 shadow-lg"
          >
            {content.finalCta.bookButton}
          </a>
          <a
            href="tel:0941437070"
            className="bg-white/15 border-2 border-white/50 text-white font-semibold px-9 py-4 rounded-full text-lg hover:bg-white/25 transition"
          >
            {content.finalCta.callButton}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/70 text-sm">
          {content.finalCta.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-lemon-400 transition"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
