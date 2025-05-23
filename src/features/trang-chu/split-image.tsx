'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const images = [
  '/images/draynur-waterfall.jpg',
  '/images/coffee-museum.jpg',
  '/images/den-biet-dien-bao-dai-lam-ngay-po-anh-dep-ngat-ngay-1652222786.jpg',
];

export function HeroSection() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative flex flex-col md:flex-row min-h-[300px] h-[650px] rounded-2xl w-auto mx-5 md:mx-10 xl:mx-30 mb-30 bg-lemon-500'>
      <div className='w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center md:absolute md:left-0 md:top-0 md:bottom-0'>
        <div className='z-10 rounded-2xl'>
          <p className='text-moss-500 text-xl mb-2'>Cho thuê xe du lịch</p>
          <h1 className='text-5xl md:text-6xl font-bold text-moss-500 mb-2'>
            Tận tâm.
          </h1>
          <h2 className='text-4xl md:text-5xl font-serif italic text-moss-500 mb-6'>
            Chuyên nghiệp.
          </h2>
          <p className='text-forest-500 max-w-[450px] md:max-w-[450px] text-xl mb-8'>
            Cho thuê xe ô tô tự lái và có tài tại Đại Dương Travel - Đa
            dạng xe 4-45 chỗ, giá tốt, thủ tục nhanh, giao xe tận nơi. Đặt xe dễ
            dàng chỉ trong vài phút!
          </p>
          <div className='flex flex-col'>
            <button
              onClick={() => {router.push('/lien-he')}}
              className='bg-forest-500 cursor-pointer h-[50px] text-base font-semibold px-6 py-2 rounded-3xl text-lemon-500 w-fit hover:scale-105 transition-all duration-200 transform'
            >
              Liên hệ ngay
            </button>
          </div>
        </div>
      </div>

      <div
        className='md:w-full relative overflow-hidden ml-100 rounded-r-2xl'
        style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 20% 100%)' }}
      >
        <div className='h-full w-full'>
          <Image
            src={images[currentImageIndex]}
            alt='Image'
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
