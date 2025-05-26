import Image from "next/image"

export default function HouseFellowshipHero() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-12">
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">FELLOWSHIPING AT RCCG SGLG</h1>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span>Luke 24:14-27, 30-32</span>
            <span>•</span>
            <span>Rom 16:1 - 16, 17 (servants), 19 - 20, 21-24, 25-27</span>
            <span>•</span>
            <span>Celebration of the glory of God (v. 25 ezekiel-27)</span>
          </div>
        </div>
      </div>
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/House%20Fellowship-gYWuuiCEQgmNRxG1JoI0VotzRhGJp8.png"
          alt="People worshipping at sunset"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

