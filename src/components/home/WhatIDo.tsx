import { site } from "@/lib/site";
import { Icon } from "@/lib/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function WhatIDo() {
  const { whatIDo } = site;
  return (
    <section className="relative border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={whatIDo.eyebrow} title={whatIDo.title} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-gold/40 hover:bg-surface">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-xl text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
