import type { Metadata } from "next";
import { ArrowUpRight, Quote } from "lucide-react";
import { site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Writing",
  description: site.writing.intro,
};

export default function WritingPage() {
  const { writing } = site;
  return (
    <>
      <PageHero
        eyebrow={writing.eyebrow}
        titleWords={["Words,", "off", "the", "{stage}"]}
        intro={writing.intro}
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {writing.pieces.map((p, i) => {
            const external = p.href && p.href !== "#";
            const Wrapper = external ? "a" : "div";
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <Wrapper
                  {...(external
                    ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={cnCard(external)}
                >
                  <Quote className="absolute right-7 top-7 h-12 w-12 text-gold/10" />
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gold">
                    {p.type} · {p.date}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl text-ink md:text-3xl">{p.title}</h2>
                  <p className="mt-4 whitespace-pre-line text-[0.98rem] italic leading-relaxed text-ink-soft">
                    {p.excerpt}
                  </p>
                  {external && (
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold">
                      Read the full piece
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function cnCard(external: boolean) {
  return [
    "group relative block h-full overflow-hidden rounded-3xl border border-line bg-surface/40 p-8 transition-colors md:p-10",
    external ? "hover:border-gold/40 cursor-pointer" : "",
  ]
    .filter(Boolean)
    .join(" ");
}
