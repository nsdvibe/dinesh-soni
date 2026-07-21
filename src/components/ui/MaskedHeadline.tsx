"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Word-by-word masked reveal. Each word rises from behind a clip mask.
 * Wrap a word in {curly braces} in the source array to render it as the
 * gold italic accent.
 */
export default function MaskedHeadline({
  words,
  className,
  wordClassName,
  accentClassName,
  delay = 0,
  stagger = 0.09,
}: {
  words: readonly string[];
  className?: string;
  wordClassName?: string;
  accentClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : stagger, delayChildren: delay },
    },
  };
  const word: Variants = {
    hidden: { y: reduced ? 0 : "110%", opacity: reduced ? 0 : 1 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.h1
      className={cn("flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={words.join(" ").replace(/[{}]/g, "")}
    >
      {words.map((raw, i) => {
        const isAccent = raw.startsWith("{") && raw.endsWith("}");
        const text = raw.replace(/[{}]/g, "");
        return (
          <span
            key={i}
            className="mr-[0.28em] inline-block overflow-hidden pb-[0.12em] align-bottom"
            aria-hidden="true"
          >
            <motion.span
              variants={word}
              className={cn(
                "inline-block",
                wordClassName,
                isAccent && cn("italic text-gold-gradient", accentClassName)
              )}
            >
              {text}
            </motion.span>
          </span>
        );
      })}
    </motion.h1>
  );
}
