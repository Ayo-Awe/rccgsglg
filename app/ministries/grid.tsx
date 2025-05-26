import { Anton } from "next/font/google";
import MinistryCard from "./ministry-card";
import Image from "next/image";

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
    icon: "/min_choir.svg",
    slug: "choir",
  },
  {
    title: "Evangelism/ Follow-Up",
    description:
      "Although evangelism is mandatory for all believers, there is a team that is devoted to bringing the Gospel to the local community every Saturday.",
    icon: "/min_evangelism.svg",
    slug: "evangelism",
  },
  {
    title: "Intersessory",
    description:
      "This ministry focuses on supporting the Pastorate in prayer, interceding for the church and its members. The intercessors pray concerning major.",
    icon: "/min_intersessory.svg",
    slug: "intersessory",
  },
  {
    title: "Children & Youth",
    description:
      "This ministry aims to prepare our youth as they venture into life that requires more understanding of the world we live in and prepare their mind.",
    icon: "/min_children.svg",
    slug: "children",
  },
  {
    title: "Usher & Protocol",
    description:
      'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many." Mark 10:42-45.',
    icon: "/min_protocol.svg",
    slug: "protocol",
  },
  {
    title: "Teaching/Training",
    description:
      "The Bible admonishes us to be diligent to present ourselves approved to God as a workman who does not need to be ashamed, handling.",
    icon: "/min_training.svg",
    slug: "teaching",
  },
  {
    title: "Welfare & Hospitality",
    description:
      "The Bible teaches us about caring for widows, the elderly and our brothers and sisters in general. It is the responsibility of all God's children.",
    icon: "/min_welfare.svg",
    slug: "welfare",
  },
  {
    title: "Multimedia",
    description:
      "Welcome to the RCCG SGLG Multimedia Department where our mission is 'Enhancing Your Worship Experience'.",
    icon: "/min_multimedia.svg",
  },
  {
    title: "Technical/Engineering",
    description:
      "The Technical team are responsible for quality of sound and production of concepts derived from live recordings. They are accountable for the.",
    icon: "/min_technical.svg",
    slug: "technical",
  },
  {
    title: "Counselling/Visitation",
    description:
      "The Counselling department of RCCG SGLG offers counseling and support to anyone dealing with difficult situations or circumstances.",
    icon: "/min_counselling.svg",
  },
  {
    title: "Sunday School",
    description:
      "This is the primary disciple-making ministry within our assembly. It helps persons to grow in the knowledge and grace of God through regular and balanced studies of the scriptures.",
    icon: "/min_sunday_school.svg",
  },
  {
    title: "Security",
    description:
      "This team ensures the safety of every individuals around the church premises. They also look to keep away the intruders.",
    icon: "/min_security.svg",
  },
  {
    title: "Sanitation/Decoration",
    description:
      "This dept. is responsible for the physical structure of the building, ensuring that the building is well looked after and ready for use at all times.",
    icon: "/min_sanitation.svg",
  },
  {
    title: "Drama/Humour",
    description:
      "The Drama ministry aims to promote the Gospel through various forms of drama, seeking to inspire, instruct and encourage while entertaining its audience.",
    icon: "/min_drama.svg",
  },
  {
    title: "Building/Maintenance",
    description:
      "This department has a mandate to ensure that the house of God is always available for worship. They have an ultimate vision of erecting a permanent building in the future.",
    icon: "/min_maintenance.svg",
  },
];

export default function MinistriesGrid() {
  return (
    <section className="px-12 pt-8 pb-16 bg-rccg-dark-blue my-10 md:mx-7.5 rounded-3xl relative overflow-hidden">
      <div className="bg-white/10 px-4 py-1 rounded-full mb-8 flex items-center max-w-fit mx-auto">
        <span
          className={`text-sm md:text-2xl font-thin mr-3 ${anton.className}`}
        >
          🎙️
        </span>
        <span className="text-sm uppercase text-[#DEC360]"> Ministries</span>
      </div>

      <h2
        className={`text-3xl md:text-4xl tracking-wider font-bold text-white text-center mb-8 ${anton.className}`}
      >
        Get Involved At <span className="text-[#DEC360]">SGLG</span>
      </h2>

      <Image
        src="/ellipse.png"
        height={1336}
        width={1586}
        alt="bg ellipse"
        className="invisible md:visible absolute left-0 bottom-0 z-0"
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
