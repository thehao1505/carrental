import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const siteUrl = "https://www.dvdldaiduong.com";
const pageUrl = `${siteUrl}/thue-xe/du-lich-dak-lak`;

export const metadata: Metadata = {
  title: "Thuê Xe Du Lịch Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế",
  description:
    "Thuê xe du lịch Đắk Lắk – xe 4-45 chỗ & limousine có tài xế. Khám phá Buôn Đôn, Hồ Lắk, Thác Dray Nur. Giá từ 13.000đ/km.",
  keywords: [
    "thuê xe du lịch Đắk Lắk",
    "thuê xe Buôn Ma Thuột",
    "cho thuê xe du lịch Buôn Ma Thuột",
    "thuê xe có tài xế Đắk Lắk",
    "thuê xe 4 chỗ Đắk Lắk",
    "thuê xe 7 chỗ Đắk Lắk",
    "thuê xe 16 chỗ Đắk Lắk",
    "giá thuê xe du lịch Đắk Lắk",
    "thuê xe đi Buôn Đôn",
    "thuê xe đi Hồ Lắk",
    "DVDL Đại Dương Ban Mê",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Thuê Xe Du Lịch Đắk Lắk – Xe 4–45 Chỗ Có Tài Xế | DVDL Đại Dương Ban Mê",
    description:
      "Thuê xe du lịch Đắk Lắk uy tín – xe đời mới, tài xế chuyên nghiệp, giá từ 13.000đ/km. Phục vụ Buôn Đôn, Hồ Lắk, cà phê tour và các tuyến liên tỉnh.",
    url: pageUrl,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/thue-xe-7-cho.webp",
        width: 1200,
        height: 630,
        alt: "Thuê xe du lịch Đắk Lắk – DVDL Đại Dương Ban Mê",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuê Xe Du Lịch Đắk Lắk | DVDL Đại Dương Ban Mê",
    description:
      "Xe 4–45 chỗ có tài xế, giá cạnh tranh. Khám phá Đắk Lắk thoải mái với DVDL Đại Dương Ban Mê.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Thuê Xe Du Lịch Đắk Lắk",
  serviceType: "Car Rental",
  description:
    "Dịch vụ thuê xe du lịch Đắk Lắk – xe 4, 7, 16, 29, 45 chỗ và limousine có tài xế chuyên nghiệp. Phục vụ tham quan Buôn Đôn, Hồ Lắk, Thác Dray Nur và các tuyến liên tỉnh.",
  url: pageUrl,
  image: `${siteUrl}/images/thue-xe-7-cho.webp`,
  provider: {
    "@type": "LocalBusiness",
    name: "DVDL Đại Dương Ban Mê",
    url: siteUrl,
    telephone: "+84941437070",
    address: {
      "@type": "PostalAddress",
      streetAddress: "252/6 Phan Huy Chú",
      addressLocality: "Buôn Ma Thuột",
      addressRegion: "Đắk Lắk",
      postalCode: "630000",
      addressCountry: "VN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Buôn Ma Thuột" },
    { "@type": "State", name: "Đắk Lắk" },
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "VND",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "13000",
      priceCurrency: "VND",
      unitText: "km",
    },
    availability: "https://schema.org/InStock",
    url: pageUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Thuê xe du lịch Đắk Lắk giá bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá thuê xe du lịch Đắk Lắk dao động từ 13.000đ/km (xe 4 chỗ) đến 20.000đ/km (xe 16 chỗ). Thuê xe đi tuyến cố định như Sân bay – Trung tâm TP từ 200.000đ. Giá đã bao gồm tài xế và nhiên liệu.",
      },
    },
    {
      "@type": "Question",
      name: "Thuê xe du lịch Đắk Lắk có cần đặt trước không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nên đặt xe trước 1–2 ngày để đảm bảo có xe, đặc biệt vào mùa lễ hội cà phê và dịp tết. Với các chuyến đoàn từ 29 chỗ trở lên, hãy đặt trước ít nhất 3–5 ngày.",
      },
    },
    {
      "@type": "Question",
      name: "DVDL Đại Dương Ban Mê có cho thuê xe tự lái không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hiện tại DVDL Đại Dương Ban Mê chủ yếu cung cấp dịch vụ thuê xe có tài xế để đảm bảo an toàn tối đa cho khách. Liên hệ hotline để được tư vấn phương án phù hợp nhất.",
      },
    },
    {
      "@type": "Question",
      name: "Thuê xe đi Buôn Đôn giá bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyến Buôn Ma Thuột – Buôn Đôn (khoảng 35km) giá từ 450.000đ (xe 4 chỗ), 500.000đ (xe 7 chỗ) và 700.000đ (xe 16 chỗ) cho 1 lượt. Giá đã bao gồm tài xế và nhiên liệu.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể thuê xe đi Đà Lạt hoặc Nha Trang từ Đắk Lắk không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. DVDL Đại Dương Ban Mê phục vụ các tuyến liên tỉnh như Buôn Ma Thuột – Đà Lạt (~250km), Buôn Ma Thuột – Nha Trang (~210km), Buôn Ma Thuột – Pleiku (~185km). Liên hệ để nhận báo giá chi tiết.",
      },
    },
    {
      "@type": "Question",
      name: "Giá thuê xe đã bao gồm những gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá niêm yết đã bao gồm tài xế chuyên nghiệp và nhiên liệu. Chưa bao gồm phí cầu đường, phí bến bãi (nếu có) và hóa đơn VAT. Khách không phát sinh chi phí ẩn.",
      },
    },
  ],
};

const routes = [
  ["Buôn Ma Thuột – Buôn Đôn", "35km", "450.000đ", "500.000đ", "700.000đ"],
  ["Buôn Ma Thuột – Hồ Lắk", "55km", "660.000đ", "720.000đ", "930.000đ"],
  ["Buôn Ma Thuột – Eakar", "54km", "650.000đ", "700.000đ", "900.000đ"],
  ["Buôn Ma Thuột – M'Đrăk", "90km", "1.000.000đ", "1.100.000đ", "1.400.000đ"],
  [
    "Buôn Ma Thuột – Pleiku (Gia Lai)",
    "185km",
    "1.900.000đ",
    "2.200.000đ",
    "2.800.000đ",
  ],
  ["Buôn Ma Thuột – Đà Lạt", "250km", "2.600.000đ", "3.000.000đ", "3.800.000đ"],
  [
    "Buôn Ma Thuột – Nha Trang",
    "210km",
    "2.200.000đ",
    "2.500.000đ",
    "3.200.000đ",
  ],
  [
    "Buôn Ma Thuột – Đắk Nông",
    "130km",
    "1.400.000đ",
    "1.600.000đ",
    "2.000.000đ",
  ],
];

const kmRates = [
  ["Xe 4 chỗ", "13.000đ/km", "12.000đ/km", "11.000đ/km"],
  ["Xe 7 chỗ", "15.000đ/km", "13.000đ/km", "12.000đ/km"],
  ["Xe 16 chỗ", "20.000đ/km", "18.000đ/km", "15.000đ/km"],
  ["Xe 29 chỗ", "25.000đ/km", "22.000đ/km", "18.000đ/km"],
  ["Xe 45 chỗ", "30.000đ/km", "26.000đ/km", "22.000đ/km"],
];

const faqs = [
  {
    q: "Thuê xe du lịch Đắk Lắk giá bao nhiêu?",
    a: "Giá thuê xe dao động từ 13.000đ/km (xe 4 chỗ) đến 30.000đ/km (xe 45 chỗ). Tuyến cố định như Sân bay – TP từ 200.000đ. Giá đã bao gồm tài xế và xăng dầu.",
  },
  {
    q: "Có cần đặt xe trước không?",
    a: "Nên đặt trước 1–2 ngày. Mùa lễ hội cà phê (tháng 3) và dịp Tết cần đặt trước 5–7 ngày. Đoàn xe lớn từ 29 chỗ nên đặt trước ít nhất 3 ngày.",
  },
  {
    q: "DVDL Đại Dương Ban Mê có cho thuê xe tự lái không?",
    a: "Chúng tôi chủ yếu cung cấp dịch vụ thuê xe có tài xế để đảm bảo an toàn. Liên hệ hotline 0941.437.070 để được tư vấn thêm.",
  },
  {
    q: "Có thể đặt xe đi Đà Lạt, Nha Trang từ Đắk Lắk không?",
    a: "Có. Chúng tôi phục vụ tất cả tuyến liên tỉnh: Đà Lạt (~250km), Nha Trang (~210km), Pleiku (~185km), Quy Nhơn (~300km) và nhiều tỉnh thành khác.",
  },
  {
    q: "Giá thuê xe bao gồm những gì?",
    a: "Giá đã bao gồm tài xế chuyên nghiệp và nhiên liệu. Chưa gồm phí cầu đường, phí bến bãi và VAT. Không có phát sinh chi phí ẩn.",
  },
  {
    q: "Xe có bảo hiểm không?",
    a: "Tất cả xe đều có bảo hiểm dân sự bắt buộc và bảo hiểm thân xe. Khách hàng được đảm bảo an toàn tối đa trong suốt hành trình.",
  },
];

export default function ThueXeDuLichDakLak() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="text-gray-800">
        {/* ── Hero ── */}
        <section className="relative h-[380px] w-full">
          <Image
            src="/images/thue-xe-7-cho.webp"
            alt="Thuê xe du lịch Đắk Lắk – DVDL Đại Dương Ban Mê"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4 px-4">
            <h1 className="text-3xl md:text-5xl text-white font-bold text-center leading-tight max-w-3xl">
              Thuê Xe Du Lịch Đắk Lắk – Xe 4–45 Chỗ Có Tài Xế
            </h1>
            <p className="text-white/90 text-base md:text-lg text-center max-w-2xl">
              Xe đời mới, tài xế chuyên nghiệp, giá từ{" "}
              <strong className="text-lemon-400">13.000đ/km</strong>. Phục vụ
              tham quan và liên tỉnh 24/7.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              <a
                href="tel:0941437070"
                className="bg-lemon-500 text-forest-600 font-bold px-7 py-3 rounded-full text-base hover:bg-lemon-400 transition hover:scale-105"
              >
                Gọi ngay: 0941.437.070
              </a>
              <Link
                href="/lien-he"
                className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3 rounded-full text-base hover:bg-white/20 transition"
              >
                Nhận báo giá
              </Link>
            </div>
          </div>
        </section>

        {/* ── Giới thiệu dịch vụ ── */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-forest-600 mb-6">
            Dịch Vụ Thuê Xe Du Lịch Đắk Lắk Uy Tín
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
            <p>
              <strong>DVDL Đại Dương Ban Mê</strong> cung cấp dịch vụ{" "}
              <strong>thuê xe du lịch Đắk Lắk</strong> với đội xe đa dạng từ 4
              chỗ đến 45 chỗ và limousine cao cấp. Tất cả xe đều có đời xe mới,
              được bảo dưỡng định kỳ và trang bị điều hòa, hệ thống giải trí
              hiện đại để mang đến hành trình thoải mái nhất cho quý khách.
            </p>
            <p>
              Đắk Lắk – vùng đất của cà phê, voi và các lễ hội Tây Nguyên – đang
              trở thành điểm đến du lịch hấp dẫn bậc nhất miền Trung. Với dịch
              vụ <strong>thuê xe có tài xế tại Buôn Ma Thuột</strong>, quý khách
              có thể dễ dàng khám phá những điểm đến nổi tiếng như{" "}
              <strong>Buôn Đôn</strong>, <strong>Hồ Lắk</strong>,{" "}
              <strong>Thác Dray Nur</strong>,{" "}
              <strong>Làng Cà Phê Trung Nguyên</strong> hay vườn quốc gia Yok
              Đôn mà không lo vấn đề giao thông và đường xá.
            </p>
            <p>
              Đội ngũ tài xế của chúng tôi là người địa phương, am hiểu đường sá
              và văn hóa Đắk Lắk. Ngoài việc lái xe an toàn, tài xế sẵn sàng tư
              vấn lịch trình, giới thiệu các địa điểm ăn uống đặc sản và hỗ trợ
              quý khách trong suốt chuyến đi – như một hướng dẫn viên du lịch
              không chính thức.
            </p>
          </div>

          {/* Điểm mạnh */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {[
              {
                icon: "🚗",
                label: "Đội xe đa dạng",
                sub: "4 → 45 chỗ & Limousine",
              },
              {
                icon: "👨‍✈️",
                label: "Tài xế chuyên nghiệp",
                sub: "Am hiểu địa phương",
              },
              { icon: "⏰", label: "Phục vụ 24/7", sub: "Kể cả lễ, Tết" },
              { icon: "💰", label: "Giá minh bạch", sub: "Không phát sinh ẩn" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-forest-50 rounded-2xl p-5 text-center border border-forest-100"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-forest-700 text-sm">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Điểm du lịch nổi bật ── */}
        <section className="bg-forest-50 py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-forest-600 mb-2 text-center">
              Khám Phá Đắk Lắk Cùng Chúng Tôi
            </h2>
            <p className="text-center text-gray-600 mb-8 text-sm">
              Các địa điểm du lịch nổi tiếng – thuê xe đến ngay!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  name: "Vườn Quốc Gia Yok Đôn & Buôn Đôn",
                  km: "35km từ BMT",
                  note: "Cưỡi voi, thác nước, làng dân tộc",
                },
                {
                  name: "Hồ Lắk",
                  km: "55km từ BMT",
                  note: "Hồ nước ngọt lớn nhất Tây Nguyên",
                },
                {
                  name: "Thác Dray Nur & Dray Sáp",
                  km: "30km từ BMT",
                  note: "Thác hùng vĩ giữa rừng già",
                },
                {
                  name: "Làng Cà Phê Trung Nguyên",
                  km: "Trung tâm BMT",
                  note: "Trải nghiệm văn hóa cà phê Tây Nguyên",
                },
                {
                  name: "Đồi Cỏ Hồng M'Đrăk",
                  km: "90km từ BMT",
                  note: "Check-in đồng cỏ mùa khô",
                },
                {
                  name: "Bảo Tàng Đắk Lắk",
                  km: "Trung tâm BMT",
                  note: "Di sản văn hóa Ê-đê, M'nông",
                },
              ].map((dest) => (
                <div
                  key={dest.name}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="font-semibold text-forest-700 text-sm leading-snug">
                    {dest.name}
                  </div>
                  <div className="text-xs text-moss-500 font-medium mt-1">
                    {dest.km}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{dest.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bảng giá ── */}
        <section className="max-w-5xl mx-auto px-6 py-14 space-y-12">
          <h2 className="text-3xl font-bold text-forest-600 text-center">
            Bảng Giá Thuê Xe Du Lịch Đắk Lắk 2025
          </h2>

          {/* Giá theo km */}
          <div>
            <h3 className="text-xl font-bold text-forest-600 mb-4">
              Giá thuê xe theo số km (có tài xế)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border border-gray-200 shadow-sm text-sm">
                <thead className="bg-moss-100 text-moss-700">
                  <tr>
                    <th className="py-3 px-4 text-left">Loại xe</th>
                    <th className="py-3 px-4 text-center">0–50km</th>
                    <th className="py-3 px-4 text-center">50–100km</th>
                    <th className="py-3 px-4 text-center">Trên 100km</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {kmRates.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`py-2.5 px-4 ${j === 0 ? "font-medium text-left" : "text-center"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-3 italic">
                * Giá đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí cầu
                đường, bến bãi và VAT.
              </p>
            </div>
          </div>

          {/* Giá theo tuyến */}
          <div>
            <h3 className="text-xl font-bold text-forest-600 mb-4">
              Giá thuê xe theo tuyến lộ trình từ Buôn Ma Thuột
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border border-gray-200 shadow-sm text-sm">
                <thead className="bg-moss-100 text-moss-700">
                  <tr>
                    <th className="py-3 px-4 text-left">Tuyến đường</th>
                    <th className="py-3 px-4 text-center">Km</th>
                    <th className="py-3 px-4 text-center">Xe 4 chỗ</th>
                    <th className="py-3 px-4 text-center">Xe 7 chỗ</th>
                    <th className="py-3 px-4 text-center">Xe 16 chỗ</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {routes.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`py-2.5 px-4 ${j === 0 ? "font-medium text-left" : "text-center"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-3 italic">
                * Giá 1 chiều, đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí
                cầu đường và VAT. Liên hệ để báo giá khứ hồi.
              </p>
            </div>
          </div>

          {/* CTA sau bảng giá */}
          <div className="bg-forest-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">
              Cần báo giá chính xác cho hành trình của bạn?
            </h3>
            <p className="text-white/85 text-sm mb-5">
              Giá niêm yết có thể thay đổi theo số lượng xe, thời điểm và lộ
              trình cụ thể. Liên hệ ngay để nhận báo giá tốt nhất!
            </p>
            <a
              href="tel:0941437070"
              className="inline-block bg-lemon-500 text-forest-600 font-bold px-8 py-3 rounded-full hover:bg-lemon-400 transition hover:scale-105"
            >
              Gọi ngay: 0941.437.070
            </a>
          </div>
        </section>

        {/* ── Tại sao chọn chúng tôi ── */}
        <section className="bg-gray-50 py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-forest-600 mb-8 text-center">
              Tại Sao Khách Hàng Tin Chọn DVDL Đại Dương Ban Mê?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px]">
              {[
                {
                  title: "Xe đời mới, bảo dưỡng định kỳ",
                  desc: "100% xe được kiểm tra kỹ trước mỗi chuyến đi. Điều hòa mát, ghế ngồi thoải mái, hệ thống âm thanh hiện đại.",
                },
                {
                  title: "Tài xế bản địa, kinh nghiệm lâu năm",
                  desc: "Tài xế là người Đắk Lắk, thông thuộc đường sá, văn hóa và các địa danh. Lịch sự, tận tâm và có thể giao tiếp tiếng Anh cơ bản.",
                },
                {
                  title: "Giá rõ ràng, không phụ thu ẩn",
                  desc: "Báo giá trọn gói bao gồm tài xế và nhiên liệu. Các khoản phát sinh (cầu đường, bến bãi) sẽ được thông báo trước.",
                },
                {
                  title: "Đặt xe dễ dàng, hỗ trợ 24/7",
                  desc: "Đặt xe qua điện thoại, Zalo hoặc trang web. Nhân viên hỗ trợ cả ngày lễ và cuối tuần để đảm bảo chuyến đi của bạn thuận lợi.",
                },
                {
                  title: "Bảo hiểm đầy đủ",
                  desc: "Tất cả xe đều có bảo hiểm dân sự và bảo hiểm thân xe. Hành khách được bảo vệ toàn diện trong suốt hành trình.",
                },
                {
                  title: "Phục vụ mọi nhu cầu",
                  desc: "Từ đưa đón sân bay, tham quan 1 ngày đến tour nhiều ngày xuyên Tây Nguyên. Chúng tôi phục vụ cả cá nhân, gia đình lẫn đoàn doanh nghiệp.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="text-forest-500 text-xl font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {item.title}
                    </div>
                    <div className="text-gray-600 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold text-forest-600 mb-8 text-center">
            Câu Hỏi Thường Gặp Về Thuê Xe Du Lịch Đắk Lắk
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <summary className="flex justify-between items-center cursor-pointer px-5 py-4 bg-white hover:bg-forest-50 transition font-medium text-gray-800 text-[15px] list-none">
                  <span>{faq.q}</span>
                  <span className="text-forest-500 text-xl font-bold ml-4 group-open:rotate-45 transition-transform duration-200 shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-5 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA cuối trang ── */}
        <section className="bg-forest-500 py-14 px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Sẵn sàng khám phá Đắk Lắk cùng chúng tôi?
          </h2>
          <p className="text-white/80 text-base mb-2 max-w-xl mx-auto">
            Liên hệ ngay để đặt xe và nhận báo giá tốt nhất. Phục vụ 24/7 kể cả
            lễ, Tết.
          </p>
          <p className="text-lemon-400 font-bold text-lg mb-7">
            📍 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0941437070"
              className="bg-lemon-500 text-forest-600 font-bold px-9 py-4 rounded-full text-lg hover:bg-lemon-400 transition hover:scale-105 shadow-lg"
            >
              Gọi ngay: 0941.437.070
            </a>
            <Link
              href="/lien-he"
              className="bg-white/15 border-2 border-white/50 text-white font-semibold px-9 py-4 rounded-full text-lg hover:bg-white/25 transition"
            >
              Gửi yêu cầu đặt xe
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/70 text-sm">
            <Link href="/thue-xe" className="hover:text-lemon-400 transition">
              Xem tất cả dịch vụ thuê xe
            </Link>
            <Link href="/bang-gia" className="hover:text-lemon-400 transition">
              Bảng giá chi tiết
            </Link>
            <Link
              href="/gioi-thieu"
              className="hover:text-lemon-400 transition"
            >
              Về DVDL Đại Dương Ban Mê
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
