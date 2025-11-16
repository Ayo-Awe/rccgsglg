import Image from "next/image";
import * as motion from "motion/react-client";
import { Anton } from "next/font/google";
import PartnerSection from "@/components/partner-section";
import { events } from "@/lib/data";
import EventCard from "@/components/event-card";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

function EventsHero() {
  return (
    <section className="relative h-[200px] sm:h-[250px] md:h-[300px] bg-[#1a1a2e] text-white rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-[#15151BB2] z-10 rounded-3xl"></div>
      <Image
        src="/heroes/home_hero.png"
        alt="Events & Programmes Background"
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
          <span className="text-lg sm:text-xl md:text-2xl mr-2 sm:mr-3">🗓️</span>
          <span className="text-xs sm:text-sm uppercase">CALENDAR</span>
        </motion.div>
        <motion.h1 
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${anton.className} tracking-wider leading-tight`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Events & <span className="text-[#DEC360]">Programmes</span>
        </motion.h1>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Events & Programmes | Shekinah Glory of the Living God",
  description:
    "Explore our weekly and monthly events and worship programmes. Join us for celebration services, prayer meetings, and special programmes.",
};

export default function EventsPage() {
  return (
    <>
      <main>
        <EventsHero />
        <div className="py-6 px-7.5 mt-6 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <motion.div
              className="bg-[#FAFAFA] px-4 py-1 rounded-full mb-8 flex items-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-sm md:text-2xl mr-3">🗓️</span>
              <span className="text-sm uppercase">UPCOMING</span>
            </motion.div>
            <motion.h2
              className={`text-3xl md:text-5xl ${anton.className} text-rccg-dark-blue mb-8`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Weekly & Monthly Events
            </motion.h2>
            <motion.p
              className="max-w-[600px] text-lg text-center text-rccg-dark-blue mb-12"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Discover our weekly and monthly worship programmes. There&apos;s always
              something for you at Shekinah Glory of the Living God.
            </motion.p>
          </div>

        {/* Events Grid */}
        <motion.section
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <PartnerSection />
    </>
  );
}
