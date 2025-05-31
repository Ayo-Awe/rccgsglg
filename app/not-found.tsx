import type React from "react";
import "./globals.css";
import { Anton, Lato, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
  variable: "--font-lato",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const roboto = Roboto({
  weight: ["400", "700", "500", "600"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout() {
  return (
    <div
      className={`${lato.className} ${lato.variable} ${anton.variable} ${roboto.variable} px-4 sm:px-8 pb-4 sm:pb-8 max-w-[1440px] mx-auto`}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        <Navbar />
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
              Looks like you&apos;ve hit a dead end. The page you&apos;re
              looking for doesn&apos;t exist or was moved.
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
        <Footer />
      </ThemeProvider>
    </div>
  );
}
