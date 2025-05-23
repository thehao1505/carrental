import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { articles } from '@/lib/data';

export function NewsSection() {
  const router = useRouter();

  return (
    <section className='bg-pale-500 w-full'>
      <div className='max-w-6xl mx-auto px-6 py-12 text-forest-500'>
        <h1 className='text-3xl font-bold text-forest-500 mb-10 text-center'>
          <Link href="/tin-tuc" className='hover:text-forest-400 transition-all duration-300'>Tin Tức & Cẩm Nang Du Lịch</Link>
        </h1>

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
      </div>
    </section>
  );
}