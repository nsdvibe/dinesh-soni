import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PlaceholderTile from "@/components/ui/PlaceholderTile";
import { LinkButton } from "@/components/ui/GoldButton";
import { cn } from "@/lib/utils";

const spanFor: Record<string, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  square: "",
};

export default function FeaturedGallery() {
  const items = site.portfolio.items.slice(0, 6);

  return (
    <section className="relative border-t border-line py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Work"
            title="A glimpse from the stage"
            intro="Weddings, galas, concerts and award nights."
          />
          <Reveal>
            <LinkButton href="/portfolio" variant="outline">
              View full gallery
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-line",
                spanFor[item.aspect]
              )}
            >
              <Link href="/portfolio" className="block h-full w-full" aria-label={item.title}>
                <PlaceholderTile
                  src={item.src}
                  alt={item.title}
                  label={item.title}
                  imgClassName="group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stage/90 via-stage/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[0.65rem] uppercase tracking-widest text-gold">{item.category}</p>
                  <p className="font-serif text-lg text-ink">{item.title}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
