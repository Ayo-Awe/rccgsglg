import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anton, AR_One_Sans } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const arOneSans = AR_One_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: "normal",
});

export default function WorkforceSection() {
  return (
    <section className="py-16 px-6 mb-6">
      <div className="grid md:grid-cols-2 gap-12">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="flex items-center w-fit mb-4 bg-[#fafafa] px-3.75 py-2.25 rounded-4xl">
              <span className="text-2xl mr-5">🥽</span>
              <span className="text-xs text-rccg-dark-blue">MINISTRIES</span>
            </div>
            <h2
              className={`${anton.className} text-5xl font-bold text-[#1a1a2e] mb-6 leading-16`}
            >
              Popularly Referred To As The Church&apos;s{" "}
              <span className="text-rccg-yellow">Workforce</span>
            </h2>
            <p className="text-rccg-dark-blue text-lg mb-18">
              We are able to function largely due to the selfless commitment
              people, who give their time to run various departments and
              ministries
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-[#DEC360] via-rccg-yellow  to-[#91803F]"
            >
              <Link
                href="/contact"
                className={`${arOneSans.className} font-medium text-white py-2.5 px-5 text-lg rounded-sm`}
              >
                View More
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Image
          src="/home_workforce.png"
          alt="Church Volunteers"
          width={640}
          height={600}
        />
      </div>
    </section>
  );
}
