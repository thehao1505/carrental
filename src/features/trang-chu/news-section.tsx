import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
import { intlLocale, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type NewsPost = {
  _id: string;
  title: string;
  slug: { current: string };
  _createdAt: string;
  image?: SanityImageSource;
  excerpt?: string;
};

const NEWS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(_createdAt desc)[0...6]{_id, title, slug, _createdAt, image, excerpt}`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

type NewsSectionProps = {
  dict: Dictionary["newsSection"];
  locale: Locale;
  /** Base path of the news index, e.g. /tin-tuc. */
  basePath: string;
};

export async function NewsSection({ dict, locale, basePath }: NewsSectionProps) {
  const posts = await client.fetch<NewsPost[]>(NEWS_QUERY, {}, options);

  return (
    <section className="bg-pale-500 w-full">
      <div className="px-5 py-20 md:px-10 md:py-28 xl:px-30 text-forest-500">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-forest-500 mb-12">
          <Link
            href={basePath}
            className="underline-offset-8 decoration-lemon-600 decoration-4 hover:underline"
          >
            {dict.heading}
          </Link>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const imageUrl = post.image
              ? urlFor(post.image)?.width(800).height(480).auto("format").url()
              : null;

            return (
              <Link
                key={post._id}
                href={`${basePath}/${post.slug.current}`}
                className="group rounded-2xl overflow-hidden bg-white shadow-[0_1px_2px_rgb(10_60_35/0.06),0_8px_24px_-12px_rgb(10_60_35/0.18)] hover:shadow-[0_2px_4px_rgb(10_60_35/0.08),0_16px_32px_-12px_rgb(10_60_35/0.28)] transition-shadow duration-300"
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    width={800}
                    height={480}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                    className="w-full h-[200px] object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center text-gray-600">
                    {dict.noImage}
                  </div>
                )}
                <div className="p-5 space-y-2">
                  <span className="text-sm text-gray-600">
                    {post._createdAt
                      ? new Date(post._createdAt).toLocaleDateString(intlLocale[locale])
                      : ""}
                  </span>
                  <h2 className="text-lg font-semibold text-forest-600">
                    {post.title?.length > 60
                      ? post.title.slice(0, 55) + "..."
                      : post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-gray-600">
                      {post.excerpt.length > 140
                        ? post.excerpt.slice(0, 137) + "..."
                        : post.excerpt}
                    </p>
                  )}
                  <span className="inline-block text-forest-500 text-sm font-medium hover:underline mt-2">
                    {dict.readMore}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
