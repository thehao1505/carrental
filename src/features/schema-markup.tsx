'use client';

import { useEffect } from 'react';

export default function SchemaMarkup() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'DVDL Đại Dương',
      url: 'https://yourdomain.com',
      logo: 'https://yourdomain.com/logo-light.png',
      description:
        'Công ty du lịch chuyên tour nội địa, thuê xe đời mới, tổ chức team building và sự kiện tại Đắk Lắk.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Nguyễn Văn Linh',
        addressLocality: 'Buôn Ma Thuột',
        addressRegion: 'Đắk Lắk',
        postalCode: '630000',
        addressCountry: 'VN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84-901234567',
        contactType: 'Customer Service',
      },
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
