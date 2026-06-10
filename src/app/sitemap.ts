import { execSync } from "node:child_process";
import { client } from "@/sanity/client";
import type { MetadataRoute } from "next";

const siteUrl = "https://www.dvdldaiduong.com";

const POSTS_SITEMAP_QUERY = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current,
  publishedAt,
  _updatedAt
}`;

const repoRoot = process.cwd();
const dateCache = new Map<string, string | null>();

// Returns YYYY-MM-DD of the most recent commit touching any of `paths`, or null
// if git is unavailable (e.g. ISR revalidation on a serverless runtime without
// .git). Memoized so multiple routes that share a source file only shell out once.
function gitLastModified(paths: string[]): string | null {
  const key = paths.join("|");
  if (dateCache.has(key)) return dateCache.get(key) ?? null;
  try {
    const args = paths.map((p) => JSON.stringify(p)).join(" ");
    const out = execSync(`git log -1 --format=%cs -- ${args}`, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const result = /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
    dateCache.set(key, result);
    return result;
  } catch {
    dateCache.set(key, null);
    return null;
  }
}

// Per-route source files + a fallback date that should be bumped manually when
// the route's content materially changes. Fallbacks fire when git isn't
// available (runtime regen on serverless); during `next build` real git dates
// take precedence.
const STATIC_ROUTES: Array<{
  path: string;
  files: string[];
  fallback: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}> = [
  {
    path: "",
    files: ["src/app/(trang-chu)"],
    fallback: "2026-06-07",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/bang-gia",
    files: ["src/app/bang-gia"],
    fallback: "2026-06-08",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/gioi-thieu",
    files: ["src/app/gioi-thieu"],
    fallback: "2026-06-08",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/lien-he",
    files: ["src/app/lien-he"],
    fallback: "2026-05-08",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/tin-tuc",
    files: ["src/app/tin-tuc"],
    fallback: "2026-06-08",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/thue-xe",
    files: ["src/app/thue-xe", "src/lib/data/car-rental.ts"],
    fallback: "2026-06-09",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/tour-dak-lak",
    files: ["src/app/tour-dak-lak"],
    fallback: "2026-06-07",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/thue-xe/du-lich-dak-lak",
    files: ["src/app/thue-xe/du-lich-dak-lak"],
    fallback: "2026-06-08",
    changeFrequency: "monthly",
    priority: 0.85,
  },
];

const CAR_RENTAL_DATA_FILE = "src/lib/data/car-rental.ts";
const CAR_RENTAL_FALLBACK = "2026-06-09";

function toYmd(value: string | undefined): string | null {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().split("T")[0];
}

async function getCarRentalUrls(): Promise<MetadataRoute.Sitemap> {
  try {
    const { carRentalData } = await import("@/lib/data");
    const unique = [
      ...new Map(carRentalData.map((item) => [item.slug, item])).values(),
    ];
    const lastModified =
      gitLastModified([CAR_RENTAL_DATA_FILE]) ?? CAR_RENTAL_FALLBACK;
    return unique.map((item) => ({
      url: `${siteUrl}/thue-xe/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: gitLastModified(route.files) ?? route.fallback,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let postUrls: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch<
      { slug: string; publishedAt?: string; _updatedAt?: string }[]
    >(POSTS_SITEMAP_QUERY, {}, { next: { revalidate: 3600 } });

    postUrls = posts.map((post) => ({
      url: `${siteUrl}/tin-tuc/${post.slug}`,
      lastModified:
        toYmd(post._updatedAt) ??
        toYmd(post.publishedAt) ??
        new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    // fallback: don't crash if Sanity is unavailable
  }

  const carRentalUrls = await getCarRentalUrls();

  return [...staticUrls, ...postUrls, ...carRentalUrls];
}
