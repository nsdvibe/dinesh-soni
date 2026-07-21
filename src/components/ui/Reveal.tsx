"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 34 },
  down: { y: -34 },
  left: { x: 34 },
  right: { x: -34 },
  none: {},
};

/** Scroll-reveal wrapper. Fades + slides children in when they enter view. */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, ...(reduced ? {} : offset[direction]) },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  );
}
