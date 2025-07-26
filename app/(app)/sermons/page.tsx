import payloadConfig from "@/payload.config";
import Image from "next/image";
import { getPayload } from "payload";
import SermonsGrid from "./sermon-grid";
import * as motion from "motion/react-client";

function Hero() {
  return (
    <section
      className={`relative h-[335px] bg-[#1a1a2e] text-white rounded-3xl overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[#15151BB2] z-10 rounded-3xl"></div>
      <Image
        src="/sermons_hero.jpg"
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
          <span className={`text-sm md:text-2xl font-thin mr-3 font-anton`}>
            📖
          </span>
          <span className="text-sm uppercase"> Read</span>
        </motion.div>
        <motion.h1
          className={`text-4xl md:text-[58px] font-bold font-anton tracking-wider leading-normal`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our <span className="text-[#DEC360]">Sermons</span>
        </motion.h1>
      </div>
    </section>
  );
}

export default async function SermonsPage() {
  const limit = 8;
  const payload = await getPayload({ config: payloadConfig });
  const sermons = await payload.find({
    collection: "sermons",
    limit,
    sort: "-date",
  });

  return (
    <main>
      <Hero />
      <div className="py-6 px-7.5 mt-6 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <motion.div
            className="bg-[#FAFAFA] px-4 py-1 rounded-full mb-8 flex items-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`text-sm md:text-2xl font-thin mr-3 font-anton`}>
              📖
            </span>
            <span className="text-sm uppercase"> Read</span>
          </motion.div>
          <motion.h2
            className="text-5xl font-anton text-rccg-dark-blue mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Latest Sermons
          </motion.h2>
          <motion.p
            className="max-w-[600px] text-lg text-center font-lato text-rccg-dark-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Weekly sermons in order to grow your faith and not miss out on
            God&apos;s word for you.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* @ts-expect-error payload local api regards id as a number whereas its REST API regards it as a string*/}
          <SermonsGrid initalPage={sermons} limit={limit} />
        </motion.div>
      </div>
    </main>
  );
}
