import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Particles from "@/components/ui/Particles";
import { LinkButton } from "@/components/ui/GoldButton";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="spotlight absolute inset-0" style={{ ["--spotlight-y" as string]: "50%" }} />
      <Particles count={18} />
      <div className="container-x relative text-center">
        <Reveal>
          <p className="eyebrow mb-4">{site.contact.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl text-4xl leading-tight text-ink md:text-6xl">
            Ready to make your event <span className="italic text-gold-gradient">unforgettable?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-ink-soft">{site.contact.intro}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <LinkButton href="/contact" size="lg">
              Book Me
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton href={`mailto:${site.contact.email}`} variant="outline" size="lg">
              {site.contact.email}
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
