import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PastorMessage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=500&width=400"
            alt="Pastor and Wife"
            width={400}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <Card className="border-none shadow-none">
          <CardContent className="p-0">
            <div className="flex items-center mb-4">
              <div className="bg-[#d4af37] rounded-full p-1 mr-2">
                <Image src="/placeholder.svg?height=24&width=24" alt="Pastor Icon" width={24} height={24} />
              </div>
              <span className="text-sm text-muted-foreground">MEET OUR PASTOR</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">A Special Message from Our Senior Pastor</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                It is with great pleasure and joy that we welcome you to our growing and vibrant church, Shekinah Glory
                of The Living God a branch of The Redeemed Christian Church of God. We pray that God's purposes and His
                will, and His presence will be followed. Your support through prayers and donations would be greatly
                appreciated. One of the many things we do is make mission supplies available, please stand with us as we
                seek to build God's Kingdom in some of the needier parts of the world.
              </p>
              <p>
                It is our utmost desire and prayer that our heavenly Father will watch over you, support you and enrich
                your life with unspeakable joy in Jesus' name, amen.
              </p>
              <p className="text-[#d4af37] italic">-Pastor Ernest Ogbe</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

