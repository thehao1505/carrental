'use client';

import { useState } from 'react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ContactButton } from './contact-button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 px-5 md:px-10 xl:px-30 py-5 h-[90px] flex justify-between items-center bg-white'>
      <div className='flex items-center gap-4'>
        <Link href='/' className='w-30 h-15'>
          <Image
            src='/images/logo-header.svg'
            alt='logo'
            width={120}
            height={60}
          />
        </Link>
        <nav className='hidden md:flex gap-4'>
          <Link
            href='/gioi-thieu'
            className='text-base font-bold text-forest-500 hover:scale-105 transition-all duration-200'
          >
            Giới thiệu
          </Link>
          <Link
            href='/tin-tuc'
            className='text-base font-bold text-forest-500 hover:scale-105 transition-all duration-200'
          >
            Tin tức
          </Link>
          <Link
            href='/bang-gia'
            className='text-base font-bold text-forest-500 hover:scale-105 transition-all duration-200'
          >
            Bảng giá
          </Link>
        </nav>
      </div>

      <div className='flex items-center gap-4'>
        <ContactButton />

        <Avatar className='hidden xl:block w-12 h-12 rounded-full overflow-hidden'>
          <AvatarImage
            src='/images/avatar-default.svg'
            className='object-cover'
          />
        </Avatar>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className='xl:hidden text-forest-500'
        >
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <div className='absolute top-[90px] left-0 w-full bg-white border-t px-6 py-4 flex flex-col gap-4 xl:hidden z-50'>
          <Link
            href='/gioi-thieu'
            onClick={() => setIsOpen(false)}
            className='text-sm font-bold text-forest-500 hover:scale-105 transition-all duration-200'
          >
            Giới thiệu
          </Link>
          <Link
            href='/tin-tuc'
            onClick={() => setIsOpen(false)}
            className='text-sm font-bold text-forest-500 hover:scale-105 transition-all duration-200'
          >
            Tin tức
          </Link>
          <ContactButton />
        </div>
      )}
    </header>
  );
}
