# TODO — dvdldaiduong.com SEO Action Items

> Checklist version of [ACTION-PLAN.md](./ACTION-PLAN.md). Tick items as you ship.
> Full reasoning + falsifiability checks live in the action plan.

## High Priority (week 1)

- [x] **H1** — Extend HSTS to `max-age=63072000; includeSubDomains; preload` in Vercel/Next.js headers config
- [ ] **H1** — Submit domain to https://hstspreload.org after deploy
- [x] **H5** — Replace "2025" with "2026" on `/tour-dak-lak` (visible H2: "Bảng Giá Tour Đắk Lắk 2025")
- [x] **H5** — Sweep all pages for stale year references
- [x] **H4** — Update `/lien-he` "Địa chỉ" field to show full street address: "252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk"
- [ ] **H3** — Set up branded email on `dvdldaiduong.com` (Google Workspace or Zoho Mail)
- [ ] **H3** — Configure SPF + DKIM + DMARC DNS records
- [ ] **H3** — Replace all `dvdldaiduong@gmail.com` occurrences (schema, footer, contact page) with branded email
- [ ] **H3** — Set forwarding from gmail to new mailbox for transition
- [ ] **H2** — Collect 10-20 real customer reviews from Google Maps / Zalo OA / Facebook
- [ ] **H2** — Display reviews on `/gioi-thieu` or new `/danh-gia` page with author name + date
- [ ] **H2** — Add `Review` + `aggregateRating` markup to `#business` schema graph
- [ ] **H2** — Validate with Google Rich Results Test (0 errors)

## Medium Priority (weeks 2-4)

- [x] **M2** — Add `Blog` / `ItemList` schema to `/tin-tuc` enumerating 16 articles
- [x] **M3** — Populate `Service.offers.price` + `priceCurrency: VND` on all 6 `/thue-xe/*` pages
- [x] **M3** — Add `priceSpecification` with `unitText: DAY` for daily rate semantics
- [x] **M4** — Change blog `Article.author.@type` from `Person` to `Organization` (quick fix), OR introduce real named authors with bio pages (strategic fix)
- [x] **M6** — Add `ContactPage` schema to `/lien-he` with `mainEntity` → `#business`
- [x] **M6** — Add `AboutPage` schema to `/gioi-thieu` with `mainEntity` → `#business`
- [x] **M1** — Build `llms-full.txt` generator (concatenate home + bang-gia + tour-dak-lak + gioi-thieu + lien-he + thue-xe parent)
- [x] **M1** — Add build step to regenerate `llms-full.txt` on every deploy
- [ ] **M1** — Verify Perplexity / ChatGPT cites the domain within 4 weeks
- [ ] **M7** — Add 2-3 contextual internal links per blog post to commercial pages (`/thue-xe/*`, `/tour-dak-lak`, `/bang-gia`) with money-keyword anchors
- [ ] **M5** — Decide on site search functionality before adding `SearchAction` schema (do not lie to Google)
- [ ] **M5** — If building search: add `WebSite.SearchAction` JSON-LD to homepage
- [ ] **M8** — Get Google API key at https://console.cloud.google.com
- [ ] **M8** — Save to `~/.config/claude-seo/google-api.json`
- [ ] **M8** — Run `python3 scripts/pagespeed_check.py --url https://www.dvdldaiduong.com/ --strategy mobile`
- [ ] **M8** — Run `python3 scripts/crux_history.py --url https://www.dvdldaiduong.com/`

## Low Priority (backlog)

- [ ] **L1** — Convert `og-image.jpg` to WebP (only if perf budget tightens)
- [ ] **L2** — Remove `noModule` legacy IE polyfill from Next.js head (saves ~3 KB HTML)
- [x] **L3** — Build dedicated B2B landing page `/thue-xe/doanh-nghiep` with VAT invoice info + corporate billing terms
- [ ] **L4** — (Strategic decision) Add English `/en/` version of 6 priority pages with proper `hreflang` if targeting international tourists
- [ ] **L5** — Create Wikidata entity for the business; add Wikidata URL to `#business` schema `sameAs`
- [ ] **L6** — Configure Moz API key + Bing Webmaster Tools API key at `~/.config/claude-seo/backlinks-api.json`
- [ ] **L6** — Re-run `/seo backlinks https://www.dvdldaiduong.com` to populate backlinks section
- [ ] **L7** — Verify domain in Bing Webmaster Tools
- [ ] **L7** — Submit sitemap to Bing Webmaster Tools
- [x] **L7** — Enable IndexNow protocol (`scripts/indexnow_submit.mjs` — key file hosted at `/a6166697b4656c68b9262b33878b5b64.txt`)

## GBP / Local SEO (manual — Google Business Profile)

- [ ] Log in to https://business.google.com and verify the listing exists + is verified
- [ ] Confirm primary category: "Car Rental Agency" or "Tour Operator"
- [ ] Upload ≥20 photos (vehicle fleet, drivers, office, tour destinations)
- [ ] Publish a GBP Post weekly for the next 4 weeks
- [ ] Set up Q&A monitoring + seed 5 owner-answered FAQs
- [ ] Add booking link (or WhatsApp/Zalo link)
- [ ] Verify business hours match website (06:00–22:00, 7 days)
- [ ] Verify address matches: 252/6 Phan Huy Chú, Buôn Ma Thuột, Đắk Lắk
- [ ] Verify phone matches: 0941 437 070

## Citations (Vietnamese tourism directories)

- [ ] Submit listing to dulich24.com.vn
- [ ] Submit listing to vietnamtourism.gov.vn (business directory)
- [ ] Submit listing to YellowPages.vn
- [ ] Verify NAP consistency across all listings

## Sprint exit criteria

- [ ] All "High Priority" items shipped
- [ ] At least 5 of 8 "Medium Priority" items shipped
- [ ] Score improvement validated: re-run `/seo audit https://dvdldaiduong.com` and confirm overall score ≥90
- [ ] CrUX field data shows "Good" on p75 LCP, INP, CLS
- [ ] Google Rich Results Test passes on `/`, `/tour-dak-lak`, `/tin-tuc`, one blog post, one car rental page
- [ ] Branded email live + receiving customer inquiries

---

**Owner:** _______________
**Sprint end:** _______________
**Re-audit date:** _______________ (recommended: 4 weeks from start)
