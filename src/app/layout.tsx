import type { Metadata, Viewport } from "next";
import { Montserrat, Rokkitt } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import { site } from "@/data/site";
import "./globals.css";

const rokkitt = Rokkitt({ subsets: ["latin", "vietnamese"], variable: "--font-rokkitt", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin", "vietnamese"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000",
  ),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    images: ["/images/portfolio/cover.webp"],
    locale: "vi_VN",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#070707" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${rokkitt.variable} ${montserrat.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
