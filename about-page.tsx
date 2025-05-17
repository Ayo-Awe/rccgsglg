"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mic } from "lucide-react";
import { CoreValueAccordion } from "@/components/core-value-accordion";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("faith");

  const coreValues = [
    {
      title: "Faith",
      icon: "✝",
      content:
        "We receive direction and motivation from God and His word and believe that with Him on our side we can achieve what otherwise seems impossible.",
      defaultOpen: true,
    },
    {
      title: "Commitment",
      icon: "+",
      content:
        "We are dedicated to serving God and humanity with unwavering devotion and perseverance.",
    },
    {
      title: "Holiness",
      icon: "✝",
      content:
        "We strive to live a life that is set apart and pleasing to God in all our ways.",
    },
    {
      title: "Integrity",
      icon: "✝",
      content:
        "We uphold honesty, transparency, and moral uprightness in all our dealings.",
    },
    {
      title: "Excellence",
      icon: "✝",
      content:
        "We pursue the highest standards in all we do, giving our best to honor God.",
    },
    {
      title: "Discipline",
      icon: "✝",
      content:
        "We practice self-control and adhere to godly principles in our daily lives.",
    },
    {
      title: "People",
      icon: "✝",
      content:
        "We value and respect all individuals as created in God's image, showing love and compassion to all.",
    },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-[#fafafa]">
      {/* Header Section */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 mb-4">
            <Mic className="w-5 h-5 text-[#121935]" />
            <span className="text-sm font-medium uppercase text-[#121935]">
              WHO WE ARE
            </span>
          </div>

          <h1 className="text-6xl font-bold">
            <div className="text-[#121935]">ABOUT</div>
            <div>
              <span className="text-[#121935]">RCCG </span>
              <span className="text-[#d4af37]">SGLG</span>
            </div>
          </h1>
        </div>

        <div className="md:col-span-8 text-[#121935] space-y-4">
          <p>
            The Redeemed Christian Church of God, Shekhinah Glory of the Living
            God, a family church is a branch of The Redeemed Christian Church of
            God worldwide, which was established in 1952 by Pa. Josiah
            Akindayomi. Pastor E.A Adeboye took over as the General Overseer in
            1981. Since then the church continues to enjoy open explosion,
            growing in leap and bound throughout the world. We are situated in
            the heart of Greater London, where we run services and teachings
            that are suitable for people of all ages. RCCG SGLG is a dynamic
            church and believe in preaching the word in a simple and
            straightforward manner. Our watchword is Jesus Christ, the same
            yersterday, today and forever. (Heb. 13: 8).
          </p>
          <p>
            I invite you to worship with us and discover the riches of God's
            glory through genuine worship and sound biblical teachings.
          </p>
        </div>
      </div>

      {/* Faith Statements Section */}
      <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#3b5998] to-[#2c7873] text-white">
        <div className="p-8 pb-0">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-6">
            <Select value={activeTab} onValueChange={handleTabChange}>
              <SelectTrigger className="bg-white/10 border-none text-white">
                <SelectValue placeholder="Select a section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="faith">Faith Statements</SelectItem>
                <SelectItem value="vision">Our Vision/Mission</SelectItem>
                <SelectItem value="values">Our Core Values</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="bg-transparent mb-8">
                <TabsTrigger
                  value="faith"
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70 rounded-md px-6 py-2"
                >
                  Faith Statements
                </TabsTrigger>
                <TabsTrigger
                  value="vision"
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70 rounded-md px-6 py-2"
                >
                  Our Vision/Mission
                </TabsTrigger>
                <TabsTrigger
                  value="values"
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70 rounded-md px-6 py-2"
                >
                  Our Core Values
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="p-8 pt-0">
          {/* Faith Statements Content */}
          {activeTab === "faith" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-5xl font-bold">
                  Faith
                  <br />
                  Statements
                </h2>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="bg-white/10 p-4 rounded-md">
                  <p>
                    We believe in God the Father, the Creator of Heaven and
                    Earth.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>
                    We believe in Jesus Christ, His Son, who was crucified for
                    the sins of all mankind and rose on the third day to sit at
                    the right hand of God the Father.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>
                    We believe in the Holy Spirit, who dwells in us and guides
                    us according to the will of the Father.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>We believe in the Bible as the infallible Word of God.</p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>
                    We believe in divine healing, the restoration of health to
                    the one who believes and acts out God's word, and that Jesus
                    is the Healer.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>
                    We believe in tithing and bringing offerings into the local
                    church. We also believe in giving alms, caring for the poor,
                    sick, homeless and otherwise unfortunate.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>
                    We believe in water baptism in the name of the Father, Son
                    and Holy Spirit.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Vision/Mission Content */}
          {activeTab === "vision" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-5xl font-bold">
                  Our Vision/
                  <br />
                  Mission
                </h2>
                <div className="mt-8 pr-8">
                  <p>
                    As received by the General Overseer (G.O.), Pastor E. A.
                    Adeboye, and communicated to the Headquarters leaders, our
                    vision and mission statement shall remain intact, with a
                    qualifying addendum in view of the peculiarity of the
                    demography in the North American region.
                  </p>
                </div>
              </div>
              <div className="md:col-span-8 space-y-4">
                <div className="bg-white/10 p-4 rounded-md">
                  <p>To make heaven</p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>To take as many people with us.</p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>
                    To have a member of RCCG in every family of all nations.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>
                    To accomplish No. 1 above, holiness will be our lifestyle
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-md">
                  <p>
                    To accomplish No. 2 and 3 above, we will plant churches
                    within five minutes walking distance in every city and town
                    of developing countries and within five minutes driving
                    distance in every city and town of developed countries.
                  </p>
                </div>

                <div className="mt-8 font-medium italic">
                  <p>
                    *We will pursue these objectives until every Nation in the
                    world is reached for the Lord Jesus Christ.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Core Values Content */}
          {activeTab === "values" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-5xl font-bold">
                  Our Core
                  <br />
                  Values
                </h2>
              </div>
              <div className="md:col-span-8">
                <CoreValueAccordion values={coreValues} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
