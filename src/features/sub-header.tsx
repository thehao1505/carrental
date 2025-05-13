'use client';

import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function SubHeader() {
  return (
    <header className='px-5 md:px-10 xl:px-30 py-5 h-10 flex flex-row justify-between items-center bg-forest-500 z-40 relative'>
      <div className='flex flex-row items-center gap-2 text-sm'>
        <p className='text-white'>
          <PhoneCall size={16} />
        </p>
        <span className='text-white'>0941 437 070</span>
        <p className='text-white'>
          <Mail size={16} />
        </p>
        <span className='text-white'>thehao155@gmail.com</span>
      </div>
      <div className='flex flex-row items-center gap-2 text-sm'>
        <p className='text-white'>
          <MapPin size={16} />
        </p>
        <span className='text-white'>
          252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk
        </span>
      </div>
    </header>
  );
}
