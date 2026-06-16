import React from "react";
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, publishedAt, _updatedAt, image, excerpt, body,
  "categories": categories[]->title
}`;

const RELATED_QUERY = `*[_type == "post" && slug.current != $slug && defined(slug.current)]
  {_id, title, slug, publishedAt, image, excerpt}`;

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const siteUrl = "https://www.dvdldaiduong.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    resolvedParams,
    options,
  );

  if (!post) {
    return {
      title: "Bài viết không tồn tại",
    };
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(630).auto("format").url()
    : null;

  const canonicalUrl = `${siteUrl}/tin-tuc/${resolvedParams.slug}`;

  return {
    title: post.title || "Tin Tức",
    description:
      post.excerpt ||
      "Khám phá hành trình du lịch cùng DVDL Đại Dương Ban Mê - chuyên tour nội địa, thuê xe đời mới.",
    keywords: [
      ...(post.categories || []),
      "DVDL Đại Dương Ban Mê",
      "du lịch Đắk Lắk",
      "cẩm nang du lịch Buôn Ma Thuột",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title || "Tin Tức | DVDL Đại Dương Ban Mê",
      description:
        post.excerpt ||
        "Chúng tôi mang đến trải nghiệm du lịch cá nhân hóa, an toàn, minh bạch và tận tâm.",
      url: canonicalUrl,
      locale: "vi_VN",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      images: [
        postImageUrl
          ? {
              url: postImageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            }
          : {
              url: "/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "DVDL Đại Dương Ban Mê",
            },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title || "Tin Tức | DVDL Đại Dương Ban Mê",
      description:
        post.excerpt ||
        "Cẩm nang du lịch Buôn Ma Thuột từ DVDL Đại Dương Ban Mê.",
      images: [postImageUrl || "/og-image.jpg"],
    },
  };
}

export default async function BaiVietPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const [post, allRelated] = await Promise.all([
    client.fetch<SanityDocument>(POST_QUERY, resolvedParams, options),
    client.fetch<SanityDocument[]>(RELATED_QUERY, resolvedParams, options),
  ]);
  const relatedPosts = pickRandom(allRelated, 4);

  if (!post) return notFound();

  const postImageUrl = post.image
    ? urlFor(post.image)
        ?.width(1600)
        .height(800)
        .quality(85)
        .auto("format")
        .url()
    : null;

  // JSON-LD Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || "",
    image: postImageUrl
      ? [urlFor(post.image)?.width(1200).height(630).url()]
      : [`${siteUrl}/og-image.jpg`],
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      "@id": `${siteUrl}/#business`,
      name: "DVDL Đại Dương Ban Mê",
      url: `${siteUrl}/gioi-thieu`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#business`,
      name: "DVDL Đại Dương Ban Mê",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo-light.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/tin-tuc/${resolvedParams.slug}`,
    },
  };

  // Custom components cho PortableText — heading, blockquote, list, ảnh trong body
  const portableTextComponents = {
    types: {
      image: ({ value }: { value: SanityImageSource & { alt?: string } }) => {
        const imgUrl = urlFor(value)
          ?.width(1400)
          .quality(85)
          .auto("format")
          .url();
        if (!imgUrl) return null;
        return (
          <div className="my-6">
            <Image
              src={imgUrl}
              alt={(value as { alt?: string }).alt || "Ảnh minh hoạ"}
              width={1400}
              height={788}
              sizes="(max-width: 768px) 100vw, 768px"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        );
      },
    },
    block: {
      h1: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-3xl font-bold text-forest-700 mt-8 mb-4">
          {children}
        </h2>
      ),
      h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-2xl font-bold text-forest-600 mt-7 mb-3">
          {children}
        </h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-xl font-semibold text-forest-600 mt-6 mb-2">
          {children}
        </h3>
      ),
      h4: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="text-lg font-semibold text-gray-800 mt-5 mb-2">
          {children}
        </h4>
      ),
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
      ),
      blockquote: ({ children }: { children?: React.ReactNode }) => (
        <blockquote className="border-l-4 border-forest-400 pl-4 italic text-gray-600 my-4">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: { children?: React.ReactNode }) => (
        <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
          {children}
        </ul>
      ),
      number: ({ children }: { children?: React.ReactNode }) => (
        <ol className="list-decimal list-inside space-y-1 mb-4 text-gray-700">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: { children?: React.ReactNode }) => (
        <li className="ml-4">{children}</li>
      ),
      number: ({ children }: { children?: React.ReactNode }) => (
        <li className="ml-4">{children}</li>
      ),
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-forest-500">
              Trang chủ
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/tin-tuc" className="hover:text-forest-500">
              Tin tức
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            className="text-gray-700 truncate max-w-[200px]"
            aria-current="page"
          >
            {post.title}
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-forest-600 mb-4">{post.title}</h1>
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
        {post.publishedAt && (
          <span>{new Date(post.publishedAt).toLocaleDateString("vi-VN")}</span>
        )}
        <span aria-hidden="true">·</span>
        <span>
          Bài viết bởi:{" "}
          <Link href="/gioi-thieu" className="text-forest-600 hover:underline font-medium">
            Đội ngũ DVDL Đại Dương Ban Mê
          </Link>
        </span>
      </div>

      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          width={1600}
          height={800}
          sizes="(max-width: 768px) 100vw, 768px"
          className="rounded-xl mb-6 w-full h-auto object-cover"
          priority
        />
      )}

      <article className="prose prose-sm md:prose-base prose-forest max-w-none">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </article>

      <div className="text-center mt-10">
        <h3 className="text-lg text-moss-500 mb-4">
          Bạn cần đặt xe hoặc báo giá?
        </h3>
        <Link
          href="/lien-he"
          className="inline-block bg-forest-500 text-lemon-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition hover:scale-105"
        >
          Liên hệ ngay
        </Link>
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-14 border-t pt-10">
          <h2 className="text-xl font-bold text-forest-600 mb-6">
            Bài viết liên quan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((related) => {
              const relatedImageUrl = related.image
                ? urlFor(related.image)?.width(600).height(360).auto("format").url()
                : null;
              return (
                <Link
                  key={related._id}
                  href={`/tin-tuc/${related.slug.current}`}
                  className="flex gap-4 group rounded-xl border p-3 hover:shadow-md transition-shadow bg-white"
                >
                  {relatedImageUrl ? (
                    <Image
                      src={relatedImageUrl}
                      alt={related.title}
                      width={120}
                      height={80}
                      className="w-[120px] h-[80px] object-cover rounded-lg flex-shrink-0"
                    />
                  ) : (
                    <div className="w-[120px] h-[80px] bg-gray-100 rounded-lg flex-shrink-0" />
                  )}
                  <div className="flex flex-col justify-center gap-1 min-w-0">
                    <p className="text-sm text-gray-500">
                      {related.publishedAt
                        ? new Date(related.publishedAt).toLocaleDateString("vi-VN")
                        : ""}
                    </p>
                    <h3 className="text-sm font-semibold text-forest-700 group-hover:text-forest-500 line-clamp-2 leading-snug">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
