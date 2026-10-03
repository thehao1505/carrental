// Corporate rental page copy, per locale.
//
// Layout lives once in src/features/thue-xe/corporate-page.tsx. Internal links
// are built from the route registry rather than written out, so a path change
// in src/lib/i18n/routes.ts reaches this page automatically.

import { carRentalPath, carRentalSlugPair, path, type Locale } from "@/lib/i18n";
import type { CorporateContent } from "@/features/thue-xe/corporate-page";

export const corporateContent: Record<Locale, CorporateContent> = {
  vi: {
    hero: {
      imageAlt: "Thuê xe doanh nghiệp tại Buôn Ma Thuột",
      h1: "Thuê Xe Doanh Nghiệp Đắk Lắk",
      subtitle: "Hợp đồng tháng/quý/năm · Xuất hóa đơn VAT 10% · Thanh toán công nợ · Xe 4-45 chỗ có tài xế",
    },
    tldrHtml: "<strong>Tóm tắt:</strong> DVDL Đại Dương Ban Mê cung cấp dịch vụ thuê xe trọn gói cho doanh nghiệp tại Buôn Ma Thuột - Đắk Lắk:<strong> hợp đồng dài hạn</strong> (tháng/quý/năm),<!-- --> <strong>xuất hóa đơn VAT 10%</strong>,<!-- --> <strong>thanh toán chuyển khoản công nợ</strong>, xe 4-45 chỗ và limousine có tài xế chuyên nghiệp. Phục vụ đưa đón nhân viên, khách đối tác, hội nghị, sự kiện và team building.",
    useCases: {
      h2: "Giải pháp cho doanh nghiệp tại Đắk Lắk",
      items: [
        { title: "🚐 Đưa đón nhân viên định kỳ", body: "Hợp đồng tuyến cố định theo tháng - xe đưa đón ca sáng/chiều, công ty - khu công nghiệp, văn phòng - nhà ở tập thể. Tài xế cố định, đúng giờ." },
        { title: "🤝 Đón tiếp khách đối tác / khách VIP", body: "Xe sedan cao cấp, limousine, tài xế lịch sự đồng phục - đón tại sân bay BMV, đưa đến khách sạn, văn phòng, nhà máy. Hỗ trợ 24/7." },
        { title: "🎤 Hội nghị, hội thảo, team building", body: "Đoàn xe 16-45 chỗ phục vụ sự kiện công ty tại Buôn Ma Thuột, Hồ Lắk, Buôn Đôn. Có thể bao xe dự phòng, micro hướng dẫn viên." },
        { title: "🏗️ Công tác liên tỉnh & khảo sát thị trường", body: "Xe 4-16 chỗ phục vụ đoàn công tác đi Pleiku, Kon Tum, Đà Lạt, Nha Trang. Tài xế quen tuyến Tây Nguyên." },
      ],
    },
    advantages: {
      h2: "Ưu đãi & cam kết dành cho khách hàng doanh nghiệp",
      items: [
        { title: "📄 Hóa đơn VAT 10%", body: "Xuất hóa đơn điện tử đầy đủ theo Thông tư 78/2021 - gửi email định kỳ. Doanh nghiệp khấu trừ thuế hợp lệ." },
        { title: "💳 Thanh toán linh hoạt", body: "Chuyển khoản theo kỳ (cuối tháng/cuối quý). Hỗ trợ thanh toán công nợ với hợp đồng từ 1 tháng. Không phụ thu phí chuyển khoản." },
        { title: "📉 Chiết khấu dài hạn", body: "Hợp đồng tháng: ưu đãi 10-15%. Hợp đồng quý: 15-20%. Hợp đồng năm: 20-30% so với thuê lẻ - ưu tiên điều xe mùa cao điểm." },
        { title: "🛡️ Bảo hiểm đầy đủ", body: "Bảo hiểm trách nhiệm dân sự + bảo hiểm hành khách theo quy định. Hợp đồng ghi rõ trách nhiệm các bên khi có sự cố." },
        { title: "📋 Hợp đồng minh bạch", body: "Hợp đồng kinh tế chuẩn pháp lý - rõ điều khoản về số chuyến, km, phụ phí, thời gian, điều kiện hủy. Hai bên ký công ty." },
        { title: "🚘 Xe dự phòng", body: "Hợp đồng dài hạn được cam kết xe dự phòng khi xe chính bảo dưỡng - không gián đoạn lịch đưa đón." },
      ],
    },
    process: {
      h2: "Quy trình ký hợp đồng",
      steps: [
        { title: "Liên hệ & khảo sát nhu cầu", body: "- Doanh nghiệp gọi 0941 437 070 hoặc email cung cấp thông tin: số chuyến/tháng, tuyến đường, loại xe cần, thời lượng hợp đồng." },
        { title: "Báo giá chi tiết", body: "- Trong 24h, gửi báo giá kèm điều khoản chiết khấu, lịch trình, loại xe đề xuất." },
        { title: "Ký hợp đồng kinh tế", body: "- Soạn thảo, hai bên ký công ty. Có thể ký bản giấy hoặc hợp đồng điện tử eContract." },
        { title: "Triển khai & vận hành", body: "- Bố trí xe + tài xế cố định. Báo cáo chuyến và xuất hóa đơn VAT theo kỳ." },
        { title: "Thanh toán & đối soát định kỳ", body: "- Bảng kê chuyến + hóa đơn VAT gửi email cuối kỳ. Doanh nghiệp chuyển khoản theo điều khoản." },
      ],
    },
    faq: {
      h2: "Câu hỏi thường gặp",
      items: [
        { q: "Thuê xe doanh nghiệp tại Đắk Lắk có xuất hóa đơn VAT không?", a: "Có. DVDL Đại Dương Ban Mê xuất hóa đơn VAT 10% đầy đủ theo quy định cho mọi hợp đồng doanh nghiệp. Khách hàng cung cấp thông tin công ty (tên, MST, địa chỉ) khi ký hợp đồng, hóa đơn điện tử được gửi qua email sau mỗi kỳ thanh toán." },
        { q: "Hợp đồng thuê xe doanh nghiệp có thanh toán công nợ được không?", a: "Có. Với hợp đồng dài hạn (từ 1 tháng trở lên), DVDL Đại Dương Ban Mê hỗ trợ thanh toán chuyển khoản theo kỳ (cuối tháng, cuối quý) hoặc theo tiến độ thỏa thuận. Điều khoản công nợ ghi rõ trong hợp đồng." },
        { q: "Thuê xe đưa đón nhân viên giá bao nhiêu?", a: "Hợp đồng đưa đón nhân viên theo tuyến cố định có giá ưu đãi so với thuê lẻ - tiết kiệm 15-30% tùy số lượng chuyến/tháng. Liên hệ hotline 0941 437 070 để được khảo sát tuyến và báo giá chính xác." },
        { q: "Có hợp đồng thuê xe đưa đón khách đối tác/khách VIP không?", a: "Có. Chúng tôi có gói riêng dành cho doanh nghiệp thường xuyên đón tiếp khách đối tác: xe limousine, sedan cao cấp, tài xế nhiều kinh nghiệm, đồng phục lịch sự, có thể đón tại sân bay BMV và khách sạn theo lịch yêu cầu. Tham khảo thêm xe limousine." },
        { q: "Thuê xe hội nghị, hội thảo, team building tại Đắk Lắk có gói trọn gói không?", a: "Có. Doanh nghiệp tổ chức hội nghị/team building tại Buôn Ma Thuột, Hồ Lắk, Buôn Đôn có thể đặt gói trọn gói: xe đưa đón đoàn (16-45 chỗ), tài xế, nhiên liệu, hỗ trợ điều phối. Hợp đồng linh hoạt theo số ngày sự kiện, có thể bao gồm xe dự phòng." },
        { q: "Hợp đồng thuê xe doanh nghiệp kéo dài tối thiểu bao lâu?", a: "Tối thiểu 1 tháng cho hợp đồng đưa đón cố định. Sự kiện 1-3 ngày (hội nghị, team building) ký hợp đồng ngắn hạn. Doanh nghiệp ký hợp đồng năm có chiết khấu đáng kể và được ưu tiên điều xe trong mùa cao điểm." },
      ],
    },
    cta: {
      h2: "Nhận báo giá hợp đồng doanh nghiệp",
      bodyHtml: "Gọi trực tiếp<!-- --> <a href=\"tel:+84941437070\" class=\"text-forest-500 font-semibold underline\">0941 437 070</a> <!-- -->hoặc gửi email kèm thông tin nhu cầu - chúng tôi phản hồi trong 24h làm việc.",
      primary: "Gửi yêu cầu báo giá",
      secondary: "📞 Gọi ngay 0941 437 070",
      primaryHref: path("contact", "vi")!,
    },
    related: {
      h2: "Tham khảo thêm",
      items: [
        {
          href: carRentalPath(carRentalSlugPair("thue-xe-16-cho", "vi")!["vi"], "vi"),
          text: "Thuê xe 16 chỗ tại Buôn Ma Thuột",
          note: "- phù hợp đưa đón nhân viên",
        },
        {
          href: carRentalPath(carRentalSlugPair("thue-xe-29-cho", "vi")!["vi"], "vi"),
          text: "Thuê xe 29 chỗ tại Buôn Ma Thuột",
          note: "- đoàn hội nghị / team building",
        },
        {
          href: carRentalPath(carRentalSlugPair("thue-xe-limousine", "vi")!["vi"], "vi"),
          text: "Thuê xe limousine",
          note: "- đón khách đối tác VIP",
        },
        {
          href: path("pricing", "vi")!,
          text: "Bảng giá thuê xe chi tiết",
          note: "",
        },
        {
          href: path("contact", "vi")!,
          text: "Liên hệ & gửi yêu cầu báo giá",
          note: "",
        },
      ],
    },
  },
  en: {
    hero: {
      imageAlt: "Corporate car rental in Buon Ma Thuot",
      h1: "Corporate Car Rental in Dak Lak",
      subtitle: "Monthly, quarterly and annual contracts · 10% VAT invoices · Payment on account · 4-45 seat vehicles with a driver",
    },
    tldrHtml: "<strong>In short:</strong> DVDL Đại Dương Ban Mê provides end-to-end corporate car rental in Buon Ma Thuot, Dak Lak:<strong> long-term contracts</strong> (monthly, quarterly, annual), <strong>10% VAT invoices</strong>,<!-- --> <strong>payment on account by bank transfer</strong>, and 4-45 seat vehicles plus limousines with professional drivers. We handle staff shuttles, partner transfers, conferences, events and team building.",
    useCases: {
      h2: "Solutions for businesses in Dak Lak",
      items: [
        { title: "🚐 Regular staff shuttles", body: "A fixed-route monthly contract — morning and afternoon shifts, office to industrial park, office to staff accommodation. The same driver every day, always on time." },
        { title: "🤝 Partner and VIP guest transfers", body: "Premium sedans and limousines with courteous drivers in uniform — pick-up at BMV airport, on to the hotel, office or plant. Available 24/7." },
        { title: "🎤 Conferences, seminars and team building", body: "A fleet of 16-45 seat vehicles for company events in Buon Ma Thuot, Lak Lake and Buon Don. Standby vehicles and guide microphones available." },
        { title: "🏗️ Inter-provincial business trips & market visits", body: "4-16 seat vehicles for teams travelling to Pleiku, Kon Tum, Da Lat and Nha Trang, with drivers who know the Central Highlands routes." },
      ],
    },
    advantages: {
      h2: "What corporate clients get",
      items: [
        { title: "📄 10% VAT invoices", body: "Full e-invoices under Circular 78/2021, emailed each period, so your company can deduct the tax properly." },
        { title: "💳 Flexible payment", body: "Bank transfer per period (month-end or quarter-end). Payment on account from one month upwards. No transfer surcharge." },
        { title: "📉 Long-term discounts", body: "Monthly contracts 10-15% off, quarterly 15-20%, annual 20-30% against ad-hoc rates — plus priority allocation in peak season." },
        { title: "🛡️ Full insurance", body: "Compulsory civil liability plus passenger insurance. The contract sets out each party's responsibilities should anything go wrong." },
        { title: "📋 Transparent contracts", body: "A legally sound commercial contract — trips, kilometres, surcharges, timings and cancellation terms all spelled out, and signed company to company." },
        { title: "🚘 Standby vehicles", body: "Long-term contracts include a guaranteed standby vehicle while the main one is serviced, so the shuttle schedule never breaks." },
      ],
    },
    process: {
      h2: "How the contract is set up",
      steps: [
        { title: "Get in touch and tell us what you need", body: "— call 0941 437 070 or email us with the number of trips per month, the routes, the type of vehicle and how long the contract should run." },
        { title: "Detailed quote", body: "— within 24 hours you receive a quote with discount terms, the schedule and our recommended vehicles." },
        { title: "Sign the commercial contract", body: "— we draft it and both companies sign, on paper or as an eContract." },
        { title: "Roll-out and day-to-day running", body: "— we assign a dedicated vehicle and driver, report on trips and issue the VAT invoice each period." },
        { title: "Payment and periodic reconciliation", body: "— a trip statement and VAT invoice are emailed at the end of each period, and you transfer per the agreed terms." },
      ],
    },
    faq: {
      h2: "Frequently asked questions",
      items: [
        { q: "Do you issue VAT invoices for corporate car rental in Dak Lak?", a: "Yes. DVDL Dai Duong Ban Me issues full 10% VAT invoices as required by law for every corporate contract. You provide your company details (name, tax code, address) when signing, and the e-invoice is emailed after each payment period." },
        { q: "Can a corporate rental contract be paid on account?", a: "Yes. On long-term contracts (one month or more) DVDL Dai Duong Ban Me accepts bank transfer per period (month-end, quarter-end) or against an agreed schedule. The credit terms are written into the contract." },
        { q: "How much does a staff shuttle service cost?", a: "A fixed-route staff shuttle contract is cheaper than booking trip by trip — typically 15-30% less, depending on how many trips per month. Call the hotline on 0941 437 070 and we will survey the route and give you an exact quote." },
        { q: "Do you offer contracts for partner and VIP guest transfers?", a: "Yes. We have a dedicated package for companies that regularly host partners: limousines and premium sedans, highly experienced drivers in smart uniform, pick-up at BMV airport and hotels to your schedule. See our limousine service for details." },
        { q: "Is there an all-inclusive package for conferences and team building in Dak Lak?", a: "Yes. Companies running a conference or team-building event in Buon Ma Thuot, Lak Lake or Buon Don can book an all-inclusive package: group transport (16-45 seats), drivers, fuel and coordination support. The contract flexes with the number of event days and can include a standby vehicle." },
        { q: "What is the minimum term for a corporate rental contract?", a: "One month for a fixed shuttle contract. One to three day events (conferences, team building) are covered by a short-term contract. Companies signing an annual contract receive a substantial discount and priority allocation during peak season." },
      ],
    },
    cta: {
      h2: "Request a corporate quote",
      bodyHtml: "Call us on<!-- --> <a href=\"tel:+84941437070\" class=\"text-forest-500 font-semibold underline\">0941 437 070</a> <!-- -->or email your requirements — we reply within 24 working hours.",
      primary: "Send a quote request",
      secondary: "📞 Call 0941 437 070",
      primaryHref: path("contact", "en")!,
    },
    related: {
      h2: "See also",
      items: [
        {
          href: carRentalPath(carRentalSlugPair("thue-xe-16-cho", "vi")!["en"], "en"),
          text: "16-seat van hire in Buon Ma Thuot",
          note: "- the usual choice for staff shuttles",
        },
        {
          href: carRentalPath(carRentalSlugPair("thue-xe-29-cho", "vi")!["en"], "en"),
          text: "29-seat coach hire in Buon Ma Thuot",
          note: "- conference groups and team building",
        },
        {
          href: carRentalPath(carRentalSlugPair("thue-xe-limousine", "vi")!["en"], "en"),
          text: "Limousine hire",
          note: "- for VIP partners",
        },
        {
          href: path("pricing", "en")!,
          text: "Full rental price list",
          note: "",
        },
        {
          href: path("contact", "en")!,
          text: "Contact us & request a quote",
          note: "",
        },
      ],
    },
  },
};
