import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import VideoGrid from "@/components/videos/VideoGrid";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Showreel & Videos",
  description: site.videos.intro,
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow={site.videos.eyebrow}
        titleWords={["See", "it", "{live}"]}
        intro={site.videos.intro}
      />
      <section className="py-16 md:py-24">
        <div className="container-x">
          <VideoGrid />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
