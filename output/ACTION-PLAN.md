# Action Plan — dvdldaiduong.com

**Source audit:** [FULL-AUDIT-REPORT.md](./FULL-AUDIT-REPORT.md)
**Generated:** 2026-06-12
**Overall score before:** 82/100. Target after Phase 1+2: **90+/100.**

Each recommendation carries:
- **Observation:** the first-principle reason it matters
- **Falsifiability:** how you'll know it failed
- **Leading indicator:** a signal you can monitor without re-running the audit

Priorities follow the standard: **Critical** (fix immediately) > **High**
(within 1 week) > **Medium** (within 1 month) > **Low** (backlog).

---

## Critical (0 items)

No indexing-blocking or penalty-causing issues found. Site is healthy.

---

## High Priority — fix within 1 week

### H1. Extend HSTS to 2 years with preload

**Observation.** Current `strict-transport-security: max-age=604800` is 7 days.
Industry standard (and HSTS preload list requirement) is `max-age=31536000`
minimum, ideally `63072000` (2 years) with `includeSubDomains; preload`.
A 7-day window means any user who hasn't visited in a week loses HSTS
protection. Vercel sites with proper HSTS qualify for the Chromium preload
list, which is a small but real Google trust signal.

**Fix.** In `next.config.js` (or wherever Vercel headers are configured):
```js
{
  source: '/(.*)',
  headers: [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload'
    }
  ]
}
```
Then submit to https://hstspreload.org after confirming no subdomain breaks.

**Effort.** 5 minutes config + 1 hour observation.
**Dependency.** None. Ship before H2 so the trust signal stack ships together.
**Falsifiability.** `curl -sI https://www.dvdldaiduong.com/ | grep -i strict-transport`
must return `max-age=63072000; includeSubDomains; preload`.
**Leading indicator.** Chrome DevTools → Security tab shows "HSTS preload eligible".

---

### H2. Add `aggregateRating` schema (requires real reviews collection)

**Observation.** The homepage has a "Khách hàng nói gì về chúng tôi?" testimonial
section visible to users, but no `Review` / `aggregateRating` markup. This blocks
star-rating rich snippets in Google + Bing for the LocalBusiness entity, and AI
Overviews weight reviewed entities higher when answering "best car rental in
Buôn Ma Thuột".

**Fix.**
1. Source 10–20 real customer reviews (from Google Maps, Zalo OA, Facebook).
2. Display on `/gioi-thieu` or a new `/danh-gia` page with author name + date.
3. Add `Review` + `aggregateRating` to the `#business` schema graph:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "47",
  "bestRating": "5",
  "worstRating": "1"
},
"review": [ { "@type": "Review", ... } ]
```
4. **Do not fabricate reviews** — Google penalizes invented `aggregateRating`
   that doesn't match visible content.

**Effort.** 2–4 hours (data sourcing) + 30 minutes (schema).
**Dependency.** Reviews collection process must exist first.
**Falsifiability.** Google Rich Results Test on `/` shows "Detected: LocalBusiness
with AggregateRating" and 0 errors.
**Leading indicator.** GSC Performance report → "Review snippet" appearance
metric > 0 after 2–4 weeks.

---

### H3. Replace `@gmail.com` business email with branded `@dvdldaiduong.com`

**Observation.** Schema lists `dvdldaiduong@gmail.com`. Google's E-E-A-T
evaluation correlates branded email domains with established businesses.
Gmail-domain customer contact is a weak trust signal — especially for a
business that already owns the domain.

**Fix.**
1. Configure email on `dvdldaiduong.com` (Google Workspace at $7/mo or
   Zoho Mail free tier for 5 users).
2. Update everywhere: `<script type="application/ld+json">`, footer, contact
   page, `og:image` business listing.
3. Set up forwarding from old `@gmail.com` to new mailbox for transition.
4. Add SPF + DKIM + DMARC DNS records (avoids deliverability hit).

**Effort.** 1 hour setup + 1 day for DNS propagation.
**Dependency.** None.
**Falsifiability.** `mail-tester.com` score >9/10 for outbound from
new address; schema validator shows updated email.
**Leading indicator.** Customer email reply rate (assuming you have a baseline).

---

### H4. Fix contact page address truncation

**Observation.** `/lien-he` displays "Địa chỉ: Buôn Ma Thuột, Đắk Lắk" — the
street number "252/6 Phan Huy Chú" appears in the schema, header bar, and
footer, but is missing from the user-visible Address field on the contact
page itself. Inconsistency reduces user confidence and confuses Google's
NAP validators.

**Fix.** Update `/lien-he` content to show full address: "252/6 Phan Huy Chú,
Phường … , Buôn Ma Thuột, Đắk Lắk, Vietnam". Include ward / district name
if applicable (administrative subdivisions matter for Vietnamese local SEO).

**Effort.** 5 minutes.
**Dependency.** None.
**Falsifiability.** Manual visit to `/lien-he` shows full street address.
**Leading indicator.** GBP NAP consistency check (https://www.brightlocal.com/free-tools/local-citation-finder/)
shows 100% match across audited citations.

---

### H5. Update "2025" → "2026" on `/tour-dak-lak`

**Observation.** Page contains "Bảng Giá Tour Đắk Lắk 2025" (visible H2).
Year is stale. Two effects: (a) freshness signal for Google (`lastmod` says
2026-06-07 but content says 2025), (b) user-perceived trust ("is this
current?").

**Fix.** Edit content to "Bảng Giá Tour Đắk Lắk 2026" everywhere it appears.
Audit other pages for similar staleness:
```bash
for url in $(curl -s https://www.dvdldaiduong.com/sitemap.xml | grep -oP '<loc>\K[^<]+'); do
  curl -s "$url" | grep -oE '20[12][0-9]' | sort -u | head -3 | xargs -I {} echo "$url -> {}"
done
```

**Effort.** 5 minutes.
**Dependency.** None.
**Falsifiability.** Page source contains no `2025` strings except in historic
contexts (e.g., "kinh nghiệm 2025" past-tense references — acceptable).
**Leading indicator.** None needed (one-shot fix).

---

## Medium Priority — fix within 1 month

### M1. Add `llms-full.txt` for richer AI grounding

**Observation.** `llms.txt` exists and is well-structured (good!) but it's an
index, not content. `llms-full.txt` is the convention for exposing actual page
bodies that LLMs can ground citations in. For a Vietnamese-only tourism site,
this is a low-cost way to compete in ChatGPT / Perplexity answers about
"thuê xe Buôn Ma Thuột" and "tour Đắk Lắk".

**Fix.** Build a script that concatenates the 6 priority pages (home, pricing,
tour-dak-lak, gioi-thieu, lien-he, thue-xe parent) into a single markdown
file at `/llms-full.txt`. Structure:
```
# DVDL Đại Dương Ban Mê — Full reference

## Pricing
[content of /bang-gia, markdown-converted]

## Tour packages
[content of /tour-dak-lak]
...
```
Add a build step to regenerate on each deploy.

**Effort.** 2–4 hours one-time + automation.
**Dependency.** None.
**Falsifiability.** `curl https://www.dvdldaiduong.com/llms-full.txt` returns
≥10 KB of structured markdown; Perplexity query for "DVDL Đại Dương giá thuê
xe 7 chỗ" cites your domain within 4 weeks.
**Leading indicator.** Direct traffic referrer from `perplexity.ai` or
`chat.openai.com` in GA4.

---

### M2. Add `ItemList` schema to `/tin-tuc` blog listing

**Observation.** Blog index page has zero structured data. 16 articles
listed visually but no `ItemList` / `Blog` / `CollectionPage` markup. Google
+ AI parsers see it as an opaque page.

**Fix.** Add to `/tin-tuc`:
```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.dvdldaiduong.com/tin-tuc#blog",
  "name": "Tin tức & Hướng dẫn — DVDL Đại Dương Ban Mê",
  "blogPost": [
    { "@type": "BlogPosting", "headline": "...", "url": "...", "datePublished": "..." },
    ...
  ]
}
```
Alternative: `ItemList` + `ListItem` enumeration.

**Effort.** 30 minutes (if generated server-side from the same data that
renders the listing).
**Dependency.** None.
**Falsifiability.** Rich Results Test on `/tin-tuc` shows "Detected: Blog"
with 16 BlogPostings; no errors.
**Leading indicator.** GSC Coverage report shows `/tin-tuc` indexed with
"Blog" enhancement.

---

### M3. Populate `Service.offers.price` on `/thue-xe/*` pages

**Observation.** Each vehicle-size page has `Service` schema with
`offers: { availability: InStock }` but no `price` or `priceCurrency`.
Either populate, or remove `offers` to avoid GSC warnings about missing
recommended fields.

**Fix.** Add representative starting price per page:
```json
"offers": {
  "@type": "Offer",
  "availability": "https://schema.org/InStock",
  "price": "900000",
  "priceCurrency": "VND",
  "priceSpecification": {
    "@type": "UnitPriceSpecification",
    "price": "900000",
    "priceCurrency": "VND",
    "unitText": "DAY"
  },
  "url": "https://www.dvdldaiduong.com/thue-xe/thue-xe-7-cho"
}
```
Use the *starting* price ("from") that already appears on `/bang-gia`.

**Effort.** 1 hour (6 pages).
**Dependency.** None.
**Falsifiability.** Rich Results Test shows `Offer` validates with price
detected.
**Leading indicator.** GSC "Products" or "Services" enhancement appears
(if Google rolls it out for VN car-rental queries).

---

### M4. Replace fake-Person author with Organization (or introduce real authors)

**Observation.** Blog `Article` schema has `author: { @type: Person, name:
"DVDL Đại Dương Ban Mê" }`. "DVDL Đại Dương Ban Mê" is the brand, not a
person. AI extraction systems penalize fake-Person markup because it inflates
author credibility signals.

**Fix.** Pick one:
- **Quick fix:** Change `author.@type` to `Organization`. Same name, accurate
  type. 5 minutes.
- **Strategic fix:** Introduce 1–2 real named authors with bios. Add
  `/about/[author-slug]` pages. Reference them in Article schema with
  `author.url` linking to the bio page. This is the E-E-A-T-winning move.

**Effort.** 5 minutes (quick) or 4–6 hours (strategic, includes bio writing).
**Dependency.** None.
**Falsifiability.** Rich Results Test on a blog post shows `Article.author`
as `Organization`, OR as a `Person` with a `url` resolving to a real bio page.
**Leading indicator.** AI Overview citations stop attributing the post to
a generic "team" — they attribute to the named author.

---

### M5. Add `WebSite` + `SearchAction` schema on `/`

**Observation.** No site-search box currently. If you add one (even a simple
filter for the blog), `SearchAction` schema unlocks the Google Sitelinks
Search Box for brand queries like "dvdl đại dương".

**Fix.** Add to homepage `<head>`:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.dvdldaiduong.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.dvdldaiduong.com/tim-kiem?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```
*Only ship this if you actually build the `/tim-kiem` endpoint.* Google
will demote sites that lie about search functionality.

**Effort.** 2–4 hours (search implementation) + 15 minutes (schema).
**Dependency.** Build search endpoint first.
**Falsifiability.** Sitelinks search box appears for brand query on Google
within 4–8 weeks.
**Leading indicator.** GSC Search Appearance → "Sitelinks searchbox" rows
exist.

---

### M6. Add `ContactPage` and `AboutPage` schema

**Observation.** `/lien-he` and `/gioi-thieu` have no schema beyond the
inherited business schema in the layout. Standard hygiene.

**Fix.** On `/lien-he`:
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": { "@id": "https://www.dvdldaiduong.com/#business" }
}
```
On `/gioi-thieu`:
```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": { "@id": "https://www.dvdldaiduong.com/#business" }
}
```

**Effort.** 15 minutes.
**Dependency.** None.
**Falsifiability.** Rich Results Test confirms each page type.
**Leading indicator.** None needed.

---

### M7. Internal linking: blog → service pages

**Observation.** Blog posts (e.g., Dray Nur) don't appear to contextually
link to `/thue-xe/thue-xe-7-cho` or `/tour-dak-lak` with descriptive anchor.
Each blog post is a discovery asset that should funnel readers to a
commercial page.

**Fix.** In each blog post, add 2–3 in-body links using money-keyword
anchors:
- "thuê xe 7 chỗ đi thác Dray Nur" → `/thue-xe/thue-xe-7-cho`
- "đặt tour Đắk Lắk 2 ngày 1 đêm" → `/tour-dak-lak`
- "bảng giá thuê xe Buôn Ma Thuột 2026" → `/bang-gia`

**Effort.** 30 minutes per blog post × 16 = ~8 hours.
**Dependency.** None.
**Falsifiability.** Every blog post in `/tin-tuc` has ≥2 contextual internal
links to commercial pages.
**Leading indicator.** GA4 "Pages and screens" → blog-post entry pages
show >5% click-through to `/thue-xe/*` or `/tour-dak-lak`.

---

### M8. Run PageSpeed + CrUX to validate Performance score

**Observation.** Performance bucket is capped at 75/100 in this audit because
no field data was available. Lab signals are excellent (preloaded LCP image,
WebP, async scripts) so the real CrUX score is likely 85+.

**Fix.**
1. Get Google API key at https://console.cloud.google.com.
2. Save to `~/.config/claude-seo/google-api.json`:
   ```json
   {"api_key": "YOUR_KEY"}
   ```
3. Run:
   ```bash
   cd /Users/tridentity/.claude/skills/seo
   python3 scripts/pagespeed_check.py --url https://www.dvdldaiduong.com/ --strategy mobile
   python3 scripts/crux_history.py --url https://www.dvdldaiduong.com/
   ```

**Effort.** 30 minutes.
**Dependency.** None.
**Falsifiability.** CrUX report returns 25 weeks of LCP/INP/CLS data with
"Good" classification on ≥75% of measurements.
**Leading indicator.** CrUX p75 LCP <2.5s, INP <200ms, CLS <0.1.

---

## Low Priority — backlog

### L1. WebP for `og-image.jpg` (only if performance budget tightens)

OG image is JPG. Converting to WebP saves ~30% bytes but JPG is the safer
choice for LinkedIn/Facebook scrapers. Defer unless the site is hitting
LCP issues on the share-card preload (it isn't).

### L2. Remove `noModule` legacy IE polyfill

`<script noModule>` in head loads a polyfill for legacy browsers (IE11, old
Edge). Modern browsers ignore it but it costs HTML bytes. If you don't need
to support IE11, remove via Next.js config. Save ~3 KB HTML.

### L3. Build dedicated B2B / corporate landing page

Current `/tin-tuc/thue-xe-di-cong-tac` is a blog post about corporate travel.
A dedicated `/thue-xe/doanh-nghiep` landing page with VAT invoice info,
corporate billing terms, fleet contract examples, and a B2B contact form would
capture the "thuê xe công tác doanh nghiệp" commercial intent without the
informational hybrid risk.

### L4. Consider English version (optional, strategic)

International tourists visiting Đắk Lắk currently can't find the site in
English search. A `/en/` subdirectory with the 6 priority pages translated
(home, tour, pricing, contact, about, rental) + proper `hreflang` would open
inbound from "Vietnam Central Highlands tour", "Buon Ma Thuot car rental".
Translation cost: ~$200 for the 6 pages. Decision is strategic, not technical.

### L5. Add Wikidata entity + link via schema `sameAs`

No Wikidata Q ID for the business yet. Creating an entity (5-minute Wikidata
form) and adding `"sameAs": ["https://www.wikidata.org/wiki/Q######"]` to
the `#business` graph strengthens entity recognition for AI Overviews + Bing.

### L6. Configure backlinks APIs

Run `python3 /Users/tridentity/.claude/skills/seo/scripts/backlinks_auth.py --setup`
and configure Moz + Bing Webmaster keys to complete the Backlinks section.

### L7. Submit sitemap to Bing Webmaster + IndexNow

Beyond Google Search Console (recommended setup), submit sitemap to Bing
Webmaster Tools and enable IndexNow protocol. Bing index feeds Microsoft
Copilot citations — a small but measurable AI visibility lift.

---

## Sequencing (4-week sprint)

### Week 1
- ✅ H1 HSTS extension (5 min)
- ✅ H5 2025→2026 update (5 min)
- ✅ H4 Contact page address fix (5 min)
- ✅ M2 Blog ItemList schema (30 min)
- ✅ M5 ContactPage / AboutPage schema (15 min)
- ✅ M3 Service.offers.price (1 hr)
- ✅ M4 Author Organization quick fix (5 min)
- ✅ M8 PageSpeed + CrUX validation (30 min)

**Time: ~3 hours. Score impact: ~+4 points.**

### Week 2
- ✅ H3 Branded email setup (1 hr + 1 day DNS)
- ✅ Start H2 reviews collection (data sourcing)

### Week 3
- ✅ H2 aggregateRating ship (30 min schema + display)
- ✅ M1 llms-full.txt build script (3 hrs)

### Week 4
- ✅ M7 Internal linking pass on 16 blog posts (8 hrs — split across 2 days)
- ✅ L6 Configure backlinks APIs, re-run audit
- ✅ Decide on L3 (B2B page) and L4 (English) — strategy call, not engineering

**End-of-sprint target score: 90+/100.**

---

## Falsifiability summary (one-liner per recommendation)

| ID | Check |
|---|---|
| H1 | `curl -sI` shows `max-age=63072000; includeSubDomains; preload` |
| H2 | Rich Results Test: "AggregateRating" detected, 0 errors |
| H3 | `mail-tester.com` ≥9/10 from new branded mailbox |
| H4 | `/lien-he` user-visible "Địa chỉ" includes "252/6 Phan Huy Chú" |
| H5 | No occurrences of `2025` in user-visible content on `/tour-dak-lak` |
| M1 | `curl /llms-full.txt` returns ≥10 KB markdown |
| M2 | Rich Results Test on `/tin-tuc` detects `Blog` with 16 `BlogPosting` |
| M3 | Rich Results Test detects `Service.offers.price` field |
| M4 | Rich Results Test on blog post detects `Article.author.@type=Organization` (or `Person` with valid `url`) |
| M5 | Rich Results Test detects `WebSite.SearchAction` |
| M6 | Rich Results Test detects `ContactPage` + `AboutPage` |
| M7 | Each blog has ≥2 contextual links to commercial pages |
| M8 | CrUX returns "Good" classification on p75 metrics |

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
