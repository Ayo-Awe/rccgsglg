import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Poppins, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  weight: ["700"],
});

const poppins = Poppins({
  weight: ["400"],
});

interface MinistryCardProps {
  title: string;
  description: string;
  icon: string;
  slug?: string;
}

// Generate a URL-friendly slug from the title
const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function MinistryCard({
  title,
  description,
  icon,
  slug,
}: MinistryCardProps) {
  return (
    <Card className="bg-[#FAFAFA1A] rounded-[14px] border-[#FAFAFA1A] border-2 hover:border-[#d4af37]/50 transition-all relative overflow-hidden group">
      <Image
        src={icon}
        height={198}
        width={198}
        alt={`${title} icon`}
        className="absolute top-0 right-0 ml-auto bg-center"
      />
      <CardContent className="pt-2">
        <h3
          className={`text-2xl font-bold text-white mb-3 ${roboto.className}`}
        >
          {title}
        </h3>
        <p className={`text-white text-base ${poppins.className}`}>
          {description}
        </p>
      </CardContent>

      <CardFooter className="ml-auto mt-auto">
        {slug && (
          <Link
            href={`/ministries/${slug}`}
            className="text-[#d4af37] hover:text-[#f0ca5e] transition-colors"
          >
            <div className="h-8.5 w-8.5 bg-[#FFFFFF1A] flex items-center justify-center rounded-full">
              <Image
                src="/arrow-up-right.svg"
                alt="Arrow Right"
                width={24}
                height={24}
              />
            </div>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
