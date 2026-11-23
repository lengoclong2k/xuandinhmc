/**
 * ✏️ DANH SÁCH KHÁCH HÀNG (chỉ hiển thị logo)
 *
 * Thêm khách hàng: thả file logo vào /public/images/clients (SVG hoặc PNG nền trong suốt)
 * rồi thêm 1 dòng bên dưới. Công ty nào chưa có logo thì chưa cần thêm.
 *
 * - idle:      kiểu hiển thị khi chưa rê chuột
 *     "white" → logo thành trắng mờ (hợp mọi logo chỉ có hình/chữ)
 *     "gray"  → logo xám mờ, giữ chi tiết (dùng cho logo có nhiều mảng màu như Acecook)
 *
 * Lưu ý: logo dùng trên nền đen nên các màu tối trong file logo (chữ đen, xanh navy…) đã được
 * làm sáng lại (JAPFA, Manulife, PVChem) để nổi lên khi hover. Logo mới có chữ tối thì cần làm sáng tương tự.
 *
 * Nguồn logo hiện tại: website chính thức (Geleximco/PVChem/Acecook),
 * Wikimedia Commons (Manulife, Japfa) và Simple Icons (Grab).
 * Logo là nhãn hiệu của chủ sở hữu, chỉ dùng để thể hiện đã hợp tác.
 */
export type Client = {
  name: string;
  logo: string;
  idle?: "white" | "gray";
};

export const clients: Client[] = [
  { name: "Grab", logo: "/images/clients/grab.svg" },
  { name: "Manulife", logo: "/images/clients/manulife.svg" },
  { name: "JAPFA", logo: "/images/clients/japfa.svg" },
  { name: "Acecook", logo: "/images/clients/acecook.png", idle: "gray" },
  { name: "PVChem", logo: "/images/clients/pvchem.png" },
  { name: "Geleximco", logo: "/images/clients/geleximco.svg" },
];
