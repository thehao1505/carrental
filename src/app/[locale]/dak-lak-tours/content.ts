// Dak Lak tours page copy, per locale.
//
// Layout lives once in src/features/tour-dak-lak/tours-page.tsx. Internal links
// come from the route registry, except the Vietnamese travel link, which points
// at /thue-xe-du-lich-dak-lak — a 301 source in next.config.ts. It is preserved
// verbatim so this refactor changes no markup; pointing it straight at the
// destination is a separate internal-link fix.

import { path, type Locale } from "@/lib/i18n";
import type { ToursContent } from "@/features/tour-dak-lak/tours-page";

export const toursContent: Record<Locale, ToursContent> = {
  vi: {
    anchors: { itineraries: "lich-trinh", booking: "dat-tour" },
    hero: {
      imageAlt: "Tour Đắk Lắk xe riêng có tài xế – khám phá Tây Nguyên",
      badge: "Từ 1.200.000đ/xe · Tài xế bản địa · Đặt ngay hôm nay",
      h1: "Tour Đắk Lắk 2-3 Ngày: Khám Phá Tây Nguyên Với Xe Riêng Có Tài Xế",
      subtitle: "Lịch trình riêng tư · Không chờ tour đoàn · Tùy chỉnh tự do 100%",
      bookCta: "Đặt Tour Ngay",
      itineraryCta: "Xem lịch trình",
    },
    tldr: { label: "Tóm tắt", body: "Tour Đắk Lắk xe riêng có tài xế bản địa, giá từ 1.200.000đ/xe/ngày, với 3 gói linh hoạt: văn hóa 1 ngày, phiêu lưu 2N1Đ, toàn diện 3N2Đ. Hành trình tùy chỉnh tự do qua Buôn Đôn, Hồ Lắk, Yok Đôn, Dray Nur – không phụ thu ẩn, phục vụ 24/7 tại Buôn Ma Thuột." },
    priceAnswer: { label: "Tour Đắk Lắk giá bao nhiêu?", bodyHtml: "Xe riêng 4 chỗ (1–4 người): từ <strong class=\"text-forest-600\">1.200.000đ/xe/ngày</strong> → <strong>~300.000đ/người</strong> nếu đi nhóm 4. Xe 7 chỗ từ <strong class=\"text-forest-600\">1.500.000đ/xe/ngày</strong>. Tour 2 ngày 1 đêm từ <strong>2.400.000đ/xe</strong>. Tour 3 ngày 2 đêm từ <strong>3.600.000đ/xe</strong>. Giá đã bao gồm tài xế và nhiên liệu." },
    intro: {
      h2: "Tour Đắk Lắk Xe Riêng – Trải Nghiệm Tây Nguyên Theo Cách Của Bạn",
      paragraphsHtml: [
        "<strong>DVDL Đại Dương Ban Mê</strong> cung cấp dịch vụ <strong>tour Đắk Lắk xe riêng có tài xế</strong> linh hoạt với 3 gói lịch trình phù hợp mọi nhu cầu: từ khám phá văn hóa thành phố 1 ngày đến hành trình Tây Nguyên toàn diện 3 ngày 2 đêm. Khác với tour đoàn cố định, chúng tôi cho phép bạn tự quyết giờ đi, điểm dừng và thời gian ở mỗi nơi.",
        "Đắk Lắk – thủ phủ cà phê Việt Nam – sở hữu hệ sinh thái du lịch phong phú: từ <strong>Vườn Quốc Gia Yok Đôn</strong> với đàn voi rừng, thác nước hùng vĩ <strong>Dray Nur</strong> và <strong>Dray Sáp</strong>, đến <strong>Hồ Lắk</strong> xanh ngắt và những làng dân tộc M&#x27;nông còn giữ nguyên nét văn hóa truyền thống. Mỗi điểm đến đều cần thời gian và không gian riêng để thực sự trải nghiệm.",
        "Đội tài xế của chúng tôi là người Đắk Lắk bản địa – am hiểu từng con đường, quán ăn ngon và góc chụp ảnh đẹp nhất. Họ không chỉ lái xe mà còn là người bạn đồng hành thực sự, sẵn sàng điều chỉnh lịch trình theo thời tiết và sở thích của bạn.",
      ],
      highlights: [
        { icon: "🗺️", label: "3 gói lịch trình", sub: "1 ngày · 2N1Đ · 3N2Đ" },
        { icon: "🚗", label: "Xe riêng hoàn toàn", sub: "4, 7, 16 chỗ" },
        { icon: "👨‍✈️", label: "Tài xế bản địa", sub: "Am hiểu địa phương" },
        { icon: "⚡", label: "100% linh hoạt", sub: "Tùy chỉnh tự do" },
      ],
    },
    reasons: {
      h2: "Tại Sao Nên Chọn Xe Riêng Thay Vì Tour Đoàn?",
      lead: "5 lý do khách đã trải nghiệm cả hai đều chọn xe riêng lần sau",
      items: [
        { title: "Linh hoạt 100% lịch trình", desc: "Tour đoàn có lịch cố định – bạn phải đi theo. Xe riêng: bạn dậy muộn, ăn sáng lâu hay muốn dừng thêm chỗ nào đó đều được. Không ai phải chờ ai." },
        { title: "Riêng tư, thoải mái", desc: "Chỉ có gia đình hoặc nhóm bạn của bạn trên xe. Không chia sẻ không gian với người lạ, không nghe hướng dẫn viên nói liên tục vào loa." },
        { title: "Tài xế kiêm hướng dẫn viên bản địa", desc: "Tài xế của DVDL là người Đắk Lắk, biết rõ từng góc phố, quán ngon và đường tắt. Họ tư vấn thực tế hơn bất kỳ sách hướng dẫn du lịch nào." },
        { title: "Rẻ hơn cho nhóm từ 4 người", desc: "Tour đoàn tính giá từ 1.200.000đ/người/ngày. Xe riêng 4 chỗ chỉ 1.200.000đ/xe – đi 4 người thì mỗi người chỉ 300.000đ, tiết kiệm 75%." },
        { title: "Không phát sinh chi phí ẩn", desc: "Tour đoàn thường ghé cửa hàng đối tác bắt buộc. Xe riêng: bạn mua sắm ở đâu là quyết định của bạn. Giá báo là giá trọn gói xe + tài xế + xăng." },
      ],
    },
    itineraries: {
      h2: "3 Gói Lịch Trình Tour Đắk Lắk",
      lead: "Chọn gói phù hợp hoặc yêu cầu lịch trình tùy chỉnh 100%",
      items: [
        {
          id: "tour-1",
          tag: "Phổ biến",
          title: "Tour 1 Ngày – Văn Hóa Buôn Ma Thuột",
          highlight: "Cà phê · Lịch sử · Thác nước",
          priceFrom: "Từ 1.200.000đ/xe",
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
          id: "tour-2",
          tag: "Được chọn nhiều",
          title: "Tour 2 Ngày 1 Đêm – Phiêu Lưu Tây Nguyên",
          highlight: "Buôn Đôn · Voi · Rừng Quốc Gia",
          priceFrom: "Từ 2.400.000đ/xe",
          schedule: [
            { time: "Ngày 1", label: "Thác Dray Nur → Dray Sáp → Buôn Đôn", desc: "Tham quan hai thác nước nổi tiếng, chiều đến Buôn Đôn – làng dân tộc M'nông và Ê-đê cùng khu vui chơi cưỡi voi" },
            { time: "Tối ngày 1", label: "Nghỉ đêm tại Buôn Đôn hoặc BMT", desc: "Thưởng thức ẩm thực đêm, giao lưu văn hóa (tự sắp xếp)" },
            { time: "Ngày 2 – Sáng", label: "Vườn Quốc Gia Yok Đôn", desc: "Khám phá rừng khộp đặc trưng Tây Nguyên – môi trường sống của voi rừng" },
            { time: "Ngày 2 – Chiều", label: "Hồ Lắk & Làng M'nông", desc: "Thuyền độc mộc trên hồ, thăm làng dân tộc bản địa, ngắm hoàng hôn trên hồ" },
            { time: "17:30", label: "Trở về Buôn Ma Thuột", desc: "Kết thúc hành trình 2 ngày đầy trải nghiệm" },
          ],
        },
        {
          id: "tour-3",
          tag: "Trọn vẹn nhất",
          title: "Tour 3 Ngày 2 Đêm – Khám Phá Tây Nguyên Toàn Diện",
          highlight: "Toàn Đắk Lắk · Cà Phê · Voi · Hồ Lắk",
          priceFrom: "Từ 3.600.000đ/xe",
          schedule: [
            { time: "Ngày 1", label: "City Tour Buôn Ma Thuột", desc: "Bảo tàng Đắk Lắk, Làng Cà Phê Trung Nguyên, Thác Dray Nur, chợ đêm Buôn Ma Thuột" },
            { time: "Ngày 2", label: "Buôn Đôn & Yok Đôn", desc: "Vườn Quốc Gia Yok Đôn, cưỡi voi Buôn Đôn, làng dân tộc M'nông, Thác Dray Sáp" },
            { time: "Ngày 3 – Sáng", label: "Hồ Lắk & Làng văn hóa", desc: "Hồ nước ngọt lớn nhất Tây Nguyên, thuyền độc mộc, homestay M'nông (tùy chọn)" },
            { time: "Ngày 3 – Chiều", label: "Đồi Cỏ Hồng M'Đrăk", desc: "Check-in đồng cỏ hồng nổi tiếng (mùa khô tháng 12–3) – điểm cuối hoàn hảo" },
            { time: "17:00", label: "Trở về Buôn Ma Thuột", desc: "Đưa khách về khách sạn, kết thúc hành trình Tây Nguyên" },
          ],
        },
      ],
    },
    pricing: {
      h2: "Bảng Giá Tour Đắk Lắk 2026",
      lead: "Giá thuê xe theo gói tour – bao gồm tài xế và nhiên liệu",
      durationHeader: "Gói tour",
      headers: [
        { label: "Xe 4 chỗ", sub: "(1–4 người)" },
        { label: "Xe 7 chỗ", sub: "(1–7 người)" },
        { label: "Xe 16 chỗ", sub: "(1–16 người)" },
      ],
      rows: [
        { duration: "Tour 1 ngày", cells: [{ total: "1.200.000đ", perPerson: "~300.000đ/người" }, { total: "1.500.000đ", perPerson: "~215.000đ/người" }, { total: "2.200.000đ", perPerson: "~138.000đ/người" }] },
        { duration: "Tour 2 ngày 1 đêm", cells: [{ total: "2.400.000đ", perPerson: "~600.000đ/người" }, { total: "3.000.000đ", perPerson: "~430.000đ/người" }, { total: "4.400.000đ", perPerson: "~275.000đ/người" }] },
        { duration: "Tour 3 ngày 2 đêm", cells: [{ total: "3.600.000đ", perPerson: "~900.000đ/người" }, { total: "4.500.000đ", perPerson: "~643.000đ/người" }, { total: "6.600.000đ", perPerson: "~413.000đ/người" }] },
      ],
      note: "* Giá xe trọn gói, đã bao gồm tài xế và nhiên liệu. Ước tính mỗi người dựa trên xe đầy chỗ. Chưa bao gồm khách sạn, vé tham quan, bữa ăn, phí cầu đường và VAT. Liên hệ để nhận báo giá chính xác.",
      cta: {
        h3: "Cần báo giá cho nhóm của bạn?",
        body: "Giá có thể điều chỉnh theo số lượng ngày, điểm đến và mùa cao điểm. Đặt ngay để được tư vấn lịch trình và báo giá miễn phí.",
        button: "Đặt Tour & Nhận Báo Giá",
      },
    },
    booking: { h2: "Đặt Tour Đắk Lắk Ngay Hôm Nay", lead: "Điền thông tin để nhận lịch trình chi tiết và báo giá trong 30 phút" },
    faq: {
      h2: "Câu Hỏi Thường Gặp Về Tour Đắk Lắk",
      items: [
        { q: "Tour Đắk Lắk giá bao nhiêu tiền?", a: "Tour Đắk Lắk xe riêng giá từ 1.200.000đ/xe/ngày (xe 4 chỗ). Đi nhóm 4 người chỉ 300.000đ/người/ngày – rẻ hơn nhiều so với tour đoàn thông thường (từ 1.200.000đ/người/ngày). Tour 2N1Đ từ 2.400.000đ/xe, tour 3N2Đ từ 3.600.000đ/xe." },
        { q: "Tour 2 ngày 1 đêm Đắk Lắk bao gồm những gì?", a: "Bao gồm: xe riêng, tài xế bản địa, nhiên liệu. Lịch trình: Thác Dray Nur, Dray Sáp, Buôn Đôn, Yok Đôn, Hồ Lắk. Chưa bao gồm: khách sạn, vé tham quan (ước tính 50.000–150.000đ/người), bữa ăn và phí cầu đường." },
        { q: "Đi tour Đắk Lắk mùa nào đẹp nhất?", a: "Mùa đẹp nhất: tháng 11 – tháng 4 (mùa khô), thời tiết mát, đường dễ đi. Tháng 3 có Lễ Hội Cà Phê Buôn Ma Thuột – đặt xe sớm 5–7 ngày. Tháng 12–3 thấy Đồi Cỏ Hồng M'Đrăk đẹp nhất." },
        { q: "Tour xe riêng có tài xế khác gì tour đoàn?", a: "Hoàn toàn khác: tự quyết giờ đi, điểm dừng và thời gian ở mỗi nơi. Không chờ người lạ, không bị cắt ngắn. Nhóm 4 người trở lên còn rẻ hơn tour đoàn, trải nghiệm tốt hơn nhiều lần." },
        { q: "Có thể tùy chỉnh lịch trình không?", a: "Có – 100% tùy chỉnh. Thêm/bớt điểm, đổi thứ tự, điều chỉnh giờ, kết hợp với Đà Lạt/Nha Trang/Pleiku. Liên hệ để tư vấn miễn phí và lên lịch trình theo yêu cầu riêng của bạn." },
      ],
    },
    references: {
      h2: "Nguồn tham khảo & Thông tin chính thức",
      lead: "Thông tin về các điểm đến trong tour được tham chiếu từ các nguồn chính thức:",
      items: [
        { href: "https://yokdonnationalpark.vn/", text: "Vườn Quốc Gia Yok Đôn", note: "– trang thông tin chính thức về rừng khộp, đàn voi rừng và các tour sinh thái được cấp phép." },
        { href: "https://svhttdldaklak.gov.vn/", text: "Sở Văn hóa, Thể thao và Du lịch Đắk Lắk", note: "– cơ quan quản lý nhà nước về du lịch tại Đắk Lắk, cập nhật sự kiện và quy định hoạt động." },
        { href: "https://dulichdaklak.gov.vn/", text: "Cổng thông tin du lịch Đắk Lắk", note: "– danh mục điểm đến, lễ hội cà phê Buôn Ma Thuột và bản đồ du lịch tỉnh." },
        { href: "https://www.gso.gov.vn/", text: "Tổng cục Thống kê (GSO)", note: "– số liệu thống kê chính thức về lượng khách du lịch và kinh tế Đắk Lắk." },
      ],
    },
    finalCta: {
      h2: "Sẵn sàng khám phá Tây Nguyên cùng chúng tôi?",
      body: "Đặt tour ngay hôm nay – lịch trình riêng, giá cạnh tranh, phục vụ 24/7.",
      address: "📍 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk",
      bookButton: "Đặt Tour Ngay",
      callButton: "Gọi: 0941.437.070",
      links: [
        { href: "/thue-xe-du-lich-dak-lak", text: "Thuê xe du lịch Đắk Lắk" },
        { href: path("pricing", "vi")!, text: "Bảng giá thuê xe" },
        { href: path("contact", "vi")!, text: "Liên hệ tư vấn" },
      ],
    },
  },
  en: {
    anchors: { itineraries: "itineraries", booking: "book-tour" },
    hero: {
      imageAlt: "Private Dak Lak tour with a driver - exploring the Central Highlands",
      badge: "From 1,200,000₫ per vehicle · Local driver · Book today",
      h1: "Dak Lak Tours, 2-3 Days: See the Central Highlands With Your Own Car and Driver",
      subtitle: "Your own itinerary · No group-tour waiting · 100% customisable",
      bookCta: "Book a tour",
      itineraryCta: "See the itineraries",
    },
    tldr: { label: "In short", body: "Private Dak Lak tours with a local driver, from 1,200,000₫ per vehicle per day, in three flexible packages: one day of culture, two days and a night of adventure, or three days and two nights covering everything. Build your own route through Buon Don, Lak Lake, Yok Don and Dray Nur — no hidden extras, available 24/7 in Buon Ma Thuot." },
    priceAnswer: { label: "How much is a Dak Lak tour?", bodyHtml: "A private 4-seat car (1–4 people): from <strong class=\"text-forest-600\">1,200,000₫ per vehicle per day</strong> → <strong>about 300,000₫ each</strong> for a group of four. A 7-seat car starts at <strong class=\"text-forest-600\">1,500,000₫ per vehicle per day</strong>. Two days and one night from <strong>2,400,000₫</strong>. Three days and two nights from <strong>3,600,000₫</strong>. Driver and fuel included." },
    intro: {
      h2: "Private Dak Lak Tours – the Central Highlands on Your Terms",
      paragraphsHtml: [
        "<strong>DVDL Đại Dương Ban Mê</strong> runs flexible <strong>private Dak Lak tours with a driver</strong>, in three packages to suit however you like to travel: from a single day of city culture to three days and two nights across the whole of the Central Highlands. Unlike a fixed group tour, you decide when to set off, where to stop and how long to stay.",
        "Dak Lak — the coffee capital of Vietnam — has an unusually rich mix of things to see: <strong>Yok Don National Park</strong> and its wild elephants, the great waterfalls of <strong>Dray Nur</strong> and <strong>Dray Sap</strong>, the deep green of <strong>Lak Lake</strong>, and M&#x27;nong villages that still keep their traditional way of life. Each of them deserves its own time and space to take in properly.",
        "Our drivers are Dak Lak locals who know every road, every good place to eat and every best angle for a photograph. They do more than drive — they are genuine travelling companions, happy to reshape the day around the weather and what you feel like doing.",
      ],
      highlights: [
        { icon: "🗺️", label: "3 itineraries", sub: "1 day · 2D1N · 3D2N" },
        { icon: "🚗", label: "A vehicle to yourself", sub: "4, 7 or 16 seats" },
        { icon: "👨‍✈️", label: "Local drivers", sub: "They know the ground" },
        { icon: "⚡", label: "100% flexible", sub: "Change anything" },
      ],
    },
    reasons: {
      h2: "Why Choose a Private Car Over a Group Tour?",
      lead: "Five reasons travellers who have tried both book privately the next time",
      items: [
        { title: "The itinerary is entirely yours", desc: "A group tour runs to a fixed schedule and you follow it. With your own vehicle you can have a lie-in, linger over breakfast, or add a stop on a whim. Nobody waits on anybody." },
        { title: "Private and comfortable", desc: "Only your family or your friends are in the car. No sharing the space with strangers, no guide talking into a microphone the whole way." },
        { title: "A local driver who doubles as a guide", desc: "Our drivers come from Dak Lak and know every street corner, every good restaurant and every shortcut. Their advice beats any guidebook." },
        { title: "Cheaper for groups of four or more", desc: "Group tours charge from 1,200,000₫ per person per day. A private 4-seat car is 1,200,000₫ for the whole vehicle — with four people that is 300,000₫ each, a saving of 75%." },
        { title: "No hidden costs", desc: "Group tours usually make compulsory stops at partner shops. With a private car, where you shop is up to you. The quoted price is all-in: vehicle, driver and fuel." },
      ],
    },
    itineraries: {
      h2: "Three Dak Lak Tour Itineraries",
      lead: "Pick one, or ask us to build something entirely your own",
      items: [
        {
          id: "tour-1",
          tag: "Popular",
          title: "1-Day Tour – Buon Ma Thuot Culture",
          highlight: "Coffee · History · Waterfalls",
          priceFrom: "From 1,200,000₫ per vehicle",
          schedule: [
            { time: "07:30", label: "Departure", desc: "Pick-up at your hotel or at Buon Ma Thuot airport" },
            { time: "08:00", label: "Dak Lak Museum", desc: "Ede and M'nong cultural heritage and the history of the Central Highlands" },
            { time: "09:30", label: "Trung Nguyen Coffee Village", desc: "The coffee culture Buon Ma Thuot is known for" },
            { time: "11:30", label: "Local lunch", desc: "Regional specialities: bamboo-tube rice, grilled chicken, wild greens" },
            { time: "13:30", label: "Dray Nur Waterfall", desc: "A majestic waterfall in old-growth forest, and plenty of photo stops" },
            { time: "16:00", label: "Ea Kao Pine Hill", desc: "A picturesque pine-covered hill right beside the city" },
            { time: "18:00", label: "Return", desc: "Back to your hotel, end of the tour" },
          ],
        },
        {
          id: "tour-2",
          tag: "Most booked",
          title: "2 Days 1 Night – Central Highlands Adventure",
          highlight: "Buon Don · Elephants · National park",
          priceFrom: "From 2,400,000₫ per vehicle",
          schedule: [
            { time: "Day 1", label: "Dray Nur → Dray Sap → Buon Don", desc: "Two well-known waterfalls in the morning, then Buon Don in the afternoon — an M'nong and Ede village with its elephant park" },
            { time: "Day 1, evening", label: "Overnight in Buon Don or BMT", desc: "Evening food and local culture (arranged by you)" },
            { time: "Day 2, morning", label: "Yok Don National Park", desc: "The dipterocarp forest typical of the Central Highlands, home to wild elephants" },
            { time: "Day 2, afternoon", label: "Lak Lake & M'nong village", desc: "A dugout canoe on the lake, a visit to the local village, and sunset over the water" },
            { time: "17:30", label: "Return to Buon Ma Thuot", desc: "End of a full two days" },
          ],
        },
        {
          id: "tour-3",
          tag: "Most complete",
          title: "3 Days 2 Nights – The Complete Central Highlands",
          highlight: "All of Dak Lak · Coffee · Elephants · Lak Lake",
          priceFrom: "From 3,600,000₫ per vehicle",
          schedule: [
            { time: "Day 1", label: "Buon Ma Thuot city tour", desc: "Dak Lak Museum, Trung Nguyen Coffee Village, Dray Nur Waterfall and the Buon Ma Thuot night market" },
            { time: "Day 2", label: "Buon Don & Yok Don", desc: "Yok Don National Park, the elephants at Buon Don, an M'nong village and Dray Sap Waterfall" },
            { time: "Day 3, morning", label: "Lak Lake & cultural village", desc: "The largest freshwater lake in the Central Highlands, a dugout canoe, and an optional M'nong homestay" },
            { time: "Day 3, afternoon", label: "M'Drak Pink Grass Hills", desc: "The famous pink grassland (dry season, December to March) — a perfect final stop" },
            { time: "17:00", label: "Return to Buon Ma Thuot", desc: "Back to your hotel, end of your Central Highlands journey" },
          ],
        },
      ],
    },
    pricing: {
      h2: "Dak Lak Tour Prices 2026",
      lead: "Vehicle hire per tour package — driver and fuel included",
      durationHeader: "Package",
      headers: [
        { label: "4-seat car", sub: "(1–4 people)" },
        { label: "7-seat car", sub: "(1–7 people)" },
        { label: "16-seat van", sub: "(1–16 people)" },
      ],
      rows: [
        { duration: "1-day tour", cells: [{ total: "1,200,000₫", perPerson: "~300,000₫ pp" }, { total: "1,500,000₫", perPerson: "~215,000₫ pp" }, { total: "2,200,000₫", perPerson: "~138,000₫ pp" }] },
        { duration: "2 days 1 night", cells: [{ total: "2,400,000₫", perPerson: "~600,000₫ pp" }, { total: "3,000,000₫", perPerson: "~430,000₫ pp" }, { total: "4,400,000₫", perPerson: "~275,000₫ pp" }] },
        { duration: "3 days 2 nights", cells: [{ total: "3,600,000₫", perPerson: "~900,000₫ pp" }, { total: "4,500,000₫", perPerson: "~643,000₫ pp" }, { total: "6,600,000₫", perPerson: "~413,000₫ pp" }] },
      ],
      note: "* All-in vehicle price, driver and fuel included. The per-person figure assumes the vehicle is full. Hotels, entrance tickets, meals, road tolls and VAT are not included. Contact us for an exact quote.",
      cta: {
        h3: "Need a quote for your group?",
        body: "Prices shift with the number of days, the destinations and the season. Book now for free itinerary advice and a quote.",
        button: "Book a tour & get a quote",
      },
    },
    booking: { h2: "Book Your Dak Lak Tour Today", lead: "Fill this in and we will send a detailed itinerary and a quote within 30 minutes" },
    faq: {
      h2: "Frequently Asked Questions About Dak Lak Tours",
      items: [
        { q: "How much does a Dak Lak tour cost?", a: "A private Dak Lak tour starts at 1,200,000₫ per vehicle per day (4-seat car). For a group of four that is just 300,000₫ per person per day — far less than a typical group tour at around 1,200,000₫ per person per day. Two days and one night start at 2,400,000₫ per vehicle, three days and two nights at 3,600,000₫." },
        { q: "What does the 2 day 1 night Dak Lak tour include?", a: "A private vehicle, a local driver and fuel. The itinerary covers Dray Nur, Dray Sap, Buon Don, Yok Don and Lak Lake. It excludes hotels, entrance tickets (roughly 50,000-150,000₫ per person), meals and road tolls." },
        { q: "When is the best time of year for a Dak Lak tour?", a: "November to April, the dry season — cool weather and easy roads. March brings the Buon Ma Thuot Coffee Festival, so book 5-7 days ahead. December to March is when the M'Drak Pink Grass Hills look their best." },
        { q: "How is a private tour different from a group tour?", a: "Completely: you decide when to leave, where to stop and how long to stay. No waiting for strangers, nothing cut short. From four people up it also costs less than a group tour, and the experience is far better." },
        { q: "Can I customise the itinerary?", a: "Yes — entirely. Add or drop stops, change the order, adjust the timings, or combine it with Da Lat, Nha Trang or Pleiku. Get in touch for free advice and a plan built around what you want." },
      ],
    },
    references: {
      h2: "References & official sources",
      lead: "Information about the destinations on these tours is drawn from official sources:",
      items: [
        { href: "https://yokdonnationalpark.vn/", text: "Yok Don National Park", note: "– the official site, covering the dipterocarp forest, the wild elephant herd and licensed eco-tours." },
        { href: "https://svhttdldaklak.gov.vn/", text: "Dak Lak Department of Culture, Sports and Tourism", note: "– the provincial tourism authority, with event listings and current regulations." },
        { href: "https://dulichdaklak.gov.vn/", text: "Dak Lak tourism portal", note: "– destination listings, the Buon Ma Thuot coffee festival and the provincial tourist map." },
        { href: "https://www.gso.gov.vn/", text: "General Statistics Office of Vietnam (GSO)", note: "– official statistics on visitor numbers and the Dak Lak economy." },
      ],
    },
    finalCta: {
      h2: "Ready to explore the Central Highlands with us?",
      body: "Book today — your own itinerary, competitive prices, available 24/7.",
      address: "📍 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk",
      bookButton: "Book a tour",
      callButton: "Call: 0941 437 070",
      links: [
        { href: path("carRentalTravel", "en")!, text: "Dak Lak tourist car rental" },
        { href: path("pricing", "en")!, text: "Car rental price list" },
        { href: path("contact", "en")!, text: "Contact us" },
      ],
    },
  },
};
