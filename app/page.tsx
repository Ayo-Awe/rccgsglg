import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroCarousel from "@/components/hero-carousel"
import PastorMessage from "@/components/pastor-message"
import WorkforceSection from "@/components/workforce-section"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import PartnerSection from "@/components/partner-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroCarousel />
      <PastorMessage />
      <WorkforceSection />
      <TestimonialsCarousel />
      <PartnerSection />
      <Footer />
    </main>
  )
}

