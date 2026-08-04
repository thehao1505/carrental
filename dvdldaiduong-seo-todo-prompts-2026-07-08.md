# SEO Todo List + Claude Code Prompts — dvdldaiduong.com

> **Cách dùng:** Copy từng prompt vào Claude Code. Mỗi prompt đã bao gồm bước verify bằng sub-agent.  
> **Thứ tự:** Làm Critical trước → High → Medium.

---

## CRITICAL FIXES

### [x] C-1 · Fix mobile hero image (ảnh hero biến mất trên mobile)

> ✅ **ĐÃ LÀM** — `split-image.tsx:42` dùng `w-full min-h-[280px]` trên mobile, clipPath polygon chỉ áp dụng từ `md:` trở lên.

**File:** `src/features/trang-chu/split-image.tsx`

**Vấn đề:** Ảnh waterfall hero dùng `ml-100` và không có height trên mobile nên width = 0, không hiển thị.

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Fix the mobile hero image in src/features/trang-chu/split-image.tsx.

Context: The audit found that on mobile (390px viewport), the hero image renders at width:0, height:0 — completely invisible. The image container uses `ml-100` and `md:w-full` which only activates at the md breakpoint, leaving mobile with no image.

Task:
1. Read src/features/trang-chu/split-image.tsx
2. Fix the image container so it:
   - On mobile (< md): shows the image as a full-width block below the text panel, with a min-height of 280px
   - On desktop (md+): keeps the current clipped polygon layout unchanged
   The image itself (`/images/draynur-waterfall.webp`) already exists and is Next.js `<Image fill>` — just fix the parent container sizing.
3. Keep the clipPath on desktop unchanged. Only change the mobile layout.
4. Do not change any text content, the H1, or any SEO-relevant content.

After making the change, spawn a sub-agent to verify:
- Sub-agent task: Use Playwright to take a screenshot of http://localhost:3000 at 390x844 viewport (mobile iPhone 14). Confirm the image element has width > 0 and height > 0. Check that the image is visible above or below the text panel. Report the measured dimensions. If the dev server is not running, note that and verify by reading the modified TSX and confirming the mobile CSS classes are correct.
```

</details>

---

### [x] C-2 · Thêm giá vào homepage hero và card trên `/thue-xe`

> ✅ **ĐÃ LÀM** — Hero có dòng "Giá từ 800.000đ/ngày…" (SSR). Card giá nằm ở `thue-xe-listing.tsx` (map `startingPrices` → "Từ …đ/ngày"), server-rendered.

**Files:** `src/features/trang-chu/split-image.tsx`, `src/features/thue-xe/thue-xe-card.tsx`

**Vấn đề:** Không có giá nào trong SSR HTML của homepage và /thue-xe. AI crawlers và users không thấy giá.

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Add price signals to the homepage hero and vehicle cards on /thue-xe.

Context: The SEO audit found zero VND price figures in the crawlable HTML of the homepage and /thue-xe page. Prices only exist on /bang-gia. For AI search (ChatGPT, Perplexity, Google AI Overviews) and users, price signals must appear on the primary service pages.

Task 1 — Homepage hero (src/features/trang-chu/split-image.tsx):
- Add a brief price line below the current paragraph text, before the "Liên hệ ngay" button.
- Text to add: "Giá từ 800.000đ/ngày có tài xế — 4 đến 45 chỗ"
- Style it subtly (smaller font, forest-500 color, consistent with existing text style)
- Do NOT change the H1 text or any heading content

Task 2 — Vehicle cards (src/features/thue-xe/thue-xe-card.tsx):
- Read the file first to understand its structure
- Add a small price badge or line to each vehicle card showing the starting price
- If the card accepts props, check if a `startingPrice` prop exists or can be added
- If prices are hardcoded per card, check src/app/thue-xe/page.tsx for where cards are rendered and what data is passed
- Add starting prices: 4-chỗ từ 800.000đ, 7-chỗ từ 1.100.000đ, 16-chỗ từ 1.500.000đ, 29-chỗ từ 2.500.000đ, 45-chỗ từ 3.500.000đ, Limousine từ 2.000.000đ
- Format: "Từ X.XXX.XXXđ/ngày" as a small text element below the description

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Run `curl -s https://www.dvdldaiduong.com/ | grep -o '800\.000\|800,000\|800000' | head -5` on the live site OR if changes are local only, read the modified files and grep for the price strings to confirm they are in server-rendered JSX (not inside a useEffect or client-only block). Report whether the price text is SSR-rendered or client-only. Also check src/features/thue-xe/thue-xe-card.tsx to confirm the price appears in the returned JSX.
```

</details>

---

### [x] C-3 · Mở rộng trang `/thue-xe` từ 275 → 1.000+ từ

> ✅ **ĐÃ LÀM** — `thue-xe-listing.tsx` có đủ intro prose, bảng giá, "Tại sao chọn…", "Quy trình đặt xe", "Thuê xe BMT đi đâu?"; ~1.000–1.150 từ, server-rendered.

**File:** `src/app/thue-xe/page.tsx` (và có thể `src/features/thue-xe/thue-xe-listing.tsx`)

**Vấn đề:** Hub page thương mại chính chỉ có 275 từ — không có intro prose, không có giá, không có FAQ.

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Expand the /thue-xe page content from 275 words to at least 1,000 words.

Context: The SEO audit found /thue-xe has only 275 words — critically thin for the site's most important commercial page targeting "thuê xe Buôn Ma Thuột". Competitors have 1,500-2,500 word pages with pricing tables and FAQs. The /thue-xe page currently functions as a navigation grid with 1-2 sentence card descriptions.

Task:
1. Read src/app/thue-xe/page.tsx and src/features/thue-xe/thue-xe-listing.tsx to understand the current structure
2. Add a new introductory content section ABOVE the vehicle card grid with:
   - An opening paragraph (150+ words) introducing DVDL Đại Dương Ban Mê's car rental service in Buôn Ma Thuột, naturally using the phrases "thuê xe Buôn Ma Thuột", "thuê xe du lịch Đắk Lắk", "thuê xe có tài xế". Mention the fleet range (4-45 chỗ), service since 2018, and service area (toàn tỉnh Đắk Lắk và các tỉnh lân cận).
   - A condensed price summary table (4 columns: Loại xe | Số chỗ | Giá từ/ngày | Phù hợp cho) with data: 4-chỗ/4/800.000đ/Cá nhân & cặp đôi, 7-chỗ/7/1.100.000đ/Gia đình nhỏ, 16-chỗ/16/1.500.000đ/Nhóm & tour, 29-chỗ/29/2.500.000đ/Đoàn vừa, 45-chỗ/45/3.500.000đ/Đoàn lớn & team building, Limousine/6/2.000.000đ/VIP & sự kiện
   - A "Tại sao chọn DVDL Đại Dương Ban Mê?" section (200+ words) with 4 bullet points about why to choose us: kinh nghiệm 2018, đội xe đa dạng, tài xế chuyên nghiệp, giao xe tận nơi
   - A "Quy trình đặt xe" section (100+ words): 3 steps: Liên hệ → Xác nhận thông tin → Nhận xe
3. Add a section BELOW the vehicle cards: "Thuê xe Buôn Ma Thuột đi đâu?" (200+ words) listing popular destinations: Buôn Đôn, Hồ Lắk, Thác Dray Nur, Vườn QG Yok Đôn, Đà Lạt, Nha Trang, Pleiku
4. Write all content in Vietnamese, natural tone, matching the existing brand voice
5. Do NOT change the metadata (title, description) in this task — that is handled by a separate task
6. Do NOT change the vehicle card grid or any existing components

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read src/app/thue-xe/page.tsx and count the Vietnamese word count of the newly added JSX content (exclude imports, className strings, and JSX tags — count only visible text content). Confirm the total visible word count is at least 1,000 words. Also grep for "thuê xe Buôn Ma Thuột" and "thuê xe du lịch Đắk Lắk" to confirm both phrases appear in the server-rendered content. Report the word count and phrase locations (line numbers).
```

</details>

---

### [x] C-4 · Fix canonical sai trên `/tin-tuc?page=2`

> ✅ **ĐÃ LÀM** — `tin-tuc/page.tsx` có helper `canonicalForPage`, `generateMetadata` tự canonical theo trang, kèm `<link rel="prev/next">`.

**File:** `src/app/tin-tuc/page.tsx`

**Vấn đề:** Page 2 của blog tự canonical về page 1, khiến 8 bài viết bị orphan.

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Fix the canonical tag on /tin-tuc?page=2 so it self-references instead of pointing to page 1.

Context: The SEO audit found that /tin-tuc?page=2 has canonical href="https://www.dvdldaiduong.com/tin-tuc" (pointing to page 1). This is wrong — it signals to Google that page 2 is a duplicate of page 1, causing 8 blog posts to have poor crawl priority. The canonical on each paginated page should reference itself.

Task:
1. Read src/app/tin-tuc/page.tsx
2. Find where the metadata/canonical is generated. Look for: generateMetadata function, alternates.canonical field, or any canonical link.
3. Fix the canonical so that:
   - /tin-tuc (page 1, no query param) → canonical: https://www.dvdldaiduong.com/tin-tuc
   - /tin-tuc?page=2 → canonical: https://www.dvdldaiduong.com/tin-tuc?page=2
   - /tin-tuc?page=N → canonical: https://www.dvdldaiduong.com/tin-tuc?page=N
4. The page component likely receives a `searchParams` prop with the `page` param. Use that to build the correct canonical URL dynamically.
5. Also add rel="prev" / rel="next" links if not already present (prev for page N>1, next if there is a next page).

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Run `curl -s "https://www.dvdldaiduong.com/tin-tuc?page=2" | grep -i canonical` on the live site to check the current canonical. If the fix is local-only, read src/app/tin-tuc/page.tsx and find the generateMetadata or equivalent function. Confirm that when searchParams.page = "2", the alternates.canonical value would be "https://www.dvdldaiduong.com/tin-tuc?page=2" and not "/tin-tuc". Report the exact code path and the canonical value it would produce for page=2.
```

</details>

---

### [x] C-5 · Fix HSTS header trên apex domain (thiếu includeSubDomains; preload)

> ✅ **ĐÃ LÀM** — `vercel.json:10-20` phục vụ đầy đủ `max-age=63072000; includeSubDomains; preload`. Lưu ý: header áp dụng site-wide (`/(.*)`) chứ không gate riêng theo `has:host` apex như prompt mô tả — nhưng mục tiêu (đủ điều kiện preload) đã đạt.

**File:** `vercel.json`

**Vấn đề:** Apex `https://dvdldaiduong.com` redirect response thiếu full HSTS header — chặn HSTS preload list.

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Fix the HSTS header on the apex domain redirect response in vercel.json.

Context: The technical SEO audit confirmed that the apex HTTPS redirect response (https://dvdldaiduong.com → 301 → https://www.dvdldaiduong.com) returns:
  Strict-Transport-Security: max-age=63072000
...but is MISSING "includeSubDomains; preload". The www destination correctly returns the full header. This blocks HSTS preload list submission. The vercel.json currently has a redirect with `has: [{type: "host", value: "dvdldaiduong.com"}]` but the headers array may not be applied to that redirect response.

Task:
1. Read vercel.json
2. The current structure has: a `redirects` array entry for dvdldaiduong.com → www, and a `headers` array with source "/(.*)"
3. Add a second entry to the `headers` array that specifically targets the apex domain redirect response by adding a `has` condition: `{"type": "host", "value": "dvdldaiduong.com"}`. This ensures Vercel injects the HSTS header onto the apex redirect response itself.
   Add this entry:
   {
     "source": "/(.*)",
     "has": [{"type": "host", "value": "dvdldaiduong.com"}],
     "headers": [
       {"key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload"}
     ]
   }
4. Do not modify the existing headers entry (which applies to www).
5. Validate the JSON is valid after editing.

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read the modified vercel.json and confirm: (1) it is valid JSON (parse it mentally or use a JSON structure check), (2) there are now two entries in the headers array — one without a `has` condition (for www) and one with `has: [{type: "host", value: "dvdldaiduong.com"}]` (for apex), (3) both entries include the full HSTS value "max-age=63072000; includeSubDomains; preload". Report the exact headers array structure. Note: live verification requires deployment — after deploy, run: `curl -sI --max-redirs 0 https://dvdldaiduong.com/ | grep -i strict-transport`.
```

</details>

---

### [x] C-6 · Fix floating contact widget trên mobile (đè lên text)

> ✅ **ĐÃ LÀM** — `floating-button.tsx`: tooltip `hidden md:block`, vị trí `bottom-6 md:bottom-24`, nút giữ `w-14 h-14`.

**File:** `src/features/floating-button.tsx`

**Vấn đề:** Widget chỉ show icon-only text tooltip khi hover nhưng tooltip có thể overlap text trên mobile nhỏ.

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Fix the floating contact widget on mobile to prevent it from overlapping body text.

Context: The visual audit found the floating contact widget overlaps body text on mobile at 390px viewport. The widget is at src/features/floating-button.tsx. Current position: fixed bottom-24 right-5. The buttons are already w-14 h-14 (56px) which is correct. The issue is the tooltip text labels that appear on hover — on mobile they render inline and can cover content. Also check if `bottom-24` causes the widget to appear too high on mobile.

Task:
1. Read src/features/floating-button.tsx
2. On mobile (screens < md), hide the tooltip text entirely — keep tooltips only on md+ screens where hover is natural. The buttons themselves should still show (icon only on mobile).
3. Change the tooltip visibility to: `hidden md:group-hover:block` or equivalent so tooltips only render on desktop.
4. Optionally adjust `bottom-24` to `bottom-6` on mobile if the current position feels too high, using `bottom-6 md:bottom-24` — but only if it doesn't conflict with other UI elements.
5. The phone and Zalo icon buttons (w-14 h-14) are already the correct tap target size — do not change them.
6. The animate-ping pulsing rings should remain on both mobile and desktop.

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read the modified src/features/floating-button.tsx. Confirm: (1) the tooltip div(s) have a class that hides them on mobile (e.g., "hidden md:flex" or "hidden md:block" or the group-hover only applies at md+), (2) the button anchor elements still have w-14 h-14 (56px tap targets), (3) the fixed positioning uses a responsive bottom value. Report the exact class names applied to each tooltip container.
```

</details>

---

### [x] C-7 · Fix hamburger menu tap target (28px → 48px+)

> ✅ **ĐÃ LÀM** — `header.tsx:74` đã có `aria-label`/`aria-expanded`/`aria-controls` và `className` đã thêm `min-w-[48px] min-h-[48px] flex items-center justify-center` → vùng chạm đạt 48×48px, icon `<Menu size={28}>` giữ nguyên kích thước hiển thị.

**File:** `src/features/header.tsx`

**Vấn đề:** Hamburger button chỉ 28×28px trên mobile, minimum yêu cầu là 48×48px.

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Fix the hamburger menu button tap target size to meet the 48x48px minimum.

Context: The visual audit measured the hamburger button at 28x28px on mobile (390px viewport) — 42% below the Google/Apple minimum of 48x48px. This makes it easy to mis-tap, especially in a moving vehicle context (the target audience). The file is src/features/header.tsx.

Task:
1. Read src/features/header.tsx
2. Find the hamburger menu button (likely a <button> element with an SVG icon or three-line icon)
3. Increase the clickable area to at least 48x48px. Best approach:
   - Add `p-2.5` padding to the button element (adds 10px each side → 28+20 = 48px effective touch area)
   - Or change the button's min dimensions: add `min-w-[48px] min-h-[48px] flex items-center justify-center`
   - Do NOT make the visual icon itself larger — only the clickable area
4. Verify the button has an aria-label for accessibility
5. Do not change any other element in the header

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read the modified src/features/header.tsx. Find the hamburger button element and calculate its effective touch target size: (icon size px + 2 × padding px). Confirm the effective area is ≥ 48px × 48px. Report the exact className applied to the button and the calculated touch target dimensions.
```

</details>

---

### [x] C-8 · Fix schema: chuẩn hóa số điện thoại và sửa TouristTrip provider

> ✅ **ĐÃ LÀM (hoàn tất)** — `(trang-chu)/page.tsx:55` đã dùng `+84941437070`; `/tour-dak-lak` TouristTrip và `/thue-xe/du-lich-dak-lak` Service đều dùng `provider: {"@id": ".../#business"}`, không còn inline `LocalBusiness`. `llms-full.txt/route.ts:40` (chỗ cuối cùng còn format có gạch) đã sửa thành `+84941437070`. Không còn nơi nào dùng format `+84-941-437-070`.

**Files:** Schema files (kiểm tra trong `src/app/tour-dak-lak/page.tsx`, `src/app/thue-xe/page.tsx`, layout)

**Vấn đề:** Số điện thoại có 2 format khác nhau (`+84-941-437-070` vs `+84941437070`). TouristTrip dùng inline LocalBusiness thay vì `@id` reference.

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Fix two schema issues: standardize telephone format and fix TouristTrip provider to use @id reference.

Context: The schema audit found:
1. Homepage LocalBusiness schema has telephone "+84-941-437-070" (with hyphens)
2. /tour-dak-lak TouristTrip schema has an inline provider LocalBusiness object with telephone "+84941437070" (without hyphens) — creating two different entity representations and a NAP format inconsistency
3. Sub-page Service schemas also use "+84941437070"

Canonical format to use everywhere: "+84941437070" (E.164 without hyphens)
Canonical @id for the business: "https://www.dvdldaiduong.com/#business"

Task:
1. Search for all JSON-LD schema blocks in the codebase: `grep -r "telephone" src/ --include="*.tsx" --include="*.ts" -l`
2. Find every file containing JSON-LD schema
3. In each file:
   a. Change any "+84-941-437-070" → "+84941437070"
   b. If a TouristTrip or Service schema has a full inline "provider": {"@type": "LocalBusiness", ...} object, replace the entire inline object with: {"@id": "https://www.dvdldaiduong.com/#business"}
4. Do not change any other schema properties

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Run `grep -r "441\|437-070\|provider.*LocalBusiness\|provider.*@type" src/ --include="*.tsx" --include="*.ts"` to find any remaining old-format phone numbers or inline provider objects. Also run `grep -r "84941437070\|#business" src/ --include="*.tsx" --include="*.ts"` to confirm the new format is present. Report all matches found, confirming there are ZERO instances of "+84-941-437-070" or inline provider LocalBusiness objects remaining.
```

</details>

---

### [x] C-9 · Fix sameAs URLs (Facebook share link + Google Maps goo.gl)

> ✅ **ĐÃ LÀM** — `(trang-chu)/page.tsx`: `@type` → `["RentalCarAgency","TravelAgency"]`; `sameAs` → `facebook.com/dvdldaiduong` (best-effort, không xác minh được URL thật vì Facebook chặn scrape không đăng nhập) + Google Maps search URL (kèm TODO comment thay bằng CID URL từ GBP dashboard). `hasMap` cố ý giữ nguyên goo.gl vì ngoài phạm vi task này.

**File:** Homepage schema (tìm trong `src/app/layout.tsx` hoặc `src/app/(trang-chu)/page.tsx`)

**Vấn đề:** `sameAs` dùng Facebook `/share/` link (ephemeral) và `maps.app.goo.gl` short link (không canonical).

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Fix the sameAs URLs in the LocalBusiness schema — replace ephemeral/short links with canonical URLs.

Context: The schema audit found:
  "sameAs": [
    "https://www.facebook.com/share/1AczYur4wu/",   ← /share/ links expire and are not entity identifiers
    "https://maps.app.goo.gl/7AeopSFXS4vKVxwL6"    ← short links are not canonical GBP URLs
  ]

Task:
1. Search for the sameAs array in schema: `grep -r "sameAs\|share/1AczYur\|maps.app.goo" src/ --include="*.tsx" --include="*.ts" -l`
2. Open the file(s) containing sameAs
3. Replace:
   - "https://www.facebook.com/share/1AczYur4wu/" → "https://www.facebook.com/dvdldaiduong" (or find the real canonical Facebook page URL by opening the share link in browser — if you cannot browse, use "https://www.facebook.com/dvdldaiduong" as a best-effort canonical based on the brand name)
   - "https://maps.app.goo.gl/7AeopSFXS4vKVxwL6" → keep it BUT note in a code comment that this should be replaced with the CID URL from GBP dashboard: "https://www.google.com/maps?cid=XXXXXX". For now, replace it with the full Google Maps search URL: "https://www.google.com/maps/search/DVDL+%C4%90%E1%BA%A1i+D%C6%B0%C6%A1ng+Ban+M%C3%AA/@12.64246,107.99786,17z"
4. Also: change "@type": "CarRental" to "@type": ["RentalCarAgency", "TravelAgency"] if the current type is ["CarRental", "TravelAgency"] — RentalCarAgency is the correct LocalBusiness subtype (CarRental inherits from Intangible/Service, not from LocalBusiness)

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read the modified schema file. Confirm: (1) no "share/1AczYur" URL remains, (2) no "maps.app.goo.gl" URL remains, (3) the @type is now "RentalCarAgency" (not "CarRental"), (4) the sameAs array contains at least one Facebook URL and one Google Maps URL. Report the exact values of @type and sameAs after the fix.
```

</details>

---

## HIGH PRIORITY

### [x] H-1 · Rút ngắn title trang `/tour-dak-lak` (86 chars → ~60)

> ✅ **ĐÃ LÀM** — `tour-dak-lak/page.tsx:10` title = "Tour Đắk Lắk 2-3 Ngày: Khám Phá Tây Nguyên Với Xe Riêng | DVDL" (62 ký tự, DVDL 1 lần).

**File:** `src/app/tour-dak-lak/page.tsx`

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Fix the /tour-dak-lak page title — too long (86 chars) and has duplicate brand token.

Context: Current title: "Tour Đắk Lắk 2-3 Ngày: Khám Phá Tây Nguyên Với Xe Riêng | DVDL | DVDL Đại Dương Ban Mê" — 86 characters, "DVDL" appears twice. Google truncates Vietnamese titles at ~60-65 characters.

Task:
1. Read src/app/tour-dak-lak/page.tsx
2. Find the metadata export (title field)
3. Change the title to: "Tour Đắk Lắk Xe Riêng | Từ 1.200.000đ/Xe | DVDL Ban Mê" (57 chars — includes price signal matching top SERP competitors)
4. Also fix the meta description if it's >155 characters — trim to ≤155 chars ending at a complete word.
5. Do not change any page content, H1, or other elements.

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read src/app/tour-dak-lak/page.tsx and extract the metadata title and description strings. Count the characters in each. Confirm: title is ≤65 characters, description is ≤155 characters, "DVDL" appears only once in the title, and the word "DVDL" is not duplicated. Report the exact title string and its character count.
```

</details>

---

### [x] H-2 · Thêm CTA "Đặt xe ngay" above-the-fold trên trang `/thue-xe`

> ✅ **ĐÃ LÀM** — `thue-xe-listing.tsx:49-63` hero (h-[340px]) đã có nút "Đặt xe ngay — Gọi 0941 437 070" (`tel:0941437070`) và "Zalo ngay" (`https://zalo.me/0941437070`), flex-col trên mobile / flex-row trên desktop, server-rendered.

**File:** `src/app/thue-xe/page.tsx` hoặc component của nó

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Add an above-the-fold CTA button to the /thue-xe service page.

Context: The visual audit found the "Liên hệ ngay" CTA on /thue-xe is at y=1613 on desktop and y=3245 on mobile — far below the fold. The only above-fold CTA is the nav "Liên hệ" link (14px, too small). Users landing from search have no immediate conversion path.

Task:
1. Read src/app/thue-xe/page.tsx and identify the first section/component rendered (likely a hero or header section for this page)
2. Add a prominent CTA button visible within the first 500px of the page. If there's a page hero/header section, add the button there. If not, add it just above the vehicle card listing.
3. Button should:
   - Text: "Đặt xe ngay — Gọi 0941 437 070"
   - Link: tel:0941437070 (click-to-call on mobile) OR href="/lien-he" (if you prefer a form page)
   - Style: match the existing "Liên hệ ngay" button style from the homepage (bg-forest-500, text-lemon-500, rounded-3xl)
   - Also add a secondary Zalo button beside it: href="https://zalo.me/0941437070", text "Zalo ngay"
4. Place both buttons in a flex row (stacks on mobile)

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read the modified src/app/thue-xe/page.tsx (and any component files it uses). Confirm a CTA button with tel: or /lien-he href appears within the first major content section (before the vehicle card grid). Confirm the button text contains "Đặt xe" or "Liên hệ" and a phone number. Confirm it is in server-rendered JSX (not inside a useEffect or client-only block). Report the exact JSX element and its position relative to other page sections.
```

</details>

---

### [x] H-3 · Thêm WebSite + SearchAction schema vào homepage

> ✅ **ĐÃ LÀM** — `(trang-chu)/page.tsx:94-112` có `websiteSchema` (`@id` `.../#website`, `publisher` trỏ `.../#business`, `SearchAction` với `urlTemplate` chứa `{search_term_string}`), render riêng ở `<script>` thứ hai, không merge vào `businessSchema`.

**File:** `src/app/layout.tsx` hoặc `src/app/(trang-chu)/page.tsx`

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Add WebSite schema with SearchAction to the homepage.

Context: The schema audit found no WebSite schema anywhere on the site. This schema enables Sitelinks Searchbox eligibility and is the primary signal Google uses to identify the canonical site name in Knowledge Panels.

Task:
1. Read src/app/layout.tsx and src/app/(trang-chu)/page.tsx to find where JSON-LD schema is currently added (look for <script type="application/ld+json"> or structured data)
2. Add a new WebSite JSON-LD block to the homepage (not the global layout — homepage only). Use Next.js App Router's metadata or a <script> tag in the page component.
3. The WebSite block:
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.dvdldaiduong.com/#website",
  "url": "https://www.dvdldaiduong.com",
  "name": "DVDL Đại Dương Ban Mê",
  "description": "Cho thuê xe du lịch có tài xế tại Buôn Ma Thuột, Đắk Lắk – xe 4 đến 45 chỗ, tour Tây Nguyên",
  "inLanguage": "vi-VN",
  "publisher": {"@id": "https://www.dvdldaiduong.com/#business"},
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.dvdldaiduong.com/tin-tuc?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
4. Add it as a separate <script type="application/ld+json"> tag, not merged into the existing LocalBusiness block.

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Run `curl -s https://www.dvdldaiduong.com/ | grep -A 20 '"@type":"WebSite"'` OR read the modified homepage file and find the WebSite JSON-LD block. Confirm it contains: @type "WebSite", @id ending in "#website", potentialAction with @type "SearchAction", and urlTemplate containing "search_term_string". Report the full extracted schema block.
```

</details>

---

### [x] H-4 · Thêm BreadcrumbList cho các inner pages

> ✅ **ĐÃ LÀM** (4/4) — Helper `generateBreadcrumb()` mới ở `src/lib/schema.ts`, dùng cho `/thue-xe`, `/tour-dak-lak`, `/bang-gia`, `/tin-tuc/[slug]` (dùng `post.title` động). Mỗi trang có 1 `<script>` BreadcrumbList riêng, không merge vào schema khác.

**Files:** `src/app/thue-xe/page.tsx`, `src/app/tour-dak-lak/page.tsx`, `src/app/bang-gia/page.tsx`, `src/app/tin-tuc/[slug]/page.tsx`

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Add BreadcrumbList JSON-LD schema to all inner pages.

Context: The schema and technical audits found BreadcrumbList is missing on /thue-xe, /tour-dak-lak, /bang-gia, and blog post pages. BreadcrumbList is a Google-supported rich result that directly improves SERP appearance. It must be a standalone <script> block, not nested inside another schema type.

Task:
1. Create a reusable helper function or component (e.g., in src/lib/schema.ts or src/components/BreadcrumbSchema.tsx) that generates a BreadcrumbList JSON-LD block given an array of {name, url} items.

   Function signature: generateBreadcrumb(items: {name: string; url: string}[]): object

   Output format:
   {
     "@context": "https://schema.org",
     "@type": "BreadcrumbList",
     "itemListElement": items.map((item, i) => ({
       "@type": "ListItem",
       "position": i + 1,
       "name": item.name,
       "item": item.url
     }))
   }

2. Add BreadcrumbList to these pages (as a separate <script type="application/ld+json"> in the page's JSX):

   /thue-xe → [{"name": "Trang chủ", "url": "https://www.dvdldaiduong.com"}, {"name": "Thuê xe", "url": "https://www.dvdldaiduong.com/thue-xe"}]

   /tour-dak-lak → [{"name": "Trang chủ", "url": "https://www.dvdldaiduong.com"}, {"name": "Tour Đắk Lắk", "url": "https://www.dvdldaiduong.com/tour-dak-lak"}]

   /bang-gia → [{"name": "Trang chủ", "url": "https://www.dvdldaiduong.com"}, {"name": "Bảng Giá", "url": "https://www.dvdldaiduong.com/bang-gia"}]

   /tin-tuc/[slug] → [{"name": "Trang chủ", "url": "..."}, {"name": "Tin Tức", "url": ".../tin-tuc"}, {"name": post.title, "url": ".../tin-tuc/[slug]"}] — use the dynamic post data for the third item

3. Read each page file first to understand where to insert the schema.

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Run these checks:
  1. `curl -s https://www.dvdldaiduong.com/thue-xe | grep -c "BreadcrumbList"` — should return ≥1
  2. `curl -s https://www.dvdldaiduong.com/tour-dak-lak | grep -c "BreadcrumbList"` — should return ≥1
  If running against local source: grep the modified page files for "BreadcrumbList". Confirm each file has exactly one standalone BreadcrumbList script block (not nested inside LocalBusiness). Report which pages have BreadcrumbList and which do not.
```

</details>

---

### [x] H-5 · Set `priority={true}` trên hero images của `/thue-xe` và `/tour-dak-lak`

> ✅ **ĐÃ LÀM** — `thue-xe-listing.tsx:39` và `tour-dak-lak/page.tsx:326` đều có `priority` trên hero Image.

**Files:** `src/app/thue-xe/page.tsx`, `src/app/tour-dak-lak/page.tsx` hoặc các feature components tương ứng

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Add priority={true} to the hero <Image> component on /thue-xe and /tour-dak-lak pages to improve LCP.

Context: The performance audit found the homepage hero image correctly has priority={true} (fetchPriority="high") but /thue-xe and /tour-dak-lak hero images do NOT — causing a slower LCP on these pages. In Next.js, priority={true} adds both fetchPriority="high" and a <link rel="preload"> in the <head>.

Task:
1. Find the hero/main image component on the /thue-xe page: read src/app/thue-xe/page.tsx and any components it imports that contain an <Image> component near the top of the page
2. Find the hero/main image on /tour-dak-lak: read src/app/tour-dak-lak/page.tsx and its components
3. For the FIRST prominent <Image> in each page (the one most likely to be the LCP element — typically the largest image in the first viewport), add priority={true} if not already present
4. Do not add priority={true} to card images, thumbnails, or below-fold images — only the hero/LCP candidate image

After making the changes, spawn a sub-agent to verify:
- Sub-agent task:
  1. Run `curl -s https://www.dvdldaiduong.com/thue-xe | grep -i "fetchpriority\|rel=\"preload\"" | head -5` to check if the preload/fetchpriority exists on the live site
  2. OR read the modified component files and confirm the hero <Image> has priority={true} (not priority={false} or missing)
  Report the exact prop values on the hero Image in each page's component tree.
```

</details>

---

### [x] H-6 · Remove deprecated `<changefreq>` và `<priority>` khỏi sitemap

> ✅ **ĐÃ LÀM** — `sitemap.ts`: xoá `changeFrequency`/`priority` khỏi type `STATIC_ROUTES`, `getCarRentalUrls()` và `postUrls`; mỗi entry chỉ còn `url` + `lastModified`. `next-sitemap.config.js` không có 2 field này và không được wire vào build script nên không cần sửa.

**File:** `src/app/sitemap.ts`

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Remove deprecated changeFrequency and priority fields from the sitemap generator.

Context: The sitemap audit found all 34 sitemap URLs have <changefreq> and <priority> tags. Google has publicly confirmed it ignores both of these fields. They add noise and can mislead third-party tools. The sitemap is generated in src/app/sitemap.ts (Next.js App Router).

Task:
1. Read src/app/sitemap.ts
2. In the MetadataRoute.Sitemap return objects, remove all instances of:
   - changeFrequency (or changefreq)
   - priority
3. Keep: url, lastModified (these are used by Google)
4. Also check next-sitemap.config.js — if it's being used, remove changefreq/priority from there too. But based on the file structure, src/app/sitemap.ts is the active generator.
5. Do not change anything else in the sitemap logic (Sanity query, git lastModified, URL construction).

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read the modified src/app/sitemap.ts. Search for "changeFrequency", "changefreq", and "priority" strings within the sitemap return objects. Confirm ZERO such fields remain. Also confirm the sitemap still returns `url` and `lastModified` fields. Report the structure of one sample return object from the sitemap function.
```

</details>

---

### [x] H-7 · Update `llms.txt` — thêm link llms-full.txt và thêm `/tour-dak-lak`

> ✅ **ĐÃ LÀM** — `llms.txt/route.ts:29` thêm dòng tham chiếu `llms-full.txt` ngay sau blockquote mô tả; `route.ts:37` thêm `/tour-dak-lak` vào mục "## Trang chính".

**File:** `src/app/llms.txt` (hoặc route tương đương)

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Update llms.txt: add a reference to llms-full.txt and add /tour-dak-lak to the main navigation section.

Context: The GEO audit found:
1. llms.txt does not reference llms-full.txt anywhere — AI crawlers that follow the llms.txt spec look for this link to find the extended version
2. /tour-dak-lak (a primary service page, 1,776 words) is missing from the "Trang chính" section of llms.txt

Task:
1. Find llms.txt — it may be at src/app/llms.txt or public/llms.txt or served via a route handler. Run `find . -name "llms.txt" -not -path "*/node_modules/*"` to locate it.
2. Open the file and:
   a. After the opening blockquote line ("> Dịch vụ..."), add on a new line:
      "- [llms-full.txt](https://www.dvdldaiduong.com/llms-full.txt): Phiên bản đầy đủ với bảng giá, mô tả xe, FAQ và tin tức"
   b. In the "## Trang chính" section, add:
      "- [Tour Đắk Lắk](https://www.dvdldaiduong.com/tour-dak-lak): Tour du lịch Đắk Lắk xe riêng có tài xế – 3 gói lịch trình từ 1.200.000đ/xe"
3. Do not change any other content in llms.txt

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Run `curl -s https://www.dvdldaiduong.com/llms.txt | grep -E "llms-full|tour-dak-lak"` on the live site. If not yet deployed, read the modified llms.txt file and grep for "llms-full.txt" and "tour-dak-lak". Confirm both strings are present. Report the exact lines containing each reference.
```

</details>

---

### [ ] H-8 · Thêm giá 29-chỗ và 45-chỗ vào trang `/bang-gia`

> ⬜ **CHƯA LÀM** — `bang-gia-card.tsx` 3 bảng giá chỉ có cột 4/7/16 chỗ. 29 & 45 chỗ chỉ nhắc trong prose (dòng 387), không có giá.

**File:** `src/app/bang-gia/page.tsx` và `src/features/bang-gia/bang-gia-card.tsx`

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Add pricing for 29-seat and 45-seat vehicles to the /bang-gia pricing page.

Context: The content audit found /bang-gia only shows pricing for 4, 7, and 16-seat vehicles despite 29-seat and 45-seat being listed as equal services on /thue-xe. Users searching "thuê xe 29 chỗ Buôn Ma Thuột giá bao nhiêu" or "thuê xe 45 chỗ team building" find no price on this site.

Task:
1. Read src/app/bang-gia/page.tsx and src/features/bang-gia/bang-gia-card.tsx to understand the current pricing table structure
2. Add a new pricing section for 29-seat and 45-seat vehicles with at minimum:
   - Section heading: "Bảng Giá Thuê Xe 29 Chỗ và 45 Chỗ"
   - A table or card with: đưa đón sân bay (29-chỗ: 400.000đ, 45-chỗ: 500.000đ), giá/km nội thành (29-chỗ: 18.000đ, 45-chỗ: 20.000đ), giá/ngày trọn gói (29-chỗ: từ 2.500.000đ, 45-chỗ: từ 3.500.000đ)
   - A note: "Phù hợp cho đoàn doanh nghiệp, team building, sự kiện, du lịch nhóm lớn. Liên hệ để nhận báo giá theo hành trình cụ thể."
   - A CTA button linking to /lien-he
3. Match the visual style of the existing pricing sections
4. Place the new section after the existing pricing tables

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read the modified src/app/bang-gia/page.tsx. Confirm: (1) pricing data for 29-seat vehicles is present as visible text content, (2) pricing data for 45-seat vehicles is present, (3) a contact/CTA link exists in the new section. Also check that the prices are in server-rendered JSX (not client-only). Report the word count of the new section and the exact price values present.
```

</details>

---

## MEDIUM PRIORITY

### [x] M-1 · Xóa `unsafe-inline` khỏi CSP (migrate GTM sang nonce)

> ✅ **ĐÃ LÀM** — `src/middleware.ts` sinh nonce per-request, set `Content-Security-Policy` với `'nonce-{nonce}' 'strict-dynamic'` trong `script-src`; `next.config.ts` không còn set CSP tĩnh (đã xoá, có comment tham chiếu middleware); `layout.tsx` đọc `x-nonce` qua `headers()` và truyền vào cả 3 thẻ `<Script>` GTM/GA. `'unsafe-inline'` vẫn còn trong `script-src` và `style-src` nhưng đúng chủ đích — làm fallback cho browser cũ (browser hỗ trợ `strict-dynamic` sẽ tự ignore `unsafe-inline`), đúng như khuyến nghị gốc ở bước 5 của prompt này. Không đụng đến `style-src` vì việc bỏ `unsafe-inline` ở đó đòi hỏi loại bỏ toàn bộ inline `style={{}}` trong codebase — ngoài phạm vi.

**File:** `next.config.ts`

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Replace 'unsafe-inline' in Content-Security-Policy with a nonce-based approach for Next.js App Router.

Context: The technical audit found the CSP uses 'unsafe-inline' in both script-src and style-src, nullifying XSS protection. This is driven by Google Tag Manager. Next.js App Router supports nonce-based CSP via middleware.

Task:
1. Read next.config.ts to see the current CSP header value
2. Create src/middleware.ts (if it doesn't exist) with a nonce-based CSP implementation:
   - Generate a random nonce per request using crypto.randomUUID() or crypto.getRandomValues()
   - Set the CSP header with 'nonce-{nonce}' 'strict-dynamic' instead of 'unsafe-inline' in script-src
   - Pass the nonce to the page via a response header (x-nonce) so the layout can read it
3. Update src/app/layout.tsx to:
   - Read the nonce from headers()
   - Pass it to the Google Tag Manager <Script> component as the nonce prop
   - Add it to any <style> tags if needed
4. Update the CSP in next.config.ts to use 'nonce-' format (the middleware will override this dynamically)
5. Keep 'unsafe-inline' as a fallback for legacy browsers that don't support 'strict-dynamic': the order matters — 'strict-dynamic' ignores 'unsafe-inline' in modern browsers but legacy ones fall back to it

Important: Test that GTM still loads after the change. The nonce must match between the CSP header and the script tag.

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read src/middleware.ts and src/app/layout.tsx. Confirm: (1) middleware.ts generates a nonce and sets it in the CSP header and x-nonce response header, (2) layout.tsx reads x-nonce from headers() and passes it to the GTM Script component, (3) the CSP in middleware no longer uses 'unsafe-inline' in script-src (or uses it only as a legacy fallback after 'strict-dynamic'). Report the exact script-src value in the CSP and how the nonce is threaded from middleware to the GTM script tag.
```

</details>

---

### [ ] M-2 · Thêm question-form H2s vào key pages

> ⚠️ **LÀM MỘT PHẦN** (2/3) — `/thue-xe` (3 H2 câu hỏi) và `/tour-dak-lak` (2) đã đạt. `/bang-gia` (`bang-gia-card.tsx`) chỉ có 1 H2 dạng câu hỏi ("Bạn cần tư vấn nhanh?") — cần thêm 1.

**Files:** `src/app/thue-xe/page.tsx`, `src/app/bang-gia/page.tsx`, `src/app/tour-dak-lak/page.tsx`

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Convert at least 2 H2 headings per key page to question form to improve AI snippet matching.

Context: The GEO audit found most H2s are declarative labels ("4 Chỗ", "7 Chỗ", "Mức giá thuê xe"). AI citation engines preferentially surface content under question-form headings because they match natural language queries directly. Only /tour-dak-lak had 2 question-form H2s; /thue-xe and /bang-gia had none.

Task — for each page, add 1-2 new H2 sections OR rename existing ones:

For src/app/thue-xe/page.tsx (in the new content section from task C-3):
- Add: <h2>Thuê xe Buôn Ma Thuột có tài xế giá bao nhiêu?</h2> above the price table
- Add: <h2>Nên thuê xe mấy chỗ cho nhóm của bạn?</h2> above the vehicle selection guidance

For src/app/bang-gia/page.tsx:
- Find the main pricing section heading and change it to: "Giá thuê xe du lịch Đắk Lắk năm 2026 là bao nhiêu?"
- Add a sub-heading: "Thuê xe sân bay Buôn Ma Thuột giá bao nhiêu?" above the airport transfer table

For src/app/tour-dak-lak/page.tsx (it already has some question H2s — just verify and add if missing):
- Ensure "Tại Sao Nên Chọn Xe Riêng Thay Vì Tour Đoàn?" exists as an H2 (not h3 or p)
- Add: "Tour Đắk Lắk mấy ngày thì phù hợp?" if not already present

These H2 changes do not require new content sections — they can rename existing section headers or add minimal (1-paragraph) introduction under the new question heading.

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Read the three modified page files. Run a grep for "<h2" in each file and list all H2 content. Confirm at least 2 H2s per page contain a question mark (?). Report all H2 texts found in each file.
```

</details>

---

### [ ] M-3 · Expand Permissions-Policy header

> ⬜ **CHƯA LÀM** — `next.config.ts:31-34` chỉ có `attribution-reporting=()`, thiếu camera/microphone/geolocation/payment.

**File:** `next.config.ts`

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Expand the Permissions-Policy header to deny unused browser APIs.

Context: The technical audit found the current Permissions-Policy header only declares "attribution-reporting=()" — leaving camera, microphone, geolocation, payment, and other powerful APIs implicitly available. For a car rental site, none of these APIs should be accessible.

Task:
1. Read next.config.ts
2. Find the Permissions-Policy header value (currently: "attribution-reporting=()")
3. Replace it with:
   "camera=(), microphone=(), geolocation=(), payment=(), usb=(), autoplay=(), attribution-reporting=(), display-capture=(), fullscreen=(self)"
4. Note: fullscreen=(self) allows video players on the same origin to go fullscreen, which may be needed if the site ever adds video content. All others are denied.
5. Do not change any other header.

After making the changes, spawn a sub-agent to verify:
- Sub-agent task: Run `curl -sI https://www.dvdldaiduong.com/ | grep -i permissions-policy` on the live site. If not deployed, read next.config.ts and find the Permissions-Policy value. Confirm it contains at minimum: camera=(), microphone=(), geolocation=(), payment=(). Report the exact header value.
```

</details>

---

### [ ] M-4 · Capture SEO drift baseline (để theo dõi regression)

> ⬜ **CHƯA LÀM / KHÔNG XÁC MINH ĐƯỢC** — Không tìm thấy artifact baseline nào (đây là hành động chạy tool, không để lại file trong repo).

**Tool:** `/seo drift baseline`

<details>
<summary>📋 Prompt cho Claude Code</summary>

```
Capture an SEO drift baseline for dvdldaiduong.com before any further SEO changes.

Context: After completing the sprint 1 & 2 fixes, we need a baseline snapshot so future audits can detect regressions automatically. The SEO skill has a drift monitoring sub-skill.

Task:
1. Run: python /Users/tridentity/.claude/skills/seo/scripts/drift_baseline.py https://www.dvdldaiduong.com
2. If the script needs arguments or flags, check `python scripts/drift_baseline.py --help` first
3. Confirm the baseline is saved and note the snapshot file path
4. Also capture baselines for the 3 highest-priority pages:
   - python scripts/drift_baseline.py https://www.dvdldaiduong.com/thue-xe
   - python scripts/drift_baseline.py https://www.dvdldaiduong.com/tour-dak-lak
   - python scripts/drift_baseline.py https://www.dvdldaiduong.com/bang-gia
5. Save the output log to /Users/tridentity/Downloads/drift-baselines-2026-07-08.txt

After capturing baselines, spawn a sub-agent to verify:
- Sub-agent task: Run `python /Users/tridentity/.claude/skills/seo/scripts/drift_history.py https://www.dvdldaiduong.com` and confirm at least one baseline entry exists. Report the baseline timestamp, URL, and key captured elements (title, H1, meta description, canonical). If the script returns "No baselines found", the baseline capture failed — report the error.
```

</details>

---

## GHI CHÚ QUAN TRỌNG

### Trước khi merge `feat/3D-integration` → main

```
⚠️  3D Branch Checklist — run BEFORE merging:

1. Bundle size check:
   npx @next/bundle-analyzer — Three.js + R3F + Drei add ~150-250KB brotli
   Current total JS: 200KB brotli → expected post-merge: 350-450KB brotli

2. Dynamic import:
   The 3D component MUST use: dynamic(() => import('./3DComponent'), { ssr: false })
   to prevent it from blocking LCP render

3. CSP check:
   Verify worker-src includes 'blob:' for Draco WASM:
   "worker-src 'self' blob:; script-src ... 'wasm-unsafe-eval'"

4. Draco path:
   Confirm /draco/ files are in /public/draco/ and served correctly

5. Mobile performance:
   Run Lighthouse mobile on the 3D page after merge
   LCP must remain < 2.5s — if not, lazy-load the 3D section below the fold
```

---

_File: dvdldaiduong-seo-todo-prompts-2026-07-08.md_  
_Nguồn: SEO Audit Report 2026-07-08 | dvdldaiduong.com_
