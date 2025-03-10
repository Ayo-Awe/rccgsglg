import Image from "next/image"

export default function MinistriesHero() {
  return (
    <section className="relative h-[300px] bg-[#1a1a2e] text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20Us%281%29-ee4nU87YMH6cQWLt2UgPexU1LfxuGB.png"
        alt="Ministries Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white/10 px-4 py-1 rounded-full mb-4 flex items-center">
          <Image
            src="/placeholder.svg?height=20&width=20"
            alt="Ministries Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="text-sm">MINISTRIES</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Our Ministries</h1>
      </div>
    </section>
  )
}

