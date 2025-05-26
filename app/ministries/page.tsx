import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PartnerSection from "@/components/partner-section";
import MinistriesHero from "@/app/ministries/hero";
import MinistriesGrid from "@/app/ministries/grid";

export default function MinistriesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <MinistriesHero />
      <MinistriesGrid />
      <PartnerSection />
      <Footer />
    </main>
  );
}
