import Image from "next/image";
import { site } from "@/data/site";
import { feedbackImages } from "@/data/feedback";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";

/** Tự ẩn nếu chưa có ảnh feedback nào (xem src/data/feedback.ts). */
export function Feedback() {
  if (feedbackImages.length === 0) return null;
  const s = site.sections.feedback;
  return (
    <section id="feedback" className="bg-ink py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
        <Carousel showCounter={false}>
          {feedbackImages.map((src) => (
            <div key={src} className="relative aspect-[3/4] w-[62%] shrink-0 snap-start overflow-hidden border border-gold/25 sm:w-[34%] lg:w-[22%]">
              <Image src={src} alt="Feedback từ khách hàng" fill sizes="(min-width: 1024px) 22vw, 62vw" className="object-cover" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
