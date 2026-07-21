import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

/** Standard eyebrow + serif title + optional intro used across sections. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-3 flex items-center gap-2">
            {align === "center" && <span className="hidden h-px w-6 bg-gold/50 sm:inline-block" />}
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base text-ink-soft md:text-lg">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
