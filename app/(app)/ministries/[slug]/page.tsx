import Hero from "../hero";
import Image from "next/image";
import Link from "next/link";

interface Ministry {
  title: string;
  content: string;
  bgColor: string;
  borderColor: string;
  icon: string;
}
const ministries: Record<string, Ministry> = {
  choir: {
    title: "Choir",
    content:
      "Worship is an essential part of the Christian Faith and one of the ways in which we love to worship God is through music. <br/>The music department is filled with dedicated and spirit filled members who are passionate about singing praises and worshipping God with their beautiful voices and instruments that God has given them. Hymns are essential part of our worship services. <br/>Being a part of this department requires dedication, commitment and love for music. The choir meets regularly to practice and learn new songs, which they minister together with the band to the congregations to encourage them in their walk with Christ and to lift up the name of the Lord. They focus on leading worshippers into God&apos;s presence.",
    bgColor: "#A7FE3614",
    icon: "/min_choir2.svg",
    borderColor: "#E3FE3652",
  },
  evangelism: {
    title: "Evangelism/Follow-Up",
    content:
      "Although evangelism is mandatory for all believers, there is a team that is devoted to bringing the Gospel to the local community every Saturday. Our Evangelism Ministry is the platform that enables the church to accomplish the Great Commission and obey the Great Commandment of Christ which is to both reach the ends of the earth in His name whilst and to love our neighbours as ourselves.<br/><br/>This team makes it their duty to take care of non-members of the church by designing and activating projects and programmes that will take the gospel of Christ to the community whilst at the same time meeting their needs and contributing to the development of the community. We also minister to people the way we live our lives",
    bgColor: "#FEAE3614",
    borderColor: "#FEC23652",
    icon: "/min_evangelism2.svg",
  },
  intercessory: {
    title: "Intercessory",
    content:
      "This ministry focuses on supporting the Pastorate in prayer, interceding for the church and its members. The intercessors pray concerning major church events and the weekly services. They also take prayer requests from the congregation<br/>Members of this department set time aside to pray and fast together taking all issues and burdens before God.<br/><br/>This is effectively the engine room of the church as they work endlessly behind the scenes, praying hard for the church, the ministers, the members and whatever needs has been brought to their attention specifically<br/><br/>The bible says in Ephesians 6:17-18 &ldquo;And take the helmet of salvation, and the sword of the Spirit, which is the word of God; praying always with all prayer and supplication in the Spirit, being watchful to this end with all perseverance and supplication for all the saints…&rdquo;",
    bgColor: "#3651FE14",
    borderColor: "#3654FE52",
    icon: "/min_intercessory2.svg",
  },
  protocol: {
    title: "Usher & Protocol",
    content:
      "&ldquo;For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.&rdquo; Mark 10:42-45<br/><br/>The Ushering ministry is important to all who regularly attend our church and to new guests and visitors who want to be fed the Word of God without interruption or confusion.<br/></br/>Our responsibility is to welcome, greet, assist, seat, serve and keep the facility safe and secure during worship services or events.<br/><br/>We have an elite group of men and women ushers who are trained and focused to achieve the needs of the church leaders and congregation in a Godly manner. We love what we do and it's a ministry that is taken very seriously.",
    bgColor: "#D636FE14",
    borderColor: "#EA36FE52",
    icon: "/min_protocol2.svg",
  },
  technical: {
    title: "Technical/Engineering",
    borderColor: "#36FED652",
    bgColor: "#36FED614",
    icon: "/min_technical2.svg",
    content:
      "The Technical team are responsible for quality of sound and production of concepts derived from live recordings. They are accountable for the projection and amplification of every electrical appliance used during church services.<br/><br/>This team ensures a successful sight and sound experience for the entire congregation during services and other events.",
  },
  welfare: {
    title: "Welfare",
    bgColor: "#FE363914",
    borderColor: "#FE363952",
    icon: "/min_welfare2.svg",
    content:
      "The Bible teaches us about caring for widows, the elderly and our brothers and sisters in general. It is the responsibility of all of God&apos;s children to care for those who are in need.<br/><br/>The welfare department&apos;s focus is to fulfil this requirement by giving support to those who are in need, whether it is financial support, visiting people in their homes to give them an encouraging word or by counselling or mentoring them.<br/><br/>This is the department dedicated to the welfare of the church members. The department is aimed at closing the backdoor of the church by ensuring that member&apos;s needs are met whilst also organising programmes targeted towards the personal development of members. In this department we take it very seriously that we are indeed our brother&apos;s keeper. So come and help us share God&apos;s love.",
  },
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(ministries).map((key) => ({ slug: key }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function MinistryDetailsPage({ params }: Props) {
  const { slug } = await params;
  const ministry = ministries[slug];

  return (
    <main className="relative">
      <Hero />
      <div
        style={{
          borderColor: ministry.borderColor,
          backgroundColor: ministry.bgColor,
        }}
        className={`rounded-3xl p-8 my-10 border`}
      >
        <Link href="/ministries">
          <Image
            src="/back.svg"
            height={44}
            width={121}
            alt="go back"
            className="mb-6"
          />
        </Link>
        <h2 className="font-anton text-5xl text-rccg-dark-blue mb-6">
          {ministry.title}
        </h2>
        <p
          className="max-w-[950px] text-lg font-lato font-normal mb-6"
          dangerouslySetInnerHTML={{ __html: ministry.content }}
        />
      </div>
      <Image
        src={ministry.icon}
        height={332}
        width={332}
        alt={`${ministry.title} icon`}
        className="absolute bottom-0 right-0 ml-auto bg-center z-10"
      />
    </main>
  );
}
