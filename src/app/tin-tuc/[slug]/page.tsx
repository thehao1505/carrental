'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data';

export default function BaiViet() {
  const params = useParams();
  const post = articles.find((p) => p.slug === params.slug);

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
      <p className='text-sm text-gray-500 mb-6'>{post.date}</p>
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
    </main>
  );
}
