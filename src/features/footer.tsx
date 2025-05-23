'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className='bg-forest-500 text-white px-6 md:px-10 xl:px-30 pt-12'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <div className='flex items-center gap-2'>
            <Image
              src='/images/logo-light.png'
              alt='logo'
              width={200}
              height={100}
            />
          </div>
          <p className='text-sm text-moss-100 max-w-sm'>
            Dịch vụ thuê xe uy tín, nhanh chóng, giá hợp lý, từ xe tự lái đến có
            tài xế. Đặt xe dễ dàng chỉ trong vài phút, sẵn sàng đồng hành cùng
            bạn trên mọi hành trình!
          </p>
        </div>

        <div className='space-y-4'>
          <h4 className='font-semibold'>
            Để lại email để nhận được ưu đãi mới nhất
          </h4>
          <input
            type='email'
            placeholder='example@gmail.com'
            className='w-full p-3 rounded-r-3xl bg-white text-black placeholder-gray-400 px-6'
          />
          <button className='bg-lemon-500 hover:bg-lemon-400 text-black font-semibold px-6 py-2 rounded-r-3xl'>
            GỬI
          </button>
        </div>
      </div>

      <hr className='my-10 border-moss-100/20' />

      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm pb-10'>
        <div>
          <h5 className='font-semibold mb-4'>Trang</h5>
          <ul className='space-y-2 text-moss-100'>
            <li
              onClick={() => router.push('/')}
              className='transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline'
            >
              Trang chủ
            </li>
            <li
              onClick={() => router.push('/gioi-thieu')}
              className='transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline'
            >
              Giới thiệu
            </li>
            <li
              onClick={() => router.push('/tin-tuc')}
              className='transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline'
            >
              Tin tức
            </li>
            <li
              onClick={() => router.push('/lien-he')}
              className='transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline'
            >
              Liên hệ
            </li>
          </ul>
        </div>
        <div>
          <h5 className='font-semibold mb-4'>Dịch vụ</h5>
          <ul className='space-y-2 text-moss-100'>
            <li>Thuê xe tự lái</li>
            <li>Thuê xe có tài xế</li>
            <li>Thuê xe 16 chỗ</li>
            <li>Thuê xe đi du lịch</li>
            <li>Thuê xe đi công tác</li>
          </ul>
        </div>
        <div>
          <h5 className='font-semibold mb-4'>Hỗ trợ</h5>
          <ul className='space-y-2 text-moss-100'>
            <li>Hướng dẫn sử dụng</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách vận chuyển</li>
            <li>Hướng dẫn sử dụng</li>
          </ul>
        </div>
        <div>
          <h5 className='font-semibold mb-4'>Liên hệ</h5>
          <ul className='space-y-2 text-moss-100'>
            <li>+84 941 437 070</li>
            <li>thehao155@gmail.com</li>
            <li>
              {`Zalo: `}
              <a
                href='https://zalo.me/0941437070'
                className='hover:text-lemon-400 hover:underline'
              >
                0941 437 070
              </a>
            </li>
            <li>
              252/6 Phan Huy Chú,
              <br />
              Buôn Ma Thuột, Đắk Lắk, Vietnam
            </li>
          </ul>
        </div>
      </div>

      <div className='py-3 text-center text-sm text-moss-100 border-t border-moss-100/20'>
        Copyright © Dai Duong Travel | Powered by{' '}
        <span className='text-lemon-400'>The Hao</span> | Designed by The Hao
        Nguyen
      </div>
    </footer>
  );
}
