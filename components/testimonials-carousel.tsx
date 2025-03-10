"use client"

import { Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

const testimonials = [
  {
    text: "At the last holy Ghost convention, Daddy made a declaration that before noon the second day, the thing that brought me to the convention would be resolved. I had come to a convention to seek the glory of God. I got more than a miracle. A stressless no-complication first delivery within a period of 7hrs. Our God is a good God that still honours the words of his prophet. For all these and many more to come, I have come to return all glory, honour and adoration to God.",
    author: "MoniJesu",
  },
  {
    text: "I had been struggling with a chronic health condition for years. After attending the healing service, I felt God's presence in a powerful way. The next day, I woke up completely free from pain. The doctors are amazed at my recovery!",
    author: "Grace T.",
  },
  {
    text: "My business was on the verge of collapse when I joined the church's financial breakthrough program. Through the teachings and prayers, I gained wisdom that helped me turn things around. Today, my business is thriving beyond my expectations.",
    author: "David O.",
  },
  {
    text: "I was battling depression and felt like I had no purpose. The love and community I found at Shekinah Glory gave me hope again. Through counseling and prayer, I've found healing and now serve in the worship ministry.",
    author: "Sarah M.",
  },
]

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  return (
    <section className="py-16 px-4 bg-gray-100 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-red-500 rounded-full p-1 mr-2">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span className="text-sm text-muted-foreground">TESTIMONIES</span>
        </div>
        <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-12">Testimony Time</h2>

        <Carousel setApi={setApi} className="max-w-3xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-white p-8 rounded-lg shadow-lg">
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-center italic mb-6">"{testimonial.text}"</p>
                    <p className="text-[#d4af37] text-center font-medium">{testimonial.author}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
            <CarouselPrevious className="h-10 w-10" />
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
            <CarouselNext className="h-10 w-10" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${current === index ? "bg-[#d4af37]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

