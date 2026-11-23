"use client";

import Image from "next/image";
import { useState } from "react";
import { L, useT } from "@/lib/i18n";
import { site } from "@/data/site";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Lightbox } from "@/components/ui/Lightbox";

export function Portfolio() {
  const s = site.sections.portfolio;
  const t = useT();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="portfolio" className="bg-coal py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        <Carousel>
          {portfolio.map((slide, i) => (
            <button
              key={slide.image}
              onClick={() => setOpen(i)}
              className="gold-frame group relative aspect-video w-[92%] shrink-0 snap-start overflow-hidden text-left md:w-[62%]"
            >
              <Image
                src={slide.image}
                alt={`${t(slide.category)} – ${slide.clients}`}
                fill
                sizes="(min-width: 768px) 62vw, 92vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/35" />
              <span className="absolute right-4 top-4 rounded-full bg-black/70 px-4 py-1.5 text-[0.6rem] font-bold tracking-[0.25em] text-gold opacity-0 transition group-hover:opacity-100">
                <L text={s.hint} /> ↗
              </span>
            </button>
          ))}
        </Carousel>
      </div>

      <Lightbox
        index={open}
        onChange={setOpen}
        images={portfolio.map((p) => ({ src: p.image, alt: `${t(p.category)} – ${p.clients}` }))}
      />
    </section>
  );
}
