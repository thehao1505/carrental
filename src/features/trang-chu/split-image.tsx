import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative flex flex-col md:flex-row min-h-[300px] h-[650px] rounded-2xl w-auto mx-5 md:mx-10 xl:mx-30 mb-30 bg-lemon-500">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center md:absolute md:left-0 md:top-0 md:bottom-0">
        <div className="z-10 rounded-2xl">
          <p className="text-moss-500 text-xl mb-2">Cho thuê xe du lịch</p>
          <p className="text-5xl md:text-6xl font-bold text-moss-500 mb-2">
            Tận tâm.
          </p>
          <p className="text-4xl md:text-5xl font-serif italic text-moss-500 mb-6">
            Chuyên nghiệp.
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-forest-500 max-w-[550px] mb-6">
            Cho Thuê Xe Du Lịch Đắk Lắk - Xe 4 đến 45 Chỗ Có Tài Xế
          </h1>
          <p className="text-forest-500 max-w-[450px] md:max-w-[450px] text-xl mb-8">
            Cho thuê xe ô tô có tài xế tại DVDL Đại Dương Ban Mê - Đa dạng xe
            4-45 chỗ, giá tốt, thủ tục nhanh, giao xe tận nơi. Đặt xe dễ dàng
            chỉ trong vài phút! <br />
            Xem bảng giá và đặt lịch{" "}
            <Link href="/bang-gia" className="underline hover:font-bold">
              tại đây.
            </Link>
          </p>
          <p className="text-forest-500 text-sm font-medium mb-6">
            Giá từ 800.000đ/ngày có tài xế — 4 đến 45 chỗ
          </p>
          <div className="flex flex-col">
            <Link
              href="/lien-he"
              className="bg-forest-500 cursor-pointer h-[50px] text-base font-semibold px-6 py-2 rounded-3xl text-lemon-500 w-fit hover:scale-105 transition-all duration-200 transform"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </div>

      <div
        className="w-full min-h-[280px] md:min-h-0 md:w-full relative overflow-hidden md:ml-100 rounded-2xl md:rounded-l-none md:rounded-r-2xl md:[clip-path:polygon(40%_0,100%_0,100%_100%,20%_100%)]"
      >
        <div className="h-full w-full">
          <Image
            src="/images/draynur-waterfall.webp"
            alt="Thắng cảnh Tây Nguyên"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            quality={75}
            style={{ objectFit: "cover" }}
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
