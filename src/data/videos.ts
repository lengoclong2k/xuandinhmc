import type { Localized } from "@/lib/i18n";

/**
 * ✏️ SỬA DANH SÁCH VIDEO Ở ĐÂY
 *
 * - `file`     : tên file trong /public/videos (chạy local) hoặc trên CDN (xem src/lib/media.ts)
 * - `youtubeId`: (khuyên dùng khi deploy) chỉ cần ID video YouTube, vd "dQw4w9WgXcQ".
 *                Có youtubeId thì sẽ ưu tiên phát YouTube, không cần file.
 * - `poster`   : ảnh bìa trong /public/images/posters
 */

export type VideoCategory = "event" | "gala" | "teambuilding";

export type VideoItem = {
  id: string;
  title: Localized;
  client: string;
  category: VideoCategory;
  poster: string;
  file?: string;
  youtubeId?: string;
};

export const videoCategories: { id: "all" | VideoCategory; label: Localized }[] = [
  { id: "all", label: { vi: "TẤT CẢ", en: "ALL" } },
  { id: "event", label: { vi: "EVENT", en: "EVENT" } },
  { id: "gala", label: { vi: "GALA", en: "GALA" } },
  { id: "teambuilding", label: { vi: "TEAMBUILDING", en: "TEAMBUILDING" } },
];

export const videos: VideoItem[] = [
  {
    id: "showreel",
    title: { vi: "Showreel MC Lại Gia Định", en: "MC Lai Gia Dinh Showreel" },
    client: "Showreel",
    category: "event",
    poster: "/images/posters/v1.webp",
    file: "v1.mp4",
  },
  {
    id: "sky-party",
    title: { vi: "Sky Party – Đại Bàng Team", en: "Sky Party – Dai Bang Team" },
    client: "Dr.Lacir 2022",
    category: "event",
    poster: "/images/posters/v2.webp",
    file: "v2.mp4",
  },
  {
    id: "gala-wyndham",
    title: { vi: "Gala Dinner @ Wyndham Legend Hạ Long", en: "Gala Dinner @ Wyndham Legend Ha Long" },
    client: "Wyndham Legend Hạ Long",
    category: "gala",
    poster: "/images/posters/v3.webp",
    file: "v3.mp4",
  },
  {
    id: "tb-metami",
    title: { vi: "Teambuilding METAMI tại Hạ Long", en: "METAMI Teambuilding in Ha Long" },
    client: "METAMI",
    category: "teambuilding",
    poster: "/images/posters/v4.webp",
    file: "v4.mp4",
  },
  {
    id: "tb-hui",
    title: { vi: "Teambuilding công ty XNK quốc tế HUI", en: "HUI International Import–Export Teambuilding" },
    client: "HUI",
    category: "teambuilding",
    poster: "/images/posters/v5.webp",
    file: "v5.mp4",
  },
  {
    id: "tb-source22",
    title: { vi: "Teambuilding SOURCE 22 – Sầm Sơn", en: "SOURCE 22 Teambuilding – Sam Son" },
    client: "SOURCE 22",
    category: "teambuilding",
    poster: "/images/posters/v6.webp",
    file: "v6.mp4",
  },
];
