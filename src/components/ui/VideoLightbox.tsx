"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { embedUrl } from "@/lib/utils";

export type LightboxVideo = {
  title: string;
  type: "youtube" | "vimeo" | "mp4";
  url: string;
};

/** Full-screen on-site "theatre" that plays any video source. */
export default function VideoLightbox({
  video,
  onClose,
}: {
  video: LightboxVideo | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (video) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Now playing: ${video.title}`}
        >
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/70 text-ink transition-colors hover:border-gold/60 hover:text-gold"
            >
              <X className="h-5 w-5" strokeWidth={1.6} />
            </button>

            <div className="relative aspect-video overflow-hidden rounded-xl border border-gold/20 bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
              {video.type === "mp4" ? (
                <video
                  src={video.url}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={embedUrl(video.type, video.url)}
                  title={video.title}
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                  className="h-full w-full"
                />
              )}
            </div>
            <p className="mt-4 text-center font-serif text-lg text-ink">{video.title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
