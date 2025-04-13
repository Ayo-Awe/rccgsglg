import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// import {
//   Music,
//   Users,
//   BookOpen,
//   Baby,
//   UserCheck,
//   Heart,
//   Video,
//   Settings,
//   MessageSquare,
//   Book,
//   Shield,
//   Briefcase,
//   PenToolIcon as Tool,
// } from "lucide-react";

interface MinistryCardProps {
  title: string;
  description: string;
  icon: string;
}

// Generate a URL-friendly slug from the title
const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function MinistryCard({
  title,
  description,
}: MinistryCardProps) {
  const slug = slugify(title);

  return (
    <Card className="bg-[#1E213A] border-[#2A2D49] hover:border-[#d4af37]/50 transition-all relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5 bg-center"></div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end">
        <Link
          href={`/ministries/${slug}`}
          className="text-[#d4af37] hover:text-[#f0ca5e] transition-colors"
        >
          <ArrowRight className="h-5 w-5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
