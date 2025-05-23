import { Metadata } from 'next';
import LienHeCard from '@/features/lien-he/lien-he-card';
export const metadata: Metadata = {
  title: 'Liên Hệ | Đại Dương Travel',
  description:
    'Liên hệ ngay để được tư vấn tour du lịch, thuê xe hoặc báo giá nhanh từ Đại Dương Travel.',
};

export default function LienHePage() {
  return <LienHeCard />;
}
