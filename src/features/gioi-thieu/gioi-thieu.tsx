'use client';

import Image from 'next/image';
import { Car, Settings, BadgeCheck, Users } from 'lucide-react';
import { ContactButton } from '@/features/contact-button';
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

export default function GioiThieuCard() {
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
              Về Chúng Tôi - Đại Dương Travel
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
            <strong>Đại Dương Travel</strong> mang trong mình khát vọng mang đến
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
            src='/images/daklak-museum.jpeg'
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

        {/* Tại sao nên thuê xe tại Đại Dương Travel */}
        <section className='max-w-5xl mx-auto px-6 py-12'>
          <h2 className='text-2xl font-bold text-forest-600 mb-6'>
            Tại sao nên thuê xe tại Đại Dương Travel
          </h2>
          <ul className='list-disc pl-5 space-y-3 text-gray-700'>
            <li>
              Sự tận tâm và nhiệt huyết của đội ngũ nhân sự tạo nên một giá trị
              không ngừng lớn mạnh.
            </li>
            <li>
              Đội ngũ tài xế tâm huyết, nhiệt tình và được đào tạo nghiệp vụ bài
              bảng.
            </li>
            <li>
              Đội xe từ 4 - 45 chỗ chuyên phục vụ du lịch, với các dòng xe đời
              mới, cao cấp nhiều tiện nghi ưu việt.
            </li>
            <li>
              Chúng tôi luôn cam kết tạo nên giá trị đồng hành giữa chất lượng
              và chi phí nhằm làm hài lòng khách hàng với mức giá hợp lý.
            </li>
            <li>
              Hơn nữa chúng tôi có một dịch vụ chăm sóc khách hàng có thể đáp
              ứng tối ưu nhu cầu của quý khách: tư vấn miễn phí, hỗ trợ 24/24,
              đa phương thức tiếp cận (tư vấn qua điện thoại, website và đặc
              biệt là dịch vụ tại nhà)
            </li>
            <li>
              Với sự nỗ lực, cố gắng không ngừng nghỉ của đội ngũ nhân viên,
              Thuê Xe Việt luôn đem đến cho Quý khách những chuyến đi tuyệt vời
              nhất. Thời gian tới, hy vọng chúng tôi sẽ có cơ hội được phục vụ
              quý khách
            </li>
          </ul>
        </section>

        {/* Dịch vụ cung cấp */}
        <section className='max-w-5xl mx-auto px-6 py-12'>
          <h2 className='text-2xl font-bold text-forest-600 mb-6'>
            Dịch vụ nổi bật
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <ul className='list-disc pl-5 space-y-3 text-gray-700'>
                <li>Tour du lịch Tây Nguyên và toàn quốc</li>
                <li>Tour thiết kế riêng cho cá nhân/doanh nghiệp</li>
                <li>Cho thuê xe du lịch 4-45 chỗ đời mới</li>
                <li>
                  Để thuận tiện cho quý khách ở xa đến du lịch, đi lại, công
                  tác, làm việc tại Đăk Lăk. chúng tôi còn hỗ trợ, cung cấp các
                  thông tin cần thiết, hữu ích cho khách hàng trong và ngoài
                  tỉnh:
                </li>
                <li>
                  Cung cấp thông tin và thiết kế Tour miễn phí theo mong muốn
                  của khách du lịch. Tư vấn du khách tìm các địa điểm du lịch,
                  vui chơi giải trí, dịch vụ nhà hàng - khách sạn tiện nghi, giá
                  rẻ…, lựa chọn các dịch vụ du lịch, mua sắm tốt nhất…
                </li>
                <li>
                  Tư vấn, hỗ trợ tổ chức hội nghị, hội thảo tại các địa điểm lý
                  tưởng, thuận tiện cho việc giao dịch, đi lại…
                </li>
                <li>
                  Đón tiếp và tổ chức cho các cá nhân, tổ chức, doanh nghiệp trong
                  nước và nước ngoài đến Đăk Lăk công tác, khảo sát thị trường ….
                </li>
              </ul>
            </div>
            <div>
              <Image
                src='/images/daklak-museum.jpeg'
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
                src='/images/daklak-museum.jpeg'
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
          <ContactButton />
        </section>
        <SchemaMarkup />
      </main>
    </>
  );
}
