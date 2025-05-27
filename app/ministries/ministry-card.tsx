import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Poppins, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({ weight: ["700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

interface MinistryCardProps {
  title: string;
  description: string;
  icon: string;
  slug?: string;
}

export default function MinistryCard({
  title,
  description,
  icon,
  slug,
}: MinistryCardProps) {
  // If there's no slug, we just render a normal card:
  const isClickable = Boolean(slug);

  return (
    <Card className="relative bg-[#FAFAFA1A] rounded-[14px] border-[#FAFAFA1A] border-2 hover:border-[#d4af37]/50 transition-all overflow-hidden group py-4 h-full">
      {isClickable && (
        // Invisible full‐cover link
        <Link
          href={`/ministries/${slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View details for ${title}`}
        />
      )}

      <Image
        src={icon}
        height={198}
        width={198}
        alt={`${title} icon`}
        className="absolute top-0 right-0 ml-auto bg-center z-0"
      />

      <CardContent className="pt-2 px-4 z-5">
        <h3
          className={`text-xl lg:text-2xl font-bold text-white mb-3 ${roboto.className}`}
        >
          {title}
        </h3>
        <p className={`text-white text-sm lg:text-base ${poppins.className}`}>
          {description}
        </p>
      </CardContent>

      <CardFooter className="ml-auto my-0 md:mt-auto py-0 z-5">
        {isClickable && (
          <div className="h-8.5 w-8.5 bg-[#FFFFFF1A] flex items-center justify-center rounded-full">
            <Image
              src="/arrow-up-right.svg"
              alt="Arrow Right"
              width={24}
              height={24}
            />
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
