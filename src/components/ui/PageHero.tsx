import MaskedHeadline from "./MaskedHeadline";
import Reveal from "./Reveal";
import Particles from "./Particles";

/** Reusable cinematic header for interior pages. */
export default function PageHero({
  eyebrow,
  titleWords,
  intro,
}: {
  eyebrow: string;
  titleWords: readonly string[];
  intro?: string;
}) {
  return (
    <header className="spotlight grain relative overflow-hidden pb-16 pt-40 md:pb-20 md:pt-48">
      <Particles count={16} />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            {eyebrow}
          </p>
        </Reveal>
        <MaskedHeadline
          words={titleWords}
          className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.04] text-ink"
        />
        {intro && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base text-ink-soft md:text-lg">{intro}</p>
          </Reveal>
        )}
      </div>
      <div className="hairline mt-14" />
    </header>
  );
}
