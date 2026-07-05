import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { ExclusivesGrid } from "@/components/exclusives-grid";
import { TrendingPlaces } from "@/components/trending-places";
import { CTA } from "@/components/cta";
import { TravellerStories } from "@/components/traveller-stories";
import { AboutSection } from "@/components/about-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function Home() {
  return (
    <>
      <Navbar variant="dark" />
      <Hero />
      <div className="container mx-auto px-[7%]">
        <ExclusivesGrid />
        <StatsSection />
        <TrendingPlaces />
        <TestimonialsSection />
        <CTA />
        <FAQSection />
        <TravellerStories />
        <NewsletterSection />
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}
