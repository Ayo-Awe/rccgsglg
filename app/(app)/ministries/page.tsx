import PartnerSection from "@/components/partner-section";
import MinistriesHero from "@/app/(app)/ministries/hero";
import MinistriesGrid from "@/app/(app)/ministries/grid";

export default function MinistriesPage() {
  return (
    <main>
      <MinistriesHero />
      <MinistriesGrid />
      <PartnerSection />
    </main>
  );
}
