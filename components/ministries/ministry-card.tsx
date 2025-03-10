import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Music,
  Users,
  BookOpen,
  Baby,
  UserCheck,
  Heart,
  Video,
  Settings,
  MessageSquare,
  Book,
  Shield,
  Briefcase,
  PenToolIcon as Tool,
} from "lucide-react"

interface MinistryCardProps {
  title: string
  description: string
  icon: string
}

export default function MinistryCard({ title, description, icon }: MinistryCardProps) {
  // Function to render the appropriate icon
  const renderIcon = () => {
    switch (icon) {
      case "music":
        return <Music className="h-5 w-5 text-[#d4af37]" />
      case "users":
        return <Users className="h-5 w-5 text-[#d4af37]" />
      case "prayer":
        return <Users className="h-5 w-5 text-[#d4af37]" /> // Using Users as prayer icon
      case "baby":
        return <Baby className="h-5 w-5 text-[#d4af37]" />
      case "user-check":
        return <UserCheck className="h-5 w-5 text-[#d4af37]" />
      case "book-open":
        return <BookOpen className="h-5 w-5 text-[#d4af37]" />
      case "heart":
        return <Heart className="h-5 w-5 text-[#d4af37]" />
      case "video":
        return <Video className="h-5 w-5 text-[#d4af37]" />
      case "settings":
        return <Settings className="h-5 w-5 text-[#d4af37]" />
      case "message-square":
        return <MessageSquare className="h-5 w-5 text-[#d4af37]" />
      case "book":
        return <Book className="h-5 w-5 text-[#d4af37]" />
      case "shield":
        return <Shield className="h-5 w-5 text-[#d4af37]" />
      case "mop":
        return <Briefcase className="h-5 w-5 text-[#d4af37]" /> // Using Briefcase as mop icon
      case "theater":
        return <Video className="h-5 w-5 text-[#d4af37]" /> // Using Video as theater icon
      case "tool":
        return <Tool className="h-5 w-5 text-[#d4af37]" />
      default:
        return <Briefcase className="h-5 w-5 text-[#d4af37]" />
    }
  }

  // Generate a URL-friendly slug from the title
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")

  return (
    <Card className="bg-[#1E213A] border-[#2A2D49] hover:border-[#d4af37]/50 transition-all relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5 bg-center"></div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end">
        <Link href={`/ministries/${slug}`} className="text-[#d4af37] hover:text-[#f0ca5e] transition-colors">
          <ArrowRight className="h-5 w-5" />
        </Link>
      </CardFooter>
    </Card>
  )
}

