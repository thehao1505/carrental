import Image from "next/image";
import Link from "next/link";

/**
 * The corporate rental landing page.
 *
 * Layout lives here once; the words live in
 * src/app/[locale]/car-rental/corporate/content.ts, one entry per locale, where
 * the internal links are resolved from the route registry.
 */
export type CorporateContent = {
  hero: { imageAlt: string; h1: string; subtitle: string };
  /** Authored rich text with inline <strong>; repo content, never user input. */
  tldrHtml: string;
  useCases: { h2: string; items: { title: string; body: string }[] };
  advantages: { h2: string; items: { title: string; body: string }[] };
  process: { h2: string; steps: { title: string; body: string }[] };
  faq: { h2: string; items: { q: string; a: string }[] };
  cta: {
    h2: string;
    /** Inline <a href="tel:…"> link, so authored as HTML. */
    bodyHtml: string;
    primary: string;
    secondary: string;
    primaryHref: string;
  };
  related: {
    h2: string;
    items: { href: string; text: string; note: string }[];
  };
};

export function CorporatePage({ content }: { content: CorporateContent }) {
  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="relative h-[380px] w-full">
        <Image
          src="/images/thue-xe-16-cho.webp"
          alt={content.hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
            {content.hero.h1}
          </h1>
          <p className="max-w-2xl text-center text-base md:text-lg">
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-green-50 border-l-4 border-forest-500 p-5 rounded-r-lg">
          <p
            className="text-sm md:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content.tldrHtml }}
          />
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-forest-600 text-center mb-8">
          {content.useCases.h2}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.useCases.items.map((item) => (
            <div
              key={item.title}
              className="bg-white border rounded-xl p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-forest-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* B2B advantages */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-600 text-center mb-8">
            {content.advantages.h2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {content.advantages.items.map((item) => (
              <div key={item.title} className="bg-white p-5 rounded-xl">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-forest-600 text-center mb-8">
          {content.process.h2}
        </h2>
        <ol className="space-y-4 text-sm md:text-base">
          {content.process.steps.map((step, i) => (
            <li key={step.title} className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-500 text-white font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <strong>{step.title}</strong>
                {step.body}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-600 text-center mb-8">
            {content.faq.h2}
          </h2>
          <div className="space-y-3">
            {content.faq.items.map((item) => (
              <details key={item.q} className="bg-white rounded-lg p-4 border">
                <summary className="font-semibold text-forest-700 cursor-pointer">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-forest-600 mb-4">
          {content.cta.h2}
        </h2>
        <p
          className="text-gray-700 mb-6"
          dangerouslySetInnerHTML={{ __html: content.cta.bodyHtml }}
        />
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={content.cta.primaryHref}
            className="bg-forest-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-forest-600 transition"
          >
            {content.cta.primary}
          </Link>
          <a
            href="tel:+84941437070"
            className="bg-white border border-forest-500 text-forest-600 px-6 py-3 rounded-lg font-semibold hover:bg-forest-50 transition"
          >
            {content.cta.secondary}
          </a>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-semibold text-forest-600 mb-4">
          {content.related.h2}
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          {content.related.items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-forest-500 hover:underline">
                {item.text}
              </Link>
              {item.note ? ` ${item.note}` : null}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
