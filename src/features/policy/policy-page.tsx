import type { Locale } from "@/lib/i18n/config";

/**
 * A legal/policy document: a title, a revision date and numbered sections.
 *
 * Section bodies are authored HTML rather than nested data. These pages are
 * prose with inline links and the odd <address> block — shredding them into
 * per-paragraph dictionary keys would bury the text and make a missing
 * paragraph indistinguishable from an intentional one. The content is written
 * in this repo, never user input, which is the same basis on which
 * src/lib/data/car-rental.ts renders its `bodyHtml`.
 */
export type PolicySection = {
  h2: string;
  bodyHtml: string;
};

export type PolicyContent = {
  h1: string;
  lastUpdated: string;
  sections: PolicySection[];
};

export type PolicyDocument = Record<Locale, PolicyContent>;

export function PolicyPage({ content }: { content: PolicyContent }) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold text-forest-600 mb-2">{content.h1}</h1>
      <p className="text-sm text-gray-500 mb-10">{content.lastUpdated}</p>

      {content.sections.map((section) => (
        <section key={section.h2} className="mb-8">
          <h2 className="text-xl font-semibold text-forest-500 mb-3">
            {section.h2}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: section.bodyHtml }} />
        </section>
      ))}
    </main>
  );
}
