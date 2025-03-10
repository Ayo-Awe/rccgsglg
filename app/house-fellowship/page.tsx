import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HouseFellowshipContent from "@/components/house-fellowship/content"
import HouseFellowshipHero from "@/components/house-fellowship/hero"

export default function HouseFellowshipPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HouseFellowshipHero />
      <HouseFellowshipContent />
      <Footer />
    </main>
  )
}

