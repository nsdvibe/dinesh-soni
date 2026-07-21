import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/portfolio/GalleryGrid";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description: site.portfolio.intro,
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow={site.portfolio.eyebrow}
        titleWords={["Nights", "worth", "{remembering}"]}
        intro={site.portfolio.intro}
      />
      <section className="py-16 md:py-24">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
