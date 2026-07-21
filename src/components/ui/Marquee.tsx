"use client";

import type { ReactNode } from "react";

/**
 * Auto-scrolling marquee. Duplicates its children so the loop is seamless.
 * Pauses on hover; halts entirely under prefers-reduced-motion (see CSS).
 */
export default function Marquee({
  children,
  duration = 32,
  className,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex overflow-hidden ${className ?? ""}`}
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}
    >
      <div
        className="animate-marquee flex shrink-0 items-center gap-6 pr-6 group-hover:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
