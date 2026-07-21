/* Central icon map so site.ts can reference icons by string name (no emojis). */
import {
  Mic,
  AudioLines,
  PenLine,
  Palette,
  Sparkles,
  HeartHandshake,
  Timer,
  Flame,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  mic: Mic,
  "audio-lines": AudioLines,
  "pen-line": PenLine,
  palette: Palette,
  sparkles: Sparkles,
  "heart-handshake": HeartHandshake,
  timer: Timer,
  flame: Flame,
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  linkedin: Linkedin,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" strokeWidth={1.6} />;
}
