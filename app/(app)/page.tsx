import HeroCarousel from "@/components/hero-carousel";
import PastorMessage from "@/components/pastor-message";
import WorkforceSection from "@/components/workforce-section";
import ProgrammesEvents from "@/components/programmes-events";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import PartnerSection from "@/components/partner-section";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <PastorMessage />
      <WorkforceSection />
      <ProgrammesEvents />
      <TestimonialsCarousel />
      <PartnerSection />
    </main>
  );
}
