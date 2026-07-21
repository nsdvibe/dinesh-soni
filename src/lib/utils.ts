/** Tiny className joiner (no dependency needed). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Extract a YouTube video id from most URL shapes. */
export function youtubeId(url: string): string | null {
  const m =
    url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/) ||
    url.match(/[?&]v=([\w-]{11})/);
  return m ? m[1] : null;
}

/** Extract a Vimeo id. */
export function vimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
}

/** Build an autoplaying embed URL for a given video source. */
export function embedUrl(type: "youtube" | "vimeo" | "mp4", url: string): string {
  if (type === "youtube") {
    const id = youtubeId(url);
    return id
      ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
      : url;
  }
  if (type === "vimeo") {
    const id = vimeoId(url);
    return id ? `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0` : url;
  }
  return url;
}

/** Infer a video type from a URL when one isn't supplied. */
export function inferVideoType(url: string): "youtube" | "vimeo" | "mp4" {
  if (/youtu\.?be/.test(url)) return "youtube";
  if (/vimeo\.com/.test(url)) return "vimeo";
  return "mp4";
}
