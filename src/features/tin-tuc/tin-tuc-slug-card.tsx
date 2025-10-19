"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/data";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: any;
  content: string;
  publishedAt: string;
}

export const BaiVietCard = () => {
  const params = useParams();
  const [article, setArticle] = useState<Article>();
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const getArticle = async () => {
    try {
      const response = await axios.get(
        `${config.url}/api/articles?filters[slug][$eq]=${params.slug}&populate=image`,
        {
          headers: {
            Authorization: `Bearer ${config.api_key}`,
          },
        }
      );

      const item = response.data?.data?.[0];
      if (!item) return notFound();

      setArticle(item);

      const imgUrl = item?.image?.[0]?.formats?.large?.url;
      const date = new Date(item?.publishedAt).toLocaleDateString("vi-VN");
      if (imgUrl) setImage(imgUrl);
      if (date) setDate(date);
    } catch (error) {
      console.error("Error fetching article:", error);
      return notFound();
    }
  };

  useEffect(() => {
    getArticle();
  }, [params.slug]);

  useEffect(() => {
    const dateString = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000
    ).toLocaleDateString("vi-VN");
    setDate(dateString);
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <Link
        href="/tin-tuc"
        className="text-sm text-forest-500 hover:underline mb-6 inline-block"
      >
        ← Quay lại Tin tức
      </Link>

      <h1 className="text-3xl font-bold text-forest-600 mb-4">
        {article?.title}
      </h1>
      <p className="text-sm text-gray-500 mb-6">{date}</p>
      {image && (
        <Image
          src={`${config.url}${image}` || ""}
          alt={article?.title || ""}
          width={800}
          height={400}
          className="rounded-xl mb-6 w-full h-auto object-cover"
          priority
        />
      )}
      <article className="prose prose-lg mx-auto max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {article?.content || ""}
        </ReactMarkdown>
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
    </main>
  );
};
