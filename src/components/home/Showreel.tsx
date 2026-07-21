"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PlaceholderTile from "@/components/ui/PlaceholderTile";
import VideoLightbox, { type LightboxVideo } from "@/components/ui/VideoLightbox";
import { inferVideoType } from "@/lib/utils";

export default function Showreel() {
  const [video, setVideo] = useState<LightboxVideo | null>(null);
  const { showreel } = site;

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={showreel.eyebrow}
          title={showreel.title}
          intro={showreel.description}
          align="center"
        />

        <Reveal className="mt-12" delay={0.1}>
          <button
            onClick={() =>
              setVideo({
                title: showreel.title,
                type: inferVideoType(showreel.videoUrl),
                url: showreel.videoUrl,
              })
            }
            className="group relative block w-full cursor-pointer overflow-hidden rounded-3xl border border-gold/20 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
            aria-label={`Play ${showreel.title}`}
          >
            <div className="aspect-video">
              <PlaceholderTile
                src={showreel.poster}
                alt={`${showreel.title} — video still`}
                label="Showreel still"
                imgClassName="group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stage/70 via-transparent to-transparent" />
            {/* Play button */}
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold/95 shadow-[0_0_60px_-5px_rgba(228,184,76,0.7)] transition-transform duration-300 group-hover:scale-110">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
              <Play className="h-7 w-7 translate-x-0.5 fill-stage text-stage" />
            </span>
            <span className="absolute bottom-5 left-6 font-serif text-lg text-ink">
              Play the reel
            </span>
          </button>
        </Reveal>
      </div>

      <VideoLightbox video={video} onClose={() => setVideo(null)} />
    </section>
  );
}
