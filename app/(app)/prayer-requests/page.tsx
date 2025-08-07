import PrayerRequestForm from "./prayer-request-form";
import PrayerRequestHero from "./prayer-request-hero";
import * as motion from "motion/react-client";

export default function PrayerRequestPage() {
  return (
    <main>
      <PrayerRequestHero />
      <div className="py-6 px-7.5 mt-6 flex flex-col items-center">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="text-5xl font-anton text-rccg-dark-blue mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Submit Your Prayer Request
          </motion.h2>
          <motion.p
            className="max-w-[600px] text-lg text-center font-lato text-rccg-dark-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We believe in the power of prayer. Share your prayer request with us and our 
            pastoral team will join you in prayer, lifting your needs before God.
          </motion.p>
        </div>
        <div className="w-full max-w-4xl">
          <PrayerRequestForm />
        </div>
      </div>
    </main>
  );
}