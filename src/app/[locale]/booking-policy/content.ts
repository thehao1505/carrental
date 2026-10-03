// Booking and cancellation policy text, per locale.
//
// One document, two languages: the markup around it lives once, in
// src/features/policy/policy-page.tsx. Section bodies are authored HTML — see
// the note on PolicySection for why prose is not split into dictionary keys.

import type { PolicyDocument } from "@/features/policy/policy-page";

export const bookingPolicyContent: PolicyDocument = {
  vi: {
    h1: "Chính Sách Vận Chuyển",
    lastUpdated: "Cập nhật lần cuối: tháng 6 năm 2026",
    sections: [
      {
        h2: "1. Phạm vi dịch vụ",
        bodyHtml: "<p>DVDL Đại Dương Ban Mê cung cấp dịch vụ cho thuê xe có tài xế (4–45 chỗ) phục vụ các tuyến nội tỉnh Đắk Lắk, liên tỉnh và tour du lịch theo hợp đồng. Chúng tôi không cung cấp dịch vụ thuê xe tự lái.</p>",
      },
      {
        h2: "2. Đặt xe và xác nhận",
        bodyHtml: "<ul class=\"list-disc pl-6 space-y-2\"><li>Đặt xe phải được xác nhận qua điện thoại hoặc Zalo với nhân viên DVDL ít nhất<!-- --> <strong>24 giờ</strong> trước giờ khởi hành (với tuyến nội tỉnh) hoặc<!-- --> <strong>48 giờ</strong> (với tuyến liên tỉnh / tour).</li><li>Hợp đồng thuê xe / tour sẽ được gửi qua email hoặc Zalo sau khi hai bên thống nhất lịch trình và giá cả.</li><li>Đặt cọc từ <strong>20–30% giá trị hợp đồng</strong> để giữ chỗ (tùy tuyến và loại xe).</li></ul>",
      },
      {
        h2: "3. Chính sách hủy và hoàn tiền",
        bodyHtml: "<div class=\"overflow-x-auto\"><table class=\"w-full text-sm border-collapse border border-gray-200 mt-2\"><thead class=\"bg-forest-500 text-white\"><tr><th class=\"border border-gray-200 px-4 py-2 text-left\">Thời điểm hủy</th><th class=\"border border-gray-200 px-4 py-2 text-left\">Phí hủy</th></tr></thead><tbody><tr class=\"bg-white\"><td class=\"border border-gray-200 px-4 py-2\">Trước 72 giờ</td><td class=\"border border-gray-200 px-4 py-2\">Hoàn 100% tiền cọc</td></tr><tr class=\"bg-gray-50\"><td class=\"border border-gray-200 px-4 py-2\">Từ 24–72 giờ</td><td class=\"border border-gray-200 px-4 py-2\">Hoàn 50% tiền cọc</td></tr><tr class=\"bg-white\"><td class=\"border border-gray-200 px-4 py-2\">Dưới 24 giờ</td><td class=\"border border-gray-200 px-4 py-2\">Mất toàn bộ tiền cọc</td></tr><tr class=\"bg-gray-50\"><td class=\"border border-gray-200 px-4 py-2\">Do DVDL hủy chuyến</td><td class=\"border border-gray-200 px-4 py-2\">Hoàn 100% và bồi thường theo thỏa thuận</td></tr></tbody></table></div>",
      },
      {
        h2: "4. Trách nhiệm của DVDL",
        bodyHtml: "<ul class=\"list-disc pl-6 space-y-2\"><li>Xe được bảo dưỡng định kỳ, đảm bảo kỹ thuật an toàn trước mỗi chuyến.</li><li>Tài xế có đủ bằng lái, sức khỏe và kinh nghiệm, không sử dụng chất kích thích khi lái xe.</li><li>Khởi hành đúng giờ đã thỏa thuận; nếu trễ quá 30 phút không có lý do chính đáng, khách hàng có thể yêu cầu bồi thường.</li><li>Xe có bảo hiểm trách nhiệm dân sự bắt buộc và bảo hiểm hành khách.</li></ul>",
      },
      {
        h2: "5. Trách nhiệm của khách hàng",
        bodyHtml: "<ul class=\"list-disc pl-6 space-y-2\"><li>Có mặt đúng địa điểm và giờ đón đã thỏa thuận.</li><li>Không hút thuốc, không mang thức ăn có mùi mạnh lên xe (theo yêu cầu của tài xế).</li><li>Không yêu cầu tài xế vi phạm luật giao thông (vượt tốc độ, vượt đèn đỏ,…).</li><li>Bồi thường thiệt hại nếu gây hư hỏng tài sản trên xe.</li></ul>",
      },
      {
        h2: "6. Bất khả kháng",
        bodyHtml: "<p>DVDL không chịu trách nhiệm bồi thường trong trường hợp bất khả kháng như thiên tai, lũ lụt, đình công, lệnh cấm của cơ quan nhà nước hoặc tai nạn do bên thứ ba gây ra. Chúng tôi sẽ thông báo sớm nhất có thể và phối hợp giải quyết hợp lý cho khách hàng.</p>",
      },
      {
        h2: "7. Giải quyết khiếu nại",
        bodyHtml: "<p>Mọi khiếu nại vui lòng gửi trong vòng <strong>48 giờ</strong> sau khi kết thúc chuyến đi qua:</p><address class=\"not-italic mt-2 space-y-1 text-gray-700\"><p>Email:<!-- --> <a href=\"mailto:dvdldaiduong@gmail.com\" class=\"text-forest-500 underline\">dvdldaiduong@gmail.com</a></p><p>Điện thoại:<!-- --> <a href=\"tel:0941437070\" class=\"text-forest-500 underline\">0941 437 070</a></p></address><p class=\"mt-2\">Chúng tôi cam kết phản hồi trong vòng <strong>3 ngày làm việc</strong>.</p>",
      },
    ],
  },
  en: {
    h1: "Booking & Cancellation Policy",
    lastUpdated: "Last updated: June 2026",
    sections: [
      {
        h2: "1. Scope of service",
        bodyHtml: "<p>DVDL Đại Dương Ban Mê provides car rental with a driver (4–45 seats) for journeys within Đắk Lắk province, inter-provincial trips and contracted tours. We do not offer self-drive rentals.</p>",
      },
      {
        h2: "2. Booking and confirmation",
        bodyHtml: "<ul class=\"list-disc pl-6 space-y-2\"><li>Every booking must be confirmed by phone or Zalo with a DVDL staff member at least <strong>24 hours</strong> before departure for trips within the province, or <strong>48 hours</strong> for inter-provincial trips and tours.</li><li>The rental or tour agreement is sent by email or Zalo once both sides have agreed on the itinerary and the price.</li><li>A deposit of <strong>20–30% of the contract value</strong> secures the booking (the exact figure depends on the route and vehicle).</li></ul>",
      },
      {
        h2: "3. Cancellation and refunds",
        bodyHtml: "<div class=\"overflow-x-auto\"><table class=\"w-full text-sm border-collapse border border-gray-200 mt-2\"><thead class=\"bg-forest-500 text-white\"><tr><th class=\"border border-gray-200 px-4 py-2 text-left\">When you cancel</th><th class=\"border border-gray-200 px-4 py-2 text-left\">Cancellation fee</th></tr></thead><tbody><tr class=\"bg-white\"><td class=\"border border-gray-200 px-4 py-2\">More than 72 hours before</td><td class=\"border border-gray-200 px-4 py-2\">Full deposit refunded</td></tr><tr class=\"bg-gray-50\"><td class=\"border border-gray-200 px-4 py-2\">24–72 hours before</td><td class=\"border border-gray-200 px-4 py-2\">50% of the deposit refunded</td></tr><tr class=\"bg-white\"><td class=\"border border-gray-200 px-4 py-2\">Less than 24 hours before</td><td class=\"border border-gray-200 px-4 py-2\">Deposit forfeited in full</td></tr><tr class=\"bg-gray-50\"><td class=\"border border-gray-200 px-4 py-2\">Cancelled by DVDL</td><td class=\"border border-gray-200 px-4 py-2\">Full refund plus compensation as agreed</td></tr></tbody></table></div>",
      },
      {
        h2: "4. Our responsibilities",
        bodyHtml: "<ul class=\"list-disc pl-6 space-y-2\"><li>Vehicles are serviced on a regular schedule and checked for roadworthiness before every trip.</li><li>Drivers hold the required licence, are medically fit and experienced, and never drive under the influence.</li><li>We depart at the agreed time. If we are more than 30 minutes late without good reason, you may claim compensation.</li><li>Every vehicle carries compulsory civil liability insurance and passenger insurance.</li></ul>",
      },
      {
        h2: "5. Your responsibilities",
        bodyHtml: "<ul class=\"list-disc pl-6 space-y-2\"><li>Be at the agreed pick-up point at the agreed time.</li><li>No smoking, and no strong-smelling food on board (at the driver&#x27;s discretion).</li><li>Do not ask the driver to break traffic law (speeding, running red lights and so on).</li><li>Pay for any damage you cause to property in the vehicle.</li></ul>",
      },
      {
        h2: "6. Force majeure",
        bodyHtml: "<p>DVDL is not liable for compensation in cases of force majeure such as natural disasters, flooding, strikes, orders from state authorities, or accidents caused by a third party. We will notify you as early as possible and work with you on a fair resolution.</p>",
      },
      {
        h2: "7. Complaints",
        bodyHtml: "<p>Please submit any complaint within <strong>48 hours</strong> of the end of your trip, via:</p><address class=\"not-italic mt-2 space-y-1 text-gray-700\"><p>Email:<!-- --> <a href=\"mailto:dvdldaiduong@gmail.com\" class=\"text-forest-500 underline\">dvdldaiduong@gmail.com</a></p><p>Phone:<!-- --> <a href=\"tel:0941437070\" class=\"text-forest-500 underline\">0941 437 070</a></p></address><p class=\"mt-2\">We commit to responding within <strong>3 working days</strong>.</p>",
      },
    ],
  },
};
