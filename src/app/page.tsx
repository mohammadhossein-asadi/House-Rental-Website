import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { ExclusivesGrid } from "@/components/exclusives-grid";
import { TrendingPlaces } from "@/components/trending-places";
import { CTA } from "@/components/cta";
import { TravellerStories } from "@/components/traveller-stories";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <>
      <Navbar variant="dark" />
      <Hero />
      <div className="container mx-auto px-[7%]">
        <ExclusivesGrid />
        <TrendingPlaces />
        <CTA />
        <TravellerStories />
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}
