// Content and metadata for the en news listing, lifted verbatim from the
// old src/app/en/news/page.tsx route.
//
// Article bodies come from Sanity and exist only in Vietnamese, so `news` sits
// in `hreflangExcluded` and these two files are not translations of each other.
// See F4-F6 in output/I18N-TODO.md.

import { type SanityDocument } from "next-sanity";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import Pagination from "@/components/Pagination";
import { generateBreadcrumb } from "@/lib/schema";
import {
  alternates,
  getDictionary,
  intlLocale,
  ogLocale,
  routePaths,
  siteUrl,
} from "@/lib/i18n";

const LOCALE = "en" as const;
const POSTS_PER_PAGE = 9;

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[$start...$end]{_id, title, slug, publishedAt, image, excerpt}`;

const COUNT_QUERY = `count(*[_type == "post" && defined(slug.current)])`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const BASE_PATH = routePaths.news.en;

const canonicalForPage = (page: number) =>
  page > 1
    ? `${siteUrl}${BASE_PATH}?page=${page}`
    : `${siteUrl}${BASE_PATH}`;

export async function buildMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1);

  // alternates() deliberately returns no hreflang for `news` — this page shares
  // the Vietnamese article list rather than translating it. See
  // `hreflangExcluded` in src/lib/i18n/routes.ts.
  const base = alternates("news", LOCALE);

  return {
    title: "News & Travel Guides",
    description:
      "Travel guides for Buon Ma Thuot and Dak Lak, car rental tips and tour know-how from DVDL Dai Duong Ban Me. Articles are published in Vietnamese.",
    keywords: [
      "Dak Lak travel news",
      "Buon Ma Thuot travel guide",
      "Dak Lak car rental tips",
      "BMT travel blog",
      "Daklak tours",
      "DVDL Dai Duong Ban Me",
    ],
    alternates: { ...base, canonical: canonicalForPage(currentPage) },
    openGraph: {
      title: "News & Travel Guides | DVDL Dai Duong Ban Me",
      description:
        "Travel guides for Buon Ma Thuot and Dak Lak, car rental tips and tour know-how. Articles are published in Vietnamese.",
      url: canonicalForPage(currentPage),
      locale: ogLocale[LOCALE],
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "DVDL Dai Duong Ban Me news and travel guides",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "News & Travel Guides | DVDL Dai Duong Ban Me",
      description:
        "Travel guides for Buon Ma Thuot and Dak Lak from DVDL Dai Duong Ban Me.",
    },
  };
}

export default async function Content({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const dict = await getDictionary(LOCALE);
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, totalCount] = await Promise.all([
    client.fetch<SanityDocument[]>(POSTS_QUERY, { start, end }, options),
    client.fetch<number>(COUNT_QUERY, {}, options),
  ]);

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  // Only a breadcrumb here. The Blog and ItemList entities are declared once, on
  // the Vietnamese /tin-tuc, and re-declaring them under the same @id from a
  // second URL would put two conflicting definitions of one entity in the graph.
  const breadcrumbSchema = generateBreadcrumb([
    { name: "Home", url: `${siteUrl}/en` },
    { name: "News", url: `${siteUrl}${BASE_PATH}` },
  ]);

  return (
    <main className="text-gray-800">
      {currentPage > 1 && (
        <link rel="prev" href={canonicalForPage(currentPage - 1)} />
      )}
      {currentPage < totalPages && (
        <link rel="next" href={canonicalForPage(currentPage + 1)} />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="relative h-[350px] w-full">
        <Image
          src="/images/phongcanh.webp"
          alt="News and travel guides for Buon Ma Thuot"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-4">
            News &amp; Travel Guides
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* Say plainly what the reader is about to get, rather than letting them
            click through to an unexpected language. */}
        <div className="bg-lemon-50 border-l-4 border-lemon-500 rounded-r-xl px-5 py-4 mb-10 text-sm text-gray-700">
          These articles are written in Vietnamese. For anything you need in
          English, call us on{" "}
          <a
            href="tel:0941437070"
            className="text-forest-600 font-semibold hover:underline"
          >
            0941 437 070
          </a>{" "}
          — we are happy to help.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const imageUrl = post.image
              ? urlFor(post.image)?.width(800).height(480).auto("format").url()
              : null;

            return (
              <Link
                key={post._id}
                // The articles themselves only exist in Vietnamese.
                href={`${routePaths.news.vi}/${post.slug.current}`}
                hrefLang="vi"
                className="border rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    width={800}
                    height={480}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                    className="w-full h-[200px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
                <div className="p-5 space-y-2">
                  <span className="text-sm text-gray-500">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString(
                          intlLocale[LOCALE],
                        )
                      : ""}
                  </span>
                  {/* lang="vi" so screen readers and search engines know this
                      run of text is Vietnamese inside an English page. */}
                  <h2 className="text-lg font-semibold text-forest-600" lang="vi">
                    {post.title?.length > 60
                      ? post.title.slice(0, 50) + "..."
                      : post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-gray-600" lang="vi">
                      {post.excerpt.length > 140
                        ? post.excerpt.slice(0, 137) + "..."
                        : post.excerpt}
                    </p>
                  )}
                  <span className="inline-block text-forest-500 text-sm font-medium hover:underline mt-2">
                    Read more →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <Pagination
          dict={dict.pagination}
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={BASE_PATH}
        />
      </section>
    </main>
  );
}
