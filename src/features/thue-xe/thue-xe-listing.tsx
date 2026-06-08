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
                <span className="inline-block text-forest-500 text-sm font-medium mt-1">
                  Xem chi tiết →
                </span>
              </div>
            </Link>
          ))}
        </div>
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
