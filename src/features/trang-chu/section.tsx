import { useRouter } from "next/navigation";

// components/StatsGrid.tsx
const stats = [
  {
    value: '4 Chỗ',
    slug: 'thuexe-4-cho',
    title: 'Di chuyển cá nhân',
    description: 'Lý tưởng cho công tác, đưa đón sân bay, đi lại hằng ngày.',
    image: '/images/thuexe-4-cho.jpg',
  },
  {
    value: '7 Chỗ',
    slug: 'thuexe-7-cho',
    title: 'Nhóm nhỏ thoải mái',
    description: 'Phù hợp cho gia đình, nhóm bạn đi chơi hoặc du lịch gần.',
    image: '/images/thuexe-7-cho.png',
  },
  {
    value: '16 Chỗ',
    slug: 'thuexe-16-cho',
    title: 'Dịch vụ linh hoạt',
    description: 'Xe đời mới, lý tưởng cho tour, sự kiện, đưa đón công ty.',
    image: '/images/thuexe-16-cho.jpg',
  },
  {
    value: '29 Chỗ',
    slug: 'thuexe-29-cho',
    title: 'Đoàn thể vừa',
    description: 'Phù hợp cho trường học, công ty, tour 1-3 ngày.',
    image: '/images/thuexe-29-cho.jpg',
  },
  {
    value: '45 Chỗ',
    slug: 'thuexe-45-cho',
    title: 'Hành trình dài',
    description: 'Xe hiện đại, phục vụ tour đoàn, hội nghị chuyên nghiệp.',
    image: '/images/thuexe-45-cho.jpg',
  },
  {
    value: 'Limousine',
    slug: 'thuexe-limousine',
    title: 'Di chuyển đẳng cấp',
    description: 'Nội thất sang trọng, ghế massage, Wi-Fi, màn hình riêng.',
    image: '/images/thuexe-limousine.jpg',
  },
];


export default function StatsGrid() {
  const router = useRouter();

  return (
    <section className='px-5 md:px-10 xl:px-30 pb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {stats.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(`/thue-xe/${item.slug}`)}
            className='relative rounded-2xl overflow-hidden h-64 shadow-md cursor-pointer'
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute inset-0 bg-moss-500/80 hover:bg-moss-500/30 hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center text-center text-lime-300 p-4'>
              <h2 className='text-3xl font-bold'>{item.value}</h2>
              <h4 className='text-lg font-semibold mt-2'>{item.title}</h4>
              <p className='text-sm mt-1 '>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
