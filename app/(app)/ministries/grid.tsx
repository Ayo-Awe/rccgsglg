import { Anton } from "next/font/google";
import MinistryCard from "./ministry-card";
import Image from "next/image";
import { MinChoir, MinEvangelism, MinIntersessory, MinProtocol, MinWelfare, MinTechnical, MinTraining, MinChildren, MinMultimedia, MinCounselling, MinSundaySchool, MinSecurity, MinSanitation, MinDrama, MinMaintenance } from "@/components/icons";

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

// Define ministry data
const ministries = [
  {
    title: "Choir",
    description:
      "Worship is an essential part of the Christian Faith and one of the ways in which we love to worship God is through music.",
    icon: <MinChoir className="w-full h-full" />,
    slug: "choir",
  },
  {
    title: "Evangelism/ Follow-Up",
    description:
      "Although evangelism is mandatory for all believers, there is a team that is devoted to bringing the Gospel to the local community every Saturday.",
    icon: <MinEvangelism className="w-full h-full" />,
    slug: "evangelism",
  },
  {
    title: "Intersessory",
    description:
      "This ministry focuses on supporting the Pastorate in prayer, interceding for the church and its members. The intercessors pray concerning major.",
    icon: <MinIntersessory className="w-full h-full" />,
    slug: "intercessory",
  },

  {
    title: "Usher & Protocol",
    description:
      'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many." Mark 10:42-45.',
    icon: <MinProtocol className="w-full h-full" />,
    slug: "protocol",
  },
  {
    title: "Welfare & Hospitality",
    description:
      "The Bible teaches us about caring for widows, the elderly and our brothers and sisters in general. It is the responsibility of all God's children.",
    icon: <MinWelfare className="w-full h-full" />,
    slug: "welfare",
  },
  {
    title: "Technical/Engineering",
    description:
      "The Technical team are responsible for quality of sound and production of concepts derived from live recordings. They are accountable for the.",
    icon: <MinTechnical className="w-full h-full" />,
    slug: "technical",
  },
  {
    title: "Teaching/Training",
    description:
      "The Bible admonishes us to be diligent to present ourselves approved to God as a workman who does not need to be ashamed, handling.",
    icon: <MinTraining className="w-full h-full" />,
  },
  {
    title: "Children & Youth",
    description:
      "This ministry aims to prepare our youth as they venture into life that requires more understanding of the world we live in and prepare their mind.",
    icon: <MinChildren className="w-full h-full" />,
  },
  {
    title: "Multimedia",
    description:
      "Welcome to the RCCG SGLG Multimedia Department where our mission is 'Enhancing Your Worship Experience'.",
    icon: <MinMultimedia className="w-full h-full" />,
  },

  {
    title: "Counselling/Visitation",
    description:
      "The Counselling department of RCCG SGLG offers counseling and support to anyone dealing with difficult situations or circumstances.",
    icon: <MinCounselling className="w-full h-full" />,
  },
  {
    title: "Sunday School",
    description:
      "This is the primary disciple-making ministry within our assembly. It helps persons to grow in the knowledge and grace of God through regular and balanced studies of the scriptures.",
    icon: <MinSundaySchool className="w-full h-full" />,
  },
  {
    title: "Security",
    description:
      "This team ensures the safety of every individuals around the church premises. They also look to keep away the intruders.",
    icon: <MinSecurity className="w-full h-full" />,
  },
  {
    title: "Sanitation/Decoration",
    description:
      "This dept. is responsible for the physical structure of the building, ensuring that the building is well looked after and ready for use at all times.",
    icon: <MinSanitation className="w-full h-full" />,
  },
  {
    title: "Drama/Humour",
    description:
      "The Drama ministry aims to promote the Gospel through various forms of drama, seeking to inspire, instruct and encourage while entertaining its audience.",
    icon: <MinDrama className="w-full h-full" />,
  },
  {
    title: "Building/Maintenance",
    description:
      "This department has a mandate to ensure that the house of God is always available for worship. They have an ultimate vision of erecting a permanent building in the future.",
    icon: <MinMaintenance className="w-full h-full" />,
  },
];

export default function MinistriesGrid() {
  return (
    <section className="px-6 lg:px-12 pt-8 pb-16 bg-rccg-dark-blue my-10 md:mx-7.5 rounded-3xl relative overflow-hidden">
      <div className="bg-white/10 z-1 px-4 py-1 rounded-full mb-8 flex items-center max-w-fit mx-auto">
        <span
          className={`text-sm md:text-2xl font-thin mr-3 ${anton.className}`}
        >
          🎙️
        </span>
        <span className="text-sm uppercase text-[#DEC360]"> Ministries</span>
      </div>

      <h2
        className={`text-3xl z-1 md:text-4xl tracking-wider font-bold text-white text-center mb-8 ${anton.className}`}
      >
        Get Involved At <span className="text-[#DEC360]">SGLG</span>
      </h2>

      <Image
        src="/backgrounds/ellipse.png"
        height={1336}
        width={1586}
        alt="bg ellipse"
        className="invisible md:visible absolute left-0 bottom-0 z-0"
      />
      <Image
        src="/backgrounds/ellipse_long.png"
        height={3994}
        width={684}
        alt="bg ellipse"
        className="md:invisible visible absolute left-0 bottom-0 z-0 h-[99%]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-1">
        {ministries.map((ministry, index) => (
          <MinistryCard
            key={index}
            title={ministry.title}
            description={ministry.description}
            icon={ministry.icon}
            slug={ministry.slug}
          />
        ))}
      </div>
    </section>
  );
}
