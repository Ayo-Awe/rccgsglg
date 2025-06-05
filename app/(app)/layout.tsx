import type React from "react";
import "./globals.css";
import { Anton, Lato, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

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

export const metadata = {
  title: "Shekinah Glory of the Living God",
  description: "A branch of The Redeemed Christian Church of God",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} ${lato.variable} ${anton.variable} ${roboto.variable} px-4 sm:px-8 pb-4 sm:pb-8 max-w-[1440px] mx-auto`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
