import Image from "next/image";

export default function HouseFellowshipHero() {
  return (
    <div className="relative">
      <div>
        <h1 className="font-anton text-[32px] md:text-[42px] tracking-wider  font-bold text-[#0C0C0D]">
          FELLOWSHIPING AT RCCG SGLG
        </h1>
        <div className="text-[#94A3B8] font-medium font-roboto text-sm md:text-xl">
          <div>
            <Image
              src={"/hf_bible.svg"}
              height={24}
              width={24}
              alt="bible icon"
              className="inline mr-2"
            />
            <span>Luke 24:14-27, 30-32</span>
            <span className="mx-2 inline-block text-3xl">•</span>
            <span>Acts 2:42- 47</span>
          </div>
          <div>
            <Image
              src={"/hf_prayer.svg"}
              height={24}
              width={24}
              alt="bible icon"
              className="inline mr-2"
            />
            <span>Rom 16:1 — 16,17 (prayers), 18 — 20,21-24,25- 27</span>
            <span className="mx-2 inline-block text-3xl">•</span>
            <span>Celebration of the glory of God (v.25-27)</span>
          </div>
        </div>
      </div>

      <div className="relative h-[434px] w-full mt-8">
        <Image
          src="/hf_hero.jpg"
          alt="People worshipping at sunset"
          fill
          className="object-cover rounded-[18px]"
          priority
        />
        <div className="absolute inset-0 bg-[#00000033] z-10 rounded-[18px]"></div>
      </div>
    </div>
  );
}
