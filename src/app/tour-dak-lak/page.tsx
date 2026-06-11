import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import TourBookingForm from "@/features/tour-dak-lak/booking-form";

const siteUrl = "https://www.dvdldaiduong.com";
const pageUrl = `${siteUrl}/tour-dak-lak`;

export const metadata: Metadata = {
  title: "Tour Đắk Lắk 2-3 Ngày: Khám Phá Tây Nguyên Với Xe Riêng | DVDL",
  description:
    "Tour Đắk Lắk xe riêng có tài xế – giá từ 1.200.000đ/xe/ngày. 3 gói lịch trình: văn hóa 1 ngày, phiêu lưu 2N1Đ, toàn diện 3N2Đ. Tùy chỉnh tự do, không phụ thu ẩn.",
  keywords: [
    "tour Đắk Lắk",
    "tour Đắk Lắk 2 ngày 1 đêm",
    "tour Đắk Lắk 3 ngày 2 đêm",
    "tour Đắk Lắk xe riêng",
    "tour Tây Nguyên",
    "tour Buôn Ma Thuột",
    "tour Đắk Lắk bao nhiêu tiền",
    "tour Buôn Đôn",
    "tour Hồ Lắk",
    "thuê xe tour Đắk Lắk có tài xế",
    "DVDL Đại Dương Ban Mê",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Tour Đắk Lắk 2-3 Ngày: Xe Riêng Có Tài Xế | DVDL Đại Dương Ban Mê",
    description:
      "3 gói tour Đắk Lắk linh hoạt – xe riêng, tài xế bản địa, không chờ đợi. Giá từ 1.200.000đ/xe. Khám phá Buôn Đôn, Hồ Lắk, Dray Nur, Yok Đôn.",
    url: pageUrl,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/taynguyen.webp",
        width: 1200,
        height: 630,
        alt: "Tour Đắk Lắk xe riêng có tài xế – DVDL Đại Dương Ban Mê",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Đắk Lắk Xe Riêng 1-3 Ngày | DVDL Đại Dương Ban Mê",
    description:
      "Giá từ 1.200.000đ/xe/ngày. Khám phá Tây Nguyên thoải mái với lịch trình riêng tư, không chờ tour đoàn.",
  },
};

const touristTripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Tour Đắk Lắk Xe Riêng Có Tài Xế",
  description:
    "Gói tour Đắk Lắk 1-3 ngày với xe riêng có tài xế bản địa. Khám phá Buôn Đôn, Hồ Lắk, Thác Dray Nur, Vườn Quốc Gia Yok Đôn và nhiều điểm đến nổi tiếng của Tây Nguyên.",
  url: pageUrl,
  image: `${siteUrl}/images/taynguyen.webp`,
  touristType: ["Cultural tourism", "Adventure tourism", "Eco-tourism"],
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
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "TouristDestination",
          name: "Bảo Tàng Đắk Lắk & Làng Cà Phê Trung Nguyên",
          description: "Di sản văn hóa Ê-đê, M'nông và trải nghiệm cà phê Tây Nguyên",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "TouristDestination",
          name: "Thác Dray Nur & Buôn Đôn",
          description: "Thác hùng vĩ và làng dân tộc thiểu số nổi tiếng",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "TouristDestination",
          name: "Hồ Lắk & Vườn Quốc Gia Yok Đôn",
          description: "Hồ nước ngọt lớn nhất Tây Nguyên và rừng khộp đặc trưng",
        },
      },
    ],
  },
  offers: [
    {
      "@type": "Offer",
      name: "Tour 1 ngày – Văn Hóa Buôn Ma Thuột",
      priceCurrency: "VND",
      price: "1200000",
      description: "Xe 4 chỗ, trọn ngày, bao gồm tài xế và nhiên liệu",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
    {
      "@type": "Offer",
      name: "Tour 2 ngày 1 đêm – Phiêu Lưu Tây Nguyên",
      priceCurrency: "VND",
      price: "2400000",
      description: "Xe 4 chỗ, 2 ngày 1 đêm, bao gồm tài xế và nhiên liệu",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
    {
      "@type": "Offer",
      name: "Tour 3 ngày 2 đêm – Khám Phá Tây Nguyên Toàn Diện",
      priceCurrency: "VND",
      price: "3600000",
      description: "Xe 4 chỗ, 3 ngày 2 đêm, bao gồm tài xế và nhiên liệu",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tour Đắk Lắk giá bao nhiêu tiền?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tour Đắk Lắk xe riêng có tài xế giá từ 1.200.000đ/xe/ngày (xe 4 chỗ). Tour 2 ngày 1 đêm từ 2.400.000đ/xe, tour 3 ngày 2 đêm từ 3.600.000đ/xe. Nếu đi nhóm 4 người, chi phí mỗi người chỉ từ 300.000đ/ngày – rẻ hơn nhiều so với tour đoàn thông thường (từ 1.200.000đ/người/ngày).",
      },
    },
    {
      "@type": "Question",
      name: "Tour 2 ngày 1 đêm Đắk Lắk bao gồm những gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tour 2 ngày 1 đêm Đắk Lắk bao gồm: xe riêng có tài xế bản địa, nhiên liệu trong suốt hành trình, và lịch trình tham quan Thác Dray Nur, Buôn Đôn, Vườn Quốc Gia Yok Đôn, Hồ Lắk. Chưa bao gồm: khách sạn, vé tham quan, bữa ăn và phí cầu đường.",
      },
    },
    {
      "@type": "Question",
      name: "Đi tour Đắk Lắk mùa nào đẹp nhất?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thời điểm đẹp nhất để đi tour Đắk Lắk là từ tháng 11 đến tháng 4 (mùa khô) – thời tiết mát mẻ, đường dễ đi, các điểm tham quan như Hồ Lắk và Đồi Cỏ Hồng đẹp nhất. Tháng 3 trùng Lễ Hội Cà Phê Buôn Ma Thuột – nên đặt xe sớm 5-7 ngày.",
      },
    },
    {
      "@type": "Question",
      name: "Tour xe riêng có tài xế khác tour đoàn như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tour xe riêng có tài xế hoàn toàn linh hoạt – bạn tự quyết định giờ đi, điểm dừng và thời gian ở mỗi nơi. Không phải chờ người lạ, không bị cắt ngắn thời gian tham quan. Với nhóm từ 4 người, giá mỗi người còn rẻ hơn tour đoàn trong khi trải nghiệm tốt hơn rất nhiều.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể tùy chỉnh lịch trình tour Đắk Lắk không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. DVDL Đại Dương Ban Mê cung cấp dịch vụ tour tùy chỉnh hoàn toàn theo yêu cầu. Bạn có thể thêm/bớt điểm tham quan, thay đổi thứ tự, điều chỉnh giờ xuất phát, hoặc kết hợp tour Đắk Lắk với các tỉnh lân cận như Đà Lạt, Nha Trang, Pleiku. Liên hệ tư vấn miễn phí để được lên kế hoạch chi tiết.",
      },
    },
  ],
};

const itineraries = [
  {
    id: "1-ngay",
    tag: "Phổ biến",
    title: "Tour 1 Ngày – Văn Hóa Buôn Ma Thuột",
    duration: "1 ngày",
    type: "cultural",
    highlight: "Cà phê · Lịch sử · Thác nước",
    priceFrom: "1.200.000đ/xe",
    schedule: [
      { time: "07:30", label: "Khởi hành", desc: "Đón khách tại khách sạn hoặc sân bay Buôn Ma Thuột" },
      { time: "08:00", label: "Bảo Tàng Đắk Lắk", desc: "Khám phá di sản văn hóa Ê-đê, M'nông và lịch sử Tây Nguyên" },
      { time: "09:30", label: "Làng Cà Phê Trung Nguyên", desc: "Trải nghiệm văn hóa cà phê đặc trưng của vùng đất Buôn Ma Thuột" },
      { time: "11:30", label: "Bữa trưa đặc sản", desc: "Thưởng thức ẩm thực địa phương: cơm lam, gà nướng, rau rừng" },
      { time: "13:30", label: "Thác Dray Nur", desc: "Ngắm thác nước hùng vĩ giữa rừng già, chụp ảnh check-in" },
      { time: "16:00", label: "Đồi Thông Ea Kao", desc: "Check-in khung cảnh đồi thông thơ mộng ngay cạnh thành phố" },
      { time: "18:00", label: "Trở về", desc: "Đưa khách về khách sạn, kết thúc hành trình" },
    ],
  },
  {
    id: "2-ngay",
    tag: "Được chọn nhiều",
    title: "Tour 2 Ngày 1 Đêm – Phiêu Lưu Tây Nguyên",
    duration: "2 ngày 1 đêm",
    type: "adventure",
    highlight: "Buôn Đôn · Voi · Rừng Quốc Gia",
    priceFrom: "2.400.000đ/xe",
    schedule: [
      { time: "Ngày 1", label: "Thác Dray Nur → Dray Sáp → Buôn Đôn", desc: "Tham quan hai thác nước nổi tiếng, chiều đến Buôn Đôn – làng dân tộc M'nông và Ê-đê cùng khu vui chơi cưỡi voi" },
      { time: "Tối ngày 1", label: "Nghỉ đêm tại Buôn Đôn hoặc BMT", desc: "Thưởng thức ẩm thực đêm, giao lưu văn hóa (tự sắp xếp)" },
      { time: "Ngày 2 – Sáng", label: "Vườn Quốc Gia Yok Đôn", desc: "Khám phá rừng khộp đặc trưng Tây Nguyên – môi trường sống của voi rừng" },
      { time: "Ngày 2 – Chiều", label: "Hồ Lắk & Làng M'nông", desc: "Thuyền độc mộc trên hồ, thăm làng dân tộc bản địa, ngắm hoàng hôn trên hồ" },
      { time: "17:30", label: "Trở về Buôn Ma Thuột", desc: "Kết thúc hành trình 2 ngày đầy trải nghiệm" },
    ],
  },
  {
    id: "3-ngay",
    tag: "Trọn vẹn nhất",
    title: "Tour 3 Ngày 2 Đêm – Khám Phá Tây Nguyên Toàn Diện",
    duration: "3 ngày 2 đêm",
    type: "full",
    highlight: "Toàn Đắk Lắk · Cà Phê · Voi · Hồ Lắk",
    priceFrom: "3.600.000đ/xe",
    schedule: [
      { time: "Ngày 1", label: "City Tour Buôn Ma Thuột", desc: "Bảo tàng Đắk Lắk, Làng Cà Phê Trung Nguyên, Thác Dray Nur, chợ đêm Buôn Ma Thuột" },
      { time: "Ngày 2", label: "Buôn Đôn & Yok Đôn", desc: "Vườn Quốc Gia Yok Đôn, cưỡi voi Buôn Đôn, làng dân tộc M'nông, Thác Dray Sáp" },
      { time: "Ngày 3 – Sáng", label: "Hồ Lắk & Làng văn hóa", desc: "Hồ nước ngọt lớn nhất Tây Nguyên, thuyền độc mộc, homestay M'nông (tùy chọn)" },
      { time: "Ngày 3 – Chiều", label: "Đồi Cỏ Hồng M'Đrăk", desc: "Check-in đồng cỏ hồng nổi tiếng (mùa khô tháng 12–3) – điểm cuối hoàn hảo" },
      { time: "17:00", label: "Trở về Buôn Ma Thuột", desc: "Đưa khách về khách sạn, kết thúc hành trình Tây Nguyên" },
    ],
  },
];

const pricingData = [
  {
    duration: "Tour 1 ngày",
    xe4: { total: "1.200.000đ", perPerson: "~300.000đ/người" },
    xe7: { total: "1.500.000đ", perPerson: "~215.000đ/người" },
    xe16: { total: "2.200.000đ", perPerson: "~138.000đ/người" },
  },
  {
    duration: "Tour 2 ngày 1 đêm",
    xe4: { total: "2.400.000đ", perPerson: "~600.000đ/người" },
    xe7: { total: "3.000.000đ", perPerson: "~430.000đ/người" },
    xe16: { total: "4.400.000đ", perPerson: "~275.000đ/người" },
  },
  {
    duration: "Tour 3 ngày 2 đêm",
    xe4: { total: "3.600.000đ", perPerson: "~900.000đ/người" },
    xe7: { total: "4.500.000đ", perPerson: "~643.000đ/người" },
    xe16: { total: "6.600.000đ", perPerson: "~413.000đ/người" },
  },
];

const reasons = [
  {
    title: "Linh hoạt 100% lịch trình",
    desc: "Tour đoàn có lịch cố định – bạn phải đi theo. Xe riêng: bạn dậy muộn, ăn sáng lâu hay muốn dừng thêm chỗ nào đó đều được. Không ai phải chờ ai.",
  },
  {
    title: "Riêng tư, thoải mái",
    desc: "Chỉ có gia đình hoặc nhóm bạn của bạn trên xe. Không chia sẻ không gian với người lạ, không nghe hướng dẫn viên nói liên tục vào loa.",
  },
  {
    title: "Tài xế kiêm hướng dẫn viên bản địa",
    desc: "Tài xế của DVDL là người Đắk Lắk, biết rõ từng góc phố, quán ngon và đường tắt. Họ tư vấn thực tế hơn bất kỳ sách hướng dẫn du lịch nào.",
  },
  {
    title: "Rẻ hơn cho nhóm từ 4 người",
    desc: "Tour đoàn tính giá từ 1.200.000đ/người/ngày. Xe riêng 4 chỗ chỉ 1.200.000đ/xe – đi 4 người thì mỗi người chỉ 300.000đ, tiết kiệm 75%.",
  },
  {
    title: "Không phát sinh chi phí ẩn",
    desc: "Tour đoàn thường ghé cửa hàng đối tác bắt buộc. Xe riêng: bạn mua sắm ở đâu là quyết định của bạn. Giá báo là giá trọn gói xe + tài xế + xăng.",
  },
];

const faqs = [
  {
    q: "Tour Đắk Lắk giá bao nhiêu tiền?",
    a: "Tour Đắk Lắk xe riêng giá từ 1.200.000đ/xe/ngày (xe 4 chỗ). Đi nhóm 4 người chỉ 300.000đ/người/ngày – rẻ hơn nhiều so với tour đoàn thông thường (từ 1.200.000đ/người/ngày). Tour 2N1Đ từ 2.400.000đ/xe, tour 3N2Đ từ 3.600.000đ/xe.",
  },
  {
    q: "Tour 2 ngày 1 đêm Đắk Lắk bao gồm những gì?",
    a: "Bao gồm: xe riêng, tài xế bản địa, nhiên liệu. Lịch trình: Thác Dray Nur, Dray Sáp, Buôn Đôn, Yok Đôn, Hồ Lắk. Chưa bao gồm: khách sạn, vé tham quan (ước tính 50.000–150.000đ/người), bữa ăn và phí cầu đường.",
  },
  {
    q: "Đi tour Đắk Lắk mùa nào đẹp nhất?",
    a: "Mùa đẹp nhất: tháng 11 – tháng 4 (mùa khô), thời tiết mát, đường dễ đi. Tháng 3 có Lễ Hội Cà Phê Buôn Ma Thuột – đặt xe sớm 5–7 ngày. Tháng 12–3 thấy Đồi Cỏ Hồng M'Đrăk đẹp nhất.",
  },
  {
    q: "Tour xe riêng có tài xế khác gì tour đoàn?",
    a: "Hoàn toàn khác: tự quyết giờ đi, điểm dừng và thời gian ở mỗi nơi. Không chờ người lạ, không bị cắt ngắn. Nhóm 4 người trở lên còn rẻ hơn tour đoàn, trải nghiệm tốt hơn nhiều lần.",
  },
  {
    q: "Có thể tùy chỉnh lịch trình không?",
    a: "Có – 100% tùy chỉnh. Thêm/bớt điểm, đổi thứ tự, điều chỉnh giờ, kết hợp với Đà Lạt/Nha Trang/Pleiku. Liên hệ để tư vấn miễn phí và lên lịch trình theo yêu cầu riêng của bạn.",
  },
];

export default function TourDakLak() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="text-gray-800">
        {/* ── Hero ── */}
        <section className="relative h-[420px] w-full">
          <Image
            src="/images/taynguyen.webp"
            alt="Tour Đắk Lắk xe riêng có tài xế – khám phá Tây Nguyên"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70 flex flex-col items-center justify-center gap-4 px-4">
            <div className="inline-flex items-center gap-2 bg-lemon-500/20 border border-lemon-400/40 text-lemon-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-1">
              Từ 1.200.000đ/xe · Tài xế bản địa · Đặt ngay hôm nay
            </div>
            <h1 className="text-3xl md:text-5xl text-white font-bold text-center leading-tight max-w-3xl">
              Tour Đắk Lắk 2-3 Ngày: Khám Phá Tây Nguyên Với Xe Riêng Có Tài Xế
            </h1>
            <p className="text-white/85 text-base md:text-lg text-center max-w-2xl">
              Lịch trình riêng tư · Không chờ tour đoàn · Tùy chỉnh tự do 100%
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              <a
                href="#dat-tour"
                className="bg-lemon-500 text-forest-700 font-bold px-7 py-3 rounded-full text-base hover:bg-lemon-400 transition hover:scale-105 shadow-lg"
              >
                Đặt Tour Ngay
              </a>
              <a
                href="#lich-trinh"
                className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3 rounded-full text-base hover:bg-white/20 transition"
              >
                Xem lịch trình
              </a>
            </div>
          </div>
        </section>

        {/* ── Quick answer + intro ── */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          {/* TL;DR — 30–50 word definitive answer for AI extractors */}
          <div
            className="bg-forest-50 border-l-4 border-forest-500 rounded-r-2xl px-6 py-5 mb-6"
            data-testid="tldr"
          >
            <p className="font-bold text-forest-700 text-base mb-1">Tóm tắt</p>
            <p className="text-gray-800 text-[15px] leading-relaxed">
              Tour Đắk Lắk xe riêng có tài xế bản địa, giá từ 1.200.000đ/xe/ngày, với 3 gói linh hoạt:
              văn hóa 1 ngày, phiêu lưu 2N1Đ, toàn diện 3N2Đ. Hành trình tùy chỉnh tự do qua Buôn Đôn,
              Hồ Lắk, Yok Đôn, Dray Nur – không phụ thu ẩn, phục vụ 24/7 tại Buôn Ma Thuột.
            </p>
          </div>

          {/* Price answer box */}
          <div className="bg-lemon-50 border-l-4 border-lemon-500 rounded-r-2xl px-6 py-5 mb-8">
            <p className="font-bold text-forest-700 text-base mb-1">
              Tour Đắk Lắk giá bao nhiêu?
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Xe riêng 4 chỗ (1–4 người): từ{" "}
              <strong className="text-forest-600">1.200.000đ/xe/ngày</strong> →{" "}
              <strong>~300.000đ/người</strong> nếu đi nhóm 4. Xe 7 chỗ từ{" "}
              <strong className="text-forest-600">1.500.000đ/xe/ngày</strong>. Tour 2 ngày
              1 đêm từ <strong>2.400.000đ/xe</strong>. Tour 3 ngày 2 đêm từ{" "}
              <strong>3.600.000đ/xe</strong>. Giá đã bao gồm tài xế và nhiên liệu.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-forest-600 mb-6">
            Tour Đắk Lắk Xe Riêng – Trải Nghiệm Tây Nguyên Theo Cách Của Bạn
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
            <p>
              <strong>DVDL Đại Dương Ban Mê</strong> cung cấp dịch vụ{" "}
              <strong>tour Đắk Lắk xe riêng có tài xế</strong> linh hoạt với 3 gói
              lịch trình phù hợp mọi nhu cầu: từ khám phá văn hóa thành phố 1 ngày đến
              hành trình Tây Nguyên toàn diện 3 ngày 2 đêm. Khác với tour đoàn cố định,
              chúng tôi cho phép bạn tự quyết giờ đi, điểm dừng và thời gian ở mỗi nơi.
            </p>
            <p>
              Đắk Lắk – thủ phủ cà phê Việt Nam – sở hữu hệ sinh thái du lịch phong phú:
              từ{" "}
              <strong>Vườn Quốc Gia Yok Đôn</strong> với đàn voi rừng, thác nước hùng vĩ{" "}
              <strong>Dray Nur</strong> và <strong>Dray Sáp</strong>, đến{" "}
              <strong>Hồ Lắk</strong> xanh ngắt và những làng dân tộc M&apos;nông còn giữ nguyên
              nét văn hóa truyền thống. Mỗi điểm đến đều cần thời gian và không gian riêng
              để thực sự trải nghiệm.
            </p>
            <p>
              Đội tài xế của chúng tôi là người Đắk Lắk bản địa – am hiểu từng con đường,
              quán ăn ngon và góc chụp ảnh đẹp nhất. Họ không chỉ lái xe mà còn là người
              bạn đồng hành thực sự, sẵn sàng điều chỉnh lịch trình theo thời tiết và
              sở thích của bạn.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {[
              { icon: "🗺️", label: "3 gói lịch trình", sub: "1 ngày · 2N1Đ · 3N2Đ" },
              { icon: "🚗", label: "Xe riêng hoàn toàn", sub: "4, 7, 16 chỗ" },
              { icon: "👨‍✈️", label: "Tài xế bản địa", sub: "Am hiểu địa phương" },
              { icon: "⚡", label: "100% linh hoạt", sub: "Tùy chỉnh tự do" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-forest-50 rounded-2xl p-5 text-center border border-forest-100"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-forest-700 text-sm">{item.label}</div>
                <div className="text-xs text-gray-500 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Xe riêng vs tour đoàn ── */}
        <section className="bg-gray-50 py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-forest-600 mb-3 text-center">
              Tại Sao Nên Chọn Xe Riêng Thay Vì Tour Đoàn?
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm">
              5 lý do khách đã trải nghiệm cả hai đều chọn xe riêng lần sau
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {reasons.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="shrink-0 w-7 h-7 rounded-full bg-lemon-100 flex items-center justify-center text-forest-600 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                    <div className="text-gray-600 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Itineraries ── */}
        <section id="lich-trinh" className="bg-forest-50 py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-600 mb-2 text-center">
              3 Gói Lịch Trình Tour Đắk Lắk
            </h2>
            <p className="text-center text-gray-500 mb-10 text-sm">
              Chọn gói phù hợp hoặc yêu cầu lịch trình tùy chỉnh 100%
            </p>
            <div className="space-y-8">
              {itineraries.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="bg-lemon-500 text-forest-700 text-xs font-bold px-3 py-1 rounded-full">
                        {tour.tag}
                      </span>
                      <h3 className="text-xl font-bold text-forest-700">{tour.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm shrink-0">
                      <span className="text-gray-500">{tour.highlight}</span>
                      <span className="font-bold text-forest-600 text-base">
                        Từ {tour.priceFrom}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <div className="space-y-3">
                      {tour.schedule.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="shrink-0 w-24 text-xs font-semibold text-moss-600 pt-0.5">
                            {step.time}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800 text-sm">
                              {step.label}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                              {step.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-forest-600 text-center mb-2">
            Bảng Giá Tour Đắk Lắk 2025
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            Giá thuê xe theo gói tour – bao gồm tài xế và nhiên liệu
          </p>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-200 shadow-sm text-sm">
              <thead className="bg-moss-100 text-moss-700">
                <tr>
                  <th className="py-3 px-4 text-left">Gói tour</th>
                  <th className="py-3 px-4 text-center">
                    Xe 4 chỗ
                    <span className="block text-xs font-normal text-gray-500">
                      (1–4 người)
                    </span>
                  </th>
                  <th className="py-3 px-4 text-center">
                    Xe 7 chỗ
                    <span className="block text-xs font-normal text-gray-500">
                      (1–7 người)
                    </span>
                  </th>
                  <th className="py-3 px-4 text-center">
                    Xe 16 chỗ
                    <span className="block text-xs font-normal text-gray-500">
                      (1–16 người)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {pricingData.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="py-3 px-4 font-medium">{row.duration}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="font-bold text-forest-600">{row.xe4.total}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{row.xe4.perPerson}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="font-bold text-forest-600">{row.xe7.total}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{row.xe7.perPerson}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="font-bold text-forest-600">{row.xe16.total}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{row.xe16.perPerson}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">
            * Giá xe trọn gói, đã bao gồm tài xế và nhiên liệu. Ước tính mỗi người dựa
            trên xe đầy chỗ. Chưa bao gồm khách sạn, vé tham quan, bữa ăn, phí cầu đường
            và VAT. Liên hệ để nhận báo giá chính xác.
          </p>

          <div className="mt-8 bg-forest-500 rounded-2xl p-7 text-center text-white">
            <h3 className="text-lg font-bold mb-2">Cần báo giá cho nhóm của bạn?</h3>
            <p className="text-white/80 text-sm mb-4">
              Giá có thể điều chỉnh theo số lượng ngày, điểm đến và mùa cao điểm. Đặt ngay
              để được tư vấn lịch trình và báo giá miễn phí.
            </p>
            <a
              href="#dat-tour"
              className="inline-block bg-lemon-500 text-forest-700 font-bold px-8 py-3 rounded-full hover:bg-lemon-400 transition hover:scale-105"
            >
              Đặt Tour & Nhận Báo Giá
            </a>
          </div>
        </section>

        {/* ── Inline booking form ── */}
        <section id="dat-tour" className="max-w-2xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold text-forest-600 mb-2 text-center">
            Đặt Tour Đắk Lắk Ngay Hôm Nay
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            Điền thông tin để nhận lịch trình chi tiết và báo giá trong 30 phút
          </p>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
            <TourBookingForm />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-4xl mx-auto px-6 pb-14">
          <h2 className="text-2xl font-bold text-forest-600 mb-8 text-center">
            Câu Hỏi Thường Gặp Về Tour Đắk Lắk
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

        {/* ── Authoritative references (E-E-A-T + GEO citation signal) ── */}
        <section className="max-w-4xl mx-auto px-6 pb-14">
          <h2 className="text-xl font-bold text-forest-600 mb-4">
            Nguồn tham khảo & Thông tin chính thức
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Thông tin về các điểm đến trong tour được tham chiếu từ các nguồn chính thức:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
            <li>
              <a
                href="https://yokdonnationalpark.vn/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-forest-600 hover:underline font-medium"
              >
                Vườn Quốc Gia Yok Đôn
              </a>{" "}
              – trang thông tin chính thức về rừng khộp, đàn voi rừng và các tour sinh thái được cấp phép.
            </li>
            <li>
              <a
                href="https://svhttdldaklak.gov.vn/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-forest-600 hover:underline font-medium"
              >
                Sở Văn hóa, Thể thao và Du lịch Đắk Lắk
              </a>{" "}
              – cơ quan quản lý nhà nước về du lịch tại Đắk Lắk, cập nhật sự kiện và quy định hoạt động.
            </li>
            <li>
              <a
                href="https://dulichdaklak.gov.vn/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-forest-600 hover:underline font-medium"
              >
                Cổng thông tin du lịch Đắk Lắk
              </a>{" "}
              – danh mục điểm đến, lễ hội cà phê Buôn Ma Thuột và bản đồ du lịch tỉnh.
            </li>
            <li>
              <a
                href="https://www.gso.gov.vn/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-forest-600 hover:underline font-medium"
              >
                Tổng cục Thống kê (GSO)
              </a>{" "}
              – số liệu thống kê chính thức về lượng khách du lịch và kinh tế Đắk Lắk.
            </li>
          </ul>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-forest-500 py-14 px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Sẵn sàng khám phá Tây Nguyên cùng chúng tôi?
          </h2>
          <p className="text-white/80 text-base mb-2 max-w-xl mx-auto">
            Đặt tour ngay hôm nay – lịch trình riêng, giá cạnh tranh, phục vụ 24/7.
          </p>
          <p className="text-lemon-400 font-bold text-lg mb-7">
            📍 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#dat-tour"
              className="bg-lemon-500 text-forest-700 font-bold px-9 py-4 rounded-full text-lg hover:bg-lemon-400 transition hover:scale-105 shadow-lg"
            >
              Đặt Tour Ngay
            </a>
            <a
              href="tel:0941437070"
              className="bg-white/15 border-2 border-white/50 text-white font-semibold px-9 py-4 rounded-full text-lg hover:bg-white/25 transition"
            >
              Gọi: 0941.437.070
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/70 text-sm">
            <Link href="/thue-xe-du-lich-dak-lak" className="hover:text-lemon-400 transition">
              Thuê xe du lịch Đắk Lắk
            </Link>
            <Link href="/bang-gia" className="hover:text-lemon-400 transition">
              Bảng giá thuê xe
            </Link>
            <Link href="/lien-he" className="hover:text-lemon-400 transition">
              Liên hệ tư vấn
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
