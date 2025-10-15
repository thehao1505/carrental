// app/sitemap.ts
import { articles, carRentalData } from "@/lib/data";
import type { MetadataRoute } from "next"; // Sử dụng 'import type' cho an toàn kiểu

// Hàm chuyển đổi ngày từ 'dd/mm/yyyy' sang 'YYYY-MM-DD'
function formatDate(dateString: string): string {
  const [day, month, year] = dateString.split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.dvdldaiduong.com";

  const uniqueArticles = [
    ...new Map(articles.map((item) => [item.slug, item])).values(),
  ];

  const articleUrls: MetadataRoute.Sitemap = uniqueArticles.map((article) => ({
    url: `${siteUrl}/tin-tuc/${article.slug}`,
    lastModified: formatDate(article.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const uniqueCarRentalArticles = [
    ...new Map(carRentalData.map((item) => [item.slug, item])).values(),
  ];

  const date = new Date().toISOString();

  const carRentalUrls: MetadataRoute.Sitemap = uniqueCarRentalArticles.map(
    (article) => ({
      url: `${siteUrl}/thue-xe/${article.slug}`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/bang-gia`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/gioi-thieu`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/lien-he`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tin-tuc`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  return [...staticUrls, ...articleUrls, ...carRentalUrls];
}
