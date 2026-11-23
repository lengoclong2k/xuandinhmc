import type { Localized } from "@/lib/i18n";

/**
 * ✏️ PORTFOLIO — mỗi slide là một trang của file PDF Portfolio (đã render sang ảnh).
 * Thêm slide mới: thả ảnh 16:9 vào /public/images/portfolio rồi thêm 1 dòng bên dưới.
 */
export type PortfolioSlide = {
  image: string;
  category: Localized;
  clients: string;
};

export const portfolio: PortfolioSlide[] = [
  { image: "/images/portfolio/06.webp", category: { vi: "GALA DINNER", en: "GALA DINNER" }, clients: "Thủy Huệ · Manulife" },
  { image: "/images/portfolio/07.webp", category: { vi: "GALA DINNER", en: "GALA DINNER" }, clients: "Dr.Lacir · JAPFA" },
  { image: "/images/portfolio/08.webp", category: { vi: "YEAR END PARTY", en: "YEAR END PARTY" }, clients: "NewAge Group · AceCook 2025" },
  { image: "/images/portfolio/09.webp", category: { vi: "TEAMBUILDING", en: "TEAMBUILDING" }, clients: "CSCD K20 · Nhựa Bình Thuận" },
  { image: "/images/portfolio/10.webp", category: { vi: "NGÀY HỘI GIA ĐÌNH", en: "FAMILY DAY" }, clients: "Grab Ươm Xanh · Teambuilding" },
  { image: "/images/portfolio/11.webp", category: { vi: "THỂ THAO", en: "SPORTS" }, clients: "PVCHEM" },
  { image: "/images/portfolio/12.webp", category: { vi: "HỘI NGHỊ – HỘI THẢO", en: "CONFERENCE" }, clients: "The Soleil Đà Nẵng · Hoa Linh" },
];

/** Các điểm mạnh — dùng cho section Giới thiệu (ảnh lấy từ PDF) */
export const aboutPillars: { image: string; title: Localized; text: Localized }[] = [
  {
    image: "/images/portfolio/03.webp",
    title: { vi: "CHUYÊN NGHIỆP", en: "PROFESSIONAL" },
    text: {
      vi: "Dẫn dắt chương trình mạch lạc, đúng kịch bản, xử lý tình huống linh hoạt trên mọi quy mô sự kiện.",
      en: "Clear, on-script hosting with flexible handling of any situation at events of every size.",
    },
  },
  {
    image: "/images/portfolio/04.webp",
    title: { vi: "TRẺ TRUNG – HÀI HƯỚC", en: "YOUTHFUL & HUMOROUS" },
    text: {
      vi: "Năng lượng tích cực, duyên dáng, khuấy động không khí và kết nối khán giả ngay từ phút đầu.",
      en: "Positive energy and charm that lift the room and connect with the audience from minute one.",
    },
  },
  {
    image: "/images/portfolio/05.webp",
    title: { vi: "NỘI DUNG SÁNG TẠO", en: "CREATIVE CONTENT" },
    text: {
      vi: "Thiết kế trò chơi, phần dẫn và tương tác độc đáo, riêng cho từng thương hiệu.",
      en: "Original games, scripts and interactions tailored for each brand.",
    },
  },
];
