import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as motion from "motion/react-client";

import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const heroSlides = [
  {
    title: "Welcome to",
    subtitle: "SHEKINAH GLORY OF THE LIVING GOD",
    description:
      "All glory to God in thy highest, amen; for His mercies endureth forever.",
    image: "/home_hero.png",
    buttonText: "Watch Online",
    buttonLink: "/watch",
  },
];

export default function HeroCarousel() {
  return (
    <Carousel
      className="w-full rounded-3xl overflow-hidden"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {heroSlides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[627px] bg-[#1a1a2e] text-white">
              <div className="absolute inset-0 bg-[#15151b] opacity-70 z-10"></div>
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`${slide.title} ${slide.subtitle}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                  className="bg-white/10 px-4 py-1 rounded-full mb-4 flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-sm md:text-2xl mr-3">⛪</span>
                  <span className="text-[8.5px] md:text-xs">
                    WELCOME TO CHURCH
                  </span>
                </motion.div>
                <motion.h1
                  className={`${anton.className} text-4xl md:text-5xl font-bold mb-2`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.h2
                  className={`${anton.className} text-4xl md:text-5xl font-bold mb-6`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="text-rccg-yellow">
                    {slide.subtitle.split(" ")[0]}
                  </span>{" "}
                  {slide.subtitle.split(" ").slice(1).join(" ")}
                </motion.h2>
                <motion.p
                  className="max-w-2xl mb-8 text-center {}"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-[#d4af37] hover:bg-[#b8971f] text-white"
                  >
                    <Link href={slide.buttonLink} className="flex items-center">
                      {slide.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
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
  );
}
