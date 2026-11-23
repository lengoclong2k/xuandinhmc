"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import type { VideoItem } from "@/data/videos";

export function VideoCard({ video, onPlay }: { video: VideoItem; onPlay: () => void }) {
  const t = useT();
  return (
    <button
      onClick={onPlay}
      className="group relative aspect-video w-[85%] shrink-0 snap-start overflow-hidden border border-gold/25 text-left sm:w-[46%] lg:w-[32%]"
      aria-label={t(video.title)}
    >
      <Image
        src={video.poster}
        alt={t(video.title)}
        fill
        sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 85vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-black/50 pl-1 text-xl text-gold backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
        ▶
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[0.6rem] font-bold tracking-[0.3em] text-gold">{video.client}</p>
        <p className="mt-1 line-clamp-2 font-display text-lg font-bold leading-snug text-cream">{t(video.title)}</p>
      </div>
    </button>
  );
}
