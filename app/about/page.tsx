import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerSection from "@/components/partner-section"
import AboutHero from "@/components/about/hero"
import AboutDescription from "@/components/about/description"
import FaithStatements from "@/components/about/faith-statements"
import FundamentalBeliefs from "@/components/about/fundamental-beliefs"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <AboutHero />
      <AboutDescription />
      <FaithStatements />
      <FundamentalBeliefs />
      <PartnerSection />
      <Footer />
    </main>
  )
}

