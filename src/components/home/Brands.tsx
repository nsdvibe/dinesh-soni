import { site } from "@/lib/site";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";

export default function Brands() {
  return (
    <section className="relative border-t border-line py-16">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow mb-2">{site.brands.eyebrow}</p>
          <h2 className="font-serif text-2xl text-ink">{site.brands.title}</h2>
        </Reveal>
      </div>

      <div className="mt-10">
        <Marquee duration={34}>
          {site.brands.names.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl border border-line bg-surface/40 px-7 py-4 text-ink-soft transition-colors hover:border-gold/40 hover:text-gold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
              <span className="whitespace-nowrap font-serif text-lg">{name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
