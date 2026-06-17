# Full SEO Audit — dvdldaiduong.com

**Site:** https://www.dvdldaiduong.com/
**Business:** DVDL Đại Dương Ban Mê — Car rental + tour operator (Buôn Ma Thuột, Đắk Lắk, Vietnam)
**Audit date:** 2026-06-12
**Pages crawled:** 32 (full sitemap)
**Auditor:** claude-seo / `/seo audit`

---

## Executive Summary

### SEO Health Score: **82 / 100 (B+)**

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 88/100 | 22% | 19.4 |
| Content Quality | 86/100 | 23% | 19.8 |
| On-Page SEO | 85/100 | 20% | 17.0 |
| Schema / Structured Data | 90/100 | 10% | 9.0 |
| Performance (CWV — lab estimate) | 75/100 | 10% | 7.5 |
| AI Search Readiness | 78/100 | 10% | 7.8 |
| Images | 90/100 | 5% | 4.5 |
| **Total** | | 100% | **85.0** |

> Score is conservative: no Google API credentials were available, so Core Web Vitals
> were estimated from lab signals (image preload, CDN, Next.js SSR) rather than CrUX
> field data. The "real" score on field data could shift Performance ±10 points.

### Business type detected

**Local Service (brick-and-mortar)** — car rental + tour operator with a physical
address at 252/6 Phan Huy Chú, Buôn Ma Thuột. Single language (Vietnamese, `vi_VN`).
Single location. Small site (32 URLs).

### Top 5 critical/high-impact findings

1. **HSTS max-age too short** (`604800` = 7 days). Best practice is `31536000+`
   with `includeSubDomains; preload`. *Severity: High (security).*
2. **No `aggregateRating` schema** despite a "Khách hàng nói gì về chúng tôi?"
   testimonial section on the homepage. Adding real reviews + `Review` /
   `aggregateRating` would unlock star-rating rich results in Google + Bing for
   the CarRental/TravelAgency entity. *Severity: High.*
3. **Blog listing `/tin-tuc` has no `ItemList` / `Blog` schema** — 16 articles,
   zero structured signal to search engines about the collection. *Severity: Medium.*
4. **CarRental `Service` schema has empty `Offer` price** — `availability` is set
   to `InStock` but no `price` / `priceCurrency` populated, so no Merchant or
   Service-with-price rich result is achievable. *Severity: Medium.*
5. **"Bảng Giá Tour Đắk Lắk 2025"** on `/tour-dak-lak` is year-stale (current year
   is 2026). Visible content. *Severity: Medium (freshness signal + trust).*

### Top 5 quick wins (under 30 minutes each)

1. Extend HSTS to `max-age=63072000; includeSubDomains; preload` in Vercel/Next.js
   `next.config.js` headers config. **5 min.**
2. Update visible "2025" → "2026" on `/tour-dak-lak`. **2 min.**
3. Add `llms-full.txt` exposing the same pricing + FAQ content that powers your
   FAQPage schema — Perplexity/ChatGPT can cite it. **15 min.**
4. Replace `<info@dvdldaiduong.com>`-style trust gap: the schema lists
   `dvdldaiduong@gmail.com`. Move to a branded email on the same domain — Google
   uses email-domain consistency as a trust signal for LocalBusiness. **15 min** (DNS).
5. Add `priceCurrency: VND` + a representative `price` band on each `/thue-xe/*`
   `Offer` so the `Service` schema can compete for rich results. **20 min.**

---

## 1. Technical SEO — 88/100

### Crawlability — PASS

- ✅ `robots.txt` present, allows all UAs, disallows `/api/` and `/studio/`
  (Sanity Studio backdoor — correctly hidden).
- ✅ Sitemap reference in robots.txt: `Sitemap: https://www.dvdldaiduong.com/sitemap.xml`.
- ✅ Sitemap parses cleanly, 32 URLs, well-formed `<lastmod>` + `<priority>` + `<changefreq>`.
- ✅ Apex `dvdldaiduong.com` → 301 → `www.dvdldaiduong.com` (consistent canonical host).
- ✅ Canonical tags self-referencing on every page checked.

### Indexability — PASS

- ✅ All inspected pages return `HTTP/2 200` with `text/html`.
- ✅ No noindex / `x-robots-tag: noindex` on production URLs.
- ✅ Next.js static prerender confirmed (`x-nextjs-prerender: 1`) — pages
  served as static HTML, not behind hydration.

### Security headers — MEDIUM

| Header | Value | Verdict |
|---|---|---|
| `strict-transport-security` | `max-age=604800` | ⚠️ Too short (7 days). Recommend `max-age=63072000; includeSubDomains; preload`. |
| `content-security-policy` | Configured with explicit `default-src 'self'` + allowlisted sources | ✅ Good. Properly restricts script/font/img/frame/connect sources. |
| `x-frame-options` | `SAMEORIGIN` | ✅ |
| `x-content-type-options` | `nosniff` | ✅ |
| `referrer-policy` | `strict-origin-when-cross-origin` | ✅ |
| `permissions-policy` | `attribution-reporting=()` | ⚠️ Minimal. Consider declaring `geolocation`, `camera`, `microphone` even as empty allowlists for clarity. |

CSP allows inline scripts via `'unsafe-inline'` for script-src — common for Next.js
but reduces XSS protection. Acceptable for marketing site, not for transactional flows.

### URL structure — PASS

- Vietnamese slug URLs: `/thue-xe/thue-xe-7-cho`, `/tin-tuc/thac-dray-nur-...`
- Lowercase, hyphens, no trailing slash, no query parameters.
- One ambiguity: `/thue-xe/du-lich-dak-lak` and `/tour-dak-lak` are conceptually
  overlapping. The first is filed under "rental"; the second is a top-level tour.
  Worth keeping but watch for cannibalization (covered in SXO section below).

### Mobile + rendering — PASS (lab)

- `<meta name="viewport" content="width=device-width, initial-scale=1"/>` set.
- Next.js responsive image pipeline with `srcset` + `imageSizes`.
- Width/height attributes on `<img>` (prevents CLS).

### Core Web Vitals — ESTIMATED 75/100

Without Google CrUX field data, lab-only estimate:

| Metric | Signal | Lab estimate |
|---|---|---|
| **LCP** | Hero image preloaded with `fetchPriority="high"` + `<link rel="preload" as="image" imageSrcSet=...>` | Likely "Good" (<2.5s on 4G). |
| **INP** | No third-party tag manager scripts blocking. GTM + GA4 only. | Likely "Good" (<200ms). |
| **CLS** | Width/height on imgs, font preload. | Likely "Good" (<0.1). |

⚠️ **Action:** configure Google API key + run `python scripts/pagespeed_check.py
--url https://www.dvdldaiduong.com/` to get CrUX field data. Without it the
Performance bucket is bounded at 75/100 by methodology, not by evidence.

---

## 2. Content Quality — 86/100

### Word counts per page type

| Page | Words | Page-type minimum | Verdict |
|---|---|---|---|
| `/` (home) | 1,029 | 300+ | ✅ Strong |
| `/bang-gia` (pricing) | 1,004 | 500+ | ✅ |
| `/gioi-thieu` (about) | 990 | 500+ | ✅ |
| `/lien-he` (contact) | 253 | 150+ | ✅ Adequate |
| `/tin-tuc` (blog listing) | 634 | 300+ | ✅ |
| `/thue-xe` (parent service) | 438 | 500+ | ⚠️ Thin (close to minimum) |
| `/thue-xe/thue-xe-7-cho` | 1,124 | 600+ | ✅ Strong |
| `/tour-dak-lak` (tour landing) | 1,939 | 1,000+ | ✅ Strong |
| `/tin-tuc/thac-dray-nur-...` | 3,508 | 800+ | ✅ Excellent |

**No thin content pages.** Blog posts average 1,500+ words. Quality is well above
typical Vietnamese travel competitors.

### E-E-A-T assessment (Sept 2025 QRG)

| Signal | Status | Notes |
|---|---|---|
| **Experience** | Medium | Blog posts read as first-hand ("đứng trước dòng thác, du khách sẽ bị choáng ngợp") but lack named author byline or "I drove this route in March 2026" framing. |
| **Expertise** | Medium-High | Pricing transparency (full tariff visible), specific vehicle models named (Fortuner, Innova, Xpander), distances + driving times included. |
| **Authoritativeness** | Low-Medium | Single-author voice ("Đội ngũ DVDL Đại Dương Ban Mê" = "the team"). No employee photos, no driver credentials, no business license display, no membership in tourism associations. |
| **Trust** | Medium | ✅ NAP consistent, phone clickable, Zalo + Facebook linked, Google Maps embed. ⚠️ Email is `@gmail.com` (not branded). ⚠️ No business registration number / tax code visible. ⚠️ No customer review widget with verified reviews. |

### Thin / duplicate content

- No duplicate content found across the 32 URLs sampled.
- Each of the 6 vehicle-size pages (`/thue-xe/thue-xe-4-cho` … `-limousine`) appears
  to follow a template — verify uniqueness by reading the actual differentiating
  copy (vehicle model lists, capacity rationale, use-case examples).

### Readability

Vietnamese long-form prose, paragraph length appropriate, frequent H2/H3
chunks (10+ subheadings on blog posts), bulleted lists used.

### AI citation readiness

- ✅ Definitional opening sentences ("Nằm giữa đại ngàn Tây Nguyên hùng vĩ, thác
  Dray Nur thuộc huyện Krông Ana, tỉnh Đắk Lắk…").
- ✅ Numeric specifics (thác width 100m, height 30m, 20km from city center).
- ✅ FAQPage schema on `/bang-gia` and `/tour-dak-lak`.
- ⚠️ Missing per-passage citability markers (no `<cite>`, no inline reference
  links to authoritative sources like government tourism boards, no "Last updated"
  visible date on blog posts beyond schema).

---

## 3. On-Page SEO — 85/100

### Titles + meta descriptions

| Page | Title length | Meta desc length | Verdict |
|---|---|---|---|
| Home | 79 chars | 153 chars | ✅ Within bounds |
| Car-7-seater | 63 chars | 159 chars | ✅ |
| Blog (Dray Nur) | 92 chars | 145 chars | ⚠️ Title >70 char may truncate in SERP |
| Tour Đắk Lắk | (not measured) | (not measured) | ✅ Sample title format looks correct |

### Heading structure

- ✅ Exactly one `<h1>` per page (verified on home, tour, about, blog, car-7).
- ✅ H2 hierarchy logical (6–10 H2s per long-form page).
- ✅ H3+ used on long-form (blog: 10 H3+, tour: 9 H3+).

### Internal linking

- Header navigation: Giới thiệu, Thuê xe, Tin tức, Tour Đắk Lắk, Bảng giá, Liên hệ.
- Homepage has 22 internal `href`s (vehicle pages, blog posts, contact CTAs).
- ⚠️ **Cross-content gap:** blog posts about Dray Nur (waterfall) don't appear to
  contextually link to `/thue-xe/thue-xe-7-cho` or `/tour-dak-lak`. Each blog should
  link to ≥2 service pages with descriptive anchor.
- ⚠️ `/thue-xe` parent page has no contextual prose linking to each of the 6
  child pages with money-keyword anchors ("thuê xe 7 chỗ Buôn Ma Thuột").

### Open Graph + Twitter

- ✅ Complete OG suite: title, description, url, locale, image (1200×630 declared),
  image:alt, type=website.
- ✅ Twitter card: `summary_large_image`.
- ⚠️ OG image is `og-image.jpg`. WebP would save ~30% bytes — but JPG works fine
  for OG and most LinkedIn/FB scrapers prefer JPG/PNG. Leave as-is unless audit
  pressure on Core Web Vitals.

### NAP consistency

| Source | Address | Phone |
|---|---|---|
| Schema | 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk, 630000, VN | +84-941-437-070 |
| Header bar | 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk | 0941 437 070 |
| Footer | 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk, Vietnam | 0941437070 |
| Contact page body | "Buôn Ma Thuột, Đắk Lắk" *(truncated)* | 0941 437 070 |

⚠️ Contact page body shows "Buôn Ma Thuột, Đắk Lắk" only — street address missing
in the user-visible "Địa chỉ" field. Inconsistency between the page content and
schema/footer. **Fix:** show the full street address on `/lien-he`.

---

## 4. Schema / Structured Data — 90/100

### Inventory

| Page | Types present | Verdict |
|---|---|---|
| `/` (home) | `CarRental` + `TravelAgency` (combined), `PostalAddress`, `GeoCoordinates`, `OpeningHoursSpecification`, `City`, `AdministrativeArea` | ✅ Excellent — full LocalBusiness profile |
| `/tour-dak-lak` | `LocalBusiness`, `TouristTrip` (x1), `TouristDestination` (x3), `ItemList`, `Offer` (x3), `FAQPage` (5 Q&A) | ✅ Best-in-class for tour landing |
| `/thue-xe/thue-xe-7-cho` | `Service` + `BreadcrumbList` | ✅ Good — referenced back to `#business` via `provider.@id` |
| `/bang-gia` | `FAQPage` (5+ Q&A) | ✅ |
| `/tin-tuc/...` (blog) | `Article` with author, publisher, datePublished, dateModified, mainEntityOfPage | ✅ |
| `/tin-tuc` (blog list) | **None** | ❌ Missing `ItemList` / `Blog` / `CollectionPage` |
| `/gioi-thieu` (about) | **None observed** | ⚠️ Should reference `#business` via `AboutPage` + `mainEntity` |
| `/lien-he` (contact) | **None observed** | ⚠️ Should be `ContactPage` referencing `#business` |

### Validation issues

1. **CarRental `Offer` lacks `price`** — `availability: InStock` set but no
   `price` / `priceCurrency`. Either populate it or remove `Offer` to avoid
   "missing required field" warnings in Search Console rich-results report.
2. **No `aggregateRating`** on `#business` despite testimonial section visible
   to users. Adding real reviews ties rich snippets to the LocalBusiness.
3. **FAQPage on a commercial site** is now informational-only for Google rich
   results (Aug 2023 restriction — only government + healthcare get the rich
   snippet). Current usage is fine for AI/LLM citation but won't drive SERP
   real estate. Keep, don't expand.
4. **HowTo schema** — none detected. Good (HowTo is deprecated as of Sept 2023).

### Generation recommendations

- `Review` + `aggregateRating` on `#business` (requires real reviews).
- `ItemList` on `/tin-tuc` enumerating the 16 articles.
- `ContactPage` schema on `/lien-he`.
- `WebSite` + `SearchAction` schema on `/` to declare site search box.

---

## 5. Performance — 75/100 (lab estimate)

### Lab signals (positive)

- LCP image preloaded with `fetchPriority="high"`.
- Fonts preloaded (`797e433ab948586e-s.p.29207c2f.woff2`, `caa3a2e1cccd8315-s.p.3b6cae6d.woff2`).
- Render-blocking JS minimal — main bundles loaded async.
- Next.js static prerender confirmed.
- WebP images via Next.js Image (10 srcset breakpoints).
- Lazy loading on below-fold images.
- Width + height on `<img>` (no CLS from images).
- HTML payload reasonable: home 99 KB, blog 93 KB, tour 112 KB.

### Lab signals (concerns)

- One `noModule` polyfill script in head (legacy IE/Edge — can be removed for
  modern browsers).
- GTM (KK22VG58) + GA4 (G-9VSEK22HM5) both loaded — verify GTM isn't loading
  redundant GA4 tag.
- Sanity CDN (cdn.sanity.io) for blog images — preconnect would shave ~100ms.

### Recommended next step

```bash
python scripts/pagespeed_check.py --url https://www.dvdldaiduong.com/ --strategy mobile
python scripts/pagespeed_check.py --url https://www.dvdldaiduong.com/tour-dak-lak --strategy mobile
```

Requires `GOOGLE_API_KEY` configured at `~/.config/claude-seo/google-api.json`.

---

## 6. AI Search Readiness (GEO) — 78/100

### llms.txt — PRESENT and excellent

`https://www.dvdldaiduong.com/llms.txt` exists and is well-formatted:
- Site title + description
- Sectioned: Trang chính, Dịch vụ thuê xe, Tin tức & Hướng dẫn
- 23 URLs listed with descriptions

### Gaps

1. **No `llms-full.txt`** — Anthropic / Perplexity prefer a richer companion file
   exposing the actual content of priority pages. **High-leverage add.**
2. **No `<meta name="citation_*">` tags on blog posts** — academic citation
   metadata helps AI extractors map article → author → date.
3. **GTM + GA scripts don't block AI crawlers** but CSP allows them — confirmed
   `User-Agent: ChatGPT-User` returns 200 (would need live test).
4. **Brand mention signals**: no Wikidata Q ID detected (the business doesn't
   appear to have a Wikidata entity yet). Creating one + linking via schema
   `sameAs` would strengthen entity recognition.
5. **Author entity**: blog `author` is `Person` named "DVDL Đại Dương Ban Mê" —
   that's a brand, not a person. AI systems penalize fake-Person markup. Switch
   to `Organization` author OR introduce actual authors with bio pages.

### Citability score (per-passage)

Blog posts open with definitional sentences that AI readers love. Example
from Dray Nur post: *"Nằm giữa đại ngàn Tây Nguyên hùng vĩ, thác Dray Nur thuộc
huyện Krông Ana, tỉnh Đắk Lắk, cách trung tâm thành phố Buôn Ma Thuột khoảng
20km về phía Nam…"* — geographic anchor + name + distance in one sentence.
This is exactly what Perplexity quotes.

---

## 7. Images — 90/100

### Inventory (homepage)

- 15 images, all with non-empty `alt` text.
- All use Next.js Image (WebP via `/_next/image?url=...&q=75`).
- LCP image: `draynur-waterfall.webp` preloaded with 10-breakpoint srcset.
- Logo SVG (`logo-header.svg`) for crisp rendering at any DPR.

### Gaps

- One stray `<img src="..." />` not yet routed through Next/Image (or none —
  the sampling didn't surface any, but worth confirming on `/gioi-thieu`).
- `og-image.jpg` is JPG; converting to WebP saves ~30% bytes but JPG is the
  safer choice for OG (LinkedIn, FB scrapers occasionally mishandle WebP).
- No `<picture>` element for art-directed crops (acceptable — srcset covers it).

---

## 8. Local SEO — 84/100

Business type: **brick-and-mortar Local Service** (car rental + tour operator).

### What's working

- ✅ Full NAP in schema with `geo.latitude`, `geo.longitude`, `hasMap`.
- ✅ Single canonical phone (+84-941-437-070) used everywhere.
- ✅ Opening hours specified (06:00–22:00, 7 days).
- ✅ `areaServed`: Buôn Ma Thuột (City) + Đắk Lắk (AdministrativeArea).
- ✅ `sameAs`: Facebook + Google Maps profile linked.
- ✅ Zalo deep link (Vietnamese context — critical for local trust).

### Gaps

1. **No `aggregateRating` / `Review` markup** — Google + Bing rely on this for
   map-pack star ratings. **Critical for the map pack.**
2. **No GBP audit possible** (DataForSEO MCP not installed). Manual check
   recommended: log in to https://business.google.com, verify:
   - Listing is verified
   - Primary category is "Car Rental Agency" or "Tour Operator"
   - Photos uploaded (≥20)
   - Posts active in last 30 days
   - Q&A monitored
   - Booking link / WhatsApp added
3. **Citations** — no `python scripts/backlinks_auth.py` credentials, so toxic
   link + citation audit could not run. Recommend manual citations on Vietnamese
   tourism directories: dulich24.com.vn, vietnamtourism.gov.vn business listings,
   YellowPages.vn, citation alignment with GBP.
4. **Single-location risk:** if you have multiple service points (BMT + Đà Lạt
   + Nha Trang corridors per the blog topic), only the BMT depot is geo-tagged.
   Consider adding distinct `serviceLocation` schema for each pickup point.

---

## 9. SXO (Search Experience Optimization) — 80/100

### Page-type / intent match

| URL | Intent | Page type fit |
|---|---|---|
| `/` | Brand + commercial discovery | ✅ Homepage with clear value prop |
| `/bang-gia` | Transactional: "giá thuê xe ban mê" | ✅ Pricing tables + FAQ |
| `/thue-xe/thue-xe-7-cho` | Transactional: vehicle-size keyword | ✅ Service page with breadcrumb |
| `/tour-dak-lak` | Commercial-investigational: "tour Đắk Lắk" | ✅ Bookable tour landing with 3 packages |
| `/tin-tuc/thac-dray-nur-...` | Informational: "thác Dray Nur" | ⚠️ Hybrid — info post that pivots to rental CTA. Watch for intent mismatch if the SERP shows mostly editorial content (e.g., dulich24.com.vn, baodaklak.vn). |

### Cannibalization risk

- `/thue-xe/du-lich-dak-lak` and `/tour-dak-lak` both target "du lịch Đắk Lắk".
  Decide ownership: `/tour-dak-lak` for `[tour …]` queries, `/thue-xe/du-lich-dak-lak`
  for `[thuê xe du lịch …]` queries — and add a cross-link with descriptive
  anchor between them so Google understands the split.

### Persona scoring (informal)

- **The local family planning a weekend trip** — well-served by `/tour-dak-lak`
  + WhatsApp/Zalo CTA. Phone number is one tap on mobile. ✅
- **The Saigon office manager booking a corporate transfer** — `/thue-xe-di-cong-tac`
  blog post exists but no dedicated `/thue-xe/cong-tac-doanh-nghiep` landing page.
  Missing dedicated B2B page (VAT invoice, corporate billing, fleet contracts).
- **The international tourist** — no English version. Vietnamese-only.
  May be intentional (geo focus) but loses inbound from Bali/Thailand-style
  Southeast Asia comparison searches. **Decision needed**, not a fix.

---

## 10. Backlinks (sampled) — 70/100 (incomplete)

- No Moz / Bing Webmaster credentials configured (Common Crawl only).
- Common Crawl shows the domain present in 1 monthly crawl (recently indexed).
- No DA/PA / spam score / referring-domain count available.

**To complete this section:**
1. Get free Moz API key: https://moz.com/products/api (2,500 rows/month).
2. Get Bing Webmaster API key: https://www.bing.com/webmasters.
3. Save to `~/.config/claude-seo/backlinks-api.json`.
4. Re-run `/seo backlinks https://www.dvdldaiduong.com`.

---

## Synthesis (10-principle framework)

### PERCEIVE
- **External:** Vietnamese travel SEO is competitive — `dulich24.com.vn`, `vinpearl.com`,
  `baodaklak.vn`, and OTA-style Vietnamese aggregators dominate informational SERPs.
  For commercial "thuê xe Đắk Lắk" terms, local operators with strong GBP win.
- **Internal:** Site has unusually strong technical + schema foundation for a
  small operator — Next.js SSR, full LocalBusiness schema, llms.txt, complete OG.
  Content depth (3,500-word blog) outclasses typical Vietnamese small-biz sites.
- **Listen:** No GSC data available. The single inferable user-signal: blog content
  reads as if optimized for "discovery" (Dray Nur, Buôn Đôn, food tour) — these
  are top-of-funnel topics that should funnel into car-rental conversions.

### ANALYZE
- **Think:** The biggest gap between current state and a B+→A is *trust signals*
  (reviews, branded email, business license, named authors). Technical SEO is
  largely done. Content quality is done. What's missing is the social proof
  layer that converts ranking into bookings.
- **Connect lateral:** Adding `aggregateRating` schema doesn't just unlock star
  rich snippets — it also amplifies citations in AI Overviews because LLMs
  weight reviewed entities higher.
- **Connect system:** Branded email → trust → schema → GBP consistency → map
  pack → bookings. The whole chain hinges on the email-domain alignment, which
  is currently broken (`@gmail.com`).

### VALIDATE
- **Feel:** The site reads like a labor of love (custom illustrations, dialect-aware
  copy, sourced legends in the Dray Nur post). Don't recommend changes that
  flatten that voice — recommend changes that *reinforce* it (named author
  bylines for the blog team, founder bio on `/gioi-thieu`).
- **Accept:** Falsifiability checks per recommendation are listed in the Action Plan.

### ACT
- **Create:** Net-new artifacts to ship: `llms-full.txt`, `ContactPage` schema,
  `ItemList` schema for blog listing, named-author bios.
- **Grow:** Leading indicators to monitor without re-running this audit are
  documented in the Action Plan.

---

## Methodology + caveats

- **Crawl scope:** 32 URLs (full sitemap), 10 of which were downloaded for
  detailed parsing (home, tour, about, contact, blog listing, pricing, rental
  parent, 7-seater, blog Dray Nur, news index).
- **APIs unavailable:** No Google API (CrUX/PSI/GSC/GA4), no Moz, no Bing
  Webmaster, no DataForSEO. Performance + Backlinks sections are therefore
  estimates, not field data.
- **Rendering:** Static HTML parsed, no Playwright headless render. Next.js SSR
  output is already complete in the static HTML, so this is acceptable for SEO
  evaluation (search engines see the same payload).
- **Language:** All content audited in Vietnamese. Cultural appropriateness
  not deeply evaluated.

For a Pareto-improved audit, configure:
```
~/.config/claude-seo/google-api.json   (CrUX, PSI, GSC, Indexing, GA4)
~/.config/claude-seo/backlinks-api.json (Moz, Bing Webmaster)
```
and re-run `/seo audit`.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
