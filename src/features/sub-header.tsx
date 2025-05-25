'use client';

import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function SubHeader() {
  return (
    <header className='px-5 md:px-10 xl:px-30 py-5 h-10 flex flex-row justify-between items-center bg-forest-500 z-40 relative'>
      <div className='flex flex-row items-center gap-2 text-sm'>
        <p className='text-white'>
          <PhoneCall size={16} />
        </p>
        <span className='text-white'>
          <a href="tel:0941437070" target="_blank" rel="noopener noreferrer" className="hover:text-lemon-500 hover:underline">
            0941 437 070
          </a>
        </span>
        <p className='hidden md:block text-white'>
          <Mail size={16} />
        </p>
        <span className='text-white hidden md:block '>
          <a href="mailto:thehao155@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-lemon-500 hover:underline">
            thehao155@gmail.com
          </a>
        </span>
      </div>
      <div className='flex flex-row items-center gap-2 text-sm'>
        <p className='hidden md:block text-white'>
          <MapPin size={16} />
        </p>
        <span className='text-white hidden md:block'>
          <a href="https://maps.app.goo.gl/7AeopSFXS4vKVxwL6" target="_blank" rel="noopener noreferrer" className="hover:text-lemon-500 hover:underline">
            252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk
          </a>
        </span>
      </div>
    </header>
  );
}
