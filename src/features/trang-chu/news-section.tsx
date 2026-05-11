import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";

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

export async function NewsSection() {
  const posts = await client.fetch<NewsPost[]>(NEWS_QUERY, {}, options);

  return (
    <section className="bg-pale-500 w-full">
      <div className="max-w-6xl mx-auto px-6 py-12 text-forest-500">
        <h2 className="text-3xl font-bold text-forest-500 mb-10 text-center">
          <Link
            href="/tin-tuc"
            className="hover:text-forest-400 transition-all duration-300"
          >
            Tin Tức & Cẩm Nang Du Lịch
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
                href={`/tin-tuc/${post.slug.current}`}
                className="border rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    width={800}
                    height={480}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-[200px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center text-gray-400">
                    Chưa có ảnh
                  </div>
                )}
                <div className="p-5 space-y-2">
                  <span className="text-sm text-gray-500">
                    {post._createdAt
                      ? new Date(post._createdAt).toLocaleDateString("vi-VN")
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
                    Xem chi tiết →
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
