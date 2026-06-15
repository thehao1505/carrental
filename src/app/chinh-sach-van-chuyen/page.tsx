import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính Sách Vận Chuyển",
  description:
    "Chính sách vận chuyển của DVDL Đại Dương Ban Mê – quy định đặt xe, hủy chuyến, bồi thường và trách nhiệm các bên.",
  alternates: {
    canonical: "https://www.dvdldaiduong.com/chinh-sach-van-chuyen",
  },
  robots: { index: true, follow: true },
};

export default function ChinhSachVanChuyen() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold text-forest-600 mb-2">Chính Sách Vận Chuyển</h1>
      <p className="text-sm text-gray-500 mb-10">Cập nhật lần cuối: tháng 6 năm 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">1. Phạm vi dịch vụ</h2>
        <p>
          DVDL Đại Dương Ban Mê cung cấp dịch vụ cho thuê xe có tài xế (4–45 chỗ) phục vụ các tuyến
          nội tỉnh Đắk Lắk, liên tỉnh và tour du lịch theo hợp đồng. Chúng tôi không cung cấp dịch
          vụ thuê xe tự lái.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">2. Đặt xe và xác nhận</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Đặt xe phải được xác nhận qua điện thoại hoặc Zalo với nhân viên DVDL ít nhất{" "}
            <strong>24 giờ</strong> trước giờ khởi hành (với tuyến nội tỉnh) hoặc{" "}
            <strong>48 giờ</strong> (với tuyến liên tỉnh / tour).
          </li>
          <li>
            Hợp đồng thuê xe / tour sẽ được gửi qua email hoặc Zalo sau khi hai bên thống nhất lịch
            trình và giá cả.
          </li>
          <li>
            Đặt cọc từ <strong>20–30% giá trị hợp đồng</strong> để giữ chỗ (tùy tuyến và loại xe).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">3. Chính sách hủy và hoàn tiền</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200 mt-2">
            <thead className="bg-forest-500 text-white">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Thời điểm hủy</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Phí hủy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-2">Trước 72 giờ</td>
                <td className="border border-gray-200 px-4 py-2">Hoàn 100% tiền cọc</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Từ 24–72 giờ</td>
                <td className="border border-gray-200 px-4 py-2">Hoàn 50% tiền cọc</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-2">Dưới 24 giờ</td>
                <td className="border border-gray-200 px-4 py-2">Mất toàn bộ tiền cọc</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Do DVDL hủy chuyến</td>
                <td className="border border-gray-200 px-4 py-2">Hoàn 100% và bồi thường theo thỏa thuận</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">4. Trách nhiệm của DVDL</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Xe được bảo dưỡng định kỳ, đảm bảo kỹ thuật an toàn trước mỗi chuyến.</li>
          <li>Tài xế có đủ bằng lái, sức khỏe và kinh nghiệm, không sử dụng chất kích thích khi lái xe.</li>
          <li>Khởi hành đúng giờ đã thỏa thuận; nếu trễ quá 30 phút không có lý do chính đáng, khách hàng có thể yêu cầu bồi thường.</li>
          <li>Xe có bảo hiểm trách nhiệm dân sự bắt buộc và bảo hiểm hành khách.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">5. Trách nhiệm của khách hàng</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Có mặt đúng địa điểm và giờ đón đã thỏa thuận.</li>
          <li>Không hút thuốc, không mang thức ăn có mùi mạnh lên xe (theo yêu cầu của tài xế).</li>
          <li>Không yêu cầu tài xế vi phạm luật giao thông (vượt tốc độ, vượt đèn đỏ,…).</li>
          <li>Bồi thường thiệt hại nếu gây hư hỏng tài sản trên xe.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">6. Bất khả kháng</h2>
        <p>
          DVDL không chịu trách nhiệm bồi thường trong trường hợp bất khả kháng như thiên tai, lũ lụt,
          đình công, lệnh cấm của cơ quan nhà nước hoặc tai nạn do bên thứ ba gây ra. Chúng tôi sẽ
          thông báo sớm nhất có thể và phối hợp giải quyết hợp lý cho khách hàng.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">7. Giải quyết khiếu nại</h2>
        <p>
          Mọi khiếu nại vui lòng gửi trong vòng <strong>48 giờ</strong> sau khi kết thúc chuyến đi qua:
        </p>
        <address className="not-italic mt-2 space-y-1 text-gray-700">
          <p>
            Email:{" "}
            <a href="mailto:dvdldaiduong@gmail.com" className="text-forest-500 underline">
              dvdldaiduong@gmail.com
            </a>
          </p>
          <p>
            Điện thoại:{" "}
            <a href="tel:0941437070" className="text-forest-500 underline">
              0941 437 070
            </a>
          </p>
        </address>
        <p className="mt-2">
          Chúng tôi cam kết phản hồi trong vòng <strong>3 ngày làm việc</strong>.
        </p>
      </section>
    </main>
  );
}
