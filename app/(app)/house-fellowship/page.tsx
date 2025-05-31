import HouseFellowshipContent from "@/app/(app)/house-fellowship/content";
import HouseFellowshipHero from "@/app/(app)/house-fellowship/hero";

export default function HouseFellowshipPage() {
  return (
    <main className="max-w-[937px] mx-auto">
      <HouseFellowshipHero />
      <HouseFellowshipContent />
    </main>
  );
}
