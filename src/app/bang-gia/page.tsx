import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bảng Giá Thuê Xe Du Lịch | Đại Dương Travel',
  description:
    'Xem bảng giá thuê xe 4 - 45 chỗ tại Buôn Ma Thuột – Đắk Lắk. Báo giá theo km và thời gian thuê. Liên hệ ngay để nhận ưu đãi.',
};

export default function BangGia() {
  return (
    <main className='text-gray-800'>
      {/* Hero */}
      <section className='relative h-[300px] w-full'>
        <Image
          src='/daklak-museum.jpeg'
          alt='Bảng giá thuê xe Buôn Ma Thuột'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
          <h1 className='text-4xl md:text-5xl text-white font-bold text-center px-4'>
            Bảng Giá Thuê Xe Buôn Ma Thuột
          </h1>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-12 space-y-16'>
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

      {/* CTA */}
      <section className='text-center py-16'>
        <h2 className='text-2xl font-bold text-forest-600 mb-3'>
          Bạn cần tư vấn nhanh?
        </h2>
        <p className='mb-6 text-gray-600'>
          Liên hệ chúng tôi để nhận báo giá ưu đãi và hỗ trợ tận tâm.
        </p>
        <Link
          href='/lien-he'
          className='inline-block bg-forest-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition'
        >
          Liên hệ ngay
        </Link>
      </section>
    </main>
  );
}
