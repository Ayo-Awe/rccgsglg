import Image from "next/image";
import * as motion from "motion/react-client";

export default function AboutHero() {
  return (
    <section className="relative h-[200px] sm:h-[250px] md:h-[300px] bg-[#1a1a2e] text-white rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-[#15151BB2] z-10 rounded-3xl"></div>
      <Image
        src="/heroes/aboutus_hero.jpg"
        alt="About Us Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div 
          className="bg-white/10 px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-lg sm:text-xl md:text-2xl mr-2 sm:mr-3">⛪</span>
          <span className="text-xs sm:text-sm uppercase">LEARN MORE</span>
        </motion.div>
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          About Us
        </motion.h1>
      </div>
    </section>
  );
}
