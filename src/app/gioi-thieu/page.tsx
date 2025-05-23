
import { Metadata } from 'next';
import GioiThieuCard from '@/features/gioi-thieu/gioi-thieu';

export const metadata: Metadata = {
  title: 'Giới Thiệu | Đại Dương Travel',
  description:
    'Khám phá hành trình du lịch cùng Đại Dương Travel - chuyên tour nội địa, thuê xe đời mới, tổ chức team building và sự kiện trọn gói.',
  keywords: [
    'du lịch Buôn Ma Thuột',
    'thuê xe du lịch',
    'Đại Dương Travel',
    'tour Daklak',
    'tour riêng BMT',
    'tổ chức sự kiện Đắk Lắk',
    'dịch vụ du lịch Daklak',
  ],
  openGraph: {
    title: 'Giới Thiệu | Đại Dương Travel',
    description:
      'Chúng tôi mang đến trải nghiệm du lịch cá nhân hóa, an toàn, minh bạch và tận tâm.',
    images: [
      {
        url: '/logo-light.png',
        width: 800,
        height: 600,
        alt: 'Logo Đại Dương Travel',
      },
    ],
    type: 'website',
  },
};

export default function GioiThieu() {
  return (
    <GioiThieuCard />
  );
}
