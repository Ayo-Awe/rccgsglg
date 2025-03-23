import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ArrowRightIcon = () => (
  <Image src="/arrow-up-right.svg" alt="Arrow Right" width={24} height={24} />
);

export default function PartnerSection() {
  return (
    <section className="py-16 px-6 sm:py-15.5 md:px-12 lg:px-25.5  rounded-3xl bg-gradient-to-r from-rccg-yellow to-rccg-gold relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fafafa] mb-6">
            Partner With Us
          </h2>
          <p className="text-[#fafafa] text-lg max-w-[400px] mb-8">
            For God loveth a cheerful giver scripture. (Verse and chapter)
          </p>
          <Button asChild variant="secondary" className="border text-white">
            <Link href="/donate" className="flex items-center font-medium">
              Donate Now <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <Image
          src="/partner-with-us.svg"
          alt="Partner Section Image"
          width={650}
          height={650}
          className="absolute bottom-0 right-0 h-[110px] w-[219px] sm:h-[220px] sm:w-[438px] lg:h-auto lg:w-[650px]"
        />
      </div>
    </section>
  );
}
