// Dak Lak travel rental page copy, per locale.
//
// Layout lives once in src/features/thue-xe/travel-page.tsx. Internal links are
// built from the route registry so a path change in src/lib/i18n/routes.ts
// reaches this page automatically; the outbound reference links are real
// third-party URLs and stay written out.

import { path, type Locale } from "@/lib/i18n";
import type { TravelContent } from "@/features/thue-xe/travel-page";

export const travelContent: Record<Locale, TravelContent> = {
  vi: {
    hero: {
      imageAlt: "Thuê xe du lịch Đắk Lắk – DVDL Đại Dương Ban Mê",
      h1: "Thuê Xe Du Lịch Đắk Lắk – Xe 4–45 Chỗ Có Tài Xế",
      subtitleHtml: "Xe đời mới, tài xế chuyên nghiệp, giá từ<!-- --> <strong class=\"text-lemon-400\">13.000đ/km</strong>. Phục vụ tham quan và liên tỉnh 24/7.",
      callCta: "Gọi ngay: 0941.437.070",
      quoteCta: "Nhận báo giá",
      quoteHref: path("contact", "vi")!,
    },
    tldr: { label: "Tóm tắt", body: "Thuê xe du lịch Đắk Lắk tại DVDL Đại Dương Ban Mê: đội xe 4–45 chỗ và limousine có tài xế bản địa, giá từ 13.000đ/km hoặc trọn gói theo tuyến (Buôn Đôn, Hồ Lắk, Dray Nur, Yok Đôn, Đà Lạt, Nha Trang). Đặt xe 24/7, đón trả tận nơi, giá đã bao gồm tài xế và nhiên liệu." },
    intro: {
      h2: "Dịch Vụ Thuê Xe Du Lịch Đắk Lắk Uy Tín",
      paragraphsHtml: [
        "<strong>DVDL Đại Dương Ban Mê</strong> cung cấp dịch vụ<!-- --> <strong>thuê xe du lịch Đắk Lắk</strong> với đội xe đa dạng từ 4 chỗ đến 45 chỗ và limousine cao cấp. Tất cả xe đều có đời xe mới, được bảo dưỡng định kỳ và trang bị điều hòa, hệ thống giải trí hiện đại để mang đến hành trình thoải mái nhất cho quý khách.",
        "Đắk Lắk – vùng đất của cà phê, voi và các lễ hội Tây Nguyên – đang trở thành điểm đến du lịch hấp dẫn bậc nhất miền Trung. Với dịch vụ <strong>thuê xe có tài xế tại Buôn Ma Thuột</strong>, quý khách có thể dễ dàng khám phá những điểm đến nổi tiếng như<!-- --> <strong>Buôn Đôn</strong>, <strong>Hồ Lắk</strong>,<!-- --> <strong>Thác Dray Nur</strong>,<!-- --> <strong>Làng Cà Phê Trung Nguyên</strong> hay vườn quốc gia Yok Đôn mà không lo vấn đề giao thông và đường xá.",
        "Đội ngũ tài xế của chúng tôi là người địa phương, am hiểu đường sá và văn hóa Đắk Lắk. Ngoài việc lái xe an toàn, tài xế sẵn sàng tư vấn lịch trình, giới thiệu các địa điểm ăn uống đặc sản và hỗ trợ quý khách trong suốt chuyến đi – như một hướng dẫn viên du lịch không chính thức.",
      ],
      highlights: [
        { icon: "🚗", label: "Đội xe đa dạng", sub: "4 → 45 chỗ & Limousine" },
        { icon: "👨‍✈️", label: "Tài xế chuyên nghiệp", sub: "Am hiểu địa phương" },
        { icon: "⏰", label: "Phục vụ 24/7", sub: "Kể cả lễ, Tết" },
        { icon: "💰", label: "Giá minh bạch", sub: "Không phát sinh ẩn" },
      ],
    },
    destinations: {
      h2: "Khám Phá Đắk Lắk Cùng Chúng Tôi",
      lead: "Các địa điểm du lịch nổi tiếng – thuê xe đến ngay!",
      items: [
        { name: "Vườn Quốc Gia Yok Đôn & Buôn Đôn", km: "35km từ BMT", note: "Cưỡi voi, thác nước, làng dân tộc" },
        { name: "Hồ Lắk", km: "55km từ BMT", note: "Hồ nước ngọt lớn nhất Tây Nguyên" },
        { name: "Thác Dray Nur & Dray Sáp", km: "30km từ BMT", note: "Thác hùng vĩ giữa rừng già" },
        { name: "Làng Cà Phê Trung Nguyên", km: "Trung tâm BMT", note: "Trải nghiệm văn hóa cà phê Tây Nguyên" },
        { name: "Đồi Cỏ Hồng M'Đrăk", km: "90km từ BMT", note: "Check-in đồng cỏ mùa khô" },
        { name: "Bảo Tàng Đắk Lắk", km: "Trung tâm BMT", note: "Di sản văn hóa Ê-đê, M'nông" },
      ],
    },
    pricing: {
      h2: "Bảng Giá Thuê Xe Du Lịch Đắk Lắk 2026",
      kmTable: {
        h3: "Giá thuê xe theo số km (có tài xế)",
        headers: ["Loại xe", "0–50km", "50–100km", "Trên 100km"],
        rows: [
          ["Xe 4 chỗ", "13.000đ/km", "12.000đ/km", "11.000đ/km"],
          ["Xe 7 chỗ", "15.000đ/km", "13.000đ/km", "12.000đ/km"],
          ["Xe 16 chỗ", "20.000đ/km", "18.000đ/km", "15.000đ/km"],
          ["Xe 29 chỗ", "25.000đ/km", "22.000đ/km", "18.000đ/km"],
          ["Xe 45 chỗ", "30.000đ/km", "26.000đ/km", "22.000đ/km"],
        ],
        note: "* Giá đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí cầu đường, bến bãi và VAT.",
      },
      routeTable: {
        h3: "Giá thuê xe theo tuyến lộ trình từ Buôn Ma Thuột",
        headers: ["Tuyến đường", "Km", "Xe 4 chỗ", "Xe 7 chỗ", "Xe 16 chỗ"],
        rows: [
          ["Buôn Ma Thuột – Buôn Đôn", "35km", "450.000đ", "500.000đ", "700.000đ"],
          ["Buôn Ma Thuột – Hồ Lắk", "55km", "660.000đ", "720.000đ", "930.000đ"],
          ["Buôn Ma Thuột – Eakar", "54km", "650.000đ", "700.000đ", "900.000đ"],
          ["Buôn Ma Thuột – M'Đrăk", "90km", "1.000.000đ", "1.100.000đ", "1.400.000đ"],
          ["Buôn Ma Thuột – Pleiku (Gia Lai)", "185km", "1.900.000đ", "2.200.000đ", "2.800.000đ"],
          ["Buôn Ma Thuột – Đà Lạt", "250km", "2.600.000đ", "3.000.000đ", "3.800.000đ"],
          ["Buôn Ma Thuột – Nha Trang", "210km", "2.200.000đ", "2.500.000đ", "3.200.000đ"],
          ["Buôn Ma Thuột – Đắk Nông", "130km", "1.400.000đ", "1.600.000đ", "2.000.000đ"],
        ],
        note: "* Giá 1 chiều, đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí cầu đường và VAT. Liên hệ để báo giá khứ hồi.",
      },
      cta: {
        h3: "Cần báo giá chính xác cho hành trình của bạn?",
        body: "Giá niêm yết có thể thay đổi theo số lượng xe, thời điểm và lộ trình cụ thể. Liên hệ ngay để nhận báo giá tốt nhất!",
        button: "Gọi ngay: 0941.437.070",
      },
    },
    whyUs: {
      h2: "Tại Sao Khách Hàng Tin Chọn DVDL Đại Dương Ban Mê?",
      items: [
        { title: "Xe đời mới, bảo dưỡng định kỳ", desc: "100% xe được kiểm tra kỹ trước mỗi chuyến đi. Điều hòa mát, ghế ngồi thoải mái, hệ thống âm thanh hiện đại." },
        { title: "Tài xế bản địa, kinh nghiệm lâu năm", desc: "Tài xế là người Đắk Lắk, thông thuộc đường sá, văn hóa và các địa danh. Lịch sự, tận tâm và có thể giao tiếp tiếng Anh cơ bản." },
        { title: "Giá rõ ràng, không phụ thu ẩn", desc: "Báo giá trọn gói bao gồm tài xế và nhiên liệu. Các khoản phát sinh (cầu đường, bến bãi) sẽ được thông báo trước." },
        { title: "Đặt xe dễ dàng, hỗ trợ 24/7", desc: "Đặt xe qua điện thoại, Zalo hoặc trang web. Nhân viên hỗ trợ cả ngày lễ và cuối tuần để đảm bảo chuyến đi của bạn thuận lợi." },
        { title: "Bảo hiểm đầy đủ", desc: "Tất cả xe đều có bảo hiểm dân sự và bảo hiểm thân xe. Hành khách được bảo vệ toàn diện trong suốt hành trình." },
        { title: "Phục vụ mọi nhu cầu", desc: "Từ đưa đón sân bay, tham quan 1 ngày đến tour nhiều ngày xuyên Tây Nguyên. Chúng tôi phục vụ cả cá nhân, gia đình lẫn đoàn doanh nghiệp." },
      ],
    },
    faq: {
      h2: "Câu Hỏi Thường Gặp Về Thuê Xe Du Lịch Đắk Lắk",
      items: [
        { q: "Thuê xe du lịch Đắk Lắk giá bao nhiêu?", a: "Giá thuê xe dao động từ 13.000đ/km (xe 4 chỗ) đến 30.000đ/km (xe 45 chỗ). Tuyến cố định như Sân bay – TP từ 200.000đ. Giá đã bao gồm tài xế và xăng dầu." },
        { q: "Có cần đặt xe trước không?", a: "Nên đặt trước 1–2 ngày. Mùa lễ hội cà phê (tháng 3) và dịp Tết cần đặt trước 5–7 ngày. Đoàn xe lớn từ 29 chỗ nên đặt trước ít nhất 3 ngày." },
        { q: "DVDL Đại Dương Ban Mê có cho thuê xe tự lái không?", a: "Chúng tôi chủ yếu cung cấp dịch vụ thuê xe có tài xế để đảm bảo an toàn. Liên hệ hotline 0941.437.070 để được tư vấn thêm." },
        { q: "Có thể đặt xe đi Đà Lạt, Nha Trang từ Đắk Lắk không?", a: "Có. Chúng tôi phục vụ tất cả tuyến liên tỉnh: Đà Lạt (~250km), Nha Trang (~210km), Pleiku (~185km), Quy Nhơn (~300km) và nhiều tỉnh thành khác." },
        { q: "Giá thuê xe bao gồm những gì?", a: "Giá đã bao gồm tài xế chuyên nghiệp và nhiên liệu. Chưa gồm phí cầu đường, phí bến bãi và VAT. Không có phát sinh chi phí ẩn." },
        { q: "Xe có bảo hiểm không?", a: "Tất cả xe đều có bảo hiểm dân sự bắt buộc và bảo hiểm thân xe. Khách hàng được đảm bảo an toàn tối đa trong suốt hành trình." },
      ],
    },
    references: {
      h2: "Nguồn tham khảo & Thông tin chính thức",
      lead: "Thông tin về các điểm đến được tham chiếu từ các nguồn quản lý nhà nước và đơn vị chính thức:",
      items: [
        { href: "https://yokdonnationalpark.vn/", text: "Vườn Quốc Gia Yok Đôn", note: "– trang chính thức của vườn quốc gia với thông tin về rừng khộp và tour sinh thái được cấp phép." },
        { href: "https://svhttdldaklak.gov.vn/", text: "Sở Văn hóa, Thể thao và Du lịch Đắk Lắk", note: "– cơ quan quản lý nhà nước về du lịch tỉnh Đắk Lắk." },
        { href: "https://dulichdaklak.gov.vn/", text: "Cổng thông tin du lịch Đắk Lắk", note: "– bản đồ và danh mục điểm đến chính thức, lễ hội cà phê Buôn Ma Thuột." },
      ],
    },
    finalCta: {
      h2: "Sẵn sàng khám phá Đắk Lắk cùng chúng tôi?",
      body: "Liên hệ ngay để đặt xe và nhận báo giá tốt nhất. Phục vụ 24/7 kể cả lễ, Tết.",
      address: "📍 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk",
      callButton: "Gọi ngay: 0941.437.070",
      quoteButton: "Gửi yêu cầu đặt xe",
      quoteHref: path("contact", "vi")!,
      links: [
        { href: path("carRental", "vi")!, text: "Xem tất cả dịch vụ thuê xe" },
        { href: path("pricing", "vi")!, text: "Bảng giá chi tiết" },
        { href: path("about", "vi")!, text: "Về DVDL Đại Dương Ban Mê" },
      ],
    },
  },
  en: {
    hero: {
      imageAlt: "Dak Lak tourist car rental - DVDL Dai Duong Ban Me",
      h1: "Dak Lak Tourist Car Rental – 4-45 Seat Cars With a Driver",
      subtitleHtml: "Late-model vehicles, professional drivers, from<!-- --> <strong class=\"text-lemon-400\">13,000₫/km</strong>. Sightseeing and inter-provincial trips, 24/7.",
      callCta: "Call now: 0941 437 070",
      quoteCta: "Get a quote",
      quoteHref: path("contact", "en")!,
    },
    tldr: { label: "In short", body: "Tourist car rental in Dak Lak with DVDL Đại Dương Ban Mê: a fleet of 4-45 seat vehicles and limousines with local drivers, from 13,000₫/km or a fixed price per route (Buon Don, Lak Lake, Dray Nur, Yok Don, Da Lat, Nha Trang). Book 24/7, door-to-door pick-up, driver and fuel included." },
    intro: {
      h2: "Tourist Car Rental in Dak Lak You Can Rely On",
      paragraphsHtml: [
        "<strong>DVDL Đại Dương Ban Mê</strong> provides<!-- --> <strong>tourist car rental across Dak Lak</strong> with a fleet ranging from 4-seat cars to 45-seat coaches and premium limousines. Every vehicle is a recent model, serviced on a regular schedule and fitted with air conditioning and a modern entertainment system, so your journey is as comfortable as it can be.",
        "Dak Lak — the land of coffee, elephants and Central Highlands festivals — has become one of central Vietnam&#x27;s most appealing destinations. With a<!-- --> <strong>car and driver in Buon Ma Thuot</strong> you can easily reach well-known sights such as <strong>Buon Don</strong>,<!-- --> <strong>Lak Lake</strong>, <strong>Dray Nur Waterfall</strong>, the <strong>Trung Nguyen Coffee Village</strong> and Yok Don National Park without worrying about traffic or road conditions.",
        "Our drivers are local people who know the roads and the culture of Dak Lak. Beyond driving safely, they are happy to advise on your itinerary, point you to the best local food and help you throughout the trip — rather like an unofficial tour guide.",
      ],
      highlights: [
        { icon: "🚗", label: "A varied fleet", sub: "4 → 45 seats & limousines" },
        { icon: "👨‍✈️", label: "Professional drivers", sub: "Local knowledge" },
        { icon: "⏰", label: "Open 24/7", sub: "Holidays included" },
        { icon: "💰", label: "Transparent pricing", sub: "No hidden extras" },
      ],
    },
    destinations: {
      h2: "Discover Dak Lak With Us",
      lead: "The best-known destinations — book a car and go.",
      items: [
        { name: "Yok Don National Park & Buon Don", km: "35km from BMT", note: "Elephants, waterfalls, ethnic villages" },
        { name: "Lak Lake", km: "55km from BMT", note: "The largest freshwater lake in the Central Highlands" },
        { name: "Dray Nur & Dray Sap Waterfalls", km: "30km from BMT", note: "Majestic falls deep in old-growth forest" },
        { name: "Trung Nguyen Coffee Village", km: "Central BMT", note: "Central Highlands coffee culture first-hand" },
        { name: "M'Drak Pink Grass Hills", km: "90km from BMT", note: "Dry-season grassland, a photographer's favourite" },
        { name: "Dak Lak Museum", km: "Central BMT", note: "Ede and M'nong cultural heritage" },
      ],
    },
    pricing: {
      h2: "Dak Lak Tourist Car Rental Prices 2026",
      kmTable: {
        h3: "Rates per kilometre (driver included)",
        headers: ["Vehicle", "0–50km", "50–100km", "Over 100km"],
        rows: [
          ["4-seat car", "13,000₫/km", "12,000₫/km", "11,000₫/km"],
          ["7-seat car", "15,000₫/km", "13,000₫/km", "12,000₫/km"],
          ["16-seat van", "20,000₫/km", "18,000₫/km", "15,000₫/km"],
          ["29-seat coach", "25,000₫/km", "22,000₫/km", "18,000₫/km"],
          ["45-seat coach", "30,000₫/km", "26,000₫/km", "22,000₫/km"],
        ],
        note: "* Driver and fuel included. Road tolls, parking fees and VAT are not included.",
      },
      routeTable: {
        h3: "Fixed prices by route from Buon Ma Thuot",
        headers: ["Route", "Km", "4-seat", "7-seat", "16-seat"],
        rows: [
          ["Buon Ma Thuot – Buon Don", "35km", "450,000₫", "500,000₫", "700,000₫"],
          ["Buon Ma Thuot – Lak Lake", "55km", "660,000₫", "720,000₫", "930,000₫"],
          ["Buon Ma Thuot – Ea Kar", "54km", "650,000₫", "700,000₫", "900,000₫"],
          ["Buon Ma Thuot – M'Drak", "90km", "1,000,000₫", "1,100,000₫", "1,400,000₫"],
          ["Buon Ma Thuot – Pleiku (Gia Lai)", "185km", "1,900,000₫", "2,200,000₫", "2,800,000₫"],
          ["Buon Ma Thuot – Da Lat", "250km", "2,600,000₫", "3,000,000₫", "3,800,000₫"],
          ["Buon Ma Thuot – Nha Trang", "210km", "2,200,000₫", "2,500,000₫", "3,200,000₫"],
          ["Buon Ma Thuot – Dak Nong", "130km", "1,400,000₫", "1,600,000₫", "2,000,000₫"],
        ],
        note: "* One-way prices, driver and fuel included. Road tolls and VAT are not included. Ask us for a return-trip quote.",
      },
      cta: {
        h3: "Need an exact quote for your trip?",
        body: "Listed prices can change with the number of vehicles, the date and the exact route. Get in touch for our best price.",
        button: "Call now: 0941 437 070",
      },
    },
    whyUs: {
      h2: "Why Customers Choose DVDL Đại Dương Ban Mê",
      items: [
        { title: "Recent models, regularly serviced", desc: "Every vehicle is checked thoroughly before each trip. Cold air conditioning, comfortable seats and a modern sound system." },
        { title: "Local drivers with years of experience", desc: "Our drivers come from Dak Lak and know the roads, the culture and the landmarks. Courteous, attentive, and able to hold a basic conversation in English." },
        { title: "Clear prices, no hidden surcharges", desc: "An all-in quote covering driver and fuel. Anything extra (tolls, parking) is told to you up front." },
        { title: "Easy booking, support 24/7", desc: "Book by phone, Zalo or through the website. Our staff work through holidays and weekends so your trip runs smoothly." },
        { title: "Fully insured", desc: "Every vehicle carries civil liability and own-damage insurance. Passengers are covered for the whole journey." },
        { title: "Whatever you need", desc: "From an airport transfer or a day trip to a multi-day tour across the Central Highlands — for individuals, families and corporate groups alike." },
      ],
    },
    faq: {
      h2: "Frequently Asked Questions About Car Rental in Dak Lak",
      items: [
        { q: "How much does tourist car rental in Dak Lak cost?", a: "Rates run from 13,000₫/km (4-seat car) to 30,000₫/km (45-seat coach). Fixed routes such as the airport to the city start at 200,000₫. The price includes the driver and fuel." },
        { q: "Do I need to book in advance?", a: "Book 1-2 days ahead. During the coffee festival (March) and around Tet, book 5-7 days ahead. Large groups needing a 29-seat coach or bigger should book at least 3 days ahead." },
        { q: "Does DVDL Dai Duong Ban Me offer self-drive rental?", a: "We mainly provide cars with a driver, for safety. Call the hotline on 0941 437 070 and we will talk you through the options." },
        { q: "Can I book a car from Dak Lak to Da Lat or Nha Trang?", a: "Yes. We cover every inter-provincial route: Da Lat (~250km), Nha Trang (~210km), Pleiku (~185km), Quy Nhon (~300km) and many other provinces." },
        { q: "What does the rental price include?", a: "A professional driver and fuel. It excludes road tolls, parking fees and VAT. There are no hidden charges." },
        { q: "Are the vehicles insured?", a: "Every vehicle carries compulsory civil liability insurance and own-damage cover, so you are fully protected for the whole journey." },
      ],
    },
    references: {
      h2: "References & official sources",
      lead: "Information about these destinations is drawn from state management bodies and official organisations:",
      items: [
        { href: "https://yokdonnationalpark.vn/", text: "Yok Don National Park", note: "– the park's official site, covering the dipterocarp forest and licensed eco-tours." },
        { href: "https://svhttdldaklak.gov.vn/", text: "Dak Lak Department of Culture, Sports and Tourism", note: "– the provincial authority for tourism in Dak Lak." },
        { href: "https://dulichdaklak.gov.vn/", text: "Dak Lak tourism portal", note: "– official maps and destination listings, and the Buon Ma Thuot coffee festival." },
      ],
    },
    finalCta: {
      h2: "Ready to explore Dak Lak with us?",
      body: "Get in touch to book a car and receive our best price. Open 24/7, holidays included.",
      address: "📍 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk",
      callButton: "Call now: 0941 437 070",
      quoteButton: "Send a booking request",
      quoteHref: path("contact", "en")!,
      links: [
        { href: path("carRental", "en")!, text: "All car rental services" },
        { href: path("pricing", "en")!, text: "Full price list" },
        { href: path("about", "en")!, text: "About DVDL Đại Dương Ban Mê" },
      ],
    },
  },
};
