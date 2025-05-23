'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function BaiViet() {
  const params = useParams();
  const post = articles.find((p) => p.slug === params.slug);
  const [date, setDate] = useState('');

  useEffect(() => {
    const dateString = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('vi-VN');
    setDate(dateString);
  }, []);

  if (!post) return notFound();

  return (
    <main className='max-w-3xl mx-auto px-6 py-12 text-gray-800'>
      <Link
        href='/tin-tuc'
        className='text-sm text-forest-500 hover:underline mb-6 inline-block'
      >
        ← Quay lại Tin tức
      </Link>

      <h1 className='text-3xl font-bold text-forest-600 mb-4'>{post.title}</h1>
      <p className='text-sm text-gray-500 mb-6'>{date || post.date}</p>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className='rounded-xl mb-6 w-full h-auto object-cover'
      />
      <article
        className='prose prose-sm md:prose-base prose-forest max-w-none'
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className='text-center mt-10'>
        <h3 className='text-lg text-moss-500 mb-4'>
          Bạn cần đặt xe hoặc báo giá?
        </h3>
        <Link
          href='/lien-he'
          className='inline-block bg-forest-500 text-lemon-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition hover:scale-105'
        >
          Liên hệ ngay
        </Link>
      </div>
    </main>
  );
}
