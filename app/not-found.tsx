import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="mx-auto max-w-md my-20">
        <Image
          src={"/cuate.png"}
          height={350}
          width={350}
          alt="not found"
          className="h-70 w-70 md:h-87.5 md:w-87.5 mx-auto"
        />
        <p className="font-lato font-medium text-[#8993B8] text-center mt-10 md:mt-5 px-2">
          Looks like you&apos;ve hit a dead end. The page you&apos;re looking
          for doesn&apos;t exist or was moved.
        </p>

        <Button
          type="submit"
          asChild
          className="bg-gradient-to-r from-rccg-yellow to-rccg-gold text-[#fafafa] py-3.75 px-8 h-12 mt-5 rounded-sm w-full text-lg"
        >
          <Link href={"/"}>Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
