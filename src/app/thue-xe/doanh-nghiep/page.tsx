import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const siteUrl = "https://www.dvdldaiduong.com";
const pageUrl = `${siteUrl}/thue-xe/doanh-nghiep`;

export const metadata: Metadata = {
  title: "Thuê Xe Doanh Nghiệp Đắk Lắk | Hợp Đồng + Xuất Hóa Đơn VAT",
  description:
    "Thuê xe doanh nghiệp tại Buôn Ma Thuột - Đắk Lắk: hợp đồng theo tháng/quý/năm, xuất hóa đơn VAT 10%, thanh toán chuyển khoản, đưa đón nhân viên, hội nghị, khách đối tác.",
  keywords: [
    "thuê xe doanh nghiệp Đắk Lắk",
    "thuê xe công ty Buôn Ma Thuột",
    "hợp đồng thuê xe doanh nghiệp",
    "thuê xe có hóa đơn VAT",
    "đưa đón nhân viên Đắk Lắk",
    "thuê xe hội nghị Buôn Ma Thuột",
    "thuê xe theo tháng BMT",
    "thuê xe đưa đón khách đối tác",
    "DVDL Đại Dương Ban Mê doanh nghiệp",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Thuê Xe Doanh Nghiệp Đắk Lắk - Hợp Đồng + VAT | DVDL Đại Dương Ban Mê",
    description:
      "Giải pháp thuê xe trọn gói cho doanh nghiệp tại Đắk Lắk: hợp đồng dài hạn, xuất hóa đơn VAT 10%, thanh toán công nợ linh hoạt, xe 4-45 chỗ có tài xế.",
    url: pageUrl,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/thue-xe-16-cho.webp",
        width: 1200,
        height: 630,
        alt: "Thuê xe doanh nghiệp Đắk Lắk - DVDL Đại Dương Ban Mê",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuê Xe Doanh Nghiệp Đắk Lắk | DVDL Đại Dương Ban Mê",
    description:
      "Hợp đồng theo tháng/quý, xuất hóa đơn VAT 10%, thanh toán công nợ. Xe 4-45 chỗ có tài xế phục vụ B2B.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Thuê Xe Doanh Nghiệp Đắk Lắk",
  serviceType: "Corporate Car Rental",
  description:
    "Dịch vụ thuê xe doanh nghiệp tại Buôn Ma Thuột - Đắk Lắk: hợp đồng dài hạn theo tháng/quý/năm, xuất hóa đơn VAT 10%, đưa đón nhân viên, khách đối tác, phục vụ hội nghị và sự kiện công ty.",
  url: pageUrl,
  image: `${siteUrl}/images/thue-xe-16-cho.webp`,
  provider: { "@id": `${siteUrl}/#business` },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Doanh nghiệp, công ty, tổ chức",
  },
  areaServed: [
    { "@type": "City", name: "Buôn Ma Thuột" },
    { "@type": "AdministrativeArea", name: "Đắk Lắk" },
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "VND",
    availability: "https://schema.org/InStock",
    url: pageUrl,
    eligibleCustomerType: "https://schema.org/Business",
    description:
      "Báo giá theo nhu cầu cụ thể của doanh nghiệp. Hợp đồng tháng/quý/năm có chiết khấu. Xuất hóa đơn VAT 10%.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Thuê xe",
      item: `${siteUrl}/thue-xe`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Thuê xe doanh nghiệp",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Thuê xe doanh nghiệp tại Đắk Lắk có xuất hóa đơn VAT không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. DVDL Đại Dương Ban Mê xuất hóa đơn VAT 10% đầy đủ theo quy định cho mọi hợp đồng doanh nghiệp. Khách hàng cung cấp thông tin công ty (tên, MST, địa chỉ) khi ký hợp đồng, hóa đơn điện tử được gửi qua email sau mỗi kỳ thanh toán.",
      },
    },
    {
      "@type": "Question",
      name: "Hợp đồng thuê xe doanh nghiệp có thanh toán công nợ được không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Với hợp đồng dài hạn (từ 1 tháng trở lên), DVDL Đại Dương Ban Mê hỗ trợ thanh toán chuyển khoản theo kỳ (cuối tháng, cuối quý) hoặc theo tiến độ thỏa thuận. Điều khoản công nợ ghi rõ trong hợp đồng.",
      },
    },
    {
      "@type": "Question",
      name: "Thuê xe đưa đón nhân viên giá bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hợp đồng đưa đón nhân viên theo tuyến cố định có giá ưu đãi so với thuê lẻ - tiết kiệm 15-30% tùy số lượng chuyến/tháng. Liên hệ hotline 0941 437 070 để được khảo sát tuyến và báo giá chính xác.",
      },
    },
    {
      "@type": "Question",
      name: "Có hợp đồng thuê xe đưa đón khách đối tác/khách VIP không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Chúng tôi có gói riêng dành cho doanh nghiệp thường xuyên đón tiếp khách đối tác: xe limousine, sedan cao cấp, tài xế nhiều kinh nghiệm, đồng phục lịch sự, có thể đón tại sân bay BMV và khách sạn theo lịch yêu cầu. Tham khảo thêm xe limousine.",
      },
    },
    {
      "@type": "Question",
      name: "Thuê xe hội nghị, hội thảo, team building tại Đắk Lắk có gói trọn gói không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Doanh nghiệp tổ chức hội nghị/team building tại Buôn Ma Thuột, Hồ Lắk, Buôn Đôn có thể đặt gói trọn gói: xe đưa đón đoàn (16-45 chỗ), tài xế, nhiên liệu, hỗ trợ điều phối. Hợp đồng linh hoạt theo số ngày sự kiện, có thể bao gồm xe dự phòng.",
      },
    },
    {
      "@type": "Question",
      name: "Hợp đồng thuê xe doanh nghiệp kéo dài tối thiểu bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tối thiểu 1 tháng cho hợp đồng đưa đón cố định. Sự kiện 1-3 ngày (hội nghị, team building) ký hợp đồng ngắn hạn. Doanh nghiệp ký hợp đồng năm có chiết khấu đáng kể và được ưu tiên điều xe trong mùa cao điểm.",
      },
    },
  ],
};

export default function ThueXeDoanhNghiepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="text-gray-800">
        {/* Hero */}
        <section className="relative h-[380px] w-full">
          <Image
            src="/images/thue-xe-16-cho.webp"
            alt="Thuê xe doanh nghiệp tại Buôn Ma Thuột"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
              Thuê Xe Doanh Nghiệp Đắk Lắk
            </h1>
            <p className="max-w-2xl text-center text-base md:text-lg">
              Hợp đồng tháng/quý/năm · Xuất hóa đơn VAT 10% · Thanh toán công nợ
              · Xe 4-45 chỗ có tài xế
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className="max-w-3xl mx-auto px-6 py-10">
          <div className="bg-green-50 border-l-4 border-forest-500 p-5 rounded-r-lg">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Tóm tắt:</strong> DVDL Đại Dương Ban Mê cung cấp dịch vụ
              thuê xe trọn gói cho doanh nghiệp tại Buôn Ma Thuột - Đắk Lắk:
              <strong> hợp đồng dài hạn</strong> (tháng/quý/năm),{" "}
              <strong>xuất hóa đơn VAT 10%</strong>,{" "}
              <strong>thanh toán chuyển khoản công nợ</strong>, xe 4-45 chỗ và
              limousine có tài xế chuyên nghiệp. Phục vụ đưa đón nhân viên,
              khách đối tác, hội nghị, sự kiện và team building.
            </p>
          </div>
        </section>

        {/* Use cases */}
        <section className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-600 text-center mb-8">
            Giải pháp cho doanh nghiệp tại Đắk Lắk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest-700 mb-2">
                🚐 Đưa đón nhân viên định kỳ
              </h3>
              <p className="text-sm text-gray-700">
                Hợp đồng tuyến cố định theo tháng - xe đưa đón ca sáng/chiều,
                công ty - khu công nghiệp, văn phòng - nhà ở tập thể. Tài xế cố
                định, đúng giờ.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest-700 mb-2">
                🤝 Đón tiếp khách đối tác / khách VIP
              </h3>
              <p className="text-sm text-gray-700">
                Xe sedan cao cấp, limousine, tài xế lịch sự đồng phục - đón tại
                sân bay BMV, đưa đến khách sạn, văn phòng, nhà máy. Hỗ trợ 24/7.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest-700 mb-2">
                🎤 Hội nghị, hội thảo, team building
              </h3>
              <p className="text-sm text-gray-700">
                Đoàn xe 16-45 chỗ phục vụ sự kiện công ty tại Buôn Ma Thuột, Hồ
                Lắk, Buôn Đôn. Có thể bao xe dự phòng, micro hướng dẫn viên.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-forest-700 mb-2">
                🏗️ Công tác liên tỉnh & khảo sát thị trường
              </h3>
              <p className="text-sm text-gray-700">
                Xe 4-16 chỗ phục vụ đoàn công tác đi Pleiku, Kon Tum, Đà Lạt,
                Nha Trang. Tài xế quen tuyến Tây Nguyên.
              </p>
            </div>
          </div>
        </section>

        {/* B2B advantages */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-forest-600 text-center mb-8">
              Ưu đãi & cam kết dành cho khách hàng doanh nghiệp
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-semibold mb-2">📄 Hóa đơn VAT 10%</h3>
                <p className="text-sm text-gray-700">
                  Xuất hóa đơn điện tử đầy đủ theo Thông tư 78/2021 - gửi email
                  định kỳ. Doanh nghiệp khấu trừ thuế hợp lệ.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-semibold mb-2">💳 Thanh toán linh hoạt</h3>
                <p className="text-sm text-gray-700">
                  Chuyển khoản theo kỳ (cuối tháng/cuối quý). Hỗ trợ thanh toán
                  công nợ với hợp đồng từ 1 tháng. Không phụ thu phí chuyển
                  khoản.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-semibold mb-2">📉 Chiết khấu dài hạn</h3>
                <p className="text-sm text-gray-700">
                  Hợp đồng tháng: ưu đãi 10-15%. Hợp đồng quý: 15-20%. Hợp đồng
                  năm: 20-30% so với thuê lẻ - ưu tiên điều xe mùa cao điểm.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-semibold mb-2">🛡️ Bảo hiểm đầy đủ</h3>
                <p className="text-sm text-gray-700">
                  Bảo hiểm trách nhiệm dân sự + bảo hiểm hành khách theo quy
                  định. Hợp đồng ghi rõ trách nhiệm các bên khi có sự cố.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-semibold mb-2">📋 Hợp đồng minh bạch</h3>
                <p className="text-sm text-gray-700">
                  Hợp đồng kinh tế chuẩn pháp lý - rõ điều khoản về số chuyến,
                  km, phụ phí, thời gian, điều kiện hủy. Hai bên ký công ty.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-semibold mb-2">🚘 Xe dự phòng</h3>
                <p className="text-sm text-gray-700">
                  Hợp đồng dài hạn được cam kết xe dự phòng khi xe chính bảo
                  dưỡng - không gián đoạn lịch đưa đón.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-600 text-center mb-8">
            Quy trình ký hợp đồng
          </h2>
          <ol className="space-y-4 text-sm md:text-base">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-500 text-white font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <strong>Liên hệ & khảo sát nhu cầu</strong> - Doanh nghiệp gọi
                0941 437 070 hoặc email cung cấp thông tin: số chuyến/tháng,
                tuyến đường, loại xe cần, thời lượng hợp đồng.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-500 text-white font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <strong>Báo giá chi tiết</strong> - Trong 24h, gửi báo giá kèm
                điều khoản chiết khấu, lịch trình, loại xe đề xuất.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-500 text-white font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <strong>Ký hợp đồng kinh tế</strong> - Soạn thảo, hai bên ký
                công ty. Có thể ký bản giấy hoặc hợp đồng điện tử eContract.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-500 text-white font-bold flex items-center justify-center">
                4
              </span>
              <div>
                <strong>Triển khai & vận hành</strong> - Bố trí xe + tài xế cố
                định. Báo cáo chuyến và xuất hóa đơn VAT theo kỳ.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-500 text-white font-bold flex items-center justify-center">
                5
              </span>
              <div>
                <strong>Thanh toán & đối soát định kỳ</strong> - Bảng kê chuyến
                + hóa đơn VAT gửi email cuối kỳ. Doanh nghiệp chuyển khoản theo
                điều khoản.
              </div>
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-forest-600 text-center mb-8">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-3">
              {faqSchema.mainEntity.map((q, i) => (
                <details
                  key={i}
                  className="bg-white rounded-lg p-4 border"
                >
                  <summary className="font-semibold text-forest-700 cursor-pointer">
                    {q.name}
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {q.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-600 mb-4">
            Nhận báo giá hợp đồng doanh nghiệp
          </h2>
          <p className="text-gray-700 mb-6">
            Gọi trực tiếp{" "}
            <a
              href="tel:+84941437070"
              className="text-forest-500 font-semibold underline"
            >
              0941 437 070
            </a>{" "}
            hoặc gửi email kèm thông tin nhu cầu - chúng tôi phản hồi trong 24h
            làm việc.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/lien-he"
              className="bg-forest-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-forest-600 transition"
            >
              Gửi yêu cầu báo giá
            </Link>
            <a
              href="tel:+84941437070"
              className="bg-white border border-forest-500 text-forest-600 px-6 py-3 rounded-lg font-semibold hover:bg-forest-50 transition"
            >
              📞 Gọi ngay 0941 437 070
            </a>
          </div>
        </section>

        {/* Internal links */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <h2 className="text-xl font-semibold text-forest-600 mb-4">
            Tham khảo thêm
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <Link
                href="/thue-xe/thue-xe-16-cho"
                className="text-forest-500 hover:underline"
              >
                Thuê xe 16 chỗ tại Buôn Ma Thuột
              </Link>{" "}
              - phù hợp đưa đón nhân viên
            </li>
            <li>
              <Link
                href="/thue-xe/thue-xe-29-cho"
                className="text-forest-500 hover:underline"
              >
                Thuê xe 29 chỗ tại Buôn Ma Thuột
              </Link>{" "}
              - đoàn hội nghị / team building
            </li>
            <li>
              <Link
                href="/thue-xe/thue-xe-limousine"
                className="text-forest-500 hover:underline"
              >
                Thuê xe limousine
              </Link>{" "}
              - đón khách đối tác VIP
            </li>
            <li>
              <Link
                href="/bang-gia"
                className="text-forest-500 hover:underline"
              >
                Bảng giá thuê xe chi tiết
              </Link>
            </li>
            <li>
              <Link href="/lien-he" className="text-forest-500 hover:underline">
                Liên hệ &amp; gửi yêu cầu báo giá
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
