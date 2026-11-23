import type { Localized } from "@/lib/i18n";

/**
 * ✏️ SỬA NỘI DUNG CHUNG CỦA TRANG Ở ĐÂY
 * (tên, slogan, thông tin MC, liên hệ, SEO)
 */

const t = (vi: string, en: string = vi): Localized => ({ vi, en });

export const site = {
  name: "MC LẠI GIA ĐỊNH",
  seo: {
    title: "MC Lại Gia Định – Người Nhiệt Huyết | MC sự kiện, gala, teambuilding",
    description:
      "MC Lại Gia Định – MC sự kiện chuyên nghiệp, trẻ trung, hài hước. Dẫn gala dinner, year end party, teambuilding, hội nghị, lễ kỷ niệm trên toàn quốc.",
  },

  hero: {
    eyebrow: t("MC SỰ KIỆN CHUYÊN NGHIỆP", "PROFESSIONAL EVENT HOST"),
    title: t("MC LẠI GIA ĐỊNH"),
    subtitle: t("Người Nhiệt Huyết", "The Passionate Host"),
    motto: t("Chuyên nghiệp – Trẻ trung – Hài hước", "Professional – Youthful – Humorous"),
    ctaPrimary: t("KHÁM PHÁ PORTFOLIO", "EXPLORE PORTFOLIO"),
    ctaSecondary: t("XEM VIDEO DẪN", "WATCH VIDEOS"),
    scrollCue: t("CUỘN ĐỂ KHÁM PHÁ", "SCROLL TO EXPLORE"),
  },

  /** Thông tin MC (lấy từ file Portfolio PDF) */
  profile: [
    { label: t("Chiều cao", "Height"), value: "1m70" },
    { label: t("Cân nặng", "Weight"), value: "70kg" },
    { label: t("Giọng", "Voice"), value: t("Miền Bắc", "Northern") },
  ],

  strengths: [
    t("Teambuilding"),
    t("Tiệc Gala", "Gala Dinner"),
    t("Lễ kỷ niệm", "Anniversary"),
    t("Hội thảo", "Conference"),
    t("Khai trương", "Grand Opening"),
    t("Chương trình hoạt náo", "Entertainment shows"),
    t("Vinh danh, trao giải", "Awards & honors"),
    t("Hội nghị khách hàng", "Customer conference"),
  ],

  /**
   * ✏️ LIÊN HỆ — điền vào là nút tự hiện, để "" thì tự ẩn.
   * phone: "0900000000", zalo: "https://zalo.me/0900000000",
   * facebook: "https://facebook.com/...", email: "abc@gmail.com"
   */
  contact: {
    phone: "",
    zalo: "",
    facebook: "",
    email: "",
    youtube: "",
    tiktok: "",
  },

  gratitude: {
    label: t("WITH GRATITUDE", "WITH GRATITUDE"),
    message: t(
      "MC LẠI GIA ĐỊNH RẤT HÂN HẠNH KHI ĐƯỢC ĐỒNG HÀNH CÙNG QUÝ ĐỐI TÁC",
      "MC LAI GIA DINH IS HONORED TO ACCOMPANY OUR PARTNERS",
    ),
    backToTop: t("LÊN ĐẦU TRANG ↑", "BACK TO TOP ↑"),
  },

  /** Tiêu đề từng section */
  sections: {
    about: {
      eyebrow: t("ABOUT MC", "ABOUT MC"),
      title: t("GIỚI THIỆU", "ABOUT"),
      subtitle: t("Một MC – nhiều màu sắc cho mọi sân khấu", "One host – many colours for every stage"),
    },
    videos: {
      eyebrow: t("ON STAGE MOMENTS", "ON STAGE MOMENTS"),
      title: t("VIDEO DẪN", "VIDEOS"),
      subtitle: t("Những khoảnh khắc ấn tượng trên sân khấu", "Memorable moments on stage"),
      aside: "A voice. A presence. A connection.",
    },
    clients: {
      eyebrow: t("TRUSTED PARTNERS", "TRUSTED PARTNERS"),
      title: t("KHÁCH HÀNG", "CLIENTS"),
      subtitle: t("Những thương hiệu MC Lại Gia Định đã đồng hành", "Brands MC Lai Gia Dinh has worked with"),
    },
    portfolio: {
      eyebrow: t("SELECTED WORKS", "SELECTED WORKS"),
      title: t("PORTFOLIO", "PORTFOLIO"),
      subtitle: t("Dấu ấn từ những chương trình đã dẫn", "Highlights from the shows I've hosted"),
      hint: t("Click để xem", "Click to view"),
    },
    feedback: {
      eyebrow: t("KIND WORDS", "KIND WORDS"),
      title: t("FEEDBACK", "FEEDBACK"),
      subtitle: t("Cảm nhận chân thực từ khách hàng", "Honest words from clients"),
    },
    albums: {
      eyebrow: t("MOMENTS & MEMORIES", "MOMENTS & MEMORIES"),
      title: t("ALBUM ẢNH", "PHOTO ALBUMS"),
      subtitle: t("Những khoảnh khắc trong hành trình cùng sân khấu", "Moments from the journey on stage"),
      aside: "A collection of moments.",
      photosUnit: t("ẢNH", "PHOTOS"),
    },
  },
};

export type SectionId = "home" | "videos" | "clients" | "portfolio" | "feedback" | "albums";
