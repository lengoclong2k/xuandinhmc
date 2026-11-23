import Image from "next/image";
import { L } from "@/lib/i18n";
import { site } from "@/data/site";
import { aboutPillars } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const s = site.sections.about;
  return (
    <section id="about" className="bg-coal py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        <div className="grid gap-6 md:grid-cols-3">
          {aboutPillars.map((p, i) => (
            <Reveal key={p.image} delay={i * 120}>
              <article className="gold-frame group h-full overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold tracking-wider text-gold-light">
                    <L text={p.title} />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    <L text={p.text} />
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Thế mạnh MC */}
        <Reveal className="mt-14">
          <p className="mb-5 text-center text-[0.65rem] font-bold tracking-[0.4em] text-gold">
            <L text={{ vi: "THẾ MẠNH MC", en: "STRENGTHS" }} />
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {site.strengths.map((item) => (
              <li
                key={item.vi}
                className="rounded-full border border-gold/40 px-5 py-2 text-xs font-semibold tracking-widest text-gold-light transition hover:bg-gold hover:text-ink"
              >
                <L text={item} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
