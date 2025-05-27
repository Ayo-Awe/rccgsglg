import HeroCarousel from "@/components/hero-carousel";
import PastorMessage from "@/components/pastor-message";
import WorkforceSection from "@/components/workforce-section";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import PartnerSection from "@/components/partner-section";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <PastorMessage />
      <WorkforceSection />
      <TestimonialsCarousel />
      <PartnerSection />
    </main>
  );
}
