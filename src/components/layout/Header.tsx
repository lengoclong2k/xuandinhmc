"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { L, useLang, type Localized } from "@/lib/i18n";
import { feedbackImages } from "@/data/feedback";

const nav: { id: string; label: Localized; hidden?: boolean }[] = [
  { id: "home", label: { vi: "GIỚI THIỆU", en: "ABOUT" } },
  { id: "videos", label: { vi: "VIDEO DẪN", en: "VIDEOS" } },
  { id: "clients", label: { vi: "KHÁCH HÀNG", en: "CLIENTS" } },
  { id: "portfolio", label: { vi: "PORTFOLIO", en: "PORTFOLIO" } },
  { id: "feedback", label: { vi: "FEEDBACK", en: "FEEDBACK" }, hidden: feedbackImages.length === 0 },
  { id: "albums", label: { vi: "ALBUM ẢNH", en: "ALBUMS" } },
];
const items = nav.filter((n) => !n.hidden);

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex overflow-hidden rounded-sm border border-gold/40 text-[0.65rem] font-bold tracking-widest">
      {(["vi", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 uppercase transition ${
            lang === l ? "bg-gold text-ink" : "text-gold-light hover:bg-gold/15"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tô sáng mục menu theo section đang xem
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-gold/20 bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-3" aria-label="MC Lại Gia Định">
          <Image src="/logo.svg" alt="" width={40} height={40} priority className="size-10" />
          <span className="hidden font-display text-lg font-bold tracking-widest text-gold-gradient sm:block">
            MC LẠI GIA ĐỊNH
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`text-[0.68rem] font-bold tracking-[0.2em] transition hover:text-gold-light ${
                active === n.id ? "text-gold-light" : "text-gold/80"
              }`}
            >
              <L text={n.label} />
            </a>
          ))}
          <LangToggle />
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <LangToggle />
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center text-gold"
          >
            <span className="relative block h-3.5 w-6">
              <span className={`absolute left-0 h-0.5 w-full bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-full bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-page flex flex-col border-t border-gold/15 pb-4 lg:hidden">
          {items.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-gold/10 py-4 text-xs font-bold tracking-[0.25em] text-gold-light"
            >
              <L text={n.label} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
