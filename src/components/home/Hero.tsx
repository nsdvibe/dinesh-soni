"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import { LinkButton, ActionButton } from "@/components/ui/GoldButton";
import MaskedHeadline from "@/components/ui/MaskedHeadline";
import Particles from "@/components/ui/Particles";
import VideoLightbox, { type LightboxVideo } from "@/components/ui/VideoLightbox";
import { inferVideoType } from "@/lib/utils";
import PlaceholderTile from "@/components/ui/PlaceholderTile";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [video, setVideo] = useState<LightboxVideo | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "28%"]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0]);

  const openShowreel = () =>
    setVideo({
      title: "Signature Showreel",
      type: inferVideoType(site.hero.showreelUrl),
      url: site.hero.showreelUrl,
    });

  return (
    <section
      ref={ref}
      className="spotlight grain relative flex min-h-[100svh] items-center overflow-hidden pt-28"
      onMouseMove={(e) => {
        if (reduced) return;
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--spotlight-x", `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty("--spotlight-y", `${((e.clientY - r.top) / r.height) * 100}%`);
      }}
    >
      {/* Parallax gradient wash */}
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[60vh] w-[120vw] -translate-x-1/2 rounded-b-[100%] bg-[radial-gradient(closest-side,rgba(228,184,76,0.10),transparent)]" />
      </motion.div>

      <Particles count={30} />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <motion.div style={{ opacity }} className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold/60" />
            {site.tagline}
          </motion.p>

          <MaskedHeadline
            words={site.hero.headlineWords}
            className="text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[1.02] text-ink"
            delay={0.15}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            {site.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <LinkButton href={site.hero.primaryCta.href} size="lg">
              {site.hero.primaryCta.label}
            </LinkButton>
            <ActionButton variant="outline" size="lg" onClick={openShowreel}>
              <Play className="h-4 w-4 fill-current" />
              {site.hero.secondaryCta.label}
            </ActionButton>
          </motion.div>

          {/* Mini stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {site.stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <p className="font-serif text-2xl font-semibold text-gold">
                  {s.value}
                  {s.suffix}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          style={{ y: yPortrait }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-gold/25 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
            <PlaceholderTile
              src={site.about.portrait}
              alt={`${site.name}, on stage`}
              label={`Portrait of ${site.name}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stage via-transparent to-transparent" />
            {/* Floating name plate */}
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
              <p className="font-serif text-lg text-ink">{site.name}</p>
              <p className="text-xs uppercase tracking-widest text-gold">{site.roles.join(" · ")}</p>
            </div>
          </div>
          {/* Play button over portrait */}
          <button
            onClick={openShowreel}
            aria-label="Watch showreel"
            className="group absolute -left-6 top-1/3 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-gold/40 bg-stage/70 backdrop-blur transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full border border-gold/30 [animation:float-y_5s_ease-in-out_infinite]" />
            <Play className="h-5 w-5 translate-x-0.5 fill-gold text-gold" />
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.div
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      <VideoLightbox video={video} onClose={() => setVideo(null)} />
    </section>
  );
}
