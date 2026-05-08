import { type SanityDocument } from "next-sanity";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import Pagination from "@/components/Pagination";

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

export const metadata: Metadata = {
  title: "Tin Tức & Cẩm Nang Du Lịch",
  description:
    "Khám phá cẩm nang du lịch Buôn Ma Thuột - Đắk Lắk, mẹo thuê xe, kinh nghiệm tổ chức tour và sự kiện từ DVDL Đại Dương Ban Mê.",
  keywords: [
    "tin tức du lịch Đắk Lắk",
    "cẩm nang du lịch Buôn Ma Thuột",
    "kinh nghiệm thuê xe Đắk Lắk",
    "blog du lịch BMT",
    "tour Daklak",
    "DVDL Đại Dương Ban Mê",
  ],
  alternates: {
    canonical: "https://www.dvdldaiduong.com/tin-tuc",
  },
  openGraph: {
    title: "Tin Tức & Cẩm Nang Du Lịch | DVDL Đại Dương Ban Mê",
    description:
      "Khám phá cẩm nang du lịch Buôn Ma Thuột - Đắk Lắk, mẹo thuê xe, kinh nghiệm tour từ DVDL Đại Dương Ban Mê.",
    url: "https://www.dvdldaiduong.com/tin-tuc",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tin tức và cẩm nang du lịch DVDL Đại Dương Ban Mê",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tin Tức & Cẩm Nang Du Lịch | DVDL Đại Dương Ban Mê",
    description:
      "Cẩm nang du lịch Buôn Ma Thuột - Đắk Lắk từ DVDL Đại Dương Ban Mê.",
  },
};

export default async function TinTucPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, totalCount] = await Promise.all([
    client.fetch<SanityDocument[]>(POSTS_QUERY, { start, end }, options),
    client.fetch<number>(COUNT_QUERY, {}, options),
  ]);

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <main className="text-gray-800">
      {/* Hero Banner */}
      <section className="relative h-[350px] w-full">
        <Image
          src="/images/phongcanh.jpg"
          alt="Tin tức và cẩm nang du lịch Buôn Ma Thuột"
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

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/tin-tuc"
        />
      </section>
    </main>
  );
}
