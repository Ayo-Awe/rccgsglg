import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const events = [
  {
    id: 1,
    title: "Holy Ghost Anointing Service",
    description:
      "He has anointed us also by the gift of the Spirit.\nHe has definitely set us apart and designated us for the position;",
    schedule: "-First Thursdays of the month",
    image: "/events/holy-ghost-anointing.jpg",
  },
  {
    id: 2,
    title: "Faith Clinic",
    description:
      "Have you been searching for a Spirit filled church where God's Word is preached with power and authority?",
    schedule: "-RCCG, SGLG",
    image: "/events/faith-clinic.jpg",
  },
  {
    id: 3,
    title: "An Hour At His Throne",
    description:
      "An intensive prayer session for one hour that only you can pray which no one else can do for you.",
    schedule: "First Sunday of the month",
    image: "/events/prayer-hour.jpg",
  },
  {
    id: 4,
    title: "Be Single Out",
    description: "Praise & worship all through",
    schedule: "-As one healed leper",
    image: "/events/be-single-out.jpg",
  },
];

export default function ProgrammesEvents() {
  return (
    <section className="mb-6 rounded-3xl overflow-hidden px-7.5 py-6 bg-[#F8F8F8]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
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
            there&apos;s always something for you. Check out our calendar and join
            us!
          </motion.p>
        </div>

        {/* Theme Toggle */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="outline" className="ml-6 rounded-full px-6">
            See More
          </Button>
        </motion.div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6.5 px-5">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group overflow-hidden h-full border-none shadow-none rounded-lg flex flex-col"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={event.image}
                alt={event.title}
                width={300}
                height={250}
                className="object-cover h-[250px] w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 flex-grow">
              <h3 className="font-bold text-xl text-[#1a1a2e] mb-3 leading-tight">
                {event.title}
              </h3>
              <p className="text-rccg-dark-blue text-base mb-4 leading-relaxed">
                {event.description}
              </p>
            </div>
            <p className="text-rccg-yellow text-base font-medium text-right mt-auto">
              {event.schedule}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
