import { BangGiaCard } from '@/features/bang-gia/bang-gia-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bảng Giá Thuê Xe Du Lịch | Đại Dương Travel',
  description:
    'Xem bảng giá thuê xe 4 - 45 chỗ tại Buôn Ma Thuột – Đắk Lắk. Báo giá theo km và thời gian thuê. Liên hệ ngay để nhận ưu đãi.',
};

export default function BangGia() {
  return <BangGiaCard />;
}
