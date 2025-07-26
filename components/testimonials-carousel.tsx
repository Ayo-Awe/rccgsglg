"use client";

import { useState, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    text: "At the last holy Ghost convention, Daddy made a declaration that before noon the second day, the thing that we so desire will be approved or delivered. I was looking forward to a visa approval but to the glory of God, I got more than a miracle. A stressless no-complication first delivery within a period of 7hrs. Our God is a good God that still honours the words of his prophet . For all these and many more to come, I have come to return all glory, honour and adoration to God..",
    author: "Monijesu",
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
  {
    text: "After years of trying to conceive, my husband and I had almost given up hope. The church prayer team prayed with us every week for months. Today, I'm holding our beautiful twin babies in my arms. God is faithful!",
    author: "Rebecca J.",
  },
];

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(2); // Start with the third testimonial active

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Set initial position to the third slide
    api.scrollTo(2);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!api) return;

    const autoAdvance = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoAdvance);
    };
  }, [api]);

  return (
    <section className="mb-6 rounded-3xl overflow-hidden relative py-8 px-4 flex justify-center">
      {/* Background image with white overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/testimony_bg.jpeg"
          alt="Worship background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-90"></div>
      </div>

      <div className="z-10">
        <div className="flex justify-center mb-4">
          <Heart className="h-6 w-6 text-red-500 fill-red-500 mr-2" />
          <span className="text-sm font-medium tracking-wider uppercase">
            TESTIMONIES
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1a1a2e] mb-5">
          Testimony Time
        </h2>

        <div className="flex">
          <ChevronLeft
            className="h-6 w-6 cursor-pointer mt-10 mr-5 lg:mr-10"
            onClick={() => api?.scrollPrev()}
          />

          <Carousel
            setApi={setApi}
            className="w-full max-w-60 md:max-w-[50.75rem] mx-auto mb-5"
            opts={{ loop: true, startIndex: 2 }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="text-center flex flex-col h-full">
                    <p className="text-lg md:text-xl text-rccg-dark-blue mb-8 leading-6">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <p className="text-[#d4af37] text-xl font-medium">
                      {testimonial.author}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <ChevronRight
            className="h-6 w-6 cursor-pointer mt-10 ml-5 lg:ml-10"
            onClick={() => api?.scrollNext()}
          />
        </div>

        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                current === index
                  ? "bg-[#1a1a2e]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
