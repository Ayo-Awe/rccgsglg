import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Anton } from "next/font/google";
import {
  CoreValueAccordion,
  CoreValueProps,
} from "@/components/core-value-accordion";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const faithStatements = [
  {
    title: "We believe in God the Father, the Creator of Heaven and Earth.",
  },
  {
    title:
      "We believe in Jesus Christ, His Son, who was crucified for the sins of all mankind and rose on the third day to sit at the right hand of God the Father.",
  },
  {
    title:
      "We believe in the Holy Spirit, who dwells in us and guides us according to the will of the Father.",
  },
  {
    title: "We believe in the Bible as the infallible Word of God.",
  },
  {
    title:
      "We believe in divine healing, the restoration of health to the one who believes and acts out God's word, and that Jesus is the Healer.",
  },
  {
    title:
      "We believe in tithing and bringing offerings into the local church. We also believe in giving alms, caring for the poor, sick, homeless and otherwise unfortunate.",
  },
  {
    title:
      "We believe in water baptism in the name of the Father, Son and Holy Spirit.",
  },
];

const missionVision = [
  {
    title: "To make heaven",
  },
  {
    title: "To take as many people with us.",
  },
  {
    title: "To have a member of RCCG in every family of all nations.",
  },
  {
    title: "To accomplish No. 1 above, holiness will be our lifestyle",
  },
  {
    title:
      "To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.",
  },
];

const sections = [
  {
    name: "faith",
    title: "Faith Statements",
  },
  {
    name: "vision",
    title: "Our Vision/Mission",
  },
  {
    name: "values",
    title: "Our Core Values",
  },
];

const coreValues: CoreValueProps[] = [
  {
    content:
      "We receive direction and motivation from God and His word and believe that with Him on our side we can achieve what otherwise seems impossible.",
    title: "Faith",
    icon: "/cross_icon.svg",
  },
  {
    content:
      "We are dedicated to the mission and vision, giving our time, energy, and resources to see it fulfilled.",
    title: "Commitment",
    icon: "/cross_icon.svg",
  },
  {
    content:
      "We strive to live set apart, honoring God in our actions, thoughts, and lifestyle.",
    title: "Holiness",
    icon: "/cross_icon.svg",
  },
  {
    content:
      "We value honesty and consistency in our words and actions, upholding truth at all times.",
    title: "Integrity",
    icon: "/cross_icon.svg",
  },
  {
    content:
      "We pursue the highest standards in all that we do, giving our best and inspiring others to do the same.",
    title: "Excellence",
    icon: "/cross_icon.svg",
  },
  {
    content:
      "We practice self-control and consistency to stay focused on what matters most.",
    title: "Discipline",
    icon: "/cross_icon.svg",
  },
  {
    content:
      "We believe in the value of every individual and are committed to serving and uplifting others.",
    title: "People",
    icon: "/cross_icon.svg",
  },
];

function FaithStatements() {
  return (
    <>
      <h2
        className={`text-[32px] md:text-[40px] font-bold mb-3 ${anton.className}`}
      >
        Faith
        <br />
        Statements
      </h2>
      <div className="grid col-span-2 gap-2.5 bg-[#FAFAFA0A] p-2.5 rounded-sm">
        {faithStatements.map((statement, index) => (
          <div
            key={index}
            className="p-2.5 bg-[#FAFAFA0D] rounded-lg text-sm  md:text-lg"
          >
            {statement.title}
          </div>
        ))}
      </div>
    </>
  );
}

function MissionAndVision() {
  return (
    <>
      <div className="col-span-3 mb-5">
        <h2
          className={`text-[32px] md:text-[40px] font-bold mb-3 ${anton.className}`}
        >
          Our Vision/
          <br />
          Mission
        </h2>
        <p className="text-sm md:text-lg text-justify max-w-[25rem]">
          As received by the General Overseer (G.O.), Pastor E. A. Adeboye, and
          communicated to the Headquarters leaders, our vision and mission
          statement shall remain intact, with a qualifying addendum in view of
          the peculiarity of the demography in the North American region.
        </p>
      </div>

      <div className="col-span-4 ">
        <div className="grid gap-2.5 bg-[#FAFAFA0A] p-2.5 rounded-sm">
          {missionVision.map((statement, index) => (
            <div
              key={index}
              className="p-2.5 bg-[#FAFAFA0D] rounded-lg text-sm md:text-lg"
            >
              {statement.title}
            </div>
          ))}
        </div>
        <p className="px-2.5 py-6 max-w-2xl text-sm md:text-lg">
          *We will pursue these objectives until every Nation in the world is
          reached for the Lord Jesus Christ.
        </p>
      </div>
    </>
  );
}

function CoreValues() {
  return (
    <>
      <h2
        className={`text-[32px] md:text-[40px] font-bold mb-3 ${anton.className} col-span-3`}
      >
        Our Core
        <br />
        Values
      </h2>

      <div className="bg-[#FAFAFA0A] p-2.5 rounded-sm col-span-4">
        <CoreValueAccordion values={coreValues} />
      </div>
    </>
  );
}

export default function StatementsSection() {
  return (
    <section className="p-8 rounded-3xl bg-gradient-to-r from-[#4D6AB2] to-[#214C45]">
      <div className="text-[#FAFAFA]">
        <Tabs defaultValue="faith" className="w-full">
          <div className="w-full px-2">
            <div className="overflow-x-auto -mx-2">
              <TabsList className="rounded-sm bg-white/5 p-2 mb-2 inline-flex">
                {sections.map(({ name, title }) => (
                  <TabsTrigger
                    value={name}
                    key={name}
                    className="text-white font-medium data-[state=active]:bg-white/10 py-2 px-4 rounded-sm text-base whitespace-nowrap mx-1"
                  >
                    {title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          <TabsContent value="faith" className="mt-6 md:grid grid-cols-3 ">
            <FaithStatements />
          </TabsContent>
          <TabsContent value="vision" className="mt-6 md:grid grid-cols-7 ">
            <MissionAndVision />
          </TabsContent>
          <TabsContent value="values" className="mt-6 md:grid grid-cols-7 ">
            <CoreValues />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
