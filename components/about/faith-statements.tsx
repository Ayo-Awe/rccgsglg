import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faithStatements = [
  {
    title: "We believe in God the Father, the Creator of Heaven and Earth.",
  },
  {
    title:
      "We believe in Jesus Christ, His Son, who was crucified for the sins of all mankind and rose on the third day to sit at the right hand of God the Father.",
  },
  {
    title: "We believe in the Holy Spirit, who dwells in us and guides us according to the will of the Father.",
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
    title: "We believe in water baptism in the name of the Father, Son and Holy Spirit.",
  },
]

export default function FaithStatements() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="max-w-6xl mx-auto text-white">
        <Tabs defaultValue="faith" className="w-full">
          <TabsList className="bg-white/10 w-full justify-start rounded-none border-b border-white/20">
            <TabsTrigger value="faith" className="text-white data-[state=active]:bg-white/20">
              Faith Statements
            </TabsTrigger>
            <TabsTrigger value="vision" className="text-white data-[state=active]:bg-white/20">
              Our Vision/Mission
            </TabsTrigger>
            <TabsTrigger value="values" className="text-white data-[state=active]:bg-white/20">
              Our Core Values
            </TabsTrigger>
          </TabsList>
          <TabsContent value="faith" className="mt-8">
            <h2 className="text-3xl font-bold mb-8">Faith Statements</h2>
            <div className="grid gap-4">
              {faithStatements.map((statement, index) => (
                <div key={index} className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  {statement.title}
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="vision" className="mt-8">
            <h2 className="text-3xl font-bold mb-8">Our Vision/Mission</h2>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              To spread the word of God and make disciples of all nations, following the Great Commission of Jesus
              Christ.
            </div>
          </TabsContent>
          <TabsContent value="values" className="mt-8">
            <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              Love, Faith, Excellence, Integrity, and Service to God and humanity.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

