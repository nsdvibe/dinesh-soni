"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { site } from "@/lib/site";
import PlaceholderTile from "@/components/ui/PlaceholderTile";
import { cn } from "@/lib/utils";

const spanFor: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  square: "",
};

type Item = (typeof site.portfolio.items)[number];

export default function GalleryGrid() {
  const { categories, items } = site.portfolio;
  const chips = ["All", ...categories];
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const reduced = useReducedMotion();

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active, items]
  );

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2.5">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-200",
              active === c
                ? "border-gold/60 bg-gold/15 text-gold"
                : "border-line text-ink-soft hover:border-gold/40 hover:text-ink"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <motion.div
        layout
        className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.button
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setLightbox(item)}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-2xl border border-line",
                spanFor[item.aspect]
              )}
              aria-label={`View ${item.title}`}
            >
              <PlaceholderTile
                src={item.src}
                alt={item.title}
                label={item.title}
                imgClassName="group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stage/90 via-stage/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-[0.65rem] uppercase tracking-widest text-gold">{item.category}</p>
                <p className="font-serif text-lg text-ink">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/70 text-ink transition-colors hover:border-gold/60 hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gold/20">
                <PlaceholderTile src={lightbox.src} alt={lightbox.title} label={lightbox.title} />
              </div>
              <p className="mt-4 text-center font-serif text-lg text-ink">
                {lightbox.title}
                <span className="ml-2 text-sm text-gold">· {lightbox.category}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
