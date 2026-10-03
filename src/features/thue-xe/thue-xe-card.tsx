"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import type { CarRentalItem } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n/types";

type ThueXeSlugPageProps = {
  dict: Dictionary["carRentalDetail"];
  /** All vehicles for the current locale — used for the "related" strip. */
  items: CarRentalItem[];
  slug: string;
  /** Locale-correct hrefs, resolved by the page from src/lib/i18n/routes.ts. */
  backHref: string;
  contactHref: string;
  carRentalBasePath: string;
};

export function ThueXeSlugPage({
  dict,
  items,
  slug,
  backHref,
  contactHref,
  carRentalBasePath,
}: ThueXeSlugPageProps) {
  const xe = items.find((x) => x.slug === slug);

  const [relatedServices, setRelatedServices] = useState(
    items.filter((x) => x.slug !== slug).slice(0, 3),
  );

  useEffect(() => {
    const others = items.filter((x) => x.slug !== slug);
    const shuffled = [...others].sort(() => Math.random() - 0.5).slice(0, 3);
    setRelatedServices(shuffled);
  }, [items, slug]);

  if (!xe) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <Link href={backHref} className="text-sm text-forest-500 hover:underline mb-6 inline-block">
        {dict.back}
      </Link>

      <h1 className="text-3xl font-bold text-forest-600 mb-4">{xe.title}</h1>
      {typeof xe.tldr === "string" && xe.tldr.length > 0 && (
        <p
          className="text-base md:text-lg leading-relaxed text-gray-800 bg-lemon-50 border-l-4 border-forest-500 rounded-md px-4 py-3 mb-6"
          data-testid="tldr"
        >
          <strong className="text-forest-600">{dict.tldrLabel}</strong> {xe.tldr}
        </p>
      )}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-md mb-8">
        <Image src={xe.image} alt={xe.title} fill className="object-cover" priority />
      </div>

      <article
        className="prose prose-sm md:prose-base prose-forest max-w-none"
        dangerouslySetInnerHTML={{ __html: xe.content }}
      />

      <div className="text-center mt-10">
        <h3 className="text-lg text-moss-500 mb-4">{dict.ctaHeading}</h3>
        <Link
          href={contactHref}
          className="inline-block bg-forest-500 text-lemon-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition hover:scale-105"
        >
          {dict.ctaButton}
        </Link>
      </div>

      {relatedServices.length > 0 && (
        <section className="mt-14 border-t pt-10">
          <h2 className="text-xl font-bold text-forest-600 mb-6">{dict.relatedHeading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`${carRentalBasePath}/${related.slug}`}
                className="group rounded-xl border overflow-hidden hover:shadow-md transition-shadow bg-white"
              >
                <div className="relative w-full h-[150px]">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-forest-700 group-hover:text-forest-500 line-clamp-2 leading-snug">
                    {related.title}
                  </h3>
                  <span className="text-xs text-forest-500 mt-2 inline-block font-medium">
                    {dict.readMore}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
