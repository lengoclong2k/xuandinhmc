# MC Lại Gia Định – Người Nhiệt Huyết (Landing page)

Landing page đen–vàng, clone bố cục từ honggammc.com, ghép asset của MC Lại Gia Định.

**Tech stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · `next/image` · `next/font` (Rokkitt + Montserrat).
Không dùng backend/CMS: toàn bộ nội dung nằm trong `src/data/*.ts` nên sửa nhanh, deploy tĩnh lên Vercel.

## Chạy local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # kiểm tra build trước khi deploy
```

## Sửa nội dung ở đâu?

| Muốn sửa | File |
|---|---|
| Tên, slogan, chiều cao/cân nặng, **số điện thoại / Zalo / Facebook**, SEO | `src/data/site.ts` |
| Danh sách video (YouTube ID, poster) | `src/data/videos.ts` |
| Logo / tên khách hàng | `src/data/clients.ts` |
| Slide Portfolio, 3 khối "Chuyên nghiệp/Trẻ trung/Sáng tạo" | `src/data/portfolio.ts` |
| Album ảnh | `src/data/albums.ts` |
| Ảnh feedback (rỗng → tự ẩn section) | `src/data/feedback.ts` |
| Màu sắc, font, nút | `src/app/globals.css` (khối `@theme`) |
| Thứ tự / bật tắt section | `src/app/page.tsx` |

Nội dung song ngữ dùng dạng `{ vi: "...", en: "..." }` (nút VI/EN trên menu).

## Cấu trúc

```
src/
├─ app/            layout.tsx (font, SEO) · page.tsx (ghép section) · globals.css (theme)
├─ components/
│  ├─ layout/      Header, Footer
│  ├─ sections/    Hero, About, VideoShowcase, Clients, Portfolio, Feedback, Albums
│  ├─ video/       VideoCard, VideoModal
│  └─ ui/          SectionHeading, Carousel, Lightbox, Reveal
├─ data/           ← nơi sửa nội dung
└─ lib/            i18n.tsx (song ngữ), media.ts (URL video)
public/images/     hero-mc · photos (30 ảnh) · portfolio (trang PDF) · posters (bìa video)
```

## Video (quan trọng)

Video gốc 60–400 MB, **không nên đưa vào repo/Vercel**. Hai cách:

1. **YouTube (khuyên dùng):** upload (có thể để "Không công khai"), rồi thêm `youtubeId: "xxxx"` vào mục tương ứng trong `src/data/videos.ts`.
2. **Tự host file:** upload lên Cloudflare R2 / Vercel Blob, đặt biến môi trường `NEXT_PUBLIC_VIDEO_BASE_URL` (file lấy tại `${BASE}/videos/v1.mp4`…).

Khi chạy local, thư mục `public/videos` đang là symlink tới video gốc (đã `.gitignore`).

## Trạng thái deploy hiện tại

- Project Vercel: `xuandinhmc` (team `longln`), nối với repo GitHub `lengoclong2k/xuandinhmc`, push vào `main` là tự deploy.
- Video đã nén (720p, ~16–45 MB/video) và lưu ở Vercel Blob store `mc-videos` (public) dưới `videos/v1.mp4 … v6.mp4`.
  Biến môi trường `NEXT_PUBLIC_VIDEO_BASE_URL` trỏ tới store này.
- Thay video: nén lại bằng ffmpeg rồi upload đè cùng tên (`vercel blob put videos/v1.mp4 --access public --force`),
  hoặc đổi sang YouTube bằng `youtubeId` trong `src/data/videos.ts`.
- Gói Hobby: Blob miễn phí 1 GB lưu + 10 GB tải/tháng, vượt mức thì Blob bị khoá ~30 ngày (không tính tiền).

## Deploy lên Vercel

1. Đẩy code lên GitHub (`git add . && git commit && git push`).
2. vercel.com → **Add New → Project** → chọn repo → Deploy (không cần cấu hình thêm).
3. Sửa nội dung → push → Vercel tự build lại.
