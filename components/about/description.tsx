import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutDescription() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Who We Are Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-sm text-muted-foreground">WHO WE ARE</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              ABOUT
              <br />
              <span className="text-[#1a1a2e]">RCCG</span> <span className="text-[#d4af37]">SGLG</span>
            </h2>
          </div>
          <Card className="md:w-2/3 border-none shadow-none">
            <CardContent className="p-0 space-y-4">
              <p className="text-muted-foreground">
                The Redeemed Christian Church of God, Shekhinah Glory of the Living God, a family church is a branch of
                The Redeemed Christian Church of God worldwide, which was established in 1952 by Pa. Josiah Akindayomi.
                Pastor E.A Adeboye took over as the General Overseer in 1981.
              </p>
              <p className="text-muted-foreground">
                Since then the church continues to enjoy open explosion, growing in leap and bound throughout the world.
                We are situated in the heart of Greater London, where we run services and teachings that are suitable
                for people of all ages. RCCG SGLG is a dynamic church and believe in preaching the word in a simple and
                straightforward manner. Our watchword is Jesus Christ, the same yesterday, today and forever. (Heb. 13:
                8).
              </p>
              <p className="text-muted-foreground">
                I invite you to worship with us and discover the riches of God's glory through genuine worship and sound
                biblical teachings.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

