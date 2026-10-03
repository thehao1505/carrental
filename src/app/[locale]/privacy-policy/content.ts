// Privacy policy text, per locale.
//
// One document, two languages: the markup around it lives once, in
// src/features/policy/policy-page.tsx. Section bodies are authored HTML — see
// the note on PolicySection for why prose is not split into dictionary keys.

import type { PolicyDocument } from "@/features/policy/policy-page";

export const privacyPolicyContent: PolicyDocument = {
  vi: {
    h1: "Chính Sách Bảo Mật",
    lastUpdated: "Cập nhật lần cuối: tháng 6 năm 2026",
    sections: [
      {
        h2: "1. Giới thiệu",
        bodyHtml: "<p>DVDL Đại Dương Ban Mê (địa chỉ: 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk) cam kết bảo vệ quyền riêng tư của khách hàng. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn theo quy định tại Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.</p>",
      },
      {
        h2: "2. Thông tin chúng tôi thu thập",
        bodyHtml: "<p class=\"mb-2\">Khi bạn sử dụng website hoặc liên hệ với chúng tôi, chúng tôi có thể thu thập:</p><ul class=\"list-disc pl-6 space-y-1\"><li>Họ tên</li><li>Số điện thoại</li><li>Địa chỉ email</li><li>Nội dung yêu cầu / tin nhắn</li><li>Thông tin kỹ thuật: địa chỉ IP, loại trình duyệt, trang đã xem (qua Google Analytics)</li></ul>",
      },
      {
        h2: "3. Mục đích sử dụng",
        bodyHtml: "<p class=\"mb-2\">Thông tin được thu thập nhằm:</p><ul class=\"list-disc pl-6 space-y-1\"><li>Liên hệ lại để tư vấn và xác nhận đặt xe / tour</li><li>Gửi thông tin về ưu đãi và dịch vụ mới (nếu bạn đồng ý)</li><li>Cải thiện trải nghiệm sử dụng website</li><li>Tuân thủ nghĩa vụ pháp lý</li></ul>",
      },
      {
        h2: "4. Chia sẻ thông tin",
        bodyHtml: "<p>Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn với bên thứ ba vì mục đích thương mại. Thông tin chỉ được chia sẻ khi có yêu cầu của cơ quan nhà nước có thẩm quyền theo quy định pháp luật.</p>",
      },
      {
        h2: "5. Thời gian lưu trữ",
        bodyHtml: "<p>Thông tin cá nhân được lưu trữ trong thời gian cần thiết để cung cấp dịch vụ hoặc theo yêu cầu pháp lý, tối đa 3 năm kể từ lần tương tác cuối cùng.</p>",
      },
      {
        h2: "6. Quyền của bạn",
        bodyHtml: "<p class=\"mb-2\">Theo Nghị định 13/2023/NĐ-CP, bạn có quyền:</p><ul class=\"list-disc pl-6 space-y-1\"><li>Được biết về việc thu thập và xử lý dữ liệu cá nhân của mình</li><li>Yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân</li><li>Rút lại sự đồng ý xử lý dữ liệu bất kỳ lúc nào</li><li>Khiếu nại đến cơ quan nhà nước có thẩm quyền</li></ul><p class=\"mt-3\">Để thực hiện các quyền trên, vui lòng liên hệ:<!-- --> <a href=\"mailto:dvdldaiduong@gmail.com\" class=\"text-forest-500 underline\">dvdldaiduong@gmail.com</a> <!-- -->hoặc gọi<!-- --> <a href=\"tel:0941437070\" class=\"text-forest-500 underline\">0941 437 070</a>.</p>",
      },
      {
        h2: "7. Cookie và phân tích",
        bodyHtml: "<p>Website sử dụng Google Analytics để theo dõi lưu lượng truy cập ẩn danh. Bạn có thể tắt cookie trong cài đặt trình duyệt hoặc cài đặt tiện ích Google Analytics Opt-out.</p>",
      },
      {
        h2: "8. Liên hệ",
        bodyHtml: "<p>Nếu có câu hỏi về chính sách bảo mật, vui lòng liên hệ:</p><address class=\"not-italic mt-2 space-y-1 text-gray-700\"><p><strong>DVDL Đại Dương Ban Mê</strong></p><p>252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk</p><p>Email:<!-- --> <a href=\"mailto:dvdldaiduong@gmail.com\" class=\"text-forest-500 underline\">dvdldaiduong@gmail.com</a></p><p>Điện thoại:<!-- --> <a href=\"tel:0941437070\" class=\"text-forest-500 underline\">0941 437 070</a></p></address>",
      },
    ],
  },
  en: {
    h1: "Privacy Policy",
    lastUpdated: "Last updated: June 2026",
    sections: [
      {
        h2: "1. Introduction",
        bodyHtml: "<p>DVDL Đại Dương Ban Mê (252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk) is committed to protecting our customers&#x27; privacy. This policy explains how we collect, use and safeguard your personal data in accordance with Decree 13/2023/ND-CP of Vietnam on personal data protection.</p>",
      },
      {
        h2: "2. Information we collect",
        bodyHtml: "<p class=\"mb-2\">When you use this website or get in touch with us, we may collect:</p><ul class=\"list-disc pl-6 space-y-1\"><li>Full name</li><li>Phone number</li><li>Email address</li><li>The content of your enquiry or message</li><li>Technical data: IP address, browser type and pages viewed (through Google Analytics)</li></ul>",
      },
      {
        h2: "3. How we use it",
        bodyHtml: "<p class=\"mb-2\">We collect this information in order to:</p><ul class=\"list-disc pl-6 space-y-1\"><li>Contact you back to advise on and confirm a car or tour booking</li><li>Send you news of offers and new services (only if you agree)</li><li>Improve the experience of using this website</li><li>Comply with our legal obligations</li></ul>",
      },
      {
        h2: "4. Sharing your information",
        bodyHtml: "<p>We do not sell, rent or share your personal data with third parties for commercial purposes. Information is disclosed only when requested by a competent state authority, as required by law.</p>",
      },
      {
        h2: "5. How long we keep it",
        bodyHtml: "<p>Personal data is retained for as long as it is needed to provide our services, or as required by law, up to a maximum of 3 years from your last interaction with us.</p>",
      },
      {
        h2: "6. Your rights",
        bodyHtml: "<p class=\"mb-2\">Under Decree 13/2023/ND-CP, you have the right to:</p><ul class=\"list-disc pl-6 space-y-1\"><li>Be informed about the collection and processing of your personal data</li><li>Request access to, correction of, or deletion of your personal data</li><li>Withdraw your consent to data processing at any time</li><li>Lodge a complaint with the competent state authority</li></ul><p class=\"mt-3\">To exercise any of these rights, please contact<!-- --> <a href=\"mailto:dvdldaiduong@gmail.com\" class=\"text-forest-500 underline\">dvdldaiduong@gmail.com</a> <!-- -->or call<!-- --> <a href=\"tel:0941437070\" class=\"text-forest-500 underline\">0941 437 070</a>.</p>",
      },
      {
        h2: "7. Cookies and analytics",
        bodyHtml: "<p>This website uses Google Analytics to measure traffic anonymously. You can disable cookies in your browser settings or install the Google Analytics Opt-out add-on.</p>",
      },
      {
        h2: "8. Contact",
        bodyHtml: "<p>If you have any questions about this privacy policy, please contact us:</p><address class=\"not-italic mt-2 space-y-1 text-gray-700\"><p><strong>DVDL Đại Dương Ban Mê</strong></p><p>252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk, Vietnam</p><p>Email:<!-- --> <a href=\"mailto:dvdldaiduong@gmail.com\" class=\"text-forest-500 underline\">dvdldaiduong@gmail.com</a></p><p>Phone:<!-- --> <a href=\"tel:0941437070\" class=\"text-forest-500 underline\">0941 437 070</a></p></address>",
      },
    ],
  },
};
