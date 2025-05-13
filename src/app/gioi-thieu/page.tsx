import Image from 'next/image';
import { Car, Settings, BadgeCheck, Users } from 'lucide-react';
import { Metadata } from 'next';
import SchemaMarkup from '@/features/schema-markup';

const coreValues = [
  {
    icon: <Users className='w-12 h-12 text-moss-500' />,
    title: 'Khách hàng là trung tâm',
    description:
      'Mọi dịch vụ được thiết kế để tối ưu trải nghiệm và sự hài lòng của khách hàng.',
  },
  {
    icon: <Settings className='w-12 h-12 text-moss-500' />,
    title: 'Linh hoạt & cá nhân hóa',
    description:
      'Chúng tôi đáp ứng theo từng yêu cầu riêng của từng cá nhân và đoàn khách.',
  },
  {
    icon: <BadgeCheck className='w-12 h-12 text-moss-500' />,
    title: 'Minh bạch & rõ ràng',
    description:
      'Báo giá trọn gói trước, không phát sinh chi phí ngoài ý muốn.',
  },
  {
    icon: <Car className='w-12 h-12 text-moss-500' />,
    title: 'Chất lượng đồng nhất',
    description:
      'Tất cả xe đều được bảo dưỡng định kỳ, vệ sinh kỹ trước mỗi chuyến đi.',
  },
];

export const metadata: Metadata = {
  title: 'Giới Thiệu | Đại Dương Travel',
  description:
    'Khám phá hành trình du lịch cùng Đại Dương Travel - chuyên tour nội địa, thuê xe đời mới, tổ chức team building và sự kiện trọn gói.',
  keywords: [
    'du lịch Buôn Ma Thuột',
    'thuê xe du lịch',
    'Đại Dương Travel',
    'tour Daklak',
    'tour riêng BMT',
    'tổ chức sự kiện Đắk Lắk',
    'dịch vụ du lịch Daklak',
  ],
  openGraph: {
    title: 'Giới Thiệu | DVDL Đại Dương',
    description:
      'Chúng tôi mang đến trải nghiệm du lịch cá nhân hóa, an toàn, minh bạch và tận tâm.',
    images: [
      {
        url: '/logo-light.png',
        width: 800,
        height: 600,
        alt: 'Logo Đại Dương Travel',
      },
    ],
    type: 'website',
  },
};

export default function GioiThieu() {
  return (
    <>
      <main className='text-gray-800'>
        {/* Hero section */}
        <section className='relative h-[400px] w-full'>
          <Image
            src='/images/daklak-museum.jpeg'
            alt='Giới thiệu công ty du lịch'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-white font-bold text-center px-4'>
              Về Chúng Tôi - DVDL Đại Dương
            </h1>
          </div>
        </section>

        {/* Giới thiệu chung */}
        <section className='max-w-5xl mx-auto px-6 py-12'>
          <h2 className='text-3xl font-semibold text-forest-600 mb-6'>
            Khởi nguồn từ đam mê
          </h2>
          <p className='mb-4'>
            Được thành lập vào năm <strong>2018</strong>,{' '}
            <strong>DVDL Đại Dương</strong> mang trong mình khát vọng mang đến
            những chuyến đi không chỉ là trải nghiệm, mà còn là hành trình khám
            phá văn hóa, thiên nhiên và con người. Chúng tôi bắt đầu từ một nhóm
            những người yêu du lịch, khao khát xây dựng một dịch vụ{' '}
            <em>“cá nhân hóa từng chuyến đi”</em> cho người Việt.
          </p>
          <p className='mb-4'>
            Trải qua hơn <strong>gần 10 năm</strong> hoạt động, chúng tôi tự hào
            đã phục vụ hàng ngàn lượt khách, tạo nên những hành trình đáng nhớ,
            an toàn và đầy cảm xúc. Mỗi chuyến đi là một câu chuyện, và chúng
            tôi luôn sẵn sàng đồng hành cùng bạn để viết nên những câu chuyện
            đó.
          </p>
          <Image
            src='/daklak-museum.jpeg'
            alt='Hành trình du lịch'
            width={1000}
            height={500}
            className='rounded-2xl mt-6 shadow-md mx-auto'
          />
        </section>

        {/* Giá trị cốt lõi */}
        <section className='bg-moss-500 py-16 rounded-r-[100px]'>
          <div className='max-w-6xl mx-auto px-6 text-center'>
            <h2 className='text-3xl font-bold text-pale-500 mb-12'>
              Giá trị cốt lõi
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
              {coreValues.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center text-center'
                >
                  <div className='bg-pale-500 rounded-full w-24 h-24 flex items-center justify-center mb-4'>
                    {item.icon}
                  </div>
                  <h3 className='text-lg text-pale-500 font-semibold mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-pale-500'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dịch vụ cung cấp */}
        <section className='max-w-5xl mx-auto px-6 py-12'>
          <h2 className='text-2xl font-bold text-forest-600 mb-6'>
            Dịch vụ nổi bật
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <ul className='list-disc pl-5 space-y-3 text-gray-700'>
                <li>Tour du lịch nội địa & quốc tế trọn gói</li>
                <li>Tour thiết kế riêng cho cá nhân/doanh nghiệp</li>
                <li>Cho thuê xe du lịch 4-45 chỗ đời mới</li>
                <li>Đặt phòng khách sạn, vé máy bay, vé tham quan</li>
                <li>Tổ chức sự kiện, team building, gala dinner</li>
              </ul>
            </div>
            <div>
              <Image
                src='/daklak-museum.jpeg'
                alt='Dịch vụ du lịch'
                width={500}
                height={300}
                className='rounded-xl shadow-md w-full h-auto object-cover'
              />
            </div>
          </div>
        </section>

        {/* Cam kết của chúng tôi */}
        <section className='bg-lemon-50 py-12 px-6'>
          <div className='max-w-5xl mx-auto'>
            <h2 className='text-2xl font-bold text-forest-600 mb-6'>
              Cam Kết Của Chúng Tôi
            </h2>

            <div className='space-y-8 text-gray-700'>
              {/* 1. Xe đời mới – An toàn tuyệt đối */}
              <div>
                <h3 className='text-xl font-semibold text-forest-500 mb-2'>
                  1. Đảm bảo an toàn tuyệt đối cho khách hàng
                </h3>
                <p className='mb-2'>
                  Xe chúng tôi được bảo trì định kỳ và kiểm tra kỹ thuật nghiêm
                  ngặt trước mỗi chuyến đi.
                  <br /> Khách hàng hoàn toàn yên tâm về độ an toàn, độ bền và
                  sự êm ái trên mọi hành trình.
                </p>
              </div>

              {/* 2. Dịch vụ chuẩn mực, tận tâm */}
              <div>
                <h3 className='text-xl font-semibold text-forest-500 mb-2'>
                  2. Dịch vụ chuẩn mực, tận tâm
                </h3>
                <p className='mb-2'>
                  Mỗi chuyến xe đều được chuẩn bị kỹ lưỡng để mang lại trải
                  nghiệm tốt nhất:
                </p>
                <ul className='list-disc pl-5 space-y-1'>
                  <li>
                    Xe được vệ sinh sạch sẽ, thơm tho trước giờ đón khách.
                  </li>
                  <li>Trang bị sẵn nước suối, khăn lạnh và wifi miễn phí.</li>
                  <li>
                    Tài xế lịch sự, chuyên nghiệp, có kinh nghiệm nhiều năm và
                    luôn đúng giờ.
                  </li>
                  <li>
                    Chúng tôi cam kết đồng hành và hỗ trợ quý khách suốt hành
                    trình.
                  </li>
                </ul>
              </div>

              {/* 3. Minh bạch và linh hoạt về giá */}
              <div>
                <h3 className='text-xl font-semibold text-forest-500 mb-2'>
                  3. Minh bạch và linh hoạt về giá
                </h3>
                <p className='mb-2'>
                  Chúng tôi luôn đề cao sự rõ ràng và công bằng trong mọi giao
                  dịch:
                </p>
                <ul className='list-disc pl-5 space-y-1'>
                  <li>
                    Báo giá trước - không phát sinh chi phí ngoài lộ trình.
                  </li>
                  <li>
                    Giá thuê linh hoạt: theo chuyến, theo ngày hoặc theo tháng.
                  </li>
                  <li>Khách hàng chỉ thanh toán đúng số tiền đã thỏa thuận.</li>
                </ul>
              </div>
            </div>

            {/* Hình minh họa */}
            <div className='mt-10'>
              <Image
                src='/daklak-museum.jpeg'
                alt='Cam kết dịch vụ chất lượng'
                width={1000}
                height={500}
                className='rounded-xl shadow-md w-full h-auto object-cover'
              />
            </div>
          </div>
        </section>

        {/* Liên hệ */}
        <section className='max-w-5xl mx-auto px-6 py-16 text-center'>
          <h2 className='text-3xl font-bold text-forest-600 mb-4'>
            Sẵn sàng cho hành trình tiếp theo?
          </h2>
          <p className='mb-6 text-gray-600 text-lg'>
            Liên hệ với chúng tôi để được tư vấn và lên kế hoạch cho chuyến đi
            mơ ước của bạn ngay hôm nay!
          </p>
          <a
            href='/lien-he'
            className='inline-block bg-forest-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition'
          >
            Liên hệ ngay
          </a>
        </section>

        <SchemaMarkup />
      </main>
    </>
  );
}
