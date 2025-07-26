import { Anton } from "next/font/google";
import Image from "next/image";
import * as motion from "motion/react-client";

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
        src="/heroes/ministries_hero.jpg"
        alt="About Us Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div 
          className="bg-white/10 px-4 py-1 rounded-full mb-4 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span
            className={`text-sm md:text-2xl font-thin mr-3 ${anton.className}`}
          >
            ⛪
          </span>
          <span className="text-sm uppercase"> Ministries</span>
        </motion.div>
        <motion.h1
          className={`text-4xl md:text-5xl font-bold ${anton.className} tracking-wide`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our Ministries
        </motion.h1>
      </div>
    </section>
  );
}
