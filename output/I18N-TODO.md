# TODO — Đa ngôn ngữ (i18n) dvdldaiduong.com

> Checklist cho hạ tầng đa ngôn ngữ vi/en. Cùng quy ước với [TODO.md](./TODO.md): tick khi đã ship.
> Trạng thái tính đến 2026-09-25, đối chiếu trực tiếp với code trong `src/`.
> Mục A (kiến trúc route) đã refactor xong cùng ngày — xem phần A.
>
> **Tóm tắt**: nền tảng đã đúng chuẩn ở phần khó nhất (hreflang, route registry, type-safe dictionary).
> Nợ kỹ thuật tập trung ở 3 chỗ: cây route bị nhân bản, chưa có Intl theo locale, và toàn site đang render dynamic.

---

## A. Kiến trúc route

Trước refactor, `src/app/` có **hai cây route song song**: `src/app/thue-xe/...` và
`src/app/en/car-rental/...`. Mỗi trang tồn tại 2 bản `page.tsx`.

Sau refactor: một cây `src/app/[locale]/` duy nhất. Segment nội bộ đặt theo path tiếng Anh, nên
`/en/*` khớp route trực tiếp và chỉ URL tiếng Việt cần rewrite trong `src/proxy.ts`. URL công khai
không đổi một ký tự nào.

- [x] **A1** — Gộp về một cây `src/app/[locale]/` duy nhất
- [x] **A2** — `src/proxy.ts` rewrite public path tiếng Việt → route nội bộ
      (`/thue-xe` → `/vi/car-rental`, `/bang-gia` → `/vi/pricing`, ...), map suy ra từ `routePaths`
      qua `toInternalPath()` nên không thể lệch với registry
- [x] **A3** — Segment nội bộ trùng path tiếng Anh → `/en/*` không cần rewrite
- [x] **A4** — `/vi/*` trả 308 về path tiếng Việt thật (`toPublicPath()`), chặn duplicate content
- [x] **A5** — `requireLocale()` trong `src/app/[locale]/locale-params.ts` → `notFound()` cho segment lạ
- [x] **A6** — Bỏ header `x-pathname` và `getLocale()`; layout nhận `params.locale` trực tiếp
- [x] **A9** — `dailyPriceVND` chỉ còn một bảng, keyed theo slug tiếng Việt; slug tiếng Anh tra qua
      `carRentalSlugPairs` (`src/app/[locale]/car-rental/[slug]/prices.ts`)
- [x] **A7** — Gộp `pricing-card.tsx` (314 dòng) + `bang-gia-card.tsx` (471 dòng) → một `bang-gia-card.tsx`
      (147 dòng) nhận `dict.pricing`. 4 bảng giá + toàn bộ copy đã vào dictionary.
      Tiện thể bỏ `"use client"` (component không có hook nào) nên bớt JS gửi xuống client
- [x] **A8** — Gộp `booking-form.en.tsx` + `booking-form.tsx` → một component nhận `dict.tourBooking` +
      `locale`. Giữ cách dùng status flag của bản tiếng Anh thay vì `message.includes("thành công")`
      của bản tiếng Việt — so khớp chuỗi sẽ hỏng ngay khi dịch
- [x] **A10** — 5/6 trang nặng đã gộp: mỗi trang giờ có **một component layout** + một
      `content.ts` kiểu `Record<Locale, …>`. Không còn `content.vi.tsx` / `content.en.tsx` nào.
      - `privacy-policy`, `booking-policy` → `src/features/policy/policy-page.tsx`
      - `car-rental/corporate` → `src/features/thue-xe/corporate-page.tsx`
      - `car-rental/dak-lak-travel` → `src/features/thue-xe/travel-page.tsx`
      - `dak-lak-tours` → `src/features/tour-dak-lak/tours-page.tsx`

      Văn xuôi **không** bị băm vào `dictionary`: đó là tài liệu, không phải chuỗi UI. Băm ra sẽ
      làm `types.ts` phình và làm mất tính "fail loud" (thiếu 1 đoạn trong khối 300 key không phải
      lỗi biên dịch có ý nghĩa). Dictionary vẫn chỉ giữ chuỗi UI dùng lại nhiều nơi.

- [ ] **A10b** — `news` chưa gộp. Hai bản **không phải bản dịch của nhau**: bài viết từ Sanity chỉ
      có tiếng Việt, trang tiếng Anh chỉ dịch phần khung. Gộp trước khi làm F4–F6 (thêm trường
      `language` vào Sanity) là gộp nhầm thứ. Để sau F4–F6.
- [ ] **A10c** — Gộp `car-rental.en.ts` + `car-rental.ts` thành một nguồn keyed theo locale

**Đã xác minh sau refactor** (`next build` + `next start`, 2026-09-25):
- 21 page route → 13; toàn bộ 29 URL công khai trả 200
- `/vi`, `/vi/car-rental`, `/vi/pricing`, `/vi/car-rental/thue-xe-4-cho` → 308 về URL tiếng Việt
- `/car-rental`, `/pricing`, `/en/thue-xe`, `/xx/car-rental`, `/en/news/<slug>` → 404
- canonical + hreflang đối xứng giữ nguyên trên mọi cặp trang; `/tin-tuc` ↔ `/en/news` vẫn self-canonical
- JSON-LD giữ nguyên số lượng và loại schema trên từng trang
- Giá trong `Service.offers` của trang tiếng Anh khớp trang tiếng Việt tương ứng
- CSP nonce trong header và trong `<script>` khớp nhau qua đường rewrite

### A-404 — trang 404 (làm ngày 2026-09-26)

Refactor làm root layout chuyển vào `app/[locale]/`, nên trang 404 mất chrome. Đã sửa:

- [x] Thêm `src/app/not-found.tsx` (tự render `<html>`, header, footer) cho URL không khớp route nào
- [x] Thêm `src/app/[locale]/not-found.tsx` cho `notFound()` gọi tường minh trong route đã khớp
- [x] Copy 404 đưa vào dictionary (`notFound`), song ngữ, chọn theo header `x-locale` do `src/proxy.ts` set
      (`not-found.tsx` không nhận route params — đây là chỗ duy nhất đọc header này)
- [x] `dynamicParams = false` cho `car-rental/[slug]`: 6 slug là dữ liệu tĩnh, slug lạ không nên khớp route
- [x] `next.config.ts` redirects cũ vẫn chạy đúng 1 hop qua middleware, kết thúc ở 200 (7/7 URL)

- [ ] **A-404a** — 404 loại "route đã khớp rồi mới gọi `notFound()`" (`/car-rental`, `/thue-xe/<slug-lạ>`,
      `/en/news/<slug-lạ>`) render nội dung ở phía client: HTML khởi tạo là `<html id="__next_error__">`
      không có `lang`, header/footer chỉ có trong RSC payload. Người dùng có JS thấy đúng trang.
      Đây là hành vi của Next App Router với `notFound()` trong route đã khớp, không phải do refactor —
      nhưng chưa đo được baseline HEAD để khẳng định chắc chắn (build worktree fail vì symlink
      `node_modules` không hợp với Turbopack). Nếu muốn 404 server-rendered hoàn toàn, cách là chặn ở
      middleware trước khi route khớp.

### Hai thay đổi hiển thị (A7)

Gộp component buộc phải chọn một phiên bản cho chỗ hai bản khác nhau:

1. Dòng "Giá thuê xe ô tô có thể thay đổi…" trên `/bang-gia` trước đây là `text-white text-center`
   trên nền trắng — **chữ trắng trên nền trắng, không ai đọc được**. Bản tiếng Anh đã sửa thành
   `text-gray-700 mb-3`; bản gộp dùng cách đúng này, nên câu đó giờ hiện ra trên trang tiếng Việt.
2. `/bang-gia` trước hardcode `href="/lien-he"`; giờ lấy từ `path("contact", locale)` — cùng giá trị,
   nhưng thêm ngôn ngữ mới sẽ không còn trỏ nhầm sang trang tiếng Việt.

### Thay đổi structured data (A10) — cần bạn duyệt

Khi gộp, tôi cho JSON-LD FAQ **sinh ra từ chính FAQ hiển thị** thay vì là một bản chép riêng.
Việc đó làm lộ ra một lỗi có sẵn:

| Trang | Số câu hỏi | Lệch giữa schema và nội dung hiển thị (trước khi sửa) |
|---|---|---|
| `/thue-xe/du-lich-dak-lak` | 6 | **5/6** — 3 câu hỏi trong schema thậm chí không có trên trang |
| `/en/car-rental/dak-lak-travel` | 6 | **5/6** |
| `/tour-dak-lak` | 5 | **5/5** — cùng câu hỏi nhưng câu trả lời khác hẳn |
| `/en/dak-lak-tours` | 5 | **5/5** |

Chính sách FAQ structured data của Google yêu cầu nội dung đánh dấu phải **hiển thị được trên
trang**; khai câu hỏi không tồn tại có nguy cơ bị manual action. Sau khi sửa, cả 4 trang lệch 0.

Hệ quả: JSON-LD của 4 trang này đổi nội dung. Nếu bạn muốn giữ các câu hỏi cũ (chúng nhắm từ khóa
tốt hơn, vd "Thuê xe đi Buôn Đôn giá bao nhiêu?"), cách đúng là **thêm chúng vào FAQ hiển thị**,
không phải khai lại trong schema.

Ngoài ra `/chinh-sach-bao-mat` và `/chinh-sach-van-chuyen` giờ có thêm breadcrumb schema và
OpenGraph — trước chỉ bản tiếng Anh có, hai bản vốn không có lý do gì để khác nhau.

**Lưu ý khi commit**: `sitemap.ts` lấy `lastModified` từ `git log` của file nguồn. Các file vừa
di chuyển sẽ có ngày commit refactor, nên `lastmod` của mọi trang sẽ nhảy về ngày deploy. Đó là
thay đổi thật (file có đổi), nhưng cần biết trước khi nhìn Search Console.

---

## B. Resolve locale

- [x] **B1** — Locale suy ra từ URL prefix, không từ cookie/IP (`localeFromPathname`, `src/lib/i18n/config.ts:30`)
- [x] **B2** — Không auto-redirect theo `Accept-Language` — bot Google crawl từ US vẫn thấy bản tiếng Việt
- [x] **B3** — Language switcher trỏ sang **trang tương đương**, không phải về trang chủ (`switchLocalePath`)
- [x] **B4** — Switcher dùng `<a>` thay `next/link` vì shared root layout không re-render khi soft nav
- [ ] **B5** — Banner gợi ý (không redirect) cho khách có `Accept-Language: en` khi họ vào path tiếng Việt.
      Chỉ *gợi ý* + nhớ lựa chọn bằng cookie; **không** tự chuyển trang
- [ ] **B6** — Ghi rõ trong code: cookie chỉ dùng cho banner, không bao giờ dùng để chọn locale khi render

---

## C. SEO / hreflang

- [x] **C1** — `routePaths` là single source of truth cho path từng locale (`src/lib/i18n/routes.ts:15`)
- [x] **C2** — hreflang đối xứng hai chiều + tự trỏ chính mình, sinh từ `alternates()`
- [x] **C3** — `x-default` trỏ về locale mặc định (vi)
- [x] **C4** — Locale có path `null` bị bỏ khỏi hreflang → không bao giờ trỏ vào URL không tồn tại
- [x] **C5** — `hreflangExcluded` loại `/tin-tuc` ↔ `/en/news`: bài viết Sanity chưa dịch, chỉ dịch phần khung
- [x] **C6** — Sitemap emit `xhtml:link alternates`, logic mirror `alternates()` để 2 nguồn không mâu thuẫn
- [x] **C7** — `og:locale` + `og:locale:alternate` trên cả 2 locale
- [x] **C8** — Slug được dịch và ghép cặp qua `carRentalSlugPairs` → hreflang cross-reference đúng
- [x] **C9** — Một entity `LocalBusiness` duy nhất, trang `/en` tham chiếu bằng `@id` thay vì định nghĩa lại
- [x] **C10** — Root layout giờ set `alternates("home", locale)` (đủ hreflang) thay vì chỉ `canonical`.
      Thêm nữa, `buildMetadata()` trong `src/app/[locale]/page-seo.ts` luôn dựng `alternates` +
      `alternateLocale` từ route registry, nên trang mới không thể ship canonical mà thiếu hreflang
- [ ] **C11** — Thêm test/script CI: duyệt mọi key trong `routePaths`, assert mỗi URL emit đủ hreflang đối xứng
- [ ] **C12** — `/tin-tuc` đang tự viết `alternates` inline (phân trang) thay vì dùng `alternates()` — rà lại cho nhất quán
- [ ] **C13** — Sau deploy: submit sitemap, kiểm tra Search Console → International Targeting không báo lỗi hreflang

---

## D. Fail loud (không fallback âm thầm)

- [x] **D1** — `Dictionary` type ép `en.ts satisfies Dictionary` → thiếu key là lỗi compile, không phải chuỗi tiếng Việt lọt ra production (`src/lib/i18n/types.ts`)
- [x] **D2** — `alternates()` throw khi route không có path cho locale, thay vì trả URL sai
- [ ] **D3** — Áp cùng ràng buộc cho `src/lib/data/*.en.ts`: hiện là 2 file rời, thiếu 1 mục không ai biết
- [ ] **D4** — Lint rule chặn chuỗi tiếng Việt hardcode trong `src/features/` (hiện còn ở `pricing-card.tsx:97`)
- [ ] **D5** — Kiểm tra `carRentalSlugPairs` phủ đủ mọi slug trong `car-rental.ts` — thiếu cặp là mất hreflang im lặng

---

## E. Format theo locale

Hiện `intlLocale` đã khai báo trong `config.ts` nhưng **chỉ dùng đúng 1 chỗ** (`news-section.tsx:82`).

- [x] **E1** — Khai báo `intlLocale` + `ogLocale` per locale
- [x] **E2/E3** — các chỗ hardcode `toLocaleDateString("vi-VN")` giờ nằm trong `content.vi.tsx`,
      là file chỉ render tiếng Việt nên đúng theo cấu trúc. Khi gộp theo A10 thì phải đổi sang
      `intlLocale[locale]`, nếu không sẽ thành bug thật
- [ ] **E4** — Format giá VND bằng `Intl.NumberFormat`, không nối chuỗi thủ công
- [ ] **E5** — Quyết định: giữ giá bằng VND cho cả 2 locale (hiện đang vậy, có comment giải thích) — xác nhận rồi ghi vào doc
- [ ] **E6** — Nếu thêm ngôn ngữ có số nhiều phức tạp: chuyển sang ICU MessageFormat thay `interpolate()`

---

## F. Tầng nội dung

- [x] **F1** — Tách UI strings (dictionary) khỏi marketing copy khỏi content động
- [x] **F2** — Dictionary import động → mỗi trang chỉ ship 1 ngôn ngữ (`get-dictionary.ts`)
- [x] **F3** — Dictionary chỉ chứa data JSON-serializable, dùng `{placeholder}` + `interpolate()` thay function
- [ ] **F4** — Thêm trường `language` + `translationOf` vào schema `post` trong Sanity
- [ ] **F5** — Query bài viết theo locale; khi đó gỡ `news` khỏi `hreflangExcluded`
- [ ] **F6** — `/en/news` hiện hiển thị bài tiếng Việt với khung tiếng Anh — quyết định: dịch bài, hoặc `noindex` trang này

---

## G. Render & performance

`next build` (2026-09-25): **toàn bộ 30 page route là `ƒ Dynamic`**, không page nào được prerender.

Nguyên nhân là CSP nonce, **không phải i18n** — `src/proxy.ts` sinh nonce mỗi request, root layout đọc
`headers().get("x-nonce")`, và `headers()` opt route ra khỏi static generation. Cơ chế này đã có từ trước
khi làm i18n (xác nhận ở `git show HEAD:src/app/layout.tsx`). Refactor `[locale]` **không** tự sửa được.

- [ ] **G1** — Quyết định đánh đổi: CSP nonce (bảo mật) vs static generation (tốc độ). Không thể có cả hai
- [ ] **G2** — Nếu chọn static: bỏ nonce, chuyển GTM/GA sang `script-src` theo hash hoặc host allowlist
- [ ] **G3** — Nếu giữ nonce: bật ISR/cache header ở tầng CDN để bù, và ghi rõ quyết định vào README
- [ ] **G4** — Đo lại sau khi quyết: `next build` phải cho thấy `○` ở các trang tĩnh, hoặc TTFB cải thiện đo được

---

## H. Ops

- [ ] **H1** — Viết quy ước đặt key dictionary vào README (hiện là nested theo trang — ghi lại cho người sau)
- [ ] **H2** — Checklist "thêm 1 ngôn ngữ mới": thêm code vào `locales`, thêm cột vào `routePaths`,
      thêm dictionary, thêm `ogLocale`/`intlLocale`. Đã có comment ở `config.ts:3` — nâng thành doc đầy đủ
- [ ] **H3** — Checklist "thêm 1 trang mới": thêm key vào `routePaths`, gọi `alternates()`, thêm vào `STATIC_ROUTES` của sitemap
- [ ] **H4** — Quy trình review bản dịch trước khi deploy (hiện dịch thẳng trong code, không ai đối chiếu)
- [ ] **H5** — Cập nhật `llms.txt` / `llms-full.txt` cho bản tiếng Anh khi nội dung đổi
