import React from "react";
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);

  return {
    title: post?.title
      ? `${post.title} | DVDL Đại Dương Ban Mê`
      : "Tin Tức | DVDL Đại Dương Ban Mê",
    description:
      post?.excerpt ||
      "Khám phá hành trình du lịch cùng DVDL Đại Dương Ban Mê - chuyên tour nội địa, thuê xe đời mới.",
    openGraph: {
      title: post?.title || "Tin Tức | DVDL Đại Dương Ban Mê",
      description:
        post?.excerpt ||
        "Chúng tôi mang đến trải nghiệm du lịch cá nhân hóa, an toàn, minh bạch và tận tâm.",
      images: [
        {
          url: "/logo-light.png",
          width: 800,
          height: 600,
          alt: "Logo DVDL Đại Dương Ban Mê",
        },
      ],
      type: "article",
    },
  };
}

export default async function BaiVietPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);

  if (!post) return notFound();

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(800).height(400).url()
    : null;

  // Custom components cho PortableText — heading, blockquote, list, ảnh trong body
  const portableTextComponents = {
    types: {
      image: ({ value }: { value: SanityImageSource & { alt?: string } }) => {
        const imgUrl = urlFor(value)?.width(800).url();
        if (!imgUrl) return null;
        return (
          <div className="my-6">
            <Image
              src={imgUrl}
              alt={(value as { alt?: string }).alt || "Ảnh minh hoạ"}
              width={800}
              height={450}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        );
      },
    },
    block: {
      h1: ({ children }: { children?: React.ReactNode }) => (
        <h1 className="text-3xl font-bold text-forest-700 mt-8 mb-4">{children}</h1>
      ),
      h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-2xl font-bold text-forest-600 mt-7 mb-3">{children}</h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-xl font-semibold text-forest-600 mt-6 mb-2">{children}</h3>
      ),
      h4: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="text-lg font-semibold text-gray-800 mt-5 mb-2">{children}</h4>
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
        <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">{children}</ul>
      ),
      number: ({ children }: { children?: React.ReactNode }) => (
        <ol className="list-decimal list-inside space-y-1 mb-4 text-gray-700">{children}</ol>
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
      <Link href="/tin-tuc" className="text-sm text-forest-500 hover:underline mb-6 inline-block">
        ← Quay lại Tin tức
      </Link>

      <h1 className="text-3xl font-bold text-forest-600 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString("vi-VN")
          : ""}
      </p>

      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-xl mb-6 w-full h-auto object-cover"
        />
      )}

      <article className="prose prose-sm md:prose-base prose-forest max-w-none">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </article>

      <div className="text-center mt-10">
        <h3 className="text-lg text-moss-500 mb-4">Bạn cần đặt xe hoặc báo giá?</h3>
        <Link
          href="/lien-he"
          className="inline-block bg-forest-500 text-lemon-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition hover:scale-105"
        >
          Liên hệ ngay
        </Link>
      </div>
    </main>
  );
}
