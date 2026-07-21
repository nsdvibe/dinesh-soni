import { site } from "@/lib/site";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(228,184,76,0.04), transparent)",
        }}
      />
      <div className="container-x">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-serif text-4xl font-semibold text-gold-gradient md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted md:text-sm">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
