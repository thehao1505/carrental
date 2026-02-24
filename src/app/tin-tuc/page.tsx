import { type SanityDocument } from "next-sanity";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, excerpt}`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const metadata: Metadata = {
  title: "Tin Tức | DVDL Đại Dương Ban Mê",
  description:
    "Khám phá hành trình du lịch cùng DVDL Đại Dương Ban Mê - chuyên tour nội địa, thuê xe đời mới.",
  keywords: [
    "du lịch Buôn Ma Thuột",
    "thuê xe du lịch",
    "DVDL Đại Dương Ban Mê",
    "tour Daklak",
    "tour riêng BMT",
    "tổ chức sự kiện Đắk Lắk",
    "dịch vụ du lịch Daklak",
  ],
  openGraph: {
    title: "Tin Tức | DVDL Đại Dương Ban Mê",
    description:
      "Chúng tôi mang đến trải nghiệm du lịch cá nhân hóa, an toàn, minh bạch và tận tâm.",
    images: [
      {
        url: "/logo-light.png",
        width: 800,
        height: 600,
        alt: "Logo DVDL Đại Dương Ban Mê",
      },
    ],
    type: "website",
  },
};

export default async function TinTucPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="text-gray-800">
      {/* Hero Banner */}
      <section className="relative h-[350px] w-full">
        <Image
          src="/images/phongcanh.jpg"
          alt="Giới thiệu công ty du lịch"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-4">
            Tin Tức &amp; Cẩm Nang Du Lịch
          </h1>
        </div>
      </section>

      {/* Danh sách bài viết */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const imageUrl = post.image
              ? urlFor(post.image)?.width(800).height(480).auto("format").url()
              : null;

            return (
              <Link
                key={post._id}
                href={`/tin-tuc/${post.slug.current}`}
                className="border rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    width={800}
                    height={480}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-[200px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center text-gray-400">
                    Chưa có ảnh
                  </div>
                )}
                <div className="p-5 space-y-2">
                  <span className="text-sm text-gray-500">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("vi-VN")
                      : ""}
                  </span>
                  <h2 className="text-lg font-semibold text-forest-600">
                    {post.title?.length > 60
                      ? post.title.slice(0, 50) + "..."
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
      </section>
    </main>
  );
}
