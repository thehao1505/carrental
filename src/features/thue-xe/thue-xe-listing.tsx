import Image from "next/image";
import Link from "next/link";
import { carRentalData } from "@/lib/data";

const excerpts: Record<string, string> = {
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
};

const startingPrices: Record<string, string> = {
  "thue-xe-4-cho": "800.000",
  "thue-xe-7-cho": "1.100.000",
  "thue-xe-16-cho": "1.500.000",
  "thue-xe-29-cho": "2.500.000",
  "thue-xe-45-cho": "3.500.000",
  "thue-xe-limousine": "2.000.000",
};

export function ThueXeListing() {
  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="relative h-[340px] w-full">
        <Image
          src="/images/thue-xe-7-cho.webp"
          alt="Dịch vụ thuê xe tại Buôn Ma Thuột"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-3 px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
            Dịch Vụ Thuê Xe Tại Buôn Ma Thuột
          </h1>
          <p className="text-white/85 text-base md:text-lg text-center max-w-2xl">
            Đa dạng loại xe từ 4–45 chỗ & limousine. Tài xế chuyên nghiệp, xe
            đời mới, giá cả minh bạch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="tel:0941437070"
              className="bg-forest-500 text-lemon-500 px-6 py-3 rounded-3xl text-base font-semibold text-center hover:bg-forest-600 hover:scale-105 transition-all duration-200"
            >
              Đặt xe ngay — Gọi 0941 437 070
            </a>
            <a
              href="https://zalo.me/0941437070"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-forest-500 px-6 py-3 rounded-3xl text-base font-semibold text-center hover:bg-lemon-500 hover:scale-105 transition-all duration-200"
            >
              Zalo ngay
            </a>
          </div>
        </div>
      </section>

      {/* Intro content */}
      <section className="max-w-4xl mx-auto px-6 pt-14 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-forest-600 mb-5">
          Dịch vụ thuê xe Buôn Ma Thuột uy tín từ năm 2018
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
          DVDL Đại Dương Ban Mê là đơn vị cung cấp dịch vụ{" "}
          <strong>thuê xe Buôn Ma Thuột</strong> uy tín, đồng hành cùng hàng
          nghìn khách hàng cá nhân, gia đình và doanh nghiệp kể từ năm 2018. Với
          đội xe đa dạng trải rộng từ 4 chỗ, 7 chỗ, 16 chỗ, 29 chỗ cho đến 45
          chỗ cùng dòng limousine cao cấp, chúng tôi đáp ứng trọn vẹn mọi nhu
          cầu di chuyển – từ đưa đón sân bay, đi công tác, họp mặt, cho đến những
          chuyến <strong>thuê xe du lịch Đắk Lắk</strong> dài ngày khám phá Tây
          Nguyên. Toàn bộ dịch vụ <strong>thuê xe có tài xế</strong> đều đi kèm
          đội ngũ lái xe bản địa giàu kinh nghiệm, am hiểu từng cung đường, đèo
          dốc và tận tâm với mỗi hành trình. Chúng tôi phục vụ trên toàn tỉnh Đắk
          Lắk và các tỉnh lân cận như Đắk Nông, Gia Lai, Lâm Đồng, Khánh Hòa,
          sẵn sàng nhận những chuyến liên tỉnh đường dài. Cam kết xe đời mới, nội
          thất sạch sẽ, giá cả minh bạch và không phát sinh chi phí ẩn, DVDL Đại
          Dương Ban Mê mong muốn mang đến cho mỗi khách hàng một trải nghiệm thuê
          xe an toàn, thoải mái và đáng tin cậy nhất.
        </p>
      </section>

      {/* Bảng giá tóm tắt */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-forest-600 mb-4">
          Bảng giá thuê xe tham khảo
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mb-5">
          Dưới đây là mức giá khởi điểm cho từng dòng xe để quý khách dễ dàng
          lựa chọn phương án phù hợp với số lượng người và ngân sách chuyến đi.
          Giá có thể thay đổi theo hành trình, số ngày thuê và thời điểm cao
          điểm – vui lòng liên hệ hotline để nhận báo giá chính xác nhất.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm md:text-[15px]">
            <thead>
              <tr className="bg-forest-500 text-white">
                <th className="px-4 py-3 font-semibold rounded-tl-lg">
                  Loại xe
                </th>
                <th className="px-4 py-3 font-semibold">Số chỗ</th>
                <th className="px-4 py-3 font-semibold">Giá từ/ngày</th>
                <th className="px-4 py-3 font-semibold rounded-tr-lg">
                  Phù hợp cho
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="odd:bg-white even:bg-forest-50">
                <td className="px-4 py-3 font-medium text-forest-600">
                  Xe 4 chỗ
                </td>
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3">800.000đ</td>
                <td className="px-4 py-3">Cá nhân &amp; cặp đôi</td>
              </tr>
              <tr className="odd:bg-white even:bg-forest-50">
                <td className="px-4 py-3 font-medium text-forest-600">
                  Xe 7 chỗ
                </td>
                <td className="px-4 py-3">7</td>
                <td className="px-4 py-3">1.100.000đ</td>
                <td className="px-4 py-3">Gia đình nhỏ</td>
              </tr>
              <tr className="odd:bg-white even:bg-forest-50">
                <td className="px-4 py-3 font-medium text-forest-600">
                  Xe 16 chỗ
                </td>
                <td className="px-4 py-3">16</td>
                <td className="px-4 py-3">1.500.000đ</td>
                <td className="px-4 py-3">Nhóm &amp; tour</td>
              </tr>
              <tr className="odd:bg-white even:bg-forest-50">
                <td className="px-4 py-3 font-medium text-forest-600">
                  Xe 29 chỗ
                </td>
                <td className="px-4 py-3">29</td>
                <td className="px-4 py-3">2.500.000đ</td>
                <td className="px-4 py-3">Đoàn vừa</td>
              </tr>
              <tr className="odd:bg-white even:bg-forest-50">
                <td className="px-4 py-3 font-medium text-forest-600">
                  Xe 45 chỗ
                </td>
                <td className="px-4 py-3">45</td>
                <td className="px-4 py-3">3.500.000đ</td>
                <td className="px-4 py-3">Đoàn lớn &amp; team building</td>
              </tr>
              <tr className="odd:bg-white even:bg-forest-50">
                <td className="px-4 py-3 font-medium text-forest-600">
                  Limousine
                </td>
                <td className="px-4 py-3">6</td>
                <td className="px-4 py-3">2.000.000đ</td>
                <td className="px-4 py-3">VIP &amp; sự kiện</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tại sao chọn */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-forest-600 mb-4">
          Tại sao chọn DVDL Đại Dương Ban Mê?
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mb-5">
          Giữa rất nhiều lựa chọn thuê xe tại Buôn Ma Thuột, điều khiến khách
          hàng tin tưởng và quay lại với chúng tôi nằm ở sự tận tâm, minh bạch
          và chất lượng dịch vụ ổn định qua từng chuyến đi. Dưới đây là bốn lý
          do chính khiến hàng nghìn khách hàng đã chọn chúng tôi làm người đồng
          hành trên mọi cung đường:
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-lemon-500 font-bold text-lg shrink-0">✓</span>
            <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">
              <strong className="text-forest-600">
                Kinh nghiệm bền vững từ năm 2018:
              </strong>{" "}
              Hơn sáu năm hoạt động liên tục trong lĩnh vực vận tải du lịch tại
              Đắk Lắk giúp chúng tôi hiểu rõ nhu cầu của từng nhóm khách, xây
              dựng quy trình phục vụ chuyên nghiệp và tích lũy uy tín thực tế qua
              hàng nghìn hành trình an toàn.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-lemon-500 font-bold text-lg shrink-0">✓</span>
            <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">
              <strong className="text-forest-600">Đội xe đa dạng:</strong> Từ xe
              4 chỗ gọn nhẹ, xe 7 chỗ cho gia đình, xe 16–29–45 chỗ cho đoàn
              đông cho đến limousine sang trọng, chúng tôi luôn có phương án phù
              hợp cho mọi quy mô nhóm và mọi loại hình chuyến đi, tất cả đều là
              xe đời mới, được bảo dưỡng định kỳ và vệ sinh sạch sẽ trước mỗi
              chuyến.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-lemon-500 font-bold text-lg shrink-0">✓</span>
            <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">
              <strong className="text-forest-600">
                Tài xế chuyên nghiệp:
              </strong>{" "}
              Đội ngũ lái xe là người bản địa, thông thạo đường sá Tây Nguyên,
              lái xe êm ái, đúng giờ và luôn giữ thái độ lịch sự, nhiệt tình. Với
              những chuyến du lịch, tài xế còn có thể gợi ý điểm ăn uống, tham
              quan như một hướng dẫn viên không chính thức, giúp hành trình thêm
              trọn vẹn.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-lemon-500 font-bold text-lg shrink-0">✓</span>
            <span className="text-gray-700 leading-relaxed text-[15px] md:text-base">
              <strong className="text-forest-600">Giao xe tận nơi:</strong>{" "}
              Chúng tôi nhận đón khách tại nhà, khách sạn, sân bay hay bất kỳ địa
              điểm nào trong thành phố Buôn Ma Thuột và vùng phụ cận, giúp quý
              khách tiết kiệm thời gian và bắt đầu hành trình một cách thuận tiện
              nhất mà không phải tự di chuyển đến điểm nhận xe.
            </span>
          </li>
        </ul>
      </section>

      {/* Quy trình đặt xe */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-forest-600 mb-4">
          Quy trình đặt xe đơn giản
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mb-6">
          Chỉ với ba bước nhanh gọn, quý khách đã có ngay chiếc xe ưng ý cho
          hành trình của mình. Chúng tôi luôn cố gắng đơn giản hóa mọi thủ tục để
          khách hàng cảm thấy nhẹ nhàng và thoải mái ngay từ khâu đặt xe, không
          rườm rà giấy tờ.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-5 bg-white">
            <div className="text-lemon-500 font-bold text-2xl mb-2">1</div>
            <h3 className="font-semibold text-forest-600 mb-2">Liên hệ</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Gọi hotline hoặc nhắn tin cho chúng tôi, cung cấp lịch trình, số
              lượng khách và loại xe mong muốn. Đội ngũ tư vấn sẽ hỗ trợ bạn chọn
              phương án tối ưu về chi phí và tiện nghi.
            </p>
          </div>
          <div className="border rounded-2xl p-5 bg-white">
            <div className="text-lemon-500 font-bold text-2xl mb-2">2</div>
            <h3 className="font-semibold text-forest-600 mb-2">
              Xác nhận thông tin
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Chúng tôi báo giá minh bạch, chốt lại thời gian, điểm đón và toàn
              bộ chi tiết chuyến đi. Mọi điều khoản đều rõ ràng, không phát sinh
              chi phí ẩn ngoài thỏa thuận ban đầu.
            </p>
          </div>
          <div className="border rounded-2xl p-5 bg-white">
            <div className="text-lemon-500 font-bold text-2xl mb-2">3</div>
            <h3 className="font-semibold text-forest-600 mb-2">Nhận xe</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Tài xế đưa xe đến đúng địa điểm và thời gian đã hẹn. Quý khách chỉ
              việc lên xe và tận hưởng hành trình an toàn, thoải mái cùng DVDL
              Đại Dương Ban Mê.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {carRentalData.map((xe) => (
            <Link
              key={xe.slug}
              href={`/thue-xe/${xe.slug}`}
              className="group border rounded-2xl shadow-sm overflow-hidden bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={xe.image}
                  alt={xe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2">
                <h2 className="text-lg font-semibold text-forest-600 leading-snug">
                  {xe.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {excerpts[xe.slug] ?? ""}
                </p>
                {startingPrices[xe.slug] && (
                  <p className="text-sm font-semibold text-forest-600">
                    Từ {startingPrices[xe.slug]}đ/ngày
                  </p>
                )}
                <span className="inline-block text-forest-500 text-sm font-medium mt-1">
                  Xem chi tiết →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Thuê xe đi đâu */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-xl md:text-2xl font-bold text-forest-600 mb-4">
          Thuê xe Buôn Ma Thuột đi đâu?
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mb-5">
          Buôn Ma Thuột là cửa ngõ của cả vùng Tây Nguyên, nơi bạn có thể dễ
          dàng bắt đầu vô số hành trình khám phá hấp dẫn. Dù bạn muốn dạo quanh
          các điểm đến nổi tiếng trong tỉnh Đắk Lắk hay thực hiện những chuyến đi
          liên tỉnh xa hơn, đội xe của chúng tôi đều sẵn sàng đưa đón tận nơi.
          Dưới đây là những điểm đến được khách hàng thuê xe của chúng tôi yêu
          thích nhất:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 leading-relaxed text-[15px] md:text-base">
          <li>
            <strong className="text-forest-600">Buôn Đôn</strong> – vùng đất
            huyền thoại về nghề săn và thuần dưỡng voi, cầu treo và sông
            Sêrêpốk, cách trung tâm khoảng 40km.
          </li>
          <li>
            <strong className="text-forest-600">Hồ Lắk</strong> – hồ nước ngọt
            tự nhiên lớn nhất Tây Nguyên với khung cảnh thơ mộng và trải nghiệm
            cưỡi voi, chèo thuyền độc mộc.
          </li>
          <li>
            <strong className="text-forest-600">Thác Dray Nur</strong> – thác
            nước hùng vĩ bậc nhất Tây Nguyên, điểm check-in không thể bỏ lỡ khi
            đến Đắk Lắk.
          </li>
          <li>
            <strong className="text-forest-600">Vườn Quốc gia Yok Đôn</strong> –
            khu rừng khộp rộng lớn, lý tưởng cho những ai yêu thiên nhiên hoang
            dã và các tour khám phá rừng.
          </li>
          <li>
            <strong className="text-forest-600">Đà Lạt</strong> – thành phố ngàn
            hoa mộng mơ, một chuyến liên tỉnh quen thuộc và được ưa chuộng khởi
            hành từ Buôn Ma Thuột.
          </li>
          <li>
            <strong className="text-forest-600">Nha Trang</strong> – thành phố
            biển sôi động, điểm đến nghỉ dưỡng lý tưởng cho các gia đình và nhóm
            bạn muốn đổi gió.
          </li>
          <li>
            <strong className="text-forest-600">Pleiku</strong> – phố núi Gia
            Lai với Biển Hồ trong xanh và văn hóa Tây Nguyên đặc sắc, gần gũi để
            di chuyển trong ngày.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mt-5">
          Ngoài các điểm đến trên, chúng tôi còn nhận phục vụ mọi lịch trình
          theo yêu cầu riêng của quý khách, từ đưa đón sân bay, đi lễ hội cà
          phê cho đến các chuyến công tác và tour dài ngày. Hãy cho chúng tôi
          biết bạn muốn đi đâu, chúng tôi sẽ tư vấn cung đường và loại xe phù
          hợp nhất.
        </p>
      </section>

      {/* Landing page nổi bật */}
      <section className="max-w-6xl mx-auto px-6 pb-4">
        <Link
          href="/thue-xe-du-lich-dak-lak"
          className="flex items-center justify-between gap-4 bg-forest-500 text-white rounded-2xl px-7 py-5 hover:bg-forest-600 transition group"
        >
          <div>
            <div className="font-bold text-lg leading-snug">
              Thuê xe du lịch Đắk Lắk – Giá tốt, có tài xế
            </div>
            <div className="text-white/75 text-sm mt-1">
              Giá từ 13.000đ/km · Buôn Đôn, Hồ Lắk, liên tỉnh · Phục vụ 24/7
            </div>
          </div>
          <span className="text-lemon-400 text-2xl font-bold group-hover:translate-x-1 transition-transform shrink-0">
            →
          </span>
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-forest-50 py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-forest-600 mb-3">
          Cần tư vấn loại xe phù hợp?
        </h2>
        <p className="text-gray-600 mb-6">
          Liên hệ ngay để nhận báo giá nhanh và chính xác nhất.
        </p>
        <Link
          href="/lien-he"
          className="inline-block bg-forest-500 text-lemon-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition hover:scale-105"
        >
          Liên hệ ngay
        </Link>
      </section>
    </main>
  );
}
