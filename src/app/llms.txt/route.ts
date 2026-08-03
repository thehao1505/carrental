import { client } from "@/sanity/client";
import { carRentalData } from "@/lib/data";

const siteUrl = "https://www.dvdldaiduong.com";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "slug": slug.current,
  title
}`;

export const revalidate = 3600;

export async function GET() {
  let posts: { slug: string; title: string }[] = [];
  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch {
    // fallback to empty if Sanity unavailable
  }

  const unique = [
    ...new Map(carRentalData.map((item) => [item.slug, item])).values(),
  ];

  const lines: string[] = [
    `# DVDL Đại Dương Ban Mê`,
    ``,
    `> Dịch vụ cho thuê xe du lịch có tài xế tại Buôn Ma Thuột, Đắk Lắk. Xe 4, 7, 16, 29, 45 chỗ, limousine, xe giường nằm. Phục vụ sân bay, tour tham quan, đi tỉnh và liên tỉnh.`,
    `- [llms-full.txt](${siteUrl}/llms-full.txt): Phiên bản đầy đủ với bảng giá, mô tả xe, FAQ và tin tức`,
    ``,
    `## Trang chính`,
    ``,
    `- [Trang chủ](${siteUrl}/): Giới thiệu dịch vụ thuê xe du lịch tại Đắk Lắk`,
    `- [Bảng giá](${siteUrl}/bang-gia): Bảng giá thuê xe 2026 – sân bay, tour nội tỉnh và liên tỉnh`,
    `- [Dịch vụ thuê xe](${siteUrl}/thue-xe): Danh sách các dòng xe cho thuê`,
    `- [Thuê xe du lịch Đắk Lắk](${siteUrl}/thue-xe/du-lich-dak-lak): Landing page dịch vụ thuê xe du lịch Đắk Lắk`,
    `- [Tour Đắk Lắk](${siteUrl}/tour-dak-lak): Tour du lịch Đắk Lắk xe riêng có tài xế – 3 gói lịch trình từ 1.200.000đ/xe`,
    `- [Giới thiệu](${siteUrl}/gioi-thieu): Thông tin về công ty DVDL Đại Dương Ban Mê`,
    `- [Liên hệ](${siteUrl}/lien-he): Thông tin liên hệ và đặt xe`,
    ``,
    `## Dịch vụ thuê xe`,
    ``,
    ...unique.map(
      (item) => `- [${item.title}](${siteUrl}/thue-xe/${item.slug})`,
    ),
    ``,
    `## Tin tức & Hướng dẫn`,
    ``,
    ...posts.map((p) => `- [${p.title}](${siteUrl}/tin-tuc/${p.slug})`),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
