# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, weighted equally on the home page:

- **Visitors to Đắk Lắk**: families and groups arriving in Buôn Ma Thuột who need a car with a driver for sightseeing (Buôn Đôn, Dray Nur, Hồ Lắk, Yok Đôn) or multi-day Tây Nguyên tours.
- **Businesses and groups**: companies, schools, and conferences that need 16–45-seat vehicles for transfers, events, or inter-province trips.
- **Local residents**: people in Buôn Ma Thuột booking airport runs, weddings, trips home, or rides to neighbouring provinces.

Most arrive from Google search on a phone and want to call or message on Zalo rather than fill in a form.

## Product Purpose

DVDL Đại Dương Ban Mê rents cars with drivers (4, 7, 16, 29, 45 seats and limousines) and runs private Đắk Lắk tours out of Buôn Ma Thuột. The website exists to turn a search visit into a phone call, Zalo message, or booking request. Success is a contact.

## Positioning

- Local drivers who know the roads and double as informal Tây Nguyên guides.
- The full range of vehicles from 4 to 45 seats plus limousines, booked in one place.
- Published, all-inclusive prices (from 800.000đ/day with driver), no hidden extras.
- Operating since 2018; responds quickly by phone and Zalo, 06:00–22:00 every day.

## Operating Context

- Contact channels: phone and Zalo 0941 437 070, email dvdldaiduong@gmail.com, Facebook. Address 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk.
- Bilingual site: Vietnamese is primary and its URLs are already indexed and must never change; English mirrors most pages. News articles come from Sanity and are Vietnamese only.
- SEO is a primary acquisition channel: page titles, H1s, structured data, and hreflang are deliberate.

## Capabilities and Constraints

- Next.js App Router, Tailwind CSS v4, deployed on Vercel. Dictionaries in `src/lib/i18n/dictionaries/` carry all UI copy.
- The home page H1 ("Cho Thuê Xe Du Lịch Đắk Lắk - Xe 4 đến 45 Chỗ Có Tài Xế" and its English counterpart) must stay as written.
- The home page must keep its existing content blocks: vehicle types, customer testimonials, and news. They may be reordered or restyled, not removed.
- The Geist type family stays.

## Brand Commitments

- Name: DVDL Đại Dương Ban Mê (short: Đại Dương). Logo in `public/images/logo-header.svg`.
- The existing forest-green / lemon / moss / pale colour palette in `src/app/globals.css` is the brand palette.
- Voice: warm, direct, service-minded Vietnamese; "Tận tâm. Chuyên nghiệp." is the existing tagline.

## Evidence on Hand

- Vehicle and scenery photos in `public/images/` (4/7/16/29/45-seat exteriors and interiors, limousine, Dray Nur waterfall, Đắk Lắk museum, Tây Nguyên landscapes).
- Three home-hero cabin photos are Pexels stock, not the company's fleet: `noi-that-xe-4-cho-hd.webp`, `noi-that-xe-45-cho-hd.webp`, `noi-that-xe-limousine-hd.webp` (sources in each file's `.json` sidecar). Replace with the company's own ≥1800px photos when available.
- Customer testimonials in `src/lib/data/testimonials*.ts`. Whether they are real has not been confirmed: do not add new ones or attribute new claims.
- Prices in `src/features/bang-gia/price-tables.ts`.
- No ratings counts, trip counts, fleet sizes, or awards are on record. Do not invent them.

## Product Principles

1. Contact is one tap away on every screen: phone and Zalo before forms.
2. Show the actual vehicles and the actual places; the region is the selling point.
3. State prices plainly; transparency is part of the offer.
4. Serve all three audiences without making any one of them dig.
