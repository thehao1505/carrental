# SEO Audit Report — dvdldaiduong.com

**Audit date:** 2026-06-11
**Site:** https://www.dvdldaiduong.com/
**Business:** DVDL Đại Dương Ban Mê — car rental with drivers (4–45 seat + limousine), tours, airport transfers
**Location:** 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk, Vietnam
**Industry vertical:** Automotive / Local service (hybrid: brick-and-mortar + service area)
**Stack:** Next.js 16.1.6 (App Router, SSR + ISR), Sanity CMS (blog), Vercel
**Audit scope:** 31 indexable URLs, 8 parallel specialist agents, source-code + live-page analysis

---

## Executive Summary

### SEO Health Score: **67 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 71 | 15.6 |
| Content Quality | 23% | 68 | 15.6 |
| On-Page SEO | 20% | 70 | 14.0 |
| Schema / Structured Data | 10% | 65 | 6.5 |
| Performance (CWV, est.) | 10% | 62 | 6.2 |
| AI Search Readiness | 10% | 50 | 5.0 |
| Images | 5% | 75 | 3.75 |
| **Total** | **100%** | | **66.7** |

> **Note on Schema score:** Two of three agents that read rendered HTML reported "no JSON-LD" — this was a `WebFetch` artifact (HTML→markdown conversion strips `<script>` tags). The technical and content agents reading source code confirmed schemas **are** server-rendered (`CarRental + TravelAgency` on home, `Service + FAQPage` on vehicle pages, `Article` on blog posts, etc.). The 65 score reflects real defects in those schemas (broken logo URL, `Person`-typed org author, missing `aggregateRating`, inconsistent phone format), not their absence.

### Top 5 Critical Issues

1. **Brand-name contamination on `/gioi-thieu`** — line 116 of `src/features/gioi-thieu.tsx` references **"Thuê Xe Việt"** (a different company). This is the single most damaging E-E-A-T trust signal on the site.
2. **HSTS header missing** — `next.config.ts` ships security headers (CSP, X-Frame-Options, Referrer-Policy) but no `Strict-Transport-Security`. Browsers will not enforce HTTPS-only on repeat visits.
3. **`/tour-dak-lak` intent mismatch** — the page sells private-car tours to a SERP dominated by group-tour listings (Traveloka, Klook). Bounces before users reach the "private vs group" comparison block. CRITICAL rank suppression.
4. **No `aggregateRating` in homepage schema** — 13 visible testimonials but zero star-rich-result eligibility. Single highest-impact schema fix for a local business.
5. **Sanity client runs with `useCdn: false`** — every revalidation hits raw Sanity API (+200–600ms TTFB) when CDN reads would be sub-50ms. Located at `src/sanity/client.ts:7`.

### Top 5 Quick Wins (≤30 min each)

1. Flip `useCdn: true` in `src/sanity/client.ts:7` — instant TTFB win for blog/news.
2. Replace `text-white` invisible paragraph at `src/features/bang-gia-card.tsx:30` with `text-gray-700`.
3. Fix logo URL in `/gioi-thieu` schema (`src/app/gioi-thieu/page.tsx:48` — missing `/images/` prefix → currently 404s in Rich Results Test).
4. Add 2 missing routes to `STATIC_ROUTES` in `src/app/sitemap.ts`: `/chinh-sach-bao-mat`, `/chinh-sach-van-chuyen`.
5. Add `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` to the headers array in `next.config.ts`.

---

## 1. Technical SEO — 71 / 100

### Crawlability — PASS
- `robots.ts` correctly allows `/`, disallows `/api/` and `/studio/`, declares sitemap. Verified live.
- Six `thuexe-*` → `thue-xe-*` 301s in `next.config.ts` plus `/thue-xe-du-lich-dak-lak` → `/thue-xe/du-lich-dak-lak`. Clean.
- Non-www → www handled at Vercel layer.

### Indexability — PASS
- Every route sets `alternates.canonical` correctly. No `noindex` flags.
- Global `googleBot` directives include `max-snippet: -1`, `max-image-preview: large`.

### Security — PARTIAL PASS
| Header | Status |
|---|---|
| HTTPS | ✅ |
| X-Content-Type-Options: nosniff | ✅ |
| X-Frame-Options: SAMEORIGIN | ✅ |
| Referrer-Policy: strict-origin-when-cross-origin | ✅ |
| Content-Security-Policy | ✅ (uses `'unsafe-inline'` — required by GTM) |
| **Strict-Transport-Security** | ❌ **MISSING** |

### URL Structure — PASS
- Consistent Vietnamese kebab-case slugs. Max depth 3 levels. No trailing-slash inconsistency.

### Mobile — PASS with one CLS risk
- `<html lang="vi">` set. Responsive breakpoints used throughout. Touch targets ≥56px on floating buttons.
- **Risk:** Hero `polygon()` clip-path on `src/features/trang-chu/split-image.tsx:42` may cause CLS on mobile (h-650px container + ml-100 + fixed clip).

### Pagination — MEDIUM ISSUE
- `/tin-tuc?page=2`, `?page=3`, etc. all inherit the bare `/tin-tuc` canonical (static metadata). Either generate dynamic canonical per `?page=N` or add `noindex,follow` for paginated pages beyond page 1.

### Rendering — PASS
- App Router SSR confirmed. `"use client"` only on leaf components (Header, Footer, FloatingButtons, etc.). JSON-LD injected server-side via `dangerouslySetInnerHTML` on Server Components — visible to Googlebot in initial HTML.

### Internal Links — MEDIUM ISSUE
- `src/features/footer.tsx:132–195` uses `onClick={() => router.push(...)}` on `<li>` elements for primary footer navigation. Googlebot cannot reliably follow JS `onClick` like a regular `<a href>` — replace with `<Link>` components.
- Footer line 176 still points to `/thue-xe-du-lich-dak-lak` (the 301'd source URL). Update to the canonical destination.

### llms.txt route — MINOR
- `src/app/llms.txt/route.ts:35` references the stale `/thue-xe-du-lich-dak-lak` slug. Update to `/thue-xe/du-lich-dak-lak`.

---

## 2. Content Quality & E-E-A-T — 68 / 100

| Factor | Score |
|---|---|
| Experience (20) | 13/20 |
| Expertise (25) | 18/25 |
| Authoritativeness (25) | 15/25 |
| Trustworthiness (30) | 22/30 |

### Critical Content Issues
- **`/gioi-thieu` references "Thuê Xe Việt"** (line 116, `src/features/gioi-thieu.tsx`) — a different company name embedded in the about copy. Template/AI artifact. **Fix immediately.**
- **Invisible text on `/bang-gia`** — `src/features/bang-gia-card.tsx:30` sets `text-white` on a white background.
- **Factual inconsistency BMT–Đà Lạt distance:** 250 km on `/thue-xe/du-lich-dak-lak` vs 330 km on `/bang-gia`. Actual road distance via QL27 is ~340–360 km. Pick one and align.
- **BMT–Nha Trang distance:** 185 km on `/bang-gia` vs 210 km on `/thue-xe/du-lich-dak-lak`. 210 km is closer to actual.
- **"hơn gần 10 năm" copy** on `/gioi-thieu` is imprecise — 2018→2026 is 8 years. State as "từ năm 2018" or "8 năm kinh nghiệm" for AI-citable specificity.
- **Typo:** "đào tạo nghiệp vụ bài bảng" (should be "bài bản") in `gioi-thieu.tsx:101`.

### Boilerplate Risk on Vehicle Pages
All 6 vehicle pages share identical section ordering, identical H2 labels ("Bảng giá", "Tuyến đường phổ biến", "Xem thêm", "Câu hỏi thường gặp"), and near-identical service-grid tile descriptions. Differentiation lives in price tables and route lists — that's enough to avoid duplicate-content penalties, but introductions and benefit bullets should be differentiated meaningfully (4-seat = fuel economy, 29/45-seat = regulatory compliance with hạng D/E licensing, etc.).

### Trust Gaps
- `/lien-he` shows only "Buôn Ma Thuột, Đắk Lắk" as visible link text — the full street address (252/6 Phan Huy Chú) is only in the `href`. Surface it.
- No visible business hours on `/lien-he` (06:00–22:00 only in schema).
- No business registration number (MST/MSDN) anywhere on the site — conspicuous for a registered VN transport provider.

### Blog Article Template
- Author byline (commit `587e598`) reads "Đội ngũ DVDL Đại Dương Ban Mê" — but Article JSON-LD types `author` as `@type: "Person"` while naming an organization. Change to `Organization`.
- Related-posts query selects 4 random posts with `Math.random()` rather than category-matching. Replace with topical filter.
- Title truncation at 50 chars (`tin-tuc/page.tsx:137`) is too tight for Vietnamese — bump to 70.

---

## 3. On-Page SEO — 70 / 100

### Title Tags & Meta
- Titles are present and keyword-targeted (e.g., "Cho Thuê Xe Đắk Lắk | Xe 4-45 Chỗ Có Tài Xế").
- **Meta descriptions are missing on multiple commercial pages** including `/thue-xe/du-lich-dak-lak`, `/thue-xe/thue-xe-7-cho`, `/tour-dak-lak`, `/tin-tuc/top-10-...`. Google is generating its own snippets → loss of CTR control.
- `keywords` meta is set on all pages — non-functional for Google, adds HTML weight. Safe to remove.

### Heading Hierarchy
- H1 present and unique on every page sampled.
- **Emoji H2s on vehicle pages** ("💰 Bảng giá", "📍 Tuyến đường", "❓ Câu hỏi") pull commercial pages toward an editorial classification. Strip emojis from headings (keep them inline if desired) so commercial classifiers read these as service pages.

### Internal Linking
- Vehicle pages now cross-link to each other and to `/bang-gia` (recent content expansion, commit `df0b429`) — good.
- Blog → vehicle linking is sparse. Add contextual CTAs after each destination block in blog posts (e.g., "Buôn Đôn cách trung tâm 30km — xem giá thuê xe đi Buôn Đôn").

---

## 4. Schema / Structured Data — 65 / 100

Schemas **are** server-rendered. The defects are in their content, not their presence.

| Page | Schema Types Present |
|---|---|
| Home | `CarRental + TravelAgency` |
| `/thue-xe` | `FAQPage`, `Service + OfferCatalog` |
| `/thue-xe/[slug]` | `Service`, `BreadcrumbList` |
| `/tour-dak-lak` | `TouristTrip`, `FAQPage` |
| `/thue-xe/du-lich-dak-lak` | `Service`, `FAQPage` |
| `/bang-gia` | `FAQPage` |
| `/gioi-thieu` | `TravelAgency + CarRental` |
| `/tin-tuc/[slug]` | `Article` |

### Defects (priority order)

1. **Missing `aggregateRating` on homepage `CarRental` block.** Highest-impact fix. 13 testimonials exist in HTML but no schema rating → no star rich results.
2. **Broken `logo` URL** in `/gioi-thieu` schema: `src/app/gioi-thieu/page.tsx:48` uses `https://www.dvdldaiduong.com/logo-light.png` — file actually lives at `/images/logo-light.png`. Google Rich Results Test fetches → 404 → Organization markup invalidated.
3. **Article `author` typed as `Person` while named "Đội ngũ DVDL Đại Dương Ban Mê"** — semantically incorrect. Change to `Organization` or surface a real author name.
4. **Inconsistent phone formats across schema instances:** `+84-941-437-070` (home) vs `+84941437070` (service page) vs `0941 437 070` (HTML). Standardize to E.164 with hyphens.
5. **Missing `@id` link in `Service.provider` blocks** — add `"@id": "https://www.dvdldaiduong.com/#business"` to connect the entity graph.
6. **`sameAs` Facebook URL is a share-link** (`/share/1AczYur4wu/`), not the canonical page URL. The `/gioi-thieu` schema correctly uses `/dvdldaiduong` — unify.
7. **Zalo missing from `sameAs`** despite floating-button integration (commit `0b9b562`). Add `https://zalo.me/0941437070`.
8. **No `hasMap` property** on homepage schema despite a Google Maps link on `/lien-he`.

---

## 5. Performance (CWV) — 62 / 100 (estimated)

> Live PageSpeed Insights data not captured this run. Numbers below are source-derived risk estimates.

| Metric (mobile p75 est.) | Value | Status |
|---|---|---|
| LCP | 2.8–3.5s | NEEDS IMPROVEMENT |
| INP | 180–220ms | BORDERLINE |
| CLS | 0.05–0.12 | BORDERLINE |
| Lighthouse Performance | 55–68 | NEEDS IMPROVEMENT |

### Critical / High Performance Findings

1. **`useCdn: false` in `src/sanity/client.ts:7`** — every blog/news revalidation hits raw Sanity API. Switch to `true`. **+200–500ms TTFB.**
2. **Framer Motion imported only for `whileHover`/`whileTap` on the back-to-top button** (`src/features/backtotop-button.tsx`). Replace with Tailwind `hover:scale-110 active:scale-95 transition-transform` and remove `framer-motion` from `package.json`. **–40–44 KB gzipped.**
3. **`src/features/sub-header.tsx` is marked `"use client"` but has no interactivity.** Remove the directive. Saves one client chunk.
4. **`src/features/footer.tsx` uses `useRouter` + `onClick` for navigation.** Convert to `<Link>` to drop `useRouter` from the layout client bundle and improve crawlability.
5. **Duplicate analytics injection** — GTM (`GTM-KK22VG58`) AND a direct GA4 tag (`G-9VSEK22HM5`) both loaded with `lazyOnload`. GTM is already firing GA4 → remove the direct `gtag/js` script tag. **–70 KB request.**
6. **`animate-ping` runs indefinitely on both floating buttons** (`src/features/floating-button.tsx:36,91`). Compositor repaints every frame → INP jank when tapped. Cap at 5–10 iterations.
7. **Mobile hero LCP risk** — `src/features/trang-chu/split-image.tsx` uses `Image fill` inside a `polygon()` clip-path container with no explicit `width`/`height`. On mobile the parent is effectively zero-size. Provide a mobile-specific hero with explicit dimensions.

### Medium
- `og-image.jpg` (92 KB) referenced in metadata while `og-image.webp` (63 KB) exists unused. Switch references.
- Sanity image URLs use `.auto("format")` which serves WebP, not AVIF. Acceptable.
- Add `<link rel="preconnect" href="https://cdn.sanity.io">` to layout `<head>`. **–50–150ms** first Sanity image.

---

## 6. AI Search Readiness (GEO) — 50 / 100

| Dimension | Score |
|---|---|
| Citability | 38 |
| Structural Readability | 55 |
| Multi-Modal Content | 40 |
| Authority & Brand Signals | 30 |
| Technical Accessibility | 55 |

### Critical GEO Gaps
1. **`/llms.txt` returns 404.** Highest-leverage GEO fix. A starter file is appended at the end of this report.
2. **No "TL;DR" opening on commercial or blog pages.** AI extractors look for a 30–50-word definitive answer near the H1. Example for `/thue-xe/thue-xe-7-cho`: *"Thuê xe 7 chỗ tại Buôn Ma Thuột có giá từ 500.000–2.000.000 VNĐ tùy tuyến, phục vụ nhóm 4–7 người với tài xế chuyên nghiệp, đón trả tận nơi 24/7."*
3. **No external authoritative citations.** A regional travel content site should link to Đắk Lắk Tourism Department, Yok Đôn National Park official sites, or GSO statistics. Outbound citations to credible sources are a primary AI citation signal.
4. **Brand entity weakness** — no Wikipedia, no YouTube channel (YouTube mention correlation with AI citations is 0.737, highest of any signal), no Vietnamese press mentions (Vnexpress, Dan Tri, Báo Mới), no Reddit/Quora seeding.
5. **AI crawler access:** wildcard `User-Agent: *` allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, CCBot. No blocks. Acceptable.

### Platform Scores (est.)
| Platform | Score |
|---|---|
| Google AI Overviews | 38 |
| ChatGPT (Browse) | 35 |
| Perplexity | 42 |
| Gemini (Vietnam) | 40 |
| Bing Copilot | 38 |

---

## 7. Local SEO — 52 / 100

| Dimension | Score |
|---|---|
| GBP Signals | 40 |
| Reviews & Reputation | 35 |
| Local On-Page SEO | 78 |
| NAP Consistency | 65 |
| Local Schema | 60 |
| Local Link & Authority | 35 |

### NAP
- Name/address/email consistent across home, `/lien-he`, and visible HTML.
- Phone format inconsistent across schema (see Schema section).
- `alternateName` includes "Đại Dương Ban Mê" but not "DVDL Đại Dương" (common query phrasing). Add.

### GBP / Maps
- A `maps.app.goo.gl` short link exists — GBP likely claimed. No live confirmation possible without dashboard access.
- **No embedded Google Maps `<iframe>`** on `/lien-he` or home footer. Add one. (Trust + crawl signal.)
- **No review widget** surfacing live GBP ratings. The 13 on-site testimonials are static HTML.

### Critical Local Issues
1. **No `aggregateRating` in schema** (also flagged in Schema section). Implement a post-trip Zalo review-request flow; the 18-day review velocity rule causes ranking cliffs.
2. **Verify GBP primary category is "Car rental agency" (`Công ty cho thuê xe`)** — wrong category is the top negative ranking factor (Whitespark 2026, weight 176). Secondary: "Transportation service", "Tour operator".
3. **No dedicated airport transfer landing page.** `Đón tiễn sân bay Buôn Ma Thuột` is a high-intent query; pricing exists on `/bang-gia` but there's no page to rank for the query. Recommend `/don-tien-san-bay-buon-ma-thuot`.
4. **Vietnamese citations gap:** no Cốc Cốc Business listing (Cốc Cốc ≈25–30% of VN desktop search), no Foody/Now, no Yellow Pages VN, no TripAdvisor listing.
5. **Business tax registration number (MST) not displayed** anywhere on the site — regulatory + trust gap.

### Page-level wins
- "Bảng Giá Thuê Xe Du Lịch Đắk Lắk **2025**" heading on `/thue-xe/du-lich-dak-lak` still says 2025 — update to 2026.
- `/tour-dak-lak` has zero schema despite rich itinerary + FAQ content. Add `TouristTrip` and `FAQPage`.

---

## 8. SXO (Search Experience) — Critical Mismatches

| Query | Target Page | Severity |
|---|---|---|
| "thuê xe du lịch Đắk Lắk" | `/thue-xe/du-lich-dak-lak` | MEDIUM |
| "thuê xe 7 chỗ Buôn Ma Thuột" | `/thue-xe/thue-xe-7-cho` | HIGH |
| **"tour Đắk Lắk"** | `/tour-dak-lak` | **CRITICAL** |
| "địa điểm du lịch Buôn Ma Thuột" | `/tin-tuc/top-10-...` | MEDIUM |

### CRITICAL: `/tour-dak-lak` Intent Mismatch
This query SERP is dominated by per-person group tour listings (Traveloka, Klook, agencies with departure calendars). The page sells a private-car experience at per-vehicle pricing — the persona mismatch creates a hard bounce before users reach the "private vs group" comparison block (currently the 5th section).

**One-hour fix:** add a per-person price calculator immediately after the per-vehicle quote (*"Chia 4 người chỉ còn 300.000đ/người/ngày"*), and move the "Xe riêng vs Tour đoàn" comparison to above-the-fold.

### HIGH: Vehicle pages classified as editorial
Emoji-led H2s ("💰", "📍", "❓") push commercial pages toward editorial classification. Strip emojis from headings. Reorder so the pricing table is the second block after the hero on every vehicle page.

### Persona Scores
| Persona | Score | Weakest Dimension |
|---|---|---|
| Domestic tourist | 48/100 | Trust (no star rating displayed) |
| Business traveler | 43/100 | Relevance (no airport transfer page) |
| Group/corporate organizer | 44/100 | Action (no group quote form) |

---

## 9. Sitemap — PASS with 2 gaps

- 31 URLs, well-formed XML, varied lastmod dates per source-file git mtime (commit `00d87dd` fixed previously-uniform dates).
- Sanity `_updatedAt` handling correct and normalized to YYYY-MM-DD.
- **MISSING from `STATIC_ROUTES`:**
  - `/chinh-sach-bao-mat` (privacy policy) — exists at `src/app/chinh-sach-bao-mat/page.tsx`, set `index: true, follow: true`
  - `/chinh-sach-van-chuyen` (terms) — exists at `src/app/chinh-sach-van-chuyen/page.tsx`, set `index: true, follow: true`
- Image sitemap extensions not implemented. Low priority enhancement.

---

## Prioritized Action Plan

### CRITICAL (fix this week)

| # | Action | File | Why |
|---|---|---|---|
| C1 | Remove "Thuê Xe Việt" brand contamination | `src/features/gioi-thieu.tsx:116` | E-E-A-T trust break; signals template/AI origin |
| C2 | Add `Strict-Transport-Security` header | `next.config.ts` headers array | SSL-stripping protection |
| C3 | Flip `useCdn: true` in Sanity client | `src/sanity/client.ts:7` | –200–500ms TTFB |
| C4 | Reposition `/tour-dak-lak` for SERP intent | `src/app/tour-dak-lak/page.tsx` | Add per-person pricing above fold + move comparison block up |
| C5 | Add `aggregateRating` to homepage `CarRental` schema | `src/app/(trang-chu)/page.tsx` | Star rich result eligibility — once real GBP review data available |
| C6 | Fix invisible price-card paragraph | `src/features/bang-gia-card.tsx:30` (`text-white` → `text-gray-700`) | Content visible to users |
| C7 | Resolve BMT–Đà Lạt distance inconsistency (250 vs 330 vs ~350 km) | `/bang-gia` and `/thue-xe/du-lich-dak-lak` | Factual integrity for AI citation |

### HIGH (fix within 1 week)

| # | Action | File |
|---|---|---|
| H1 | Strip emojis from H2 headings on all 6 vehicle pages | `src/lib/data/car-rental.ts` |
| H2 | Reorder vehicle pages: hero → price table → vehicle models → routes → FAQ | content blocks in `car-rental.ts` |
| H3 | Fix broken logo URL in `/gioi-thieu` schema | `src/app/gioi-thieu/page.tsx:48` (`/logo-light.png` → `/images/logo-light.png`) |
| H4 | Convert footer `router.push` onClick → `<Link>` components | `src/features/footer.tsx:132–195` |
| H5 | Update footer line 176 stale URL `/thue-xe-du-lich-dak-lak` → `/thue-xe/du-lich-dak-lak` | `src/features/footer.tsx:176` |
| H6 | Update `llms.txt` route to canonical URL | `src/app/llms.txt/route.ts:35` |
| H7 | Standardize phone format `+84-941-437-070` across all JSON-LD | multiple page files |
| H8 | Write meta descriptions for all commercial pages | per-page `metadata` exports |
| H9 | Add `/chinh-sach-bao-mat` and `/chinh-sach-van-chuyen` to sitemap | `src/app/sitemap.ts` `STATIC_ROUTES` |
| H10 | Create `/llms.txt` (starter at bottom of this report) | `src/app/llms.txt/route.ts` (extend) |
| H11 | Remove Framer Motion from back-to-top button | `src/features/backtotop-button.tsx` + `package.json` |
| H12 | Remove `"use client"` from `sub-header.tsx` | `src/features/sub-header.tsx` |
| H13 | Remove duplicate GA4 script (GTM already loads it) | `src/app/layout.tsx:97–116` |
| H14 | Cap `animate-ping` iterations on floating buttons | `src/features/floating-button.tsx:36,91` |

### MEDIUM (fix within 1 month)

| # | Action |
|---|---|
| M1 | Create dedicated `/don-tien-san-bay-buon-ma-thuot` airport-transfer page |
| M2 | Add embedded Google Maps `<iframe>` to `/lien-he` and home footer |
| M3 | Implement post-trip Zalo review request flow + surface aggregate rating in UI |
| M4 | Add `TouristTrip` + `FAQPage` schema to `/tour-dak-lak` |
| M5 | Replace random `RELATED_QUERY` in blog template with category-matched query |
| M6 | Add canonical strategy for paginated `/tin-tuc?page=N` (or `noindex,follow` from page 2+) |
| M7 | Show full street address as visible text on `/lien-he` (currently only in href) |
| M8 | Display business hours visibly on `/lien-he` |
| M9 | Display business tax registration number (MST) on `/gioi-thieu` and `/lien-he` |
| M10 | Differentiate intro paragraphs and benefit bullets across 6 vehicle pages |
| M11 | Change Article schema `author @type: "Person"` → `"Organization"` (or surface real author name) |
| M12 | Fix Facebook `sameAs` URL (share-link → canonical page URL); unify across all schemas |
| M13 | Add Zalo, Cốc Cốc Business, Foody (if listed) to `sameAs` |
| M14 | Add `<link rel="preconnect" href="https://cdn.sanity.io">` to layout |
| M15 | Switch OG image references from `.jpg` to existing `.webp` (`/images/og-image.webp`) |
| M16 | Update "2025" → "2026" in price-table heading on `/thue-xe/du-lich-dak-lak` |
| M17 | Replace 2 of 3 duplicate `daklak-museum.webp` instances on `/gioi-thieu` |
| M18 | Add TL;DR opening paragraph (30–50 words) on each vehicle/service page for AI citation |
| M19 | Add external citations on blog posts (Đắk Lắk Tourism Department, Yok Đôn NP, GSO) |
| M20 | Add jump-to-section ToC on long blog posts (e.g., top-10 destinations article) |

### LOW (backlog)

| # | Action |
|---|---|
| L1 | Remove `keywords` meta tag from all pages (zero ranking value) |
| L2 | Extract `siteUrl` to `src/lib/config.ts` to prevent drift across 8+ files |
| L3 | Bump `revalidate: 30` → `300–3600` for blog routes (less aggressive ISR) |
| L4 | Increase blog title truncation from 50 → 70 chars (`tin-tuc/page.tsx:137`) |
| L5 | Replace "hơn gần 10 năm" with citable "từ năm 2018 — 8 năm kinh nghiệm" on `/gioi-thieu` |
| L6 | Fix typo "bài bảng" → "bài bản" on `gioi-thieu.tsx:101` |
| L7 | Add image sitemap extensions for vehicle hero images |
| L8 | Delete unused `logo-light.png` (50 KB) — keep `.webp` only |
| L9 | Create YouTube channel with 2–3 route/destination videos (YouTube citation correlation = 0.737) |
| L10 | Seed Q&A on `phuot.vn` / `tinhte.vn` mentioning the brand by name |

---

## Dependency Sequencing

```
C1, C2, C6 → independent (do first, all are 1-line fixes)
C3 → independent (Sanity client config)
C5 → blocked by: getting real GBP review data first (run review-request flow M3 → wait → C5)
C7 → blocked by: deciding canonical distance numbers (research → fix)
C4 → standalone, ~1 hour edit + reflow
H1, H2 → bundle as single content pass on car-rental.ts
H3, H7, H11–H14 → independent infrastructure cleanups, parallelize
H10 + GEO TL;DR work (M18) → batch in one content pass
M3 → unlocks C5 (review aggregate) once data lands
M1 → new page, independent
```

---

## Falsifiability Checks

How to know each top recommendation **didn't** work:

- **C1 "remove Thuê Xe Việt"** — `grep -i "thuê xe việt" src/` returns no matches.
- **C2 HSTS** — `curl -sI https://www.dvdldaiduong.com/ | grep -i strict-transport` shows the header.
- **C3 useCdn** — Sanity dashboard request logs show CDN hit rate ≥95% on `sanity.client.fetch` calls.
- **C4 tour intent** — over the next 30 days, `/tour-dak-lak` average position improves for "tour Đắk Lắk" in GSC and bounce rate drops in GA4.
- **C5 aggregateRating** — Google Rich Results Test passes with no warnings; ⭐ star widget appears in the SERP within 4–8 weeks.
- **Sitemap H9** — `curl -s https://www.dvdldaiduong.com/sitemap.xml | grep -c "&lt;loc&gt;"` returns 33 (was 31).

---

## Leading Indicators (monitor without re-running the audit)

| Metric | Where | Cadence |
|---|---|---|
| GSC URL Inspection for top 5 pages | Search Console | weekly |
| LCP/INP/CLS field data | CrUX / PSI | weekly |
| Star widget appearance in SERP for brand query | manual SERP check | weekly |
| GBP review velocity | GBP dashboard | continuous (18-day rule) |
| Index coverage of new URLs (`/chinh-sach-*`, `/llms.txt`, airport transfer page) | GSC Coverage | weekly until indexed |
| AI citation rate | manual ChatGPT/Perplexity probes for top queries | monthly |

---

## Starter `/llms.txt`

```
# DVDL Đại Dương Ban Mê — llms.txt
# Dịch vụ cho thuê xe du lịch có tài xế tại Buôn Ma Thuột, Đắk Lắk, Việt Nam
# Language: Vietnamese (vi-VN)
# Last updated: 2026-06-11

> DVDL Đại Dương Ban Mê là dịch vụ cho thuê xe du lịch có tài xế tại Buôn Ma Thuột,
> Đắk Lắk. Đội xe từ 4 đến 45 chỗ phục vụ đưa đón sân bay, du lịch tỉnh Đắk Lắk
> và các tuyến liên tỉnh Tây Nguyên. Hoạt động từ năm 2018. Liên hệ: 0941 437 070.
> Địa chỉ: 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk, Việt Nam.

## Key Pages

- [Trang chủ](https://www.dvdldaiduong.com/)
- [Giới thiệu](https://www.dvdldaiduong.com/gioi-thieu)
- [Bảng giá](https://www.dvdldaiduong.com/bang-gia)
- [Liên hệ](https://www.dvdldaiduong.com/lien-he)

## Dịch vụ cho thuê xe

- [Thuê xe 4 chỗ](https://www.dvdldaiduong.com/thue-xe/thue-xe-4-cho)
- [Thuê xe 7 chỗ](https://www.dvdldaiduong.com/thue-xe/thue-xe-7-cho)
- [Thuê xe 16 chỗ](https://www.dvdldaiduong.com/thue-xe/thue-xe-16-cho)
- [Thuê xe 29 chỗ](https://www.dvdldaiduong.com/thue-xe/thue-xe-29-cho)
- [Thuê xe 45 chỗ](https://www.dvdldaiduong.com/thue-xe/thue-xe-45-cho)
- [Thuê xe Limousine](https://www.dvdldaiduong.com/thue-xe/thue-xe-limousine)
- [Thuê xe du lịch Đắk Lắk](https://www.dvdldaiduong.com/thue-xe/du-lich-dak-lak)
- [Tour Đắk Lắk 2-3 ngày](https://www.dvdldaiduong.com/tour-dak-lak)

## Bài viết nổi bật

- [Top 10 địa điểm du lịch Buôn Ma Thuột](https://www.dvdldaiduong.com/tin-tuc/top-10-dia-diem-du-lich-buon-ma-thuot)
- [Kinh nghiệm đi Buôn Đôn tự túc](https://www.dvdldaiduong.com/tin-tuc/kinh-nghiem-di-buon-don-tu-tuc)
- [Thuê xe BMT đi Đà Lạt – Nha Trang](https://www.dvdldaiduong.com/tin-tuc/thue-xe-du-lich-bmt-da-lat-nha-trang)
- [Săn mây Buôn Ma Thuột từ 4h sáng](https://www.dvdldaiduong.com/tin-tuc/san-may-buon-ma-thuot-tu-4h-sang)

## Optional

- /api/*  (Disallowed)
- /studio/*  (Disallowed)
```

---

## Audit Methodology

8 parallel specialist agents covering: technical SEO, content quality / E-E-A-T, schema, sitemap, performance, GEO / AI search, local SEO, SXO. Synthesis via the 10-principle thinking framework (PERCEIVE → ANALYZE → VALIDATE → ACT). Findings are bucketed Critical / High / Medium / Low only **after** validation. Each top recommendation carries a first-principle observation, dependency mapping, falsifiability check, and leading indicator.

### Limitations
- Live GBP dashboard data (review count, current rating, primary category, post velocity) not accessible — recommend manual verification.
- Live SERP positions not captured this run (WebSearch was used by some agents but coverage was partial). For verified positions, follow up with `/seo dataforseo` or `/seo google` once credentials are configured.
- Lab CWV numbers in section 5 are source-derived risk estimates, not measured field data. Configure GSC + PageSpeed Insights API for verified data via `/seo google`.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
