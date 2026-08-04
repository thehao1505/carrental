import { client } from "@/sanity/client";
import { carRentalData } from "@/lib/data";

const siteUrl = "https://www.dvdldaiduong.com";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...12] {
  "slug": slug.current,
  title,
  excerpt,
  publishedAt
}`;

export const revalidate = 3600;

export async function GET() {
  let posts: {
    slug: string;
    title: string;
    excerpt?: string;
    publishedAt?: string;
  }[] = [];
  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch {
    // Sanity unavailable – ship without blog section
  }

  const vehicles = [
    ...new Map(carRentalData.map((item) => [item.slug, item])).values(),
  ];

  const sections: string[] = [];

  sections.push(
    `# DVDL Đại Dương Ban Mê — Thuê xe & Tour Đắk Lắk`,
    ``,
    `> Dịch vụ cho thuê xe du lịch có tài xế và tour nội địa tại Buôn Ma Thuột, Đắk Lắk (Tây Nguyên, Việt Nam). Hoạt động từ 2018.`,
    ``,
    `**Website:** ${siteUrl}`,
    `**Hotline / Zalo:** 0941 437 070 (+84941437070)`,
    `**Email:** dvdldaiduong@gmail.com`,
    `**Địa chỉ:** 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk, Việt Nam`,
    `**Giờ phục vụ:** 06:00 – 22:00, 7 ngày/tuần`,
    `**Khu vực phục vụ:** Buôn Ma Thuột, toàn tỉnh Đắk Lắk, các tỉnh Tây Nguyên (Gia Lai, Kon Tum, Lâm Đồng) và liên tỉnh.`,
    ``,
    `## Dịch vụ chính`,
    ``,
    `- Thuê xe có tài xế: 4, 7, 16, 29, 45 chỗ và limousine`,
    `- Tour du lịch Đắk Lắk: 1 ngày, 2 ngày 1 đêm, 3 ngày 2 đêm — xe riêng có tài xế`,
    `- Đưa đón sân bay Buôn Ma Thuột (BMV)`,
    `- Thuê xe theo hợp đồng dài hạn (đưa đón học sinh, công nhân, nhân viên doanh nghiệp)`,
    `- Tổ chức team building và sự kiện`,
    ``,
    `## Bảng giá thuê xe theo ngày (VND)`,
    ``,
    `| Loại xe | Giá từ | Giá đến | Phù hợp |`,
    `| --- | --- | --- | --- |`,
    `| Xe 4 chỗ | 800.000 | 1.500.000 | Cá nhân, gia đình 1–3 người |`,
    `| Xe 7 chỗ | 1.100.000 | 2.200.000 | Nhóm 4–7 người |`,
    `| Xe 16 chỗ | 1.800.000 | 3.500.000 | Đoàn 10–16 người |`,
    `| Xe 29 chỗ | 3.000.000 | 5.500.000 | Đoàn 20–29 người |`,
    `| Xe 45 chỗ | 4.500.000 | 8.000.000 | Đoàn 30–45 người |`,
    `| Limousine | 1.800.000 | 3.500.000 | VIP 9–11 khách |`,
    ``,
    `Giá dao động theo lộ trình (nội thành / đi tỉnh / đường dài). Đã bao gồm tài xế và nhiên liệu. Đặt cọc 20–30% với hành trình dài ngày hoặc cao điểm.`,
    ``,
    `## Bảng giá tour Đắk Lắk`,
    ``,
    `- Tour 1 ngày — xe riêng có tài xế: từ 1.200.000 VND/xe (xe 4 chỗ).`,
    `- Tour 2 ngày 1 đêm: từ 2.400.000 VND/xe.`,
    `- Tour 3 ngày 2 đêm: từ 3.600.000 VND/xe.`,
    `- Đi nhóm 4 người: chi phí xe ~300.000 VND/người/ngày — rẻ hơn tour đoàn truyền thống (~1.200.000 VND/người/ngày).`,
    `- Đã bao gồm: xe riêng có tài xế bản địa + nhiên liệu + lịch trình tham quan.`,
    `- Chưa bao gồm: khách sạn, vé tham quan, bữa ăn, phí cầu đường.`,
    ``,
    `## Điểm đến phổ biến trong tour Đắk Lắk`,
    ``,
    `- Thác Dray Nur, Thác Gia Long`,
    `- Buôn Đôn — Cầu treo, Vườn Quốc Gia Yok Đôn (cưỡi voi, du thuyền)`,
    `- Hồ Lắk — Buôn Jun (du thuyền độc mộc)`,
    `- Bảo tàng Thế giới Cà phê, Làng Cà phê Trung Nguyên`,
    `- Buôn Ako Dhong (làng văn hóa Ê Đê)`,
    `- Đồi Cỏ Hồng M'Đrăk (đẹp nhất tháng 12–3)`,
    `- Lễ Hội Cà Phê Buôn Ma Thuột (tháng 3 — nên đặt xe trước 5–7 ngày)`,
    ``,
    `## Mùa du lịch tốt nhất`,
    ``,
    `Tháng 11 – tháng 4 (mùa khô): thời tiết mát, đường dễ đi, các điểm tham quan đẹp nhất. Tháng 12–3 ngắm Đồi Cỏ Hồng. Tháng 3 trùng Lễ Hội Cà Phê.`,
    ``,
    `## Mô tả chi tiết từng dòng xe`,
    ``,
  );

  for (const v of vehicles) {
    sections.push(
      `### ${v.title}`,
      ``,
      v.tldr,
      ``,
      `Trang chi tiết: ${siteUrl}/thue-xe/${v.slug}`,
      ``,
    );
  }

  sections.push(
    `## Câu hỏi thường gặp`,
    ``,
    `**Q: Tour Đắk Lắk giá bao nhiêu tiền?**`,
    `A: Tour xe riêng có tài xế từ 1.200.000đ/xe/ngày (xe 4 chỗ). Tour 2 ngày 1 đêm từ 2.400.000đ/xe, 3 ngày 2 đêm từ 3.600.000đ/xe. Nhóm 4 người: chỉ ~300.000đ/người/ngày.`,
    ``,
    `**Q: Tour 2 ngày 1 đêm Đắk Lắk bao gồm những gì?**`,
    `A: Xe riêng có tài xế bản địa, nhiên liệu, lịch trình tham quan Thác Dray Nur, Buôn Đôn, Yok Đôn, Hồ Lắk. Chưa bao gồm khách sạn, vé tham quan, bữa ăn và phí cầu đường.`,
    ``,
    `**Q: Đi tour Đắk Lắk mùa nào đẹp nhất?**`,
    `A: Tháng 11 – tháng 4 (mùa khô). Tháng 3 trùng Lễ Hội Cà Phê — nên đặt xe trước 5–7 ngày.`,
    ``,
    `**Q: Tour xe riêng có tài xế khác tour đoàn như thế nào?**`,
    `A: Hoàn toàn linh hoạt — tự quyết định giờ đi, điểm dừng, thời gian ở mỗi nơi. Không phải chờ người lạ. Nhóm từ 4 người trở lên còn rẻ hơn tour đoàn.`,
    ``,
    `**Q: Có thể tùy chỉnh lịch trình tour không?**`,
    `A: Có. Thêm/bớt điểm tham quan, đổi thứ tự, điều chỉnh giờ xuất phát, hoặc kết hợp với Đà Lạt, Nha Trang, Pleiku. Tư vấn miễn phí qua hotline 0941 437 070.`,
    ``,
    `**Q: Nên đặt xe trước bao lâu?**`,
    `A: Chuyến nội thành: 2–4 tiếng. Chuyến dài hoặc đón sân bay: 1 ngày. Mùa lễ Tết: 3–5 ngày.`,
    ``,
    `**Q: Thuê xe tự lái có không?**`,
    `A: Hiện DVDL Đại Dương Ban Mê chỉ cung cấp xe có tài xế (an toàn hơn trên địa hình Tây Nguyên).`,
    ``,
  );

  if (posts.length > 0) {
    sections.push(`## Cẩm nang & bài viết gần đây`, ``);
    for (const p of posts) {
      sections.push(
        `### ${p.title}`,
        ``,
        p.excerpt || "",
        ``,
        `Đọc đầy đủ: ${siteUrl}/tin-tuc/${p.slug}`,
        ``,
      );
    }
  }

  sections.push(
    `## Liên hệ & đặt xe`,
    ``,
    `- Hotline / Zalo: 0941 437 070`,
    `- Email: dvdldaiduong@gmail.com`,
    `- Facebook: https://www.facebook.com/share/1AczYur4wu/`,
    `- Văn phòng: 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk`,
    `- Bản đồ: https://maps.app.goo.gl/7AeopSFXS4vKVxwL6`,
    `- Đặt online: ${siteUrl}/lien-he`,
    ``,
    `## Liên kết nhanh`,
    ``,
    `- Trang chủ: ${siteUrl}/`,
    `- Bảng giá: ${siteUrl}/bang-gia`,
    `- Tour Đắk Lắk: ${siteUrl}/tour-dak-lak`,
    `- Thuê xe (tổng): ${siteUrl}/thue-xe`,
    `- Thuê xe du lịch Đắk Lắk: ${siteUrl}/thue-xe/du-lich-dak-lak`,
    `- Giới thiệu: ${siteUrl}/gioi-thieu`,
    `- Liên hệ: ${siteUrl}/lien-he`,
    `- Tin tức: ${siteUrl}/tin-tuc`,
    `- llms.txt (index): ${siteUrl}/llms.txt`,
    ``,
  );

  return new Response(sections.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
