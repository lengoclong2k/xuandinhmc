"use client";

import { useState } from "react";
import { L } from "@/lib/i18n";
import { site } from "@/data/site";
import { videoCategories, videos, type VideoItem } from "@/data/videos";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { VideoCard } from "@/components/video/VideoCard";
import { VideoModal } from "@/components/video/VideoModal";

export function VideoShowcase() {
  const s = site.sections.videos;
  const [category, setCategory] = useState<(typeof videoCategories)[number]["id"]>("all");
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  const list = category === "all" ? videos : videos.filter((v) => v.category === category);

  return (
    <section id="videos" className="bg-ink py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} aside={s.aside} />

        <div className="mb-8 flex flex-wrap gap-3">
          {videoCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-5 py-2 text-[0.65rem] font-bold tracking-[0.2em] transition ${
                category === c.id
                  ? "border-gold bg-gold text-ink"
                  : "border-gold/40 text-gold-light hover:bg-gold/15"
              }`}
            >
              <L text={c.label} />
            </button>
          ))}
        </div>

        {/* key để carousel reset khi đổi tab */}
        <Carousel key={category}>
          {list.map((v) => (
            <VideoCard key={v.id} video={v} onPlay={() => setPlaying(v)} />
          ))}
        </Carousel>
      </div>

      {playing && <VideoModal video={playing} onClose={() => setPlaying(null)} />}
    </section>
  );
}
