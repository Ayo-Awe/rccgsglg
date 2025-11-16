import * as motion from "motion/react-client";
import { Anton } from "next/font/google";
import { events } from "@/lib/data";
import EventCard from "@/components/event-card";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function ProgrammesEvents() {
  return (
    <section
      id="programmes-events"
      className="mb-6 rounded-3xl overflow-hidden px-5 md:px-7.5 py-6 bg-[#F8F8F8]"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8 gap-4">
        <div>
          <motion.div
            className="flex items-center w-fit mb-4 bg-[#fafafa] px-3.75 py-2.5 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl mr-3">🗓️</span>
            <span className="text-xs text-rccg-dark-blue font-medium">
              CALENDAR
            </span>
          </motion.div>

          <motion.h2
            className={`${anton.className} text-5xl leading-tight font-bold text-[#1a1a2e] mb-4`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Programmes & Events
          </motion.h2>
          <motion.p
            className="text-rccg-dark-blue text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stay connected with us! From weekly gatherings to special events,
            there&apos;s always something for you. Check out our calendar and
            join us!
          </motion.p>
        </div>
        
        <motion.a
          href="/events"
          className="h-11 px-6 flex items-center bg-transparent border border-rccg-yellow text-rccg-dark-blue text-lg rounded-lg hover:bg-rccg-yellow hover:text-white transition-all duration-300 whitespace-nowrap"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          See More
        </motion.a>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6.5 md:px-5">
        {events.slice(0, 4).map((event, index) => (
          <EventCard key={event.id} event={event} index={index} variant="compact" />
        ))}
      </div>
    </section>
  );
}
