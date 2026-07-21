"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Floating gold dust particles. Deterministic positions (seeded) so SSR and
 * client markup match — no hydration mismatch. Hidden for reduced motion.
 */
export default function Particles({ count = 26 }: { count?: number }) {
  const reduced = useReducedMotion();

  const dots = useMemo(() => {
    // Simple seeded PRNG for stable positions.
    let seed = 20250721;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: count }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: 1 + rand() * 3,
      delay: rand() * 6,
      duration: 6 + rand() * 8,
      opacity: 0.15 + rand() * 0.5,
    }));
  }, [count]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold-bright"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            boxShadow: "0 0 6px 1px color-mix(in oklab, var(--color-gold) 60%, transparent)",
          }}
          animate={{ y: [0, -22, 0], opacity: [d.opacity, d.opacity * 0.35, d.opacity] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
