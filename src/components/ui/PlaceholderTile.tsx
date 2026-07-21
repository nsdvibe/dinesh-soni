"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Renders a real image if it loads, otherwise falls back to an elegant
 * on-brand placeholder tile (so missing assets never look broken).
 */
export default function PlaceholderTile({
  src,
  alt,
  label,
  className,
  imgClassName,
}: {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-surface",
        className
      )}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            imgClassName
          )}
        />
      ) : (
        <div
          className="grain flex h-full w-full flex-col items-center justify-center gap-3 text-center"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, #16203f 0%, #0b1226 55%, #070d1c 100%)",
          }}
          aria-label={alt}
          role="img"
        >
          <span className="rounded-full border border-gold/25 bg-gold/5 p-3">
            <ImageIcon className="h-5 w-5 text-gold/70" strokeWidth={1.4} aria-hidden="true" />
          </span>
          {label && (
            <span className="px-4 font-serif text-sm italic text-ink-soft/80">{label}</span>
          )}
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted/70">
            Photo coming soon
          </span>
        </div>
      )}
    </div>
  );
}
