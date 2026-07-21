"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { site } from "@/lib/site";
import PlaceholderTile from "@/components/ui/PlaceholderTile";
import VideoLightbox, { type LightboxVideo } from "@/components/ui/VideoLightbox";
import { cn } from "@/lib/utils";

export default function VideoGrid() {
  const items = site.videos.items;
  const categories = ["All", ...Array.from(new Set(items.map((v) => v.category)))];
  const [active, setActive] = useState("All");
  const [video, setVideo] = useState<LightboxVideo | null>(null);
  const reduced = useReducedMotion();

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((v) => v.category === active)),
    [active, items]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {categories.map((c) => (
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

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((v, i) => (
          <motion.button
            key={v.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduced ? 0 : 0.5, delay: (i % 3) * 0.06 }}
            onClick={() => setVideo({ title: v.title, type: v.type, url: v.url })}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-line text-left transition-colors hover:border-gold/40"
            aria-label={`Play ${v.title}`}
          >
            <div className="relative aspect-video">
              <PlaceholderTile
                src={v.poster}
                alt={`${v.title} thumbnail`}
                label={v.title}
                imgClassName="group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stage/70 to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold/95 shadow-[0_0_40px_-5px_rgba(228,184,76,0.7)] transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 fill-stage text-stage" />
              </span>
            </div>
            <div className="flex items-center justify-between gap-3 bg-surface/50 p-4">
              <p className="font-serif text-lg text-ink">{v.title}</p>
              <span className="shrink-0 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-gold">
                {v.category}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <VideoLightbox video={video} onClose={() => setVideo(null)} />
    </div>
  );
}
