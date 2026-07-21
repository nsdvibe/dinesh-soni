import Hero from "@/components/home/Hero";
import Showreel from "@/components/home/Showreel";
import WhatIDo from "@/components/home/WhatIDo";
import Stats from "@/components/home/Stats";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import WritingPreview from "@/components/home/WritingPreview";
import Testimonials from "@/components/home/Testimonials";
import Brands from "@/components/home/Brands";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Showreel />
      <WhatIDo />
      <Stats />
      <FeaturedGallery />
      <WritingPreview />
      <Testimonials />
      <Brands />
      <ContactCTA />
    </>
  );
}
