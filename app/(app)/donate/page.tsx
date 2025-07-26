import PartnerSection from "@/components/partner-section";
import { Anton } from "next/font/google";
import Image from "next/image";
import CopyToClipboard from "@/components/copy-to-clipboard";
import * as motion from "motion/react-client";

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

function Hero() {
  return (
    <section
      className={`relative h-[422px] bg-[#1a1a2e] text-white rounded-3xl overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[#15151BB2] z-10 rounded-3xl"></div>
      <Image
        src="/give_hero.jpg"
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
            💵
          </span>
          <span className="text-sm uppercase"> Give</span>
        </motion.div>
        <motion.h1
          className={`text-4xl md:text-[58px] font-bold ${anton.className} tracking-wide leading-normal`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-[#DEC360]">Donate</span> To Share <br /> His{" "}
          <span className="text-[#DEC360]">Love</span>
        </motion.h1>
      </div>
    </section>
  );
}

function AccountDetailsSection() {
  return (
    <motion.div 
      className="bg-[#36ABFE14] border border-[#3679FE52] px-12.5 py-15.5 rounded-3xl mb-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="flex items-center gap-2.5 tracking-wide mb-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image src="/rccg-logo.svg" height={42} width={42} alt="rccg logo" />
        <p className="font-lato text-2xl font-bold">RCCG SGLG</p>
      </motion.div>
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div 
          className="bg-[#E7F4FF] p-3 rounded-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="mb-3 font-lato text-[#7F747C] uppercase ">
            Sort Code
          </h3>
          <div className="flex justify-between">
            <p className="font-lato font-semibold text-[#374151] text-xl">
              208057
            </p>
            <CopyToClipboard text="208057" />
          </div>
        </motion.div>
        <motion.div 
          className="bg-[#E7F4FF] p-3 rounded-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="mb-3 font-lato text-[#7F747C] uppercase">
            Account Number
          </h3>
          <div className="flex justify-between">
            <p className="font-lato font-semibold text-[#374151] text-xl">
              6396 0919
            </p>
            <CopyToClipboard text="6396 0919" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function MinistriesPage() {
  return (
    <main>
      <Hero />

      <div className="my-10 px-7.5 py-6">
        <motion.div 
          className="bg-[#FAFAFA] px-4 py-2.5 rounded-full mb-4 w-fit flex items-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={`text-sm md:text-2xl font-thin mr-3 ${anton.className}`}
          >
            💵
          </span>
          <span className="text-sm uppercase"> DONATE TO THE CHURCH</span>
        </motion.div>
        <motion.div 
          className="md:flex justify-between mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-rccg-dark-blue font-anton text-5xl">
            Ways To Give
          </h3>
          <p className="text-rccg-dark-blue font-lato text-lg max-w-md mt-4 md:text-right">
            Together, we build the church, reach the lost, and serve our
            community. Thank you for sowing into God&apos;s work.
          </p>
        </motion.div>
      </div>
      <AccountDetailsSection />
      <PartnerSection />
    </main>
  );
}
