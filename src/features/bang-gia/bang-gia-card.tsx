'use client';

import Image from 'next/image';
import { ContactButton } from '@/features/contact-button';

export function BangGiaCard() {
  return (
    <main className='text-gray-800'>
      {/* Hero */}
      <section className='relative h-[300px] w-full'>
        <Image
          src='/images/daklak-museum.jpeg'
          alt='Bảng giá thuê xe Buôn Ma Thuột'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
          <h1 className='text-4xl md:text-5xl text-white font-bold text-center px-4'>
            Bảng giá cho thuê xe ô tô du lịch tại Đắk Lắk năm 2025
          </h1>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-16 pt-12 mb-6'>
        <div>
          <h2 className='text-2xl font-bold text-forest-600'>
            Mức giá thuê xe du lịch không cố định.
          </h2>
          <p className='text-white text-center'>
            Giá thuê xe ô tô có thể thay đổi phụ thuộc vào những yếu tố sau đây:
          </p>
          <ul className='list-disc pl-5 space-y-3 text-gray-700 mb-4'>
            <li>Loại xe.</li>
            <li>Hình thức thuê xe có tài xế hay tự lái.</li>
            <li>Số lượng xe.</li>
            <li>Quãng đường di chuyển.</li>
            <li>Thời điểm thuê xe</li>
            <li>Các dịch vụ kèm theo chuyến đi.</li>
          </ul>
          <p className='mb-4'>
            Chẳng hạn, nếu quý khách thuê xe du lịch ở Buôn Ma Thuột đi Gia Lai
            sẽ có giá rẻ hơn nhiều so với thuê xe đi Đà Lạt, thuê xe đi 1 ngày
            sẽ rẻ hơn 2 ngày. Và khi thuê xe tự lái, chi phí khách hàng phải bỏ
            ra cũng rẻ hơn so với thuê xe có tài xế.
          </p>
          <p>
            Để nắm được giá cho thuê xe ô tô chính xác, bạn hãy liên hệ trực
            tiếp với nhân viên của công ty. Chuyên viên tư vấn của Đại Dương
            Travel sẽ giúp bạn nắm được bảng giá thuê xe chính xác nhất. Hoặc có
            thể tham khảo bảng giá thuê xe dưới đây:
          </p>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-16 space-y-16'>
        {/* BẢNG 1: Đưa đón sân bay */}
        <div>
          <h2 className='text-2xl font-bold text-forest-600 mb-4'>
            Bảng giá dịch vụ thuê xe đưa đón sân bay
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full table-auto border border-gray-200 shadow-sm'>
              <thead className='bg-moss-100 text-moss-700'>
                <tr>
                  <th className='py-2 px-3 text-center'>Lộ trình</th>
                  <th className='py-2 px-3 text-center'>Thời gian</th>
                  <th className='py-2 px-3 text-center'>Km</th>
                  <th className='py-2 px-3 text-center'>Xe 4 chỗ</th>
                  <th className='py-2 px-3 text-center'>Xe 7 chỗ</th>
                  <th className='py-2 px-3 text-center'>Xe 16 chỗ</th>
                </tr>
              </thead>
              <tbody className='text-gray-700'>
                {[
                  [
                    'Sân bay BMT – Trung tâm TP',
                    '1 lượt',
                    '12km',
                    '200.000đ',
                    '250.000đ',
                    '500.000đ',
                  ],
                  [
                    'Sân bay BMT – Buôn Hồ hoặc Krông Ana',
                    '1 lượt',
                    '40km',
                    '480.000đ',
                    '550.000đ',
                    '750.000đ',
                  ],
                  [
                    'Sân bay BMT – Phước An, Krông Pắk',
                    '1 lượt',
                    '30km',
                    '400.000đ',
                    '450.000đ',
                    '600.000đ',
                  ],
                  [
                    'Sân bay BMT – Eakar',
                    '1 lượt',
                    '54km',
                    '650.000đ',
                    '700.000đ',
                    '900.000đ',
                  ],
                  [
                    'Sân bay BMT – M’Đrăk',
                    '1 lượt',
                    '90km',
                    '1.000.000đ',
                    '1.100.000đ',
                    '1.400.000đ',
                  ],
                  [
                    'Sân bay BMT – Buôn Đôn',
                    '1 lượt',
                    '35km',
                    '450.000đ',
                    '500.000đ',
                    '700.000đ',
                  ],
                  [
                    'Sân bay BMT – Ea Sup hoặc Ea Hleo',
                    '1 lượt',
                    '80km',
                    '950.000đ',
                    '1.050.000đ',
                    '1.300.000đ',
                  ],
                  [
                    'Sân bay BMT – Đăk Mil, Đắk Nông',
                    '1 lượt',
                    '65km',
                    '780.000đ',
                    '850.000đ',
                    '1.000.000đ',
                  ],
                  [
                    'Sân bay BMT – Gia Nghĩa, Đắk Nông',
                    '1 lượt',
                    '130km',
                    '1.400.000đ',
                    '1.600.000đ',
                    '2.000.000đ',
                  ],
                  [
                    'Sân bay BMT – Pleiku, Gia Lai',
                    '1 lượt',
                    '185km',
                    '1.900.000đ',
                    '2.200.000đ',
                    '2.800.000đ',
                  ],
                ].map((row, i) => (
                  <tr key={i} className='border-t'>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className='py-2 px-3 whitespace-nowrap text-center'
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='text-sm text-gray-600 mt-4 italic'>
              * Giá đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí cầu đường,
              bến bãi và hóa đơn VAT.
            </p>
          </div>
        </div>

        {/* BẢNG 2: Giá theo km & số chiều */}
        <div>
          <h2 className='text-2xl font-bold text-forest-600 mb-4'>
            Bảng giá thuê xe theo số km và số chiều
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full table-auto border border-gray-200 shadow-sm'>
              <thead className='bg-moss-100 text-moss-700'>
                <tr>
                  <th className='py-2 px-3 text-center'>Loại xe</th>
                  <th className='py-2 px-3 text-center'>Số chiều</th>
                  <th className='py-2 px-3 text-center'>Xe 4 chỗ</th>
                  <th className='py-2 px-3 text-center'>Xe 7 chỗ</th>
                  <th className='py-2 px-3 text-center'>Xe 16 chỗ</th>
                </tr>
              </thead>
              <tbody className='text-gray-700'>
                {[
                  ['0-50km', '1', '13.000đ/km', '15.000đ/km', '20.000đ/km'],
                  ['50-100km', '1', '12.000đ/km', '13.000đ/km', '18.000đ/km'],
                  ['Trên 100km', '1', '11.000đ/km', '12.000đ/km', '15.000đ/km'],
                  ['0-50km', '2', '8.000đ/km', '10.000đ/km', '15.000đ/km'],
                  ['50-100km', '2', '7.500đ/km', '9.000đ/km', '12.000đ/km'],
                  ['Trên 100km', '2', '7.000đ/km', '8.000đ/km', '10.000đ/km'],
                ].map((row, i) => (
                  <tr key={i} className='border-t'>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className='py-2 px-3 whitespace-nowrap text-center'
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='text-sm text-gray-600 mt-4 italic'>
              * Giá đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí cầu đường,
              bến bãi và hóa đơn VAT.
            </p>
          </div>
        </div>

        {/* BẢNG 3: Giá theo tuyến lộ trình cụ thể */}
        <div>
          <h2 className='text-2xl font-bold text-forest-600 mb-4'>
            Bảng giá thuê xe theo lộ trình từ Buôn Ma Thuột
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full table-auto border border-gray-200 shadow-sm'>
              <thead className='bg-moss-100 text-moss-700'>
                <tr>
                  <th className='py-2 px-3 text-center'>Lộ trình</th>
                  <th className='py-2 px-3 text-center'>Thời gian / Cự ly</th>
                  <th className='py-2 px-3 text-center'>Xe 4 chỗ</th>
                  <th className='py-2 px-3 text-center'>Xe 7 chỗ</th>
                  <th className='py-2 px-3 text-center'>Xe 16 chỗ</th>
                </tr>
              </thead>
              <tbody className='text-gray-700'>
                {[
                  [
                    'Sân bay - Quanh trung tâm thành phố',
                    '15km',
                    '200.000đ',
                    '250.000đ',
                    '500.000đ',
                  ],
                  [
                    'City tour (50km)',
                    '1 ngày',
                    '900.000đ',
                    '1.100.000đ',
                    '1.300.000đ',
                  ],
                  [
                    'Buôn Ma Thuột – Thác Dray Nur 2 chiều',
                    '5h',
                    '700.000đ',
                    '900.000đ',
                    '1.100.000đ',
                  ],
                  [
                    'City tour + Thác Dray Nur',
                    '1 ngày',
                    '1.100.000đ',
                    '1.250.000đ',
                    '1.700.000đ',
                  ],
                  [
                    'Buôn Ma Thuột – KDL Buôn Đôn 2 chiều',
                    '5h',
                    '800.000đ',
                    '1.000.000đ',
                    '1.200.000đ',
                  ],
                  [
                    'City tour + Buôn Đôn',
                    '1 ngày',
                    '1.200.000đ',
                    '1.250.000đ',
                    '1.700.000đ',
                  ],
                  [
                    'Buôn Ma Thuột – Núi Đá Voi – Hồ Lắk 2 chiều',
                    '5h',
                    '900.000đ',
                    '1.000.000đ',
                    '1.200.000đ',
                  ],
                  [
                    'City tour + Núi đá voi + Hồ Lắk',
                    '1 ngày',
                    '1.200.000đ',
                    '1.300.000đ',
                    '1.700.000đ',
                  ],
                  [
                    'Tour Đắk Lắk 2 ngày 1 đêm',
                    '2 ngày',
                    '2.600.000đ',
                    '2.800.000đ',
                    '3.500.000đ',
                  ],
                  [
                    'Tour Đắk Lắk 3 ngày 2 đêm',
                    '3 ngày',
                    '3.600.000đ',
                    '4.000.000đ',
                    '4.800.000đ',
                  ],
                  [
                    'Buôn Ma Thuột – Gia Nghĩa',
                    '125km',
                    '1.400.000đ',
                    '1.600.000đ',
                    '2.400.000đ',
                  ],
                  [
                    'Buôn Ma Thuột – Pleiku, Gia Lai',
                    '185km',
                    '2.000.000đ',
                    '2.200.000đ',
                    '3.000.000đ',
                  ],
                  [
                    'Buôn Ma Thuột – Nha Trang',
                    '185km',
                    '2.200.000đ',
                    '2.200.000đ',
                    '3.000.000đ',
                  ],
                  [
                    'Buôn Ma Thuột – Đà Lạt',
                    '330km',
                    '2.200.000đ',
                    '2.500.000đ',
                    '3.500.000đ',
                  ],
                  [
                    'Buôn Ma Thuột – Hồ Chí Minh',
                    '-',
                    '3.800.000đ',
                    '4.200.000đ',
                    '5.000.000đ',
                  ],
                ].map((row, i) => (
                  <tr key={i} className='border-t'>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className='py-2 px-3 whitespace-nowrap text-center'
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='text-sm text-gray-600 mt-4 italic'>
              * Giá đã bao gồm tài xế và nhiên liệu. Chưa bao gồm phí cầu đường,
              bến bãi và hóa đơn VAT.
            </p>
          </div>
        </div>
      </section>

      <section className='max-w-5xl mx-auto px-6 pb-16 space-y-4'>
        <h2 className='text-2xl font-bold text-forest-600 mb-4'>
          Lái xe giàu kinh nghiệm
        </h2>
        <p>
          Tất cả các lái xe đều là những người có nhiều năm kinh nghiệm. Khi
          phục vụ khách hàng, họ đều thể hiện thái độ tận tâm, dễ chịu. Tất cả
          đều đặt sự an toàn và sự hài lòng của khách hàng lên hàng đầu.
        </p>
        <p>
          Các nhân viên tư vấn của Đại Dương Travel luôn tư vấn tận tình giúp
          quý khách lựa chọn được loại xe phù hợp với chuyến đi của mình. Luôn
          trực tổng đài 24/7 sẵn sàng hỗ trợ quý khách bất cứ lúc nào
        </p>
      </section>

      <section className='max-w-5xl mx-auto px-6 pb-16 space-y-4'>
        <h2 className='text-2xl font-bold text-forest-600 mb-4'>
          Cho thuê xe đời mới
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <p>
              Đại Dương Travel cung cấp đầy đủ các dòng xe 4, 7, 16, 29, 45 chỗ,
              xe giường nằm, xe limousine từ bình dân đến cao cấp. Tất cả xe của
              công ty đều là xe đời mới, được kiểm định, bảo dưỡng định kỳ. Từ
              đó, giúp khách hàng dễ dàng lựa chọn được dòng xe phù hợp và có
              được những hành trình an toàn.
            </p>
          </div>
          <div>
            <Image
              src='/images/hyundai-tucson.jpg'
              alt='Thuê xe ô tô 7 chỗ'
              width={500}
              height={300}
              className='rounded-xl shadow-md w-[500px] h-[200px] object-contain'
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='text-center pb-16'>
        <h2 className='text-2xl font-bold text-forest-600 mb-3'>
          Bạn cần tư vấn nhanh?
        </h2>
        <p className='mb-6 text-gray-600'>
          Liên hệ chúng tôi để nhận báo giá ưu đãi và hỗ trợ tận tâm.
        </p>
        <ContactButton />
      </section>
    </main>
  );
}
