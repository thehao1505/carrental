import type { Dictionary } from "../types";
import { carRentalPath, path } from "../routes";

const p = (key: Parameters<typeof path>[0]) => path(key, "vi") as string;

export const vi = {
  htmlLang: "vi",

  site: {
    titleDefault: "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế | DVDL",
    titleTemplate: "%s | DVDL Đại Dương Ban Mê",
    description:
      "Cho thuê xe Đắk Lắk uy tín – xe 4-45 chỗ có tài xế, tour nội địa, team building và sự kiện tại Buôn Ma Thuột.",
    keywords: [
      "du lịch Buôn Ma Thuột",
      "thuê xe du lịch Đắk Lắk",
      "DVDL Đại Dương Ban Mê",
      "tour Daklak",
      "tour riêng BMT",
      "tổ chức sự kiện Đắk Lắk",
      "dịch vụ du lịch Daklak",
      "thuê xe tự lái Buôn Ma Thuột",
      "team building Đắk Lắk",
      "tour Buôn Ma Thuột",
    ],
    ogTitle:
      "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế | DVDL Đại Dương Ban Mê",
    ogImageAlt: "DVDL Đại Dương Ban Mê - Tour du lịch và thuê xe Đắk Lắk",
    twitterTitle: "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế",
  },

  header: {
    nav: [
      { label: "Giới thiệu", href: p("about") },
      { label: "Thuê xe", href: p("carRental") },
      { label: "Tin tức", href: p("news") },
      { label: "Tour Đắk Lắk", href: p("tours") },
      { label: "Bảng giá", href: p("pricing") },
    ],
    logoAlt: "logo",
    avatarAlt: "Ảnh đại diện",
    openMenu: "Mở menu điều hướng",
    closeMenu: "Đóng menu điều hướng",
  },

  contactButton: {
    label: "Liên hệ",
    copied: "Đã copy sđt",
  },

  subHeader: {
    address: "252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk",
  },

  floating: {
    callAria: "Gọi ngay {phone}",
    zaloLabel: "Nhắn Zalo",
    zaloAria: "Nhắn Zalo {phone}",
  },

  map: {
    title: "Bản đồ vị trí DVDL Đại Dương Ban Mê",
  },

  languageSwitcher: {
    label: "Chọn ngôn ngữ",
    options: [
      { locale: "vi", short: "VI", name: "Tiếng Việt" },
      { locale: "en", short: "EN", name: "English" },
    ],
  },

  localeSuggestion: {
    message: "Trang này có phiên bản tiếng Việt.",
    switchCta: "Xem bằng tiếng Việt",
    dismiss: "Đóng",
  },

  footer: {
    logoAlt: "logo",
    tagline:
      "Dịch vụ thuê xe uy tín, nhanh chóng, giá hợp lý. Đặt xe dễ dàng chỉ trong vài phút, sẵn sàng đồng hành cùng bạn trên mọi hành trình!",
    newsletterHeading:
      "Để lại email hoặc số điện thoại để nhận được ưu đãi mới nhất",
    inputPlaceholder: "example@gmail.com or 0941437070",
    invalidInput: "Vui lòng nhập email hoặc số điện thoại hợp lệ.",
    submit: "Gửi yêu cầu",
    submitting: "Đang gửi...",
    success: "Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ lại sớm.",
    error: "Có lỗi xảy ra. Vui lòng thử lại.",
    columns: [
      {
        title: "Trang",
        links: [
          { label: "Trang chủ", href: p("home") },
          { label: "Giới thiệu", href: p("about") },
          { label: "Tin tức", href: p("news") },
          { label: "Liên hệ", href: p("contact") },
        ],
      },
      {
        title: "Dịch vụ",
        links: [
          { label: "Tất cả dịch vụ thuê xe", href: p("carRental") },
          { label: "Thuê xe có tài xế", href: `${p("news")}/thue-xe-co-tai-xe` },
          { label: "Thuê xe du lịch Đắk Lắk", href: p("carRentalTravel") },
          {
            label: "Thuê xe 16 chỗ",
            href: carRentalPath("thue-xe-16-cho", "vi"),
          },
          { label: "Thuê xe đi du lịch", href: `${p("news")}/thue-xe-di-du-lich` },
          {
            label: "Thuê xe đi công tác",
            href: `${p("news")}/thue-xe-di-cong-tac`,
          },
        ],
      },
      {
        title: "Hỗ trợ",
        links: [
          { label: "Chính sách bảo mật", href: p("privacyPolicy") },
          { label: "Chính sách vận chuyển", href: p("shippingPolicy") },
        ],
      },
    ],
    contact: {
      title: "Liên hệ",
      facebook: "Facebook",
      zaloLabel: "Zalo: 0941 437 070",
      addressLines: ["252/6 Phan Huy Chú,", "Buôn Ma Thuột, Đắk Lắk, Vietnam"],
    },
  },

  newsSection: {
    heading: "Tin Tức & Cẩm Nang Du Lịch",
    noImage: "Chưa có ảnh",
    readMore: "Xem chi tiết →",
  },

  testimonials: {
    heading: "Khách hàng nói gì về chúng tôi?",
  },

  pagination: {
    ariaLabel: "Phân trang",
    prev: "← Trước",
    next: "Sau →",
  },

  notFound: {
    title: "Không tìm thấy trang",
    heading: "Không tìm thấy trang bạn cần",
    body: "Đường dẫn này không tồn tại hoặc đã được chuyển đi. Bạn có thể quay về trang chủ hoặc gọi hotline 0941.437.070 để được hỗ trợ trực tiếp.",
    homeCta: "Về trang chủ",
    contactCta: "Liên hệ",
  },

  pricing: {
    hero: {
      imageAlt: "Bảng giá thuê xe Buôn Ma Thuột",
      h1: "Bảng giá cho thuê xe ô tô du lịch tại Đắk Lắk năm 2026",
    },
    intro: {
      h2: "Mức giá thuê xe du lịch không cố định.",
      lead: "Giá thuê xe ô tô có thể thay đổi phụ thuộc vào những yếu tố sau đây:",
      factors: [
        "Loại xe.",
        "Số lượng xe.",
        "Quãng đường di chuyển.",
        "Thời điểm thuê xe",
        "Các dịch vụ kèm theo chuyến đi.",
      ],
      example:
        "Chẳng hạn, nếu quý khách thuê xe du lịch ở Buôn Ma Thuột đi Gia Lai sẽ có giá rẻ hơn nhiều so với thuê xe đi Đà Lạt, thuê xe đi 1 ngày sẽ rẻ hơn 2 ngày.",
      advice:
        "Để nắm được giá cho thuê xe ô tô chính xác, bạn hãy liên hệ trực tiếp với nhân viên của công ty. Chuyên viên tư vấn của DVDL Đại Dương Ban Mê sẽ giúp bạn nắm được bảng giá thuê xe chính xác nhất. Hoặc có thể tham khảo bảng giá thuê xe dưới đây:",
    },
    tables: [
      {
        h2: "Bảng giá dịch vụ thuê xe đưa đón sân bay",
        headers: ["Lộ trình", "Thời gian", "Km", "Xe 4 chỗ", "Xe 7 chỗ", "Xe 16 chỗ"],
        rows: [
          ["Sân bay BMT – Trung tâm TP", "1 lượt", "12km"],
          ["Sân bay BMT – Buôn Hồ hoặc Krông Ana", "1 lượt", "40km"],
          ["Sân bay BMT – Phước An, Krông Pắk", "1 lượt", "30km"],
          ["Sân bay BMT – Eakar", "1 lượt", "54km"],
          ["Sân bay BMT – M’Đrăk", "1 lượt", "90km"],
          ["Sân bay BMT – Buôn Đôn", "1 lượt", "35km"],
          ["Sân bay BMT – Ea Sup hoặc Ea Hleo", "1 lượt", "80km"],
          ["Sân bay BMT – Đăk Mil, Đắk Nông", "1 lượt", "65km"],
          ["Sân bay BMT – Gia Nghĩa, Đắk Nông", "1 lượt", "130km"],
          ["Sân bay BMT – Pleiku, Gia Lai", "1 lượt", "185km"],
        ],
        note: "* Giá đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí cầu đường, bến bãi và hóa đơn VAT.",
      },
      {
        h2: "Bảng giá thuê xe theo số km và số chiều",
        headers: ["Loại xe", "Số chiều", "Xe 4 chỗ", "Xe 7 chỗ", "Xe 16 chỗ"],
        rows: [
          ["0-50km", "1"],
          ["50-100km", "1"],
          ["Trên 100km", "1"],
          ["0-50km", "2"],
          ["50-100km", "2"],
          ["Trên 100km", "2"],
        ],
        note: "* Giá đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí cầu đường, bến bãi và hóa đơn VAT.",
      },
      {
        h2: "Bảng giá thuê xe theo lộ trình từ Buôn Ma Thuột",
        headers: ["Lộ trình", "Thời gian / Cự ly", "Xe 4 chỗ", "Xe 7 chỗ", "Xe 16 chỗ"],
        rows: [
          ["Sân bay - Quanh trung tâm thành phố", "15km"],
          ["City tour (50km)", "1 ngày"],
          ["Buôn Ma Thuột – Thác Dray Nur 2 chiều", "5h"],
          ["City tour + Thác Dray Nur", "1 ngày"],
          ["Buôn Ma Thuột – KDL Buôn Đôn 2 chiều", "5h"],
          ["City tour + Buôn Đôn", "1 ngày"],
          ["Buôn Ma Thuột – Núi Đá Voi – Hồ Lắk 2 chiều", "5h"],
          ["City tour + Núi đá voi + Hồ Lắk", "1 ngày"],
          ["Tour Đắk Lắk 2 ngày 1 đêm", "2 ngày"],
          ["Tour Đắk Lắk 3 ngày 2 đêm", "3 ngày"],
          ["Buôn Ma Thuột – Gia Nghĩa", "125km"],
          ["Buôn Ma Thuột – Pleiku, Gia Lai", "185km"],
          ["Buôn Ma Thuột – Nha Trang", "185km"],
          ["Buôn Ma Thuột – Đà Lạt", "330km"],
          ["Buôn Ma Thuột – Hồ Chí Minh", "-"],
        ],
        note: "* Giá đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí cầu đường, bến bãi và hóa đơn VAT.",
      },
      {
        h2: "Thuê xe 29 chỗ, 45 chỗ giá bao nhiêu?",
        headers: ["Dịch vụ", "Xe 29 chỗ", "Xe 45 chỗ"],
        rows: [
          ["Đưa đón sân bay"],
          ["Giá/km nội thành"],
          ["Giá/ngày trọn gói"],
        ],
        note: "Phù hợp cho đoàn doanh nghiệp, team building, sự kiện, du lịch nhóm lớn. Liên hệ để nhận báo giá theo hành trình cụ thể.",
      },
    ],
    priceFormat: { amount: "{amount}đ", perKm: "{amount}đ/km", from: "từ {amount}đ" },
    quoteCta: "Liên hệ nhận báo giá",
    drivers: {
      h2: "Lái xe giàu kinh nghiệm",
      paragraphs: [
        "Tất cả các lái xe đều là những người có nhiều năm kinh nghiệm. Khi phục vụ khách hàng, họ đều thể hiện thái độ tận tâm, dễ chịu. Tất cả đều đặt sự an toàn và sự hài lòng của khách hàng lên hàng đầu.",
        "Các nhân viên tư vấn của DVDL Đại Dương Ban Mê luôn tư vấn tận tình giúp quý khách lựa chọn được loại xe phù hợp với chuyến đi của mình. Luôn trực tổng đài 24/7 sẵn sàng hỗ trợ quý khách bất cứ lúc nào",
      ],
    },
    fleet: {
      h2: "Cho thuê xe đời mới",
      body: "DVDL Đại Dương Ban Mê cung cấp đầy đủ các dòng xe 4, 7, 16, 29, 45 chỗ, xe giường nằm, xe limousine từ bình dân đến cao cấp. Tất cả xe của công ty đều là xe đời mới, được kiểm định, bảo dưỡng định kỳ. Từ đó, giúp khách hàng dễ dàng lựa chọn được dòng xe phù hợp và có được những hành trình an toàn.",
      imageAlt: "Thuê xe ô tô 7 chỗ",
    },
    cta: {
      h2: "Bạn cần tư vấn nhanh?",
      body: "Liên hệ chúng tôi để nhận báo giá ưu đãi và hỗ trợ tận tâm.",
      button: "Liên hệ ngay",
    },
  },
  tourBooking: {
    nameLabel: "Họ và tên",
    namePlaceholder: "Nguyễn Văn A",
    phoneLabel: "Số điện thoại",
    phonePlaceholder: "0941.437.070",
    tourLabel: "Chọn gói tour",
    tourPlaceholder: "-- Chọn gói tour --",
    tourOptions: [
      {
        value: "Tour 1 ngày – Văn Hóa Buôn Ma Thuột",
        label: "Tour 1 ngày – Văn Hóa BMT",
      },
      {
        value: "Tour 2 ngày 1 đêm – Phiêu Lưu Tây Nguyên",
        label: "Tour 2 ngày 1 đêm – Phiêu Lưu",
      },
      {
        value: "Tour 3 ngày 2 đêm – Khám Phá Tây Nguyên Toàn Diện",
        label: "Tour 3 ngày 2 đêm – Toàn Diện",
      },
      { value: "Tour tùy chỉnh", label: "Tour tùy chỉnh theo yêu cầu" },
    ],
    groupLabel: "Số người",
    groupPlaceholder: "-- Số người --",
    groupOptions: [
      { value: "1-2 người", label: "1–2 người" },
      { value: "3-4 người", label: "3–4 người" },
      { value: "5-7 người", label: "5–7 người" },
      { value: "8-16 người", label: "8–16 người" },
      { value: "Trên 16 người", label: "Trên 16 người" },
    ],
    dateLabel: "Ngày dự kiến khởi hành",
    noteLabel: "Ghi chú thêm (điểm xuất phát, yêu cầu đặc biệt…)",
    notePlaceholder:
      "VD: Xuất phát từ sân bay, cần ghế trẻ em, muốn thêm điểm Đồi Cỏ Hồng…",
    submit: "Đặt Tour Ngay",
    submitting: "Đang gửi…",
    success:
      "Đặt tour thành công! Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.",
    error: "Có lỗi xảy ra. Vui lòng thử lại.",
    errorNetwork: "Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline.",
    hotlineBefore: "Hoặc gọi ngay ",
    hotlineNumber: "0941.437.070",
    hotlineAfter: " để được tư vấn miễn phí",
  },

  pages: {
    home: {
      hero: {
        eyebrow: "Cho thuê xe du lịch",
        headlineTop: "Tận tâm.",
        headlineBottom: "Chuyên nghiệp.",
        h1: "Cho Thuê Xe Du Lịch Đắk Lắk - Xe 4 đến 45 Chỗ Có Tài Xế",
        intro:
          "Cho thuê xe ô tô có tài xế tại DVDL Đại Dương Ban Mê - Đa dạng xe 4-45 chỗ, giá tốt, thủ tục nhanh, giao xe tận nơi. Đặt xe dễ dàng chỉ trong vài phút!",
        pricingPrompt: "Xem bảng giá và đặt lịch",
        pricingLinkText: "tại đây.",
        priceLine: "Giá từ 800.000đ/ngày có tài xế — 4 đến 45 chỗ",
        cta: "Liên hệ ngay",
        imageAlt: "Thắng cảnh Tây Nguyên",
      },
      vehicles: [
        {
          value: "4 Chỗ",
          slug: "thue-xe-4-cho",
          title: "Di chuyển cá nhân",
          description:
            "Lý tưởng cho công tác, đưa đón sân bay, đi lại hằng ngày.",
          image: "/images/thue-xe-4-cho.webp",
        },
        {
          value: "7 Chỗ",
          slug: "thue-xe-7-cho",
          title: "Nhóm nhỏ thoải mái",
          description:
            "Phù hợp cho gia đình, nhóm bạn đi chơi hoặc du lịch gần.",
          image: "/images/thue-xe-7-cho.webp",
        },
        {
          value: "16 Chỗ",
          slug: "thue-xe-16-cho",
          title: "Dịch vụ linh hoạt",
          description:
            "Xe đời mới, lý tưởng cho tour, sự kiện, đưa đón công ty.",
          image: "/images/thue-xe-16-cho.webp",
        },
        {
          value: "29 Chỗ",
          slug: "thue-xe-29-cho",
          title: "Đoàn thể vừa",
          description: "Phù hợp cho trường học, công ty, tour 1-3 ngày.",
          image: "/images/thue-xe-29-cho.webp",
        },
        {
          value: "45 Chỗ",
          slug: "thue-xe-45-cho",
          title: "Hành trình dài",
          description:
            "Xe hiện đại, phục vụ tour đoàn, hội nghị chuyên nghiệp.",
          image: "/images/thue-xe-45-cho.webp",
        },
        {
          value: "Limousine",
          slug: "thue-xe-limousine",
          title: "Di chuyển đẳng cấp",
          description: "Nội thất sang trọng, ghế massage, Wi-Fi, màn hình riêng.",
          image: "/images/thue-xe-limousine.webp",
        },
      ],
    },

    carRentalListing: {
      hero: {
        imageAlt: "Dịch vụ thuê xe tại Buôn Ma Thuột",
        h1: "Dịch Vụ Thuê Xe Tại Buôn Ma Thuột",
        subtitle:
          "Đa dạng loại xe từ 4–45 chỗ & limousine. Tài xế chuyên nghiệp, xe đời mới, giá cả minh bạch.",
        callCta: "Đặt xe ngay — Gọi 0941 437 070",
        zaloCta: "Zalo ngay",
      },
      intro: {
        h2: "Dịch vụ thuê xe Buôn Ma Thuột uy tín từ năm 2018",
        bodyHtml:
          'DVDL Đại Dương Ban Mê là đơn vị cung cấp dịch vụ <strong>thuê xe Buôn Ma Thuột</strong> uy tín, đồng hành cùng hàng nghìn khách hàng cá nhân, gia đình và doanh nghiệp kể từ năm 2018. Với đội xe đa dạng trải rộng từ 4 chỗ, 7 chỗ, 16 chỗ, 29 chỗ cho đến 45 chỗ cùng dòng limousine cao cấp, chúng tôi đáp ứng trọn vẹn mọi nhu cầu di chuyển – từ đưa đón sân bay, đi công tác, họp mặt, cho đến những chuyến <strong>thuê xe du lịch Đắk Lắk</strong> dài ngày khám phá Tây Nguyên. Toàn bộ dịch vụ <strong>thuê xe có tài xế</strong> đều đi kèm đội ngũ lái xe bản địa giàu kinh nghiệm, am hiểu từng cung đường, đèo dốc và tận tâm với mỗi hành trình. Chúng tôi phục vụ trên toàn tỉnh Đắk Lắk và các tỉnh lân cận như Đắk Nông, Gia Lai, Lâm Đồng, Khánh Hòa, sẵn sàng nhận những chuyến liên tỉnh đường dài. Cam kết xe đời mới, nội thất sạch sẽ, giá cả minh bạch và không phát sinh chi phí ẩn, DVDL Đại Dương Ban Mê mong muốn mang đến cho mỗi khách hàng một trải nghiệm thuê xe an toàn, thoải mái và đáng tin cậy nhất.',
      },
      priceTable: {
        h2: "Bảng giá thuê xe tham khảo",
        lead:
          "Dưới đây là mức giá khởi điểm cho từng dòng xe để quý khách dễ dàng lựa chọn phương án phù hợp với số lượng người và ngân sách chuyến đi. Giá có thể thay đổi theo hành trình, số ngày thuê và thời điểm cao điểm – vui lòng liên hệ hotline để nhận báo giá chính xác nhất.",
        headers: {
          type: "Loại xe",
          seats: "Số chỗ",
          priceFrom: "Giá từ/ngày",
          bestFor: "Phù hợp cho",
        },
        rows: [
          { type: "Xe 4 chỗ", seats: "4", price: "800.000đ", bestFor: "Cá nhân & cặp đôi" },
          { type: "Xe 7 chỗ", seats: "7", price: "1.100.000đ", bestFor: "Gia đình nhỏ" },
          { type: "Xe 16 chỗ", seats: "16", price: "1.500.000đ", bestFor: "Nhóm & tour" },
          { type: "Xe 29 chỗ", seats: "29", price: "2.500.000đ", bestFor: "Đoàn vừa" },
          { type: "Xe 45 chỗ", seats: "45", price: "3.500.000đ", bestFor: "Đoàn lớn & team building" },
          { type: "Limousine", seats: "6", price: "2.000.000đ", bestFor: "VIP & sự kiện" },
        ],
      },
      whyUs: {
        h2: "Tại sao chọn DVDL Đại Dương Ban Mê?",
        lead:
          "Giữa rất nhiều lựa chọn thuê xe tại Buôn Ma Thuột, điều khiến khách hàng tin tưởng và quay lại với chúng tôi nằm ở sự tận tâm, minh bạch và chất lượng dịch vụ ổn định qua từng chuyến đi. Dưới đây là bốn lý do chính khiến hàng nghìn khách hàng đã chọn chúng tôi làm người đồng hành trên mọi cung đường:",
        items: [
          {
            title: "Kinh nghiệm bền vững từ năm 2018:",
            body:
              "Hơn sáu năm hoạt động liên tục trong lĩnh vực vận tải du lịch tại Đắk Lắk giúp chúng tôi hiểu rõ nhu cầu của từng nhóm khách, xây dựng quy trình phục vụ chuyên nghiệp và tích lũy uy tín thực tế qua hàng nghìn hành trình an toàn.",
          },
          {
            title: "Đội xe đa dạng:",
            body:
              "Từ xe 4 chỗ gọn nhẹ, xe 7 chỗ cho gia đình, xe 16–29–45 chỗ cho đoàn đông cho đến limousine sang trọng, chúng tôi luôn có phương án phù hợp cho mọi quy mô nhóm và mọi loại hình chuyến đi, tất cả đều là xe đời mới, được bảo dưỡng định kỳ và vệ sinh sạch sẽ trước mỗi chuyến.",
          },
          {
            title: "Tài xế chuyên nghiệp:",
            body:
              "Đội ngũ lái xe là người bản địa, thông thạo đường sá Tây Nguyên, lái xe êm ái, đúng giờ và luôn giữ thái độ lịch sự, nhiệt tình. Với những chuyến du lịch, tài xế còn có thể gợi ý điểm ăn uống, tham quan như một hướng dẫn viên không chính thức, giúp hành trình thêm trọn vẹn.",
          },
          {
            title: "Giao xe tận nơi:",
            body:
              "Chúng tôi nhận đón khách tại nhà, khách sạn, sân bay hay bất kỳ địa điểm nào trong thành phố Buôn Ma Thuột và vùng phụ cận, giúp quý khách tiết kiệm thời gian và bắt đầu hành trình một cách thuận tiện nhất mà không phải tự di chuyển đến điểm nhận xe.",
          },
        ],
      },
      process: {
        h2: "Quy trình đặt xe đơn giản",
        lead:
          "Chỉ với ba bước nhanh gọn, quý khách đã có ngay chiếc xe ưng ý cho hành trình của mình. Chúng tôi luôn cố gắng đơn giản hóa mọi thủ tục để khách hàng cảm thấy nhẹ nhàng và thoải mái ngay từ khâu đặt xe, không rườm rà giấy tờ.",
        steps: [
          {
            title: "Liên hệ",
            body:
              "Gọi hotline hoặc nhắn tin cho chúng tôi, cung cấp lịch trình, số lượng khách và loại xe mong muốn. Đội ngũ tư vấn sẽ hỗ trợ bạn chọn phương án tối ưu về chi phí và tiện nghi.",
          },
          {
            title: "Xác nhận thông tin",
            body:
              "Chúng tôi báo giá minh bạch, chốt lại thời gian, điểm đón và toàn bộ chi tiết chuyến đi. Mọi điều khoản đều rõ ràng, không phát sinh chi phí ẩn ngoài thỏa thuận ban đầu.",
          },
          {
            title: "Nhận xe",
            body:
              "Tài xế đưa xe đến đúng địa điểm và thời gian đã hẹn. Quý khách chỉ việc lên xe và tận hưởng hành trình an toàn, thoải mái cùng DVDL Đại Dương Ban Mê.",
          },
        ],
      },
      cards: {
        priceFrom: "Từ {price}đ/ngày",
        readMore: "Xem chi tiết →",
        excerpts: {
          "thue-xe-4-cho":
            "Phù hợp cá nhân, cặp đôi hoặc gia đình nhỏ. Linh hoạt, tiết kiệm, dễ di chuyển trong phố.",
          "thue-xe-7-cho":
            "Lý tưởng cho nhóm 5–7 người. Không gian rộng rãi, khoang hành lý lớn, đi lại thoải mái.",
          "thue-xe-16-cho":
            "Thích hợp nhóm trung bình. Ghế ngồi tiêu chuẩn, điều hòa mát, phù hợp tham quan và hội thao.",
          "thue-xe-29-cho":
            "Dành cho đoàn khách đông. Lý tưởng cho team building, du lịch nhóm và đưa đón sự kiện.",
          "thue-xe-45-cho":
            "Xe du lịch cỡ lớn phục vụ đoàn khách, chuyến đi liên tỉnh hoặc tour dài ngày.",
          "thue-xe-limousine":
            "Sang trọng, đẳng cấp. Phù hợp sự kiện đặc biệt, đón tiễn khách VIP và hội nghị cao cấp.",
        },
        startingPrices: {
          "thue-xe-4-cho": "800.000",
          "thue-xe-7-cho": "1.100.000",
          "thue-xe-16-cho": "1.500.000",
          "thue-xe-29-cho": "2.500.000",
          "thue-xe-45-cho": "3.500.000",
          "thue-xe-limousine": "2.000.000",
        },
      },
      destinations: {
        h2: "Thuê xe Buôn Ma Thuột đi đâu?",
        lead:
          "Buôn Ma Thuột là cửa ngõ của cả vùng Tây Nguyên, nơi bạn có thể dễ dàng bắt đầu vô số hành trình khám phá hấp dẫn. Dù bạn muốn dạo quanh các điểm đến nổi tiếng trong tỉnh Đắk Lắk hay thực hiện những chuyến đi liên tỉnh xa hơn, đội xe của chúng tôi đều sẵn sàng đưa đón tận nơi. Dưới đây là những điểm đến được khách hàng thuê xe của chúng tôi yêu thích nhất:",
        items: [
          { name: "Buôn Đôn", body: "– vùng đất huyền thoại về nghề săn và thuần dưỡng voi, cầu treo và sông Sêrêpốk, cách trung tâm khoảng 40km." },
          { name: "Hồ Lắk", body: "– hồ nước ngọt tự nhiên lớn nhất Tây Nguyên với khung cảnh thơ mộng và trải nghiệm cưỡi voi, chèo thuyền độc mộc." },
          { name: "Thác Dray Nur", body: "– thác nước hùng vĩ bậc nhất Tây Nguyên, điểm check-in không thể bỏ lỡ khi đến Đắk Lắk." },
          { name: "Vườn Quốc gia Yok Đôn", body: "– khu rừng khộp rộng lớn, lý tưởng cho những ai yêu thiên nhiên hoang dã và các tour khám phá rừng." },
          { name: "Đà Lạt", body: "– thành phố ngàn hoa mộng mơ, một chuyến liên tỉnh quen thuộc và được ưa chuộng khởi hành từ Buôn Ma Thuột." },
          { name: "Nha Trang", body: "– thành phố biển sôi động, điểm đến nghỉ dưỡng lý tưởng cho các gia đình và nhóm bạn muốn đổi gió." },
          { name: "Pleiku", body: "– phố núi Gia Lai với Biển Hồ trong xanh và văn hóa Tây Nguyên đặc sắc, gần gũi để di chuyển trong ngày." },
        ],
        outro:
          "Ngoài các điểm đến trên, chúng tôi còn nhận phục vụ mọi lịch trình theo yêu cầu riêng của quý khách, từ đưa đón sân bay, đi lễ hội cà phê cho đến các chuyến công tác và tour dài ngày. Hãy cho chúng tôi biết bạn muốn đi đâu, chúng tôi sẽ tư vấn cung đường và loại xe phù hợp nhất.",
      },
      featured: {
        title: "Thuê xe du lịch Đắk Lắk – Giá tốt, có tài xế",
        subtitle:
          "Giá từ 13.000đ/km · Buôn Đôn, Hồ Lắk, liên tỉnh · Phục vụ 24/7",
      },
      cta: {
        h2: "Cần tư vấn loại xe phù hợp?",
        body: "Liên hệ ngay để nhận báo giá nhanh và chính xác nhất.",
        button: "Liên hệ ngay",
      },
    },

    contact: {
      h1: "Liên hệ với chúng tôi",
      lead:
        "Hãy liên hệ với DVDL Đại Dương Ban Mê nếu bạn cần tư vấn tour, báo giá thuê xe hoặc hỗ trợ dịch vụ!",
      labels: {
        phone: "Số điện thoại",
        zalo: "Zalo hỗ trợ",
        email: "Email",
        address: "Địa chỉ",
        facebook: "Facebook",
      },
      facebookLinkText: "Liên hệ ngay với tài xế",
      form: {
        heading: "Gửi yêu cầu",
        namePlaceholder: "Họ và tên",
        phonePlaceholder: "Số điện thoại",
        contentPlaceholder: "Nội dung yêu cầu",
        submit: "Gửi yêu cầu",
        submitting: "Đang gửi...",
        success: "Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ lại sớm.",
        error: "Có lỗi xảy ra. Vui lòng thử lại.",
      },
      mapHeading: "Vị trí của chúng tôi",
      responseNote: "Chúng tôi sẽ phản hồi nhanh nhất trong vòng 1 giờ làm việc.",
    },

    about: {
      hero: {
        imageAlt: "Giới thiệu công ty du lịch",
        h1: "Về Chúng Tôi - DVDL Đại Dương Ban Mê",
      },
      origin: {
        h2: "Khởi nguồn từ đam mê",
        paragraph1Html:
          'Được thành lập vào năm <strong>2018</strong>, <strong>DVDL Đại Dương Ban Mê</strong> mang trong mình khát vọng mang đến những chuyến đi không chỉ là trải nghiệm, mà còn là hành trình khám phá văn hóa, thiên nhiên và con người. Chúng tôi bắt đầu từ một nhóm những người yêu du lịch, khao khát xây dựng một dịch vụ <em>“cá nhân hóa từng chuyến đi”</em> cho người Việt.',
        paragraph2Html:
          'Trải qua hơn <strong>gần 10 năm</strong> hoạt động, chúng tôi tự hào đã phục vụ hàng ngàn lượt khách, tạo nên những hành trình đáng nhớ, an toàn và đầy cảm xúc. Mỗi chuyến đi là một câu chuyện, và chúng tôi luôn sẵn sàng đồng hành cùng bạn để viết nên những câu chuyện đó.',
        imageAlt: "Hành trình du lịch",
      },
      values: {
        h2: "Giá trị cốt lõi",
        items: [
          {
            icon: "users",
            title: "Khách hàng là trung tâm",
            description:
              "Mọi dịch vụ được thiết kế để tối ưu trải nghiệm và sự hài lòng của khách hàng.",
          },
          {
            icon: "settings",
            title: "Linh hoạt & cá nhân hóa",
            description:
              "Chúng tôi đáp ứng theo từng yêu cầu riêng của từng cá nhân và đoàn khách.",
          },
          {
            icon: "badgeCheck",
            title: "Minh bạch & rõ ràng",
            description:
              "Báo giá trọn gói trước, không phát sinh chi phí ngoài ý muốn.",
          },
          {
            icon: "car",
            title: "Chất lượng đồng nhất",
            description:
              "Tất cả xe đều được bảo dưỡng định kỳ, vệ sinh kỹ trước mỗi chuyến đi.",
          },
        ],
      },
      whyRent: {
        h2: "Tại sao nên thuê xe tại DVDL Đại Dương Ban Mê",
        items: [
          "Sự tận tâm và nhiệt huyết của đội ngũ nhân sự tạo nên một giá trị không ngừng lớn mạnh.",
          "Đội ngũ tài xế tâm huyết, nhiệt tình và được đào tạo nghiệp vụ bài bảng.",
          "Đội xe từ 4 - 45 chỗ chuyên phục vụ du lịch, với các dòng xe đời mới, cao cấp nhiều tiện nghi ưu việt.",
          "Chúng tôi luôn cam kết tạo nên giá trị đồng hành giữa chất lượng và chi phí nhằm làm hài lòng khách hàng với mức giá hợp lý.",
          "Hơn nữa chúng tôi có một dịch vụ chăm sóc khách hàng có thể đáp ứng tối ưu nhu cầu của quý khách: tư vấn miễn phí, hỗ trợ 24/24, đa phương thức tiếp cận (tư vấn qua điện thoại, website và đặc biệt là dịch vụ tại nhà)",
          "Với sự nỗ lực, cố gắng không ngừng nghỉ của đội ngũ nhân viên, DVDL Đại Dương Ban Mê luôn đem đến cho Quý khách những chuyến đi tuyệt vời nhất. Thời gian tới, hy vọng chúng tôi sẽ có cơ hội được phục vụ quý khách",
        ],
      },
      services: {
        h2: "Dịch vụ nổi bật",
        items: [
          "Tour du lịch Tây Nguyên và toàn quốc",
          "Tour thiết kế riêng cho cá nhân/doanh nghiệp",
          "Cho thuê xe du lịch 4-45 chỗ đời mới",
          "Để thuận tiện cho quý khách ở xa đến du lịch, đi lại, công tác, làm việc tại Đăk Lăk. chúng tôi còn hỗ trợ, cung cấp các thông tin cần thiết, hữu ích cho khách hàng trong và ngoài tỉnh:",
          "Cung cấp thông tin và thiết kế Tour miễn phí theo mong muốn của khách du lịch. Tư vấn du khách tìm các địa điểm du lịch, vui chơi giải trí, dịch vụ nhà hàng - khách sạn tiện nghi, giá rẻ…, lựa chọn các dịch vụ du lịch, mua sắm tốt nhất…",
          "Tư vấn, hỗ trợ tổ chức hội nghị, hội thảo tại các địa điểm lý tưởng, thuận tiện cho việc giao dịch, đi lại…",
          "Đón tiếp và tổ chức cho các cá nhân, tổ chức, doanh nghiệp trong nước và nước ngoài đến Đăk Lăk công tác, khảo sát thị trường ….",
        ],
        imageAlt: "Dịch vụ du lịch",
      },
      commitments: {
        h2: "Cam Kết Của Chúng Tôi",
        blocks: [
          {
            h3: "1. Đảm bảo an toàn tuyệt đối cho khách hàng",
            leadHtml:
              "Xe chúng tôi được bảo trì định kỳ và kiểm tra kỹ thuật nghiêm ngặt trước mỗi chuyến đi.<br/> Khách hàng hoàn toàn yên tâm về độ an toàn, độ bền và sự êm ái trên mọi hành trình.",
          },
          {
            h3: "2. Dịch vụ chuẩn mực, tận tâm",
            leadHtml:
              "Mỗi chuyến xe đều được chuẩn bị kỹ lưỡng để mang lại trải nghiệm tốt nhất:",
            bullets: [
              "Xe được vệ sinh sạch sẽ, thơm tho trước giờ đón khách.",
              "Trang bị sẵn nước suối, khăn lạnh và wifi miễn phí.",
              "Tài xế lịch sự, chuyên nghiệp, có kinh nghiệm nhiều năm và luôn đúng giờ.",
              "Chúng tôi cam kết đồng hành và hỗ trợ quý khách suốt hành trình.",
            ],
          },
          {
            h3: "3. Minh bạch và linh hoạt về giá",
            leadHtml:
              "Chúng tôi luôn đề cao sự rõ ràng và công bằng trong mọi giao dịch:",
            bullets: [
              "Báo giá trước - không phát sinh chi phí ngoài lộ trình.",
              "Giá thuê linh hoạt: theo chuyến, theo ngày hoặc theo tháng.",
              "Khách hàng chỉ thanh toán đúng số tiền đã thỏa thuận.",
            ],
          },
        ],
        imageAlt: "Cam kết dịch vụ chất lượng",
      },
      cta: {
        h2: "Sẵn sàng cho hành trình tiếp theo?",
        body:
          "Liên hệ với chúng tôi để được tư vấn và lên kế hoạch cho chuyến đi mơ ước của bạn ngay hôm nay!",
        button: "Liên hệ ngay",
      },
    },
  },

  carRentalDetail: {
    back: "← Quay lại danh sách dịch vụ",
    tldrLabel: "Tóm tắt:",
    ctaHeading: "Bạn cần đặt xe hoặc báo giá?",
    ctaButton: "Liên hệ ngay",
    relatedHeading: "Dịch vụ liên quan",
    readMore: "Xem chi tiết →",
  },
} satisfies Dictionary;

export default vi;
