/**
 * Video dung lượng lớn KHÔNG nên nằm trong repo/Vercel.
 * Cách 1 (khuyên dùng): đặt `youtubeId` trong src/data/videos.ts.
 * Cách 2: upload file lên Cloudflare R2 / Vercel Blob / S3 rồi set biến môi trường
 *         NEXT_PUBLIC_VIDEO_BASE_URL (vd. https://cdn.example.com) — file sẽ được lấy
 *         tại `${BASE}/videos/<tên file>`.
 * Khi chạy local mà không set biến này, video đọc từ /public/videos.
 */
export function videoUrl(file: string): string {
  const base = process.env.NEXT_PUBLIC_VIDEO_BASE_URL?.replace(/\/$/, "") ?? "";
  return `${base}/videos/${file}`;
}
