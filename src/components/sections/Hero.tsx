import Image from "next/image";
import { L } from "@/lib/i18n";
import { site } from "@/data/site";

export function Hero() {
  const h = site.hero;
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* NỀN LIỀN MẠCH: toàn bộ là gradient CSS, không có ảnh nền hình chữ nhật nên không có đường biên.
          Quầng vàng lớn sau lưng MC, tan dần ra đen ở mọi phía. */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_75%_95%_at_76%_42%,rgb(222_178_82/0.55)_0%,rgb(150_110_40/0.32)_38%,rgb(60_42_14/0.14)_62%,transparent_82%),radial-gradient(ellipse_60%_50%_at_95%_100%,rgb(201_162_77/0.18),transparent_70%),radial-gradient(ellipse_at_8%_100%,rgb(201_162_77/0.07),transparent_50%)]" />
      {/* Hạt sáng rất nhẹ cho nền bớt phẳng */}
      <div className="absolute inset-0 -z-20 opacity-[0.35] [background-image:radial-gradient(rgb(240_212_138/0.5)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:radial-gradient(ellipse_55%_70%_at_76%_42%,black,transparent_75%)]" />

      {/* MC (ảnh tách nền, nền trong suốt) đứng bên phải, chân chạm đáy hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[38%] -z-10 md:left-auto md:top-[8%] md:right-[2%] md:w-[52%]">
        <Image
          src="/images/mc-cutout-hd.webp"
          alt={site.name}
          fill
          priority
          quality={90}
          sizes="(min-width: 768px) 52vw, 100vw"
          className="object-contain object-[80%_100%] opacity-60 drop-shadow-[0_0_60px_rgb(201_162_77/0.25)] md:object-[70%_100%] md:opacity-100"
        />
      </div>

      {/* Đáy hero tan sang màu nền section kế tiếp */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-coal via-coal/60 to-transparent" />

      <div className="container-page pb-24 pt-32 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.35em] text-gold">
            <span className="h-px w-10 bg-gold" />
            <L text={h.eyebrow} />
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-wide text-gold-gradient sm:text-6xl md:text-7xl lg:text-8xl">
            <L text={h.title} />
          </h1>
          <p className="mt-4 font-display text-2xl italic text-cream md:text-3xl">
            <L text={h.subtitle} />
          </p>
          <div className="my-6 h-px w-24 bg-gold" />
          <p className="text-sm tracking-[0.12em] text-muted md:text-base">
            <L text={h.motto} />
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {site.profile.map((item) => (
              <div key={item.label.vi}>
                <dt className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-gold/70">
                  <L text={item.label} />
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-gold-light">
                  {typeof item.value === "string" ? item.value : <L text={item.value} />}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#portfolio" className="btn-gold">
              <L text={h.ctaPrimary} /> <span aria-hidden>↗</span>
            </a>
            <a href="#videos" className="btn-ghost">
              <span aria-hidden>▷</span> <L text={h.ctaSecondary} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-5 flex items-center gap-4 text-[0.6rem] font-semibold tracking-[0.35em] text-gold/80 md:left-10"
      >
        <L text={h.scrollCue} />
        <span className="animate-scroll-cue h-px w-20 bg-gold" />
      </a>
    </section>
  );
}
