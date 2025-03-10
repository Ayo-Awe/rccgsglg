import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WorkforceSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Ministries Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-sm text-muted-foreground">MINISTRIES</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
              Popularly Referred To As The Church's <span className="text-[#d4af37]">Workforce</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              We are able to function largely due to the selfless commitment people, who give their time to run various
              departments and ministries
            </p>
            <Button asChild className="bg-[#d4af37] hover:bg-[#b8971f]">
              <Link href="/ministries">View More</Link>
            </Button>
          </CardContent>
        </Card>
        <div className="relative">
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="Church Volunteers"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  )
}

