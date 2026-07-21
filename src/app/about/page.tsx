import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Icon } from "@/lib/icons";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import PlaceholderTile from "@/components/ui/PlaceholderTile";
import Stats from "@/components/home/Stats";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.tagline}. ${site.about.bio[0]}`,
};

export default function AboutPage() {
  const { about } = site;
  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        titleWords={["The", "man", "behind", "the", "{microphone}"]}
      />

      {/* Bio + portrait */}
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-gold/25 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
                <PlaceholderTile
                  src={about.portrait}
                  alt={`${site.name} portrait`}
                  label={`Portrait of ${site.name}`}
                />
              </div>
              <div className="glass absolute -bottom-6 -right-4 rounded-2xl px-5 py-4 sm:-right-6">
                <p className="font-serif text-3xl text-gold">{site.yearsExperience}+</p>
                <p className="text-xs uppercase tracking-widest text-muted">Years on stage</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-3xl text-ink md:text-4xl">{about.title}</h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {about.bio.map((para, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-base leading-relaxed text-ink-soft md:text-lg">{para}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted">Based in</dt>
                  <dd className="mt-1 font-serif text-lg text-ink">{site.city}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted">Languages</dt>
                  <dd className="mt-1 font-serif text-lg text-ink">{site.languagesHosted.join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted">Events</dt>
                  <dd className="mt-1 font-serif text-lg text-ink">{site.eventsHosted}+ hosted</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">What I stand for</p>
            <h2 className="text-3xl text-ink md:text-4xl">Values on and off the stage</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-surface/50 p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">The Journey</p>
            <h2 className="text-3xl text-ink md:text-4xl">From first stage to full house</h2>
          </Reveal>
          <ol className="relative mt-12 space-y-10 border-l border-line pl-8">
            {about.journey.map((step, i) => (
              <Reveal as="li" key={step.year} delay={i * 0.08} className="relative">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 bg-stage">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>
                <p className="font-serif text-2xl text-gold">{step.year}</p>
                <h3 className="mt-1 text-xl text-ink">{step.title}</h3>
                <p className="mt-1.5 max-w-xl text-ink-soft">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
