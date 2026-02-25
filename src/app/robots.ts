import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/studio/"],
      },
    ],
    sitemap: "https://www.dvdldaiduong.com/sitemap.xml",
    host: "https://www.dvdldaiduong.com",
  };
}
