import { client } from "@/sanity/client";
import { getCarRentalData } from "@/lib/data";
import { carRentalUrl, siteUrl, url } from "@/lib/i18n/routes";

const LOCALE = "vi" as const;

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

  const vehicles = getCarRentalData(LOCALE);

  const lines: string[] = [
    `# DVDL Đại Dương Ban Mê`,
    ``,
    `> Dịch vụ cho thuê xe du lịch có tài xế tại Buôn Ma Thuột, Đắk Lắk. Xe 4, 7, 16, 29, 45 chỗ, limousine, xe giường nằm. Phục vụ sân bay, tour tham quan, đi tỉnh và liên tỉnh.`,
    `- [llms-full.txt](${siteUrl}/llms-full.txt): Phiên bản đầy đủ với bảng giá, mô tả xe, FAQ và tin tức`,
    `- [English version](${siteUrl}/en/llms.txt): Bản tiếng Anh`,
    ``,
    `## Trang chính`,
    ``,
    `- [Trang chủ](${siteUrl}/): Giới thiệu dịch vụ thuê xe du lịch tại Đắk Lắk`,
    `- [Bảng giá](${url("pricing", LOCALE)}): Bảng giá thuê xe 2026 – sân bay, tour nội tỉnh và liên tỉnh`,
    `- [Dịch vụ thuê xe](${url("carRental", LOCALE)}): Danh sách các dòng xe cho thuê`,
    `- [Thuê xe du lịch Đắk Lắk](${url("carRentalTravel", LOCALE)}): Landing page dịch vụ thuê xe du lịch Đắk Lắk`,
    `- [Thuê xe doanh nghiệp](${url("carRentalCorporate", LOCALE)}): Hợp đồng theo tháng/quý/năm, xuất hóa đơn VAT 10%, đưa đón nhân viên, hội nghị`,
    `- [Tour Đắk Lắk](${url("tours", LOCALE)}): Tour du lịch Đắk Lắk xe riêng có tài xế – 3 gói lịch trình từ 1.200.000đ/xe`,
    `- [Giới thiệu](${url("about", LOCALE)}): Thông tin về công ty DVDL Đại Dương Ban Mê`,
    `- [Liên hệ](${url("contact", LOCALE)}): Thông tin liên hệ và đặt xe`,
    ``,
    `## Dịch vụ thuê xe`,
    ``,
    ...vehicles.map(
      (item) => `- [${item.title}](${carRentalUrl(item.slug, LOCALE)})`,
    ),
    ``,
    `## Chính sách`,
    ``,
    `- [Chính sách bảo mật](${url("privacyPolicy", LOCALE)}): Bảo vệ thông tin cá nhân của khách hàng theo Nghị định 13/2023/NĐ-CP`,
    `- [Chính sách vận chuyển](${url("shippingPolicy", LOCALE)}): Quy định đặt xe, hủy chuyến, bồi thường và trách nhiệm các bên`,
    ``,
    `## Tin tức & Hướng dẫn`,
    ``,
    ...posts.map((p) => `- [${p.title}](${url("news", LOCALE)}/${p.slug})`),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
