import { L, type Localized } from "@/lib/i18n";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: Localized;
  title: Localized;
  subtitle?: Localized;
  /** Dòng chữ nghiêng bên phải (chỉ hiện ≥ md) */
  aside?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, aside }: Props) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.35em] text-gold">
          <span className="h-px w-8 bg-gold" />
          <L text={eyebrow} />
        </p>
        <h2 className="font-display text-4xl font-bold tracking-wide text-gold-gradient md:text-6xl">
          <L text={title} />
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-md text-sm text-muted">
            <L text={subtitle} />
          </p>
        )}
      </div>
      {aside && <p className="hidden font-display text-xl italic text-gold/80 md:block">{aside}</p>}
    </Reveal>
  );
}
