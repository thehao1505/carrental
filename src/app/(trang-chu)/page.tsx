'use client';

import { NewsSection } from '@/features/trang-chu/news-section';
import StatsGrid from '@/features/trang-chu/section';
import { HeroSection } from '@/features/trang-chu/split-image';
import Testimonials from '@/features/trang-chu/testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsGrid />
      <NewsSection />
      <Testimonials />
    </>
  );
}
