import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";

type PriceTable = Dictionary["pricing"]["tables"][number];

function PriceTable({ table }: { table: PriceTable }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-forest-600 mb-4">{table.h2}</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-200 shadow-sm">
          <thead className="bg-moss-100 text-moss-700">
            <tr>
              {table.headers.map((header) => (
                <th key={header} className="py-2 px-3 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {table.rows.map((row, i) => (
              <tr key={i} className="border-t">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="py-2 px-3 whitespace-nowrap text-center"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-600 mt-4 italic">{table.note}</p>
      </div>
    </div>
  );
}

type BangGiaCardProps = {
  dict: Dictionary["pricing"];
  contactHref: string;
};

export function BangGiaCard({ dict, contactHref }: BangGiaCardProps) {
  const lastTable = dict.tables[dict.tables.length - 1];

  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="relative h-[300px] w-full">
        <Image
          src="/images/daklak-museum.webp"
          alt={dict.hero.imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-4">
            {dict.hero.h1}
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 pt-12 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-forest-600">
            {dict.intro.h2}
          </h2>
          <p className="text-gray-700 mb-3">{dict.intro.lead}</p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 mb-4">
            {dict.intro.factors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
          <p className="mb-4">{dict.intro.example}</p>
          <p>{dict.intro.advice}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        {dict.tables.slice(0, -1).map((table) => (
          <PriceTable key={table.h2} table={table} />
        ))}

        {/* The last table carries the quote CTA underneath it. */}
        <div>
          <PriceTable table={lastTable} />
          <div className="mt-4">
            <Link
              href={contactHref}
              className="inline-block bg-forest-500 text-lemon-500 px-6 py-2.5 rounded-full text-base font-semibold hover:bg-forest-600 transition hover:scale-105"
            >
              {dict.quoteCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 space-y-4">
        <h2 className="text-2xl font-bold text-forest-600 mb-4">
          {dict.drivers.h2}
        </h2>
        {dict.drivers.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 space-y-4">
        <h2 className="text-2xl font-bold text-forest-600 mb-4">
          {dict.fleet.h2}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p>{dict.fleet.body}</p>
          </div>
          <div>
            <Image
              src="/images/hyundai-tucson.webp"
              alt={dict.fleet.imageAlt}
              width={500}
              height={300}
              className="rounded-xl shadow-md w-[500px] h-[200px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-16">
        <h2 className="text-2xl font-bold text-forest-600 mb-3">
          {dict.cta.h2}
        </h2>
        <p className="mb-6 text-gray-600">{dict.cta.body}</p>
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
