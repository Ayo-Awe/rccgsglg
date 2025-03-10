import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const heroSlides = [
  {
    title: "Welcome to",
    subtitle: "SHEKINAH GLORY OF THE LIVING GOD",
    description: "All glory to God in thy highest, amen; for His mercies endureth forever.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XscmmfvABX5QkKAL4rvi21EGTGZ6wH.png",
    buttonText: "Watch Online",
    buttonLink: "/watch",
  },
  {
    title: "Join Us This Sunday",
    subtitle: "WORSHIP WITH US",
    description: "Experience the presence of God in our vibrant worship services.",
    image: "/placeholder.svg?height=800&width=1200",
    buttonText: "Service Times",
    buttonLink: "/services",
  },
  {
    title: "Growing Together",
    subtitle: "IN FAITH AND FELLOWSHIP",
    description: "Become part of our community as we grow in Christ together.",
    image: "/placeholder.svg?height=800&width=1200",
    buttonText: "Get Connected",
    buttonLink: "/connect",
  },
]

export default function HeroCarousel() {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {heroSlides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[500px] bg-[#1a1a2e] text-white">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`${slide.title} ${slide.subtitle}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                <div className="bg-white/10 px-4 py-1 rounded-full mb-4 flex items-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Church Icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="text-sm">WELCOME TO CHURCH</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{slide.title}</h1>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-[#d4af37]">{slide.subtitle.split(" ")[0]}</span>{" "}
                  {slide.subtitle.split(" ").slice(1).join(" ")}
                </h2>
                <p className="max-w-2xl mb-8 text-center">{slide.description}</p>
                <Button asChild className="bg-[#d4af37] hover:bg-[#b8971f] text-white">
                  <Link href={slide.buttonLink} className="flex items-center">
                    {slide.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center">
        <div className="flex space-x-2">
          <CarouselPrevious className="relative h-8 w-8 rounded-full" />
          <CarouselNext className="relative h-8 w-8 rounded-full" />
        </div>
      </div>
    </Carousel>
  )
}

