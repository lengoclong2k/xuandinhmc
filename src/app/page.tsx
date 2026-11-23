import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Clients } from "@/components/sections/Clients";
import { Portfolio } from "@/components/sections/Portfolio";
import { Feedback } from "@/components/sections/Feedback";
import { Albums } from "@/components/sections/Albums";

/** Thứ tự các section trên trang. Muốn đổi vị trí / bỏ section: sửa ở đây. */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VideoShowcase />
        <Clients />
        <Portfolio />
        <Feedback />
        <Albums />
      </main>
      <Footer />
    </>
  );
}
