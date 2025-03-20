import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartnerSection() {
  return (
    <section className="py-16 px-4 bg-[#d4af37] rounded-3xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-white mb-8">
            For God loveth a cheerful giver scripture. (Verse and chapter)
          </p>
          <Button
            asChild
            variant="secondary"
            className="bg-white text-[#d4af37] hover:bg-gray-100"
          >
            <Link href="/donate" className="flex items-center">
              Donate Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative flex justify-end">
          <svg
            width="300"
            height="150"
            viewBox="0 0 300 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/30"
          >
            <path
              d="M10,90 Q50,10 90,90 T170,90"
              stroke="currentColor"
              fill="transparent"
              strokeWidth="2"
            />
            <path
              d="M50,50 Q100,10 150,50 T250,50"
              stroke="currentColor"
              fill="transparent"
              strokeWidth="2"
            />
            <path
              d="M100,120 Q150,80 200,120 T300,120"
              stroke="currentColor"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
