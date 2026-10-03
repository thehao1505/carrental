import type { Dictionary } from '@/lib/i18n/types';

type Testimonial = { quote: string; name: string; position: string };

type TestimonialsProps = {
  dict: Dictionary['testimonials'];
  items: readonly Testimonial[];
};

export default function Testimonials({ dict, items }: TestimonialsProps) {
  return (
    <section className='py-16'>
      <div className='bg-moss-500 py-10 rounded-br-[80px] rounded-tl-[80px]'>
        <h2 className='text-2xl md:text-3xl font-semibold text-white mb-8 text-center'>
          {dict.heading}
        </h2>
        <div
          className='overflow-x-auto scroll-smooth snap-x snap-mandatory'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className='flex gap-6 w-max pb-16'>
            <div className='shrink-0 w-[-4px] md:w-4 xl:w-24'></div>

            {items.map((item, index) => (
              <div
                key={index}
                className='min-w-[300px] max-w-[400px] md:min-w-[400px] bg-pale-500 rounded-2xl p-6 shadow-sm flex-shrink-0'
              >
                <div className='pb-6'>
                  <p className='font-semibold text-green-900'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.position}</p>
                </div>
                <p className='text-xl italic text-green-900 mb-4'>
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

}
