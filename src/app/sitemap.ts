import { client } from "@/sanity/client";
import type { MetadataRoute } from "next";

const siteUrl = "https://www.dvdldaiduong.com";

const POSTS_SITEMAP_QUERY = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current,
  publishedAt,
  _updatedAt
}`;

// Fetch car rental data từ static lib (giữ nguyên để tương thích)
async function getCarRentalUrls(): Promise<MetadataRoute.Sitemap> {
  try {
    const { carRentalData } = await import("@/lib/data");
    const unique = [
      ...new Map(carRentalData.map((item) => [item.slug, item])).values(),
    ];
    return unique.map((item) => ({
      url: `${siteUrl}/thue-xe/${item.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString().split("T")[0];

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/bang-gia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/gioi-thieu`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/lien-he`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/tin-tuc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/thue-xe`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tour-dak-lak`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/thue-xe-du-lich-dak-lak`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Fetch bài viết từ Sanity CMS
  let postUrls: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch<
      { slug: string; publishedAt?: string; _updatedAt?: string }[]
    >(POSTS_SITEMAP_QUERY, {}, { next: { revalidate: 3600 } });

    postUrls = posts.map((post) => ({
      url: `${siteUrl}/tin-tuc/${post.slug}`,
      lastModified: post._updatedAt
        ? new Date(post._updatedAt).toISOString().split("T")[0]
        : post.publishedAt
        ? new Date(post.publishedAt).toISOString().split("T")[0]
        : now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    // fallback: không crash nếu Sanity không khả dụng
  }

  const carRentalUrls = await getCarRentalUrls();

  return [...staticUrls, ...postUrls, ...carRentalUrls];
}
