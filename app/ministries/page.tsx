import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerSection from "@/components/partner-section"
import MinistriesHero from "@/components/ministries/hero"
import MinistriesGrid from "@/components/ministries/grid"

export default function MinistriesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <MinistriesHero />
      <MinistriesGrid />
      <PartnerSection />
      <Footer />
    </main>
  )
}

