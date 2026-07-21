import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { Icon } from "@/lib/icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = site.socials.filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden border-t border-line bg-stage-2">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-serif text-sm font-semibold text-gold">
                DS
              </span>
              <span className="font-serif text-xl font-semibold text-ink">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              {site.tagline}. Bringing command, warmth and energy to every stage — {site.city}, available worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <Icon name={s.icon} className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="font-serif text-sm uppercase tracking-widest text-muted">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-muted">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2.5 text-ink-soft transition-colors hover:text-gold">
                  <Mail className="h-4 w-4 text-gold/70" strokeWidth={1.6} />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-ink-soft transition-colors hover:text-gold">
                  <Phone className="h-4 w-4 text-gold/70" strokeWidth={1.6} />
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-ink-soft">
                <MapPin className="h-4 w-4 text-gold/70" strokeWidth={1.6} />
                {site.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            Crafted for the stage.
          </p>
        </div>
      </div>
    </footer>
  );
}
