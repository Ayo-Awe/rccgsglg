import Image from "next/image";
import * as motion from "motion/react-client";
import { Event } from "@/lib/data";

interface EventCardProps {
  event: Event;
  index: number;
  variant?: "default" | "compact";
}

export default function EventCard({ event, index, variant = "default" }: EventCardProps) {
  const isCompact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group overflow-hidden h-full border-none shadow-none rounded-lg flex flex-col"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={event.image}
          alt={event.title}
          width={isCompact ? 300 : 400}
          height={250}
          className="object-cover h-[250px] w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-4 flex-grow">
        <h3 className={`font-bold text-xl ${isCompact ? 'text-[#1a1a2e]' : 'text-rccg-dark-blue'} mb-3 leading-tight`}>
          {event.title}
        </h3>
        <p className="text-rccg-dark-blue text-base mb-4 leading-relaxed">
          {event.link ? (
            <>
              {event.description.split('Watch live')[0]}
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rccg-yellow hover:text-rccg-gold font-medium underline transition-colors duration-200"
              >
                Watch live
              </a>
              {event.description.split('Watch live')[1] && event.description.split('Watch live')[1]}
            </>
          ) : (
            event.description
          )}
        </p>
      </div>
      <p className="text-rccg-yellow text-base font-medium text-right mt-auto">
        {event.schedule}
      </p>
    </motion.div>
  );
}