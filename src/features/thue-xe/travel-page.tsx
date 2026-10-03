import Image from "next/image";
import Link from "next/link";

/**
 * The Dak Lak travel rental landing page.
 *
 * Layout lives here once; the words live in
 * src/app/[locale]/car-rental/dak-lak-travel/content.ts, one entry per locale.
 * `*Html` fields are authored rich text with inline <strong> emphasis — repo
 * content, never user input, on the same basis as src/lib/data/car-rental.ts.
 */
export type TravelContent = {
  hero: {
    imageAlt: string;
    h1: string;
    subtitleHtml: string;
    callCta: string;
    quoteCta: string;
    quoteHref: string;
  };
  tldr: { label: string; body: string };
  intro: {
    h2: string;
    paragraphsHtml: string[];
    highlights: { icon: string; label: string; sub: string }[];
  };
  destinations: {
    h2: string;
    lead: string;
    items: { name: string; km: string; note: string }[];
  };
  pricing: {
    h2: string;
    kmTable: TableBlock;
    routeTable: TableBlock;
    cta: { h3: string; body: string; button: string };
  };
  whyUs: { h2: string; items: { title: string; desc: string }[] };
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
    callButton: string;
    quoteButton: string;
    quoteHref: string;
    links: { href: string; text: string }[];
  };
};

type TableBlock = {
  h3: string;
  headers: string[];
  rows: string[][];
  note: string;
};

function PriceTable({ table }: { table: TableBlock }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-forest-600 mb-4">{table.h3}</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-200 shadow-sm text-sm">
          <thead className="bg-moss-100 text-moss-700">
            <tr>
              {table.headers.map((header, i) => (
                <th
                  key={header}
                  className={`py-3 px-4 ${i === 0 ? "text-left" : "text-center"}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {table.rows.map((row, i) => (
              <tr
                key={i}
                className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`py-2.5 px-4 ${j === 0 ? "font-medium text-left" : "text-center"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-3 italic">{table.note}</p>
      </div>
    </div>
  );
}

export function TravelPage({ content }: { content: TravelContent }) {
  return (
    <main className="text-gray-800">
      {/* ── Hero ── */}
      <section className="relative h-[380px] w-full">
        <Image
          src="/images/thue-xe-7-cho.webp"
          alt={content.hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4 px-4">
          <h1 className="text-3xl md:text-5xl text-white font-bold text-center leading-tight max-w-3xl">
            {content.hero.h1}
          </h1>
          <p
            className="text-white/90 text-base md:text-lg text-center max-w-2xl"
            dangerouslySetInnerHTML={{ __html: content.hero.subtitleHtml }}
          />
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <a
              href="tel:0941437070"
              className="bg-lemon-500 text-forest-600 font-bold px-7 py-3 rounded-full text-base hover:bg-lemon-400 transition hover:scale-105"
            >
              {content.hero.callCta}
            </a>
            <Link
              href={content.hero.quoteHref}
              className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3 rounded-full text-base hover:bg-white/20 transition"
            >
              {content.hero.quoteCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ── TL;DR (30–50 word definitive answer for AI extractors) ── */}
      <section className="max-w-5xl mx-auto px-6 pt-10">
        <div
          className="bg-forest-50 border-l-4 border-forest-500 rounded-r-2xl px-6 py-5"
          data-testid="tldr"
        >
          <p className="font-bold text-forest-700 text-base mb-1">
            {content.tldr.label}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            {content.tldr.body}
          </p>
        </div>
      </section>

      {/* ── Service introduction ── */}
      <section className="max-w-5xl mx-auto px-6 py-14">
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

      {/* ── Destinations ── */}
      <section className="bg-forest-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-600 mb-2 text-center">
            {content.destinations.h2}
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm">
            {content.destinations.lead}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {content.destinations.items.map((dest) => (
              <div
                key={dest.name}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="font-semibold text-forest-700 text-sm leading-snug">
                  {dest.name}
                </div>
                <div className="text-xs text-moss-500 font-medium mt-1">
                  {dest.km}
                </div>
                <div className="text-xs text-gray-500 mt-1">{dest.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price tables ── */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <h2 className="text-3xl font-bold text-forest-600 text-center">
          {content.pricing.h2}
        </h2>

        <PriceTable table={content.pricing.kmTable} />
        <PriceTable table={content.pricing.routeTable} />

        <div className="bg-forest-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">{content.pricing.cta.h3}</h3>
          <p className="text-white/85 text-sm mb-5">{content.pricing.cta.body}</p>
          <a
            href="tel:0941437070"
            className="inline-block bg-lemon-500 text-forest-600 font-bold px-8 py-3 rounded-full hover:bg-lemon-400 transition hover:scale-105"
          >
            {content.pricing.cta.button}
          </a>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-600 mb-8 text-center">
            {content.whyUs.h2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px]">
            {content.whyUs.items.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <div className="text-forest-500 text-xl font-bold mt-0.5">✓</div>
                <div>
                  <div className="font-semibold text-gray-800">{item.title}</div>
                  <div className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-4xl mx-auto px-6 py-14">
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

      {/* ── Closing CTA ── */}
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
            href="tel:0941437070"
            className="bg-lemon-500 text-forest-600 font-bold px-9 py-4 rounded-full text-lg hover:bg-lemon-400 transition hover:scale-105 shadow-lg"
          >
            {content.finalCta.callButton}
          </a>
          <Link
            href={content.finalCta.quoteHref}
            className="bg-white/15 border-2 border-white/50 text-white font-semibold px-9 py-4 rounded-full text-lg hover:bg-white/25 transition"
          >
            {content.finalCta.quoteButton}
          </Link>
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
