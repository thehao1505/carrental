'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { articles } from '@/lib/data';

export default function TinTucPage() {
  const router = useRouter();
  
  return (
    <main className='text-gray-800'>
      <section className='relative h-[350px] w-full'>
        <Image
          src='/images/phongcanh.jpg'
          alt='Giới thiệu công ty du lịch'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
          <h1 className='text-4xl md:text-5xl text-white font-bold text-center px-4'>
            Tin Tức & Cẩm Nang Du Lịch
          </h1>
        </div>
      </section>

      <section className='max-w-5xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {articles.map((article, idx) => (
            <div
              key={idx}
              onClick={() => {
                router.push(`/tin-tuc/${article.slug}`);
              }}
              className='border rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer'
            >
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={240}
                className='w-full h-[200px] object-cover'
              />
              <div className='p-5 space-y-2'>
                <span className='text-sm text-gray-500'>{article.date}</span>
                <h2 className='text-lg font-semibold text-forest-600'>
                  {article.title.length > 60 ? article.title.slice(0, 55) + '...' : article.title}
                </h2>
                <p className='text-sm text-gray-600'>
                  {article.excerpt.length > 140 ? article.excerpt.slice(0, 137) + '...' : article.excerpt}
                </p>
                <Link
                  href={`/tin-tuc/${article.slug}`}
                  className='inline-block text-forest-500 text-sm font-medium hover:underline mt-2'
                >
                  Xem chi tiết →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
