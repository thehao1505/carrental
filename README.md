Website: https://dvdldaiduong.com

## Lệnh

| Lệnh | Việc |
|---|---|
| `npm run dev` | Chạy dev server |
| `npm run build && npm run start` | Build và chạy bản production ở :3000 |
| `npm run lint` | ESLint, gồm cả rule chặn chuỗi tiếng Việt viết cứng trong `src/features/` |
| `npm run check:hreflang [url]` | Kiểm tra canonical + hreflang của mọi URL trong sitemap. Mặc định chạy với `http://localhost:3000`, nên phải `build` + `start` trước |

## Đa ngôn ngữ (vi / en)

Tiến độ và các quyết định còn mở: [output/I18N-TODO.md](output/I18N-TODO.md).

### Cấu trúc

- **Một cây route**: `src/app/[locale]/…`. Tên segment nội bộ là path tiếng Anh
  (`car-rental`, `pricing`…), nên `/en/*` khớp route trực tiếp.
- **URL tiếng Việt** (`/thue-xe`, `/bang-gia`…) được `src/proxy.ts` rewrite sang
  `/vi/<segment>`. URL nội bộ `/vi/*` trả 308 về URL tiếng Việt. URL không phải
  trang nào trả 404 ngay tại proxy.
- **`routePaths`** trong `src/lib/i18n/routes.ts` là nguồn duy nhất cho path của
  từng trang theo từng ngôn ngữ. Canonical, hreflang, sitemap, language switcher
  và map rewrite đều sinh ra từ đây.
- **`carRentalSlugs`** (cùng file) là registry của 6 xe, key theo id trung lập
  (`"4-seat"`…). Nội dung xe (`src/lib/data/car-rental*.ts`), giá theo ngày và ảnh
  đều là `Record<VehicleId, …>`: thiếu một xe ở bất kỳ đâu là lỗi compile.

### Chữ nằm ở đâu

| Loại | Nơi đặt |
|---|---|
| Chuỗi UI dùng lại ở nhiều nơi (nút, nhãn, form, 404) | `src/lib/i18n/dictionaries/{vi,en}.ts` |
| Văn xuôi dài của một trang (chính sách, landing page) | `content.ts` cạnh `page.tsx`, kiểu `Record<Locale, …>` |
| Title / description / OG / JSON-LD của một trang | `seo.ts` cạnh `page.tsx`, kiểu `Record<Locale, PageSeo>` |
| Nội dung từng xe | `src/lib/data/car-rental.ts` (vi), `car-rental.en.ts` (en) |
| Giá | Số, dùng chung mọi ngôn ngữ: `src/features/bang-gia/price-tables.ts` (bảng giá), `dailyPriceVND` trong `src/lib/data/index.ts` (giá theo ngày) |

Component trong `src/features/` không chứa chữ hiển thị; mọi chữ đi vào qua props.
`npm run lint` báo lỗi khi gặp chuỗi tiếng Việt trong đó. Ngoại lệ có chủ đích
(tên thương hiệu, nội dung email gửi cho nhân viên) phải có comment
`eslint-disable` kèm lý do.

### Quy ước key dictionary (H1)

- Key cấp 1 đặt theo **component hoặc khu vực** dùng nó: `header`, `footer`,
  `pagination`, `notFound`, `tourBooking`, `pricing`… Copy riêng của một trang
  nằm dưới `pages.<tên-trang>` (`pages.home`, `pages.about`…).
- Component nhận đúng nhánh nó cần (`dict={dict.pagination}`), không nhận cả
  dictionary, để thấy rõ nó phụ thuộc vào đâu.
- Chỉ chứa dữ liệu JSON (dictionary đi từ Server sang Client Component). Chuỗi
  cần giá trị lúc chạy dùng `{placeholder}` + `interpolate()`, không dùng hàm.
- Số và ngày **không** viết sẵn thành chuỗi trong dictionary. Lưu số, format bằng
  `formatNumber()` / `intlLocale[locale]`; dictionary chỉ giữ phần chữ quanh nó
  (vd `pricing.priceFormat.amount = "{amount}đ"`).
- `vi.ts` và `en.ts` đều `satisfies Dictionary`: thiếu key là lỗi compile.
  Thêm key thì thêm vào `src/lib/i18n/types.ts` trước.

### Thêm một trang mới (H3)

1. Thêm key vào `routePaths` (`src/lib/i18n/routes.ts`), một path cho mỗi
   ngôn ngữ. Path tiếng Anh quyết định tên thư mục: `/en/foo-bar` → `src/app/[locale]/foo-bar/`.
   Ngôn ngữ chưa dịch thì để `null` (trang đó sẽ không có trong hreflang).
2. Tạo `src/app/[locale]/foo-bar/page.tsx`, theo mẫu `about/page.tsx`:
   - `generateMetadata` dùng `resolveLocale()` + `buildMetadata(key, locale, seo)`
     (từ `../page-seo`). Hàm này luôn sinh đủ canonical + hreflang.
   - Component trang dùng `requireLocale()`.
3. Tạo `seo.ts` (và `content.ts` nếu có văn xuôi) kiểu `Record<Locale, …>`.
4. Thêm route vào `STATIC_ROUTES` trong `src/app/sitemap.ts`.
5. Thêm vào `src/app/llms.txt/route.ts` và `src/app/en/llms.txt/route.ts` (H5).
6. Nếu cần link trong menu: thêm vào `header` / `footer` của cả hai dictionary.
7. `npm run build && npm run start`, rồi `npm run check:hreflang`.

Không cần sửa `src/proxy.ts`: rewrite và danh sách URL hợp lệ đều đọc từ `routePaths`.

### Thêm một ngôn ngữ mới (H2)

1. `src/lib/i18n/config.ts`: thêm mã vào `locales`, thêm `ogLocale` và `intlLocale`.
2. `src/lib/i18n/routes.ts`: thêm một cột vào **mọi** mục của `routePaths` và
   `carRentalSlugs` (TypeScript báo lỗi chỗ nào còn thiếu).
3. `src/lib/i18n/dictionaries/<mã>.ts` với `satisfies Dictionary`, và đăng ký nó
   trong `get-dictionary.ts`. Thêm lựa chọn vào `languageSwitcher.options` của
   **tất cả** dictionary.
4. Thêm cột cho mọi `Record<Locale, …>`: `content.ts` / `seo.ts` từng trang,
   `carRentalCopy` và `testimonialsByLocale` trong `src/lib/data/index.ts`.
   TypeScript báo lỗi ở từng chỗ còn thiếu.
5. `pricing.priceFormat` cho ngôn ngữ mới (vị trí ký hiệu tiền tệ).
6. Nếu ngôn ngữ có quy tắc số nhiều phức tạp, xem E6 trong
   `output/I18N-TODO.md` trước khi dùng `interpolate()` cho chuỗi có số đếm.
7. `src/app/<mã>/llms.txt/route.ts`.
8. Build, `npm run check:hreflang`, rồi submit sitemap trong Search Console.

### llms.txt (H5)

`/llms.txt` (vi), `/en/llms.txt` và `/llms-full.txt` liệt kê các trang chính.
Danh sách xe và bài viết tự sinh ra, nhưng phần mô tả trang được viết tay. Khi
**thêm, đổi tên hay đổi nội dung chính của một trang**, sửa cả hai file
`llms.txt` trong cùng commit, để hai bản luôn có cùng danh sách trang.

### Review bản dịch (H4, đề xuất)

Hiện bản dịch được viết thẳng trong code. Trước khi deploy thay đổi có chữ:

1. PR có sửa `dictionaries/*.ts`, `content.ts`, `seo.ts` hay `car-rental*.ts` thì
   phải có một người đọc được cả hai ngôn ngữ duyệt.
2. Đối chiếu số liệu (giá, số chỗ, thời gian) giữa hai bản. Giá đã dùng chung một
   nguồn; số liệu nằm trong văn xuôi thì chưa.
3. Không dịch, không bỏ dấu địa chỉ công ty và tên thương hiệu: chúng phải giống
   hệt Google Business Profile (NAP).
