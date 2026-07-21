import type { Metadata } from "next";
import { Check } from "lucide-react";
import { site } from "@/lib/site";
import { Icon } from "@/lib/icons";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description: site.services.intro,
};

export default function ServicesPage() {
  const { services } = site;
  return (
    <>
      <PageHero
        eyebrow={services.eyebrow}
        titleWords={["Book", "the", "right", "kind", "of", "{magic}"]}
        intro={services.intro}
      />

      <section className="py-16 md:py-24">
        <div className="container-x space-y-6">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group grid gap-8 rounded-3xl border border-line bg-surface/40 p-8 transition-colors hover:border-gold/40 md:grid-cols-[0.9fr_1.1fr] md:p-10">
                <div>
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="font-serif text-2xl text-ink md:text-3xl">{s.title}</h2>
                  <p className="mt-3 max-w-md text-ink-soft">{s.text}</p>
                </div>
                <ul className="grid gap-3 self-center sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-ink-soft">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                        <Check className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
