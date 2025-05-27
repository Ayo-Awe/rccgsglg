import PartnerSection from "@/components/partner-section";
import MinistriesHero from "@/app/ministries/hero";
import MinistriesGrid from "@/app/ministries/grid";

export default function MinistriesPage() {
  return (
    <main>
      <MinistriesHero />
      <MinistriesGrid />
      <PartnerSection />
    </main>
  );
}
