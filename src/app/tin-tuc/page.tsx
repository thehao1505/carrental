'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const articles = [
  {
    slug: 'top-5-dia-diem-checkin-bmt',
    title: 'Top 5 địa điểm check-in đẹp nhất Buôn Ma Thuột',
    excerpt:
      'Khám phá những địa điểm cực chill tại Đắk Lắk dành cho tín đồ du lịch: từ Thác Dray Nur đến KDL Ko Tam...',
    image: '/images/daklak-museum.jpeg',
    date: '12/05/2025',
  },
];

export default function TinTucPage() {
  const router = useRouter();
  
  return (
    <main className='max-w-6xl mx-auto px-6 py-12 text-gray-800'>
      <h1 className='text-3xl font-bold text-forest-600 mb-10 text-center'>
        Tin Tức & Cẩm Nang Du Lịch
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {articles.map((article, idx) => (
          <div
            key={idx}
            onClick={() => {
              router.push(`/tin-tuc/${article.slug}`);
            }}
            className='border rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-md transition cursor-pointer'
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
                {article.title}
              </h2>
              <p className='text-sm text-gray-600'>{article.excerpt}</p>
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
    </main>
  );
}
