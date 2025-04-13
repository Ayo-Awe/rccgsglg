import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function PastorMessage() {
  return (
    <section className="mt-6 px-4">
      <div className="grid md:grid-cols-2 gap-8 ">
        <Image
          src="/pastor.png"
          alt="Pastor and Wife"
          width={630}
          height={500}
          className="rounded-3xl object-cover aspect-[6/5]"
        />
        <Card className="border-none shadow-none p-0">
          <CardContent className="p-0 flex flex-col justify-between h-full">
            <div className=" ">
              <div className="flex items-center w-fit mb-4 bg-[#fafafa] px-3.75 py-2.25 rounded-4xl">
                <span className="text-3xl mr-4">🧔🏽‍♂️</span>
                <span className="text-xs text-rccg-dark-blue">
                  MEET OUR PASTOR
                </span>
              </div>
              <h2
                className={`${anton.className} text-5xl leading-16  font-bold text-[#1a1a2e] mb-6`}
              >
                A Special Message from Our Senior Pastor
              </h2>
              <div className="text-rccg-dark-blue text-justify text-lg tracking-wide">
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
              </div>
            </div>

            <p className="text-rccg-yellow text ">-Pastor Ernest Ogbe</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
