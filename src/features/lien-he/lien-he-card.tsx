'use client';

import { Mail, MapPin, Phone, MessageSquareText } from 'lucide-react';
import Link from 'next/link';

export default function LienHeCard() {
  return (
    <main className='max-w-5xl mx-auto px-6 py-12 text-gray-800'>
      <h1 className='text-3xl font-bold text-forest-600 mb-6 text-center'>
        Liên hệ với chúng tôi
      </h1>
      <p className='text-center text-lg text-gray-600 mb-10'>
        Hãy liên hệ với DVDL Đại Dương nếu bạn cần tư vấn tour, báo giá thuê xe
        hoặc hỗ trợ dịch vụ!
      </p>

      {/* Thông tin liên hệ */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        <div className='space-y-6'>
          <div className='flex items-start gap-4'>
            <Phone className='text-moss-500 mt-1' />
            <div>
              <p className='font-semibold'>Số điện thoại</p>
              <a
                href='tel:0941437070'
                className='text-forest-500 hover:underline'
              >
                0941 437 070
              </a>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <MessageSquareText className='text-moss-500 mt-1' />
            <div>
              <p className='font-semibold'>Zalo hỗ trợ</p>
              <Link
                href='https://zalo.me/0941437070'
                target='_blank'
                className='text-forest-500 hover:underline'
              >
                zalo.me/0941437070
              </Link>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <Mail className='text-moss-500 mt-1' />
            <div>
              <p className='font-semibold'>Email</p>
              <a
                href='mailto:dvdl.daiduong@gmail.com'
                className='text-forest-500 hover:underline'
              >
                dvdl.daiduong@gmail.com
              </a>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <MapPin className='text-moss-500 mt-1' />
            <div>
              <p className='font-semibold'>Địa chỉ</p>
              <p className='text-gray-700'>Buôn Ma Thuột, Đắk Lắk</p>
            </div>
          </div>
        </div>

        {/* (Tùy chọn) Form liên hệ */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className='space-y-4 bg-gray-50 p-6 rounded-xl shadow'
        >
          <h2 className='text-lg font-semibold text-moss-600 mb-2'>
            Gửi yêu cầu
          </h2>
          <input
            type='text'
            placeholder='Họ và tên'
            className='w-full border px-4 py-2 rounded-md focus:outline-moss-500'
            required
          />
          <input
            type='tel'
            placeholder='Số điện thoại'
            className='w-full border px-4 py-2 rounded-md focus:outline-moss-500'
            required
          />
          <textarea
            rows={4}
            placeholder='Nội dung yêu cầu'
            className='w-full border px-4 py-2 rounded-md focus:outline-moss-500'
            required
          />
          <button
            type='submit'
            className='bg-forest-500 text-white px-6 py-2 rounded-full hover:bg-forest-600 transition'
          >
            Gửi yêu cầu
          </button>
        </form>
      </div>

      {/* CTA */}
      <div className='text-center mt-16'>
        <p className='text-gray-600'>
          Chúng tôi sẽ phản hồi nhanh nhất trong vòng 1 giờ làm việc.
        </p>
      </div>
    </main>
  );
}
