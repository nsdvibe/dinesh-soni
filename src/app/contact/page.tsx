import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { Icon } from "@/lib/icons";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: site.contact.intro,
};

export default function ContactPage() {
  const { contact } = site;
  const socials = site.socials.filter((s) => s.href);

  return (
    <>
      <PageHero
        eyebrow={contact.eyebrow}
        titleWords={["Let's", "make", "it", "{unforgettable}"]}
        intro={contact.intro}
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          {/* Info column */}
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-5">
                <a href={`mailto:${contact.email}`} className="group flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                    <Mail className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted">Email</span>
                    <span className="text-ink transition-colors group-hover:text-gold">{contact.email}</span>
                  </span>
                </a>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="group flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                    <Phone className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted">Phone</span>
                    <span className="text-ink transition-colors group-hover:text-gold">{contact.phone}</span>
                  </span>
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted">WhatsApp</span>
                    <span className="text-ink transition-colors group-hover:text-gold">Message directly</span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                    <MapPin className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted">Location</span>
                    <span className="text-ink">{contact.location}</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-gold/5 px-5 py-4">
                <Clock className="h-5 w-5 text-gold" strokeWidth={1.6} />
                <p className="text-sm text-ink-soft">
                  Typical reply within <span className="text-ink">24 hours</span>.
                </p>
              </div>
            </Reveal>

            {socials.length > 0 && (
              <Reveal delay={0.15}>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">Follow along</p>
                  <div className="mt-3 flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold/60 hover:text-gold"
                      >
                        <Icon name={s.icon} className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* Form column */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
