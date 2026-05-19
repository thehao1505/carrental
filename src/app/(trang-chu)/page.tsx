import { NewsSection } from '@/features/trang-chu/news-section';
import StatsGrid from '@/features/trang-chu/section';
import { HeroSection } from '@/features/trang-chu/split-image';
import Testimonials from '@/features/trang-chu/testimonials';

const siteUrl = 'https://www.dvdldaiduong.com';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#localbusiness`,
  name: 'DVDL Đại Dương Ban Mê',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/images/logo-light.png`,
  telephone: '+84941437070',
  email: 'thehao155@gmail.com',
  priceRange: '$$',
  openingHours: 'Mo-Su 06:00-22:00',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '252/6 Phan Huy Chú',
    addressLocality: 'Buôn Ma Thuột',
    addressRegion: 'Đắk Lắk',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.6424628,
    longitude: 107.9978574,
  },
  sameAs: ['https://www.facebook.com/share/1AczYur4wu/'],
  areaServed: {
    '@type': 'State',
    name: 'Đắk Lắk',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <HeroSection />
      <StatsGrid />
      <NewsSection />
      <Testimonials />
    </>
  );
}
