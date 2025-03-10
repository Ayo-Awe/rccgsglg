import MinistryCard from "./ministry-card"
import Image from "next/image"

// Define ministry data
const ministries = [
  {
    title: "Choir",
    description:
      "Worship is an essential part of the Christian Faith and one of the ways in which we love to worship God is through music.",
    icon: "music",
  },
  {
    title: "Evangelism/ Follow-Up",
    description:
      "Although evangelism is mandatory for all believers, there is a team that is devoted to bringing the Gospel to the local community every Saturday.",
    icon: "users",
  },
  {
    title: "Intersessory",
    description:
      "This ministry focuses on supporting the Pastorate in prayer, interceding for the church and its members. The intercessors pray concerning major.",
    icon: "prayer",
  },
  {
    title: "Children & Youth",
    description:
      "This ministry aims to prepare our youth as they venture into life that requires more understanding of the world we live in and prepare their mind.",
    icon: "baby",
  },
  {
    title: "Usher & Protocol",
    description:
      'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many." Mark 10:42-45.',
    icon: "user-check",
  },
  {
    title: "Teaching/Training",
    description:
      "The Bible admonishes us to be diligent to present ourselves approved to God as a workman who does not need to be ashamed, handling.",
    icon: "book-open",
  },
  {
    title: "Welfare & Hospitality",
    description:
      "The Bible teaches us about caring for widows, the elderly and our brothers and sisters in general. It is the responsibility of all God's children.",
    icon: "heart",
  },
  {
    title: "Multimedia",
    description:
      "Welcome to the RCCG SGLG Multimedia Department where our mission is 'Enhancing Your Worship Experience'.",
    icon: "video",
  },
  {
    title: "Technical/Engineering",
    description:
      "The Technical team are responsible for quality of sound and production of concepts derived from live recordings. They are accountable for the.",
    icon: "settings",
  },
  {
    title: "Counselling/Visitation",
    description:
      "The Counselling department of RCCG SGLG offers counseling and support to anyone dealing with difficult situations or circumstances.",
    icon: "message-square",
  },
  {
    title: "Sunday School",
    description:
      "This is the primary disciple-making ministry within our assembly. It helps persons to grow in the knowledge and grace of God through regular and balanced studies of the scriptures.",
    icon: "book",
  },
  {
    title: "Security",
    description:
      "This team ensures the safety of every individuals around the church premises. They also look to keep away the intruders.",
    icon: "shield",
  },
  {
    title: "Sanitation/Decoration",
    description:
      "This dept. is responsible for the physical structure of the building, ensuring that the building is well looked after and ready for use at all times.",
    icon: "mop",
  },
  {
    title: "Drama/Humour",
    description:
      "The Drama ministry aims to promote the Gospel through various forms of drama, seeking to inspire, instruct and encourage while entertaining its audience.",
    icon: "theater",
  },
  {
    title: "Building/Maintenance",
    description:
      "This department has a mandate to ensure that the house of God is always available for worship. They have an ultimate vision of erecting a permanent building in the future.",
    icon: "tool",
  },
]

export default function MinistriesGrid() {
  return (
    <section className="py-16 px-4 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white/10 rounded-full p-2">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Who We Are Icon"
              width={24}
              height={24}
              className="opacity-70"
            />
          </div>
          <span className="text-sm text-white/70 ml-2">WHO WE ARE</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Get Involved At <span className="text-[#d4af37]">SGLG</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <MinistryCard key={index} title={ministry.title} description={ministry.description} icon={ministry.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

