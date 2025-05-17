import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const beliefs = [
  {
    title: "THE BIBLE TEACHING",
    content:
      "We believe the Bible is the inspired and only infallible Word of God.",
  },
  {
    title: "ABOUT THE HOLY SPIRIT",
    content:
      "We believe in the Holy Spirit, His gifts and manifestations in the life of believers.",
  },
  {
    title: "ABOUT MAN",
    content: "We believe man was created in God's image but fell through sin.",
  },
  {
    title: "SANCTIFICATION (HOLINESS)",
    content: "We believe in sanctification as a definite act of God's grace.",
  },
  {
    title: "ABOUT TRINITY",
    content:
      "We believe in one God existing in three persons: Father, Son, and Holy Spirit.",
  },
  {
    title: "WATER BAPTISM",
    content:
      "We believe in water baptism by immersion in the name of the Father, Son, and Holy Spirit.",
  },
  {
    title: "ABOUT GOD- Ps. 33:6-9",
    content:
      "We believe in the existence of the Almighty God, creator of heaven and earth.",
  },
  {
    title: "ABOUT JESUS CHRIST",
    content:
      "We believe in the deity of Jesus Christ, His virgin birth, sinless life, miracles, death, and resurrection.",
  },
  {
    title: "ABOUT THE DEVIL",
    content:
      "We believe in the existence of Satan and his ultimate defeat through Jesus Christ.",
  },
  {
    title: "REPENTANCE UNTO GOD",
    content:
      "We believe in repentance from sin and acceptance of Jesus Christ as Lord and Savior.",
  },
  {
    title: "JUSTIFICATION OR NEW BIRTH",
    content:
      "We believe in justification by faith in the atoning blood of Jesus Christ.",
  },
  {
    title: "BAPTISM OF THE HOLY SPIRIT",
    content:
      "We believe in the baptism of the Holy Spirit with the evidence of speaking in tongues.",
  },
];

export default function FundamentalBeliefs() {
  return (
    <section className="py-10.5 px-8 lg:grid grid-cols-9 w-full bg-[#F8F8F8] rounded-3xl mb-5">
      <div className="col-span-2">
        <div className="flex items-center mb-8">
          <span className="text-2xl mr-2">🙏🏽</span>
          <span className="text-xs text-muted-foreground">OUR BELIEFS</span>
        </div>
        <h2
          className={`text-[40px] font-bold mb-8 ${anton.className} tracking-wider`}
        >
          Our
          <br />
          Fundamental <br /> <span className="text-[#B29D4D]">Beliefs</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 col-span-7 gap-2.5 w-full">
        {beliefs.map((belief, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem
              value={belief.title}
              className="bg-[#F2F2F7] rounded-xs"
            >
              <AccordionTrigger className="px-4 hover:no-underline">
                {belief.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                {belief.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
