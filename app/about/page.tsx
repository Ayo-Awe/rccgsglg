import PartnerSection from "@/components/partner-section";
import AboutHero from "@/app/about/hero";
import AboutDescription from "@/app/about/description";
import FaithStatements from "@/app/about/faith-statements";
import FundamentalBeliefs from "@/app/about/fundamental-beliefs";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <div className="md:px-7.5 md:py-6 mt-6">
        <AboutDescription />
        <FaithStatements />
      </div>
      <FundamentalBeliefs />
      <PartnerSection />
    </main>
  );
}
