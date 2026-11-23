"use client";

import Image from "next/image";
import { useState } from "react";
import { L, useT } from "@/lib/i18n";
import { site } from "@/data/site";
import { albums } from "@/data/albums";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";

export function Albums() {
  const s = site.sections.albums;
  const t = useT();
  const [albumId, setAlbumId] = useState(albums[0].id);
  const [open, setOpen] = useState<number | null>(null);

  const album = albums.find((a) => a.id === albumId) ?? albums[0];

  return (
    <section id="albums" className="bg-coal py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} aside={s.aside} />

        <div className="mb-8 flex flex-wrap gap-3">
          {albums.map((a) => (
            <button
              key={a.id}
              onClick={() => setAlbumId(a.id)}
              className={`rounded-full border px-5 py-2 text-[0.65rem] font-bold tracking-[0.18em] transition ${
                albumId === a.id ? "border-gold bg-gold text-ink" : "border-gold/40 text-gold-light hover:bg-gold/15"
              }`}
            >
              <L text={a.title} /> · {a.photos.length}
            </button>
          ))}
        </div>

        {/* Masonry bằng CSS columns */}
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
          {album.photos.map((src, i) => (
            <button
              key={src}
              onClick={() => setOpen(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden border border-gold/20"
            >
              <Image
                src={src}
                alt={`${t(album.title)} ${i + 1}`}
                width={800}
                height={800}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gold/0 transition group-hover:bg-gold/10" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        index={open}
        onChange={setOpen}
        images={album.photos.map((src, i) => ({ src, alt: `${t(album.title)} ${i + 1}` }))}
      />
    </section>
  );
}
