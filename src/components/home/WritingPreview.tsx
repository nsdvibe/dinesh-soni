import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/GoldButton";

export default function WritingPreview() {
  const pieces = site.writing.pieces.slice(0, 2);

  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={site.writing.eyebrow}
            title={site.writing.title}
            intro={site.writing.intro}
          />
          <Reveal>
            <LinkButton href="/writing" variant="outline">
              Read more
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pieces.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/50 p-8 transition-colors hover:border-gold/40">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/10" />
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gold">
                  {p.type} · {p.date}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-ink">{p.title}</h3>
                <p className="mt-4 whitespace-pre-line text-[0.95rem] italic leading-relaxed text-ink-soft">
                  {p.excerpt}
                </p>
                <Link
                  href="/writing"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold transition-colors hover:text-gold-bright"
                >
                  Continue reading
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
