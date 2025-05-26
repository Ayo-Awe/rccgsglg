import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section
      className={`relative h-[300px] bg-[#1a1a2e] text-white rounded-3xl overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[#15151BB2] z-10 rounded-3xl"></div>
      <Image
        src="/ministries_hero.jpg"
        alt="About Us Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white/10 px-4 py-1 rounded-full mb-4 flex items-center">
          <span
            className={`text-sm md:text-2xl font-thin mr-3 ${anton.className}`}
          >
            ⛪
          </span>
          <span className="text-sm uppercase"> Ministries</span>
        </div>
        <h1
          className={`text-4xl md:text-5xl font-bold ${anton.className} tracking-wide`}
        >
          Our Ministries
        </h1>
      </div>
    </section>
  );
}
