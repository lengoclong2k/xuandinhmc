import type { Localized } from "@/lib/i18n";

/**
 * ✏️ ALBUM ẢNH — ảnh nằm ở /public/images/photos (01.webp … 30.webp).
 * Muốn thêm ảnh: thả file vào thư mục đó rồi thêm số vào album mong muốn.
 */
export type Album = { id: string; title: Localized; photos: string[] };

const p = (...nums: number[]) => nums.map((n) => `/images/photos/${String(n).padStart(2, "0")}.webp`);

export const albums: Album[] = [
  { id: "gala", title: { vi: "Gala & Year End Party", en: "Gala & Year End Party" }, photos: p(1, 7, 9, 10, 11, 12, 18, 19, 23, 29) },
  { id: "stage", title: { vi: "Sân khấu & Trao giải", en: "Stage & Awards" }, photos: p(2, 3, 5, 8, 20, 21, 22, 24) },
  { id: "opening", title: { vi: "Khai trương & Tương tác", en: "Openings & Interaction" }, photos: p(13, 14, 15, 16, 17, 26, 27, 30) },
  { id: "portrait", title: { vi: "Chân dung MC", en: "MC Portraits" }, photos: p(4, 6, 25, 28) },
];
