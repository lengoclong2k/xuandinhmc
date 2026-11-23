"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Carousel cuộn ngang (scroll-snap) + nút ‹ › + bộ đếm "01 / 03".
 * Mỗi child là 1 slide; độ rộng slide do child tự quy định (qua className).
 */
export function Carousel({ children, showCounter = true }: { children: ReactNode; showCounter?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });
  const total = Children.count(children);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4 });
    const first = el.children[0] as HTMLElement | undefined;
    if (first) {
      const step = first.offsetWidth + 16;
      setIndex(Math.min(total - 1, Math.round(el.scrollLeft / step)));
    }
  }, [total]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const arrow =
    "grid size-11 place-items-center rounded-full border border-gold/50 text-gold transition hover:bg-gold hover:text-ink disabled:pointer-events-none disabled:opacity-30";

  return (
    <div>
      <div className="relative">
        <div
          ref={ref}
          onScroll={update}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {children}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        {showCounter ? (
          <span className="font-display text-sm tracking-[0.3em] text-muted">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        ) : (
          <span />
        )}
        <div className="flex gap-3">
          <button aria-label="Previous" className={arrow} disabled={edges.start} onClick={() => scrollByPage(-1)}>
            ‹
          </button>
          <button aria-label="Next" className={arrow} disabled={edges.end} onClick={() => scrollByPage(1)}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
