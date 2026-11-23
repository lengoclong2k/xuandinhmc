import Image from "next/image";
import { site } from "@/data/site";
import { clients } from "@/data/clients";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Clients() {
  const s = site.sections.clients;
  return (
    <section id="clients" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="container-page relative">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        <Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {clients.map((c) => (
              <li
                key={c.name}
                // Ô cùng màu nền trang, chỉ có viền vàng mảnh. Rê chuột → viền sáng lên.
                className="group relative h-28 overflow-hidden border border-gold/25 transition duration-500 hover:border-gold/70 sm:h-36 md:h-44"
              >
                {/* SVG không qua tối ưu ảnh của Next → unoptimized */}
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  unoptimized={c.logo.endsWith(".svg")}
                  className={`object-contain p-6 transition duration-500 md:p-9 ${
                    c.idle === "gray"
                      ? "opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                      : "opacity-55 brightness-0 invert group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
