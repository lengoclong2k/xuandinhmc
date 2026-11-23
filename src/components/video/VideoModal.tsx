"use client";

import { useEffect } from "react";
import { useT } from "@/lib/i18n";
import { videoUrl } from "@/lib/media";
import type { VideoItem } from "@/data/videos";

/** Popup phát video (YouTube nếu có youtubeId, ngược lại phát file mp4). */
export function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  const t = useT();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t(video.title)}
      className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-4"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-gold/50 text-xl text-gold hover:bg-gold hover:text-ink"
        onClick={onClose}
      >
        ✕
      </button>
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="aspect-video w-full overflow-hidden border border-gold/30 bg-black">
          {video.youtubeId ? (
            <iframe
              className="size-full"
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={t(video.title)}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <video className="size-full" src={video.file ? videoUrl(video.file) : undefined} poster={video.poster} controls autoPlay playsInline />
          )}
        </div>
        <p className="mt-4 font-display text-xl text-gold-light">{t(video.title)}</p>
      </div>
    </div>
  );
}
