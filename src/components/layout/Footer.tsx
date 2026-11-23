import { L } from "@/lib/i18n";
import { site } from "@/data/site";

const labels: Record<string, string> = {
  phone: "Gọi điện",
  zalo: "Zalo",
  facebook: "Facebook",
  email: "Email",
  youtube: "YouTube",
  tiktok: "TikTok",
};

function hrefFor(key: string, value: string) {
  if (key === "phone") return `tel:${value}`;
  if (key === "email") return `mailto:${value}`;
  return value;
}

export function Footer() {
  const contacts = Object.entries(site.contact).filter(([, v]) => v);

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-gold/25 bg-coal py-24 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(201_162_77/0.16),transparent_65%)]" />
      <div className="container-page relative">
        <p className="text-3xl text-gold">✦</p>
        <p className="mt-6 text-xs font-bold tracking-[0.45em] text-gold">
          <L text={site.gratitude.label} />
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-snug tracking-wide text-gold-gradient md:text-5xl">
          <L text={site.gratitude.message} />
        </h2>

        {contacts.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {contacts.map(([key, value]) => (
              <a
                key={key}
                href={hrefFor(key, value)}
                target={key === "phone" || key === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {labels[key]}
                {key === "phone" || key === "email" ? ` · ${value}` : ""}
              </a>
            ))}
          </div>
        )}

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-6 text-[0.65rem] tracking-[0.25em] text-muted sm:flex-row">
          <a href="#home" className="font-bold text-gold hover:text-gold-light">
            <L text={site.gratitude.backToTop} />
          </a>
          <span>© {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
