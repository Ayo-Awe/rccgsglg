import type React from "react";
import "./globals.css";
import { Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

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
      <body className={`${lato.className} px-4 sm:px-8 pb-4 sm:pb-8`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
