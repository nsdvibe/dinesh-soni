"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const items = site.testimonials.items;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduced = useReducedMotion();

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setIndex((i) => (i + d + items.length) % items.length);
    },
    [items.length]
  );

  // Auto-advance
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(t);
  }, [items.length, reduced]);

  const current = items[index];

  return (
    <section className="relative border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={site.testimonials.eyebrow}
          title={site.testimonials.title}
          align="center"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto h-10 w-10 text-gold/30" />
          <div className="relative min-h-[220px] overflow-hidden sm:min-h-[190px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: reduced ? 0 : dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduced ? 0 : dir * -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <p className="font-serif text-xl leading-relaxed text-ink sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="font-medium text-gold">{current.author}</p>
                  <p className="text-sm text-muted">{current.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold/60 hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold" : "w-2 bg-line hover:bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold/60 hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
