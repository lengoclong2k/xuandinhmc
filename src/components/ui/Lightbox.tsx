"use client";

import Image from "next/image";
import { useEffect } from "react";

type Props = {
  images: { src: string; alt: string }[];
  index: number | null;
  onChange: (i: number | null) => void;
};

/** Xem ảnh toàn màn hình. index = null thì đóng. Hỗ trợ ← → Esc. */
export function Lightbox({ images, index, onChange }: Props) {
  const open = index !== null;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onChange]);

  if (!open) return null;
  const current = images[index];
  const btn =
    "absolute top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full border border-gold/50 bg-black/60 text-2xl text-gold transition hover:bg-gold hover:text-ink";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-4"
      onClick={() => onChange(null)}
    >
      <button
        aria-label="Close"
        className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-gold/50 text-xl text-gold hover:bg-gold hover:text-ink"
        onClick={() => onChange(null)}
      >
        ✕
      </button>
      <button
        aria-label="Previous"
        className={`${btn} left-3 md:left-8`}
        onClick={(e) => {
          e.stopPropagation();
          onChange((index - 1 + images.length) % images.length);
        }}
      >
        ‹
      </button>
      <div className="relative h-[80vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" priority />
      </div>
      <button
        aria-label="Next"
        className={`${btn} right-3 md:right-8`}
        onClick={(e) => {
          e.stopPropagation();
          onChange((index + 1) % images.length);
        }}
      >
        ›
      </button>
      <p className="absolute bottom-5 font-display text-sm tracking-[0.3em] text-muted">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </p>
    </div>
  );
}
