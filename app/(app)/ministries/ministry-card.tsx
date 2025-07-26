import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Poppins, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

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
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="relative bg-[#FAFAFA1A] rounded-[14px] border-[#FAFAFA1A] border-2 hover:border-[#d4af37]/50 transition-all overflow-hidden group py-4 h-full min-h-55">
        {isClickable && (
          // Invisible full‐cover link
          <Link
            href={`/ministries/${slug}`}
            className="absolute inset-0 z-10"
            aria-label={`View details for ${title}`}
          />
        )}

        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={icon}
            height={198}
            width={198}
            alt={`${title} icon`}
            className="absolute top-0 right-0 ml-auto bg-center z-0"
          />
        </motion.div>

        <CardContent className="pt-2 px-4 z-5">
          <motion.h3
            className={`text-xl lg:text-2xl font-bold text-white mb-3 ${roboto.className}`}
            whileHover={{ color: "#d4af37" }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className={`text-white text-sm  ${poppins.className}`}>
            {description}
          </p>
        </CardContent>

        <CardFooter className="ml-auto my-0 md:mt-auto py-0 z-5">
          {isClickable && (
            <motion.div 
              className="h-8.5 w-8.5 bg-[#FFFFFF1A] flex items-center justify-center rounded-full"
              whileHover={{ scale: 1.2, backgroundColor: "#d4af37" }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/arrow-up-right.svg"
                alt="Arrow Right"
                width={24}
                height={24}
              />
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
