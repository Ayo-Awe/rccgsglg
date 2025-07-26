import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import * as motion from "motion/react-client";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function PastorMessage() {
  return (
    <section className="mt-6 px-4">
      <div className="grid md:grid-cols-2 gap-8 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/backgrounds/pastor.png"
            alt="Pastor and Wife"
            width={630}
            height={500}
            className="rounded-3xl object-cover aspect-[6/5]"
          />
        </motion.div>
        <Card className="border-none shadow-none p-0">
          <CardContent className="p-0 flex flex-col justify-between h-full">
            <div className=" ">
              <motion.div
                className="flex items-center w-fit mb-4 bg-[#fafafa] px-3.75 py-2.25 rounded-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-3xl mr-4">🧔🏽‍♂️</span>
                <span className="text-xs text-rccg-dark-blue">
                  MEET OUR PASTOR
                </span>
              </motion.div>
              <motion.h2
                className={`${anton.className} text-5xl leading-16  font-bold text-[#1a1a2e] mb-6`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A Special Message from Our Senior Pastor
              </motion.h2>
              <motion.div
                className="text-rccg-dark-blue text-justify text-lg tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p>
                  It is with great pleasure and joy that we welcome you to our
                  growing and vibrant church, Shekinah Glory of The Living God a
                  branch of The Redeemed Christian Church of God. We pray that
                  God&apos;s purposes and His will, and His presence will be
                  followed. Your support through prayers and donations would be
                  greatly appreciated. One of the many things we do is make
                  mission supplies available, please stand with us as we seek to
                  build God&apos;s Kingdom in some of the needier parts of the
                  world.
                </p>
                <p>
                  It is our utmost desire and prayer that our heavenly Father
                  will watch over you, support you and enrich your life with
                  unspeakable joy in Jesus&apos; name, amen.
                </p>
              </motion.div>
            </div>

            <motion.p
              className="text-rccg-yellow text "
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              -Pastor Ernest Ogbe
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
