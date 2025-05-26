import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="bg-muted/50">
        <CardContent className="flex items-start space-x-4 p-6">
          <Phone className="h-5 w-5 text-[#d4af37] mt-1" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-muted-foreground">Contact us also at: +44 20 3732 4687</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardContent className="flex items-start space-x-4 p-6">
          <MapPin className="h-5 w-5 text-[#d4af37] mt-1" />
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-muted-foreground">
              L01-LO2 Studio Hall, Pimlico Academy Lupus Street, London. SW1V 3AT, London, United Kingdom
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="aspect-video w-full rounded-lg overflow-hidden">
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
  )
}

