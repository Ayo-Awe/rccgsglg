import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="space-y-6 my-auto">
      <h2 className="text-xl md:text-2xl font-roboto font-bold text-rccg-dark-blue">
        Contact Us
      </h2>

      <Card className="bg-[#F6F6F6] border-none shadow-none py-2 rounded-lg">
        <CardContent className="flex items-center space-x-6 px-3.5">
          <Image
            src={"/contact_phone.svg"}
            height={40}
            width={40}
            alt="phone"
          />
          <div>
            <h3 className="text-rccg-dark-blue font-roboto font-bold text-sm md:text-balance">
              Phone
            </h3>
            <p className="font-roboto text-[#94A3B8] text-sm md:text-base">
              Contact us also at: +44 20 3732 4687
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#F6F6F6] border-none py-2 rounded-lg shadow-none text-sm md:text-base">
        <CardContent className="flex items-center space-x-6 shadow-none px-3.5">
          <Image src={"/contact_map.svg"} height={40} width={40} alt="phone" />
          <div>
            <h3 className="text-rccg-dark-blue font-roboto font-bold">
              Address
            </h3>
            <p className="font-roboto text-[#94A3B8]">
              L01-LO2 Studio Hall, Pimlico Academy Lupus Street, London. SW1V
              3AT, London, United Kingdom
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="w-full rounded-2xl overflow-hidden aspect-square md:aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1234567890123!2d-0.123456!3d51.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzM0LjQiTiAwwrAwNyczNC40Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
