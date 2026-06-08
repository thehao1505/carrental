import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật",
  description:
    "Chính sách bảo mật của DVDL Đại Dương Ban Mê – cam kết bảo vệ thông tin cá nhân của khách hàng theo Nghị định 13/2023/NĐ-CP.",
  alternates: {
    canonical: "https://www.dvdldaiduong.com/chinh-sach-bao-mat",
  },
  robots: { index: true, follow: true },
};

export default function ChinhSachBaoMat() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold text-forest-600 mb-2">Chính Sách Bảo Mật</h1>
      <p className="text-sm text-gray-500 mb-10">Cập nhật lần cuối: tháng 6 năm 2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">1. Giới thiệu</h2>
        <p>
          DVDL Đại Dương Ban Mê (địa chỉ: 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk) cam kết bảo vệ
          quyền riêng tư của khách hàng. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo
          vệ thông tin cá nhân của bạn theo quy định tại Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">2. Thông tin chúng tôi thu thập</h2>
        <p className="mb-2">Khi bạn sử dụng website hoặc liên hệ với chúng tôi, chúng tôi có thể thu thập:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Họ tên</li>
          <li>Số điện thoại</li>
          <li>Địa chỉ email</li>
          <li>Nội dung yêu cầu / tin nhắn</li>
          <li>Thông tin kỹ thuật: địa chỉ IP, loại trình duyệt, trang đã xem (qua Google Analytics)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">3. Mục đích sử dụng</h2>
        <p className="mb-2">Thông tin được thu thập nhằm:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Liên hệ lại để tư vấn và xác nhận đặt xe / tour</li>
          <li>Gửi thông tin về ưu đãi và dịch vụ mới (nếu bạn đồng ý)</li>
          <li>Cải thiện trải nghiệm sử dụng website</li>
          <li>Tuân thủ nghĩa vụ pháp lý</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">4. Chia sẻ thông tin</h2>
        <p>
          Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn với bên thứ ba vì mục
          đích thương mại. Thông tin chỉ được chia sẻ khi có yêu cầu của cơ quan nhà nước có thẩm quyền
          theo quy định pháp luật.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">5. Thời gian lưu trữ</h2>
        <p>
          Thông tin cá nhân được lưu trữ trong thời gian cần thiết để cung cấp dịch vụ hoặc theo yêu
          cầu pháp lý, tối đa 3 năm kể từ lần tương tác cuối cùng.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">6. Quyền của bạn</h2>
        <p className="mb-2">Theo Nghị định 13/2023/NĐ-CP, bạn có quyền:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Được biết về việc thu thập và xử lý dữ liệu cá nhân của mình</li>
          <li>Yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân</li>
          <li>Rút lại sự đồng ý xử lý dữ liệu bất kỳ lúc nào</li>
          <li>Khiếu nại đến cơ quan nhà nước có thẩm quyền</li>
        </ul>
        <p className="mt-3">
          Để thực hiện các quyền trên, vui lòng liên hệ:{" "}
          <a href="mailto:dvdldaiduong@gmail.com" className="text-forest-500 underline">
            dvdldaiduong@gmail.com
          </a>{" "}
          hoặc gọi{" "}
          <a href="tel:0941437070" className="text-forest-500 underline">
            0941 437 070
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">7. Cookie và phân tích</h2>
        <p>
          Website sử dụng Google Analytics để theo dõi lưu lượng truy cập ẩn danh. Bạn có thể tắt
          cookie trong cài đặt trình duyệt hoặc cài đặt tiện ích Google Analytics Opt-out.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest-500 mb-3">8. Liên hệ</h2>
        <p>
          Nếu có câu hỏi về chính sách bảo mật, vui lòng liên hệ:
        </p>
        <address className="not-italic mt-2 space-y-1 text-gray-700">
          <p><strong>DVDL Đại Dương Ban Mê</strong></p>
          <p>252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk</p>
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
      </section>
    </main>
  );
}
