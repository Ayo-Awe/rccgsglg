"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AR_One_Sans } from "next/font/google";

const arOneSans = AR_One_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: "normal",
});

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Ministries", href: "/ministries" },
  { name: "Resources", href: "/resources" },
  { name: "House Fellowship", href: "/house-fellowship" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white py-2 mb-4 sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center z-50">
          <Image
            src="/rccg-logo.svg"
            alt="Church Logo"
            width={60}
            height={60}
            className="rounded-full h-10 w-10 md:h-15 md:w-15"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${arOneSans.className} ${
                pathname === link.href
                  ? "text-rccg-yellow font-medium"
                  : "text-rccg-dark-blue hover:text-rccg-yellow"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="bg-gradient-to-r from-rccg-yellow to-rccg-gold"
          >
            <Link
              href="/contact"
              className="text-[#fafafa] py-2.5 px-7 rounded-sm"
            >
              Contact Us
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white pt-24 px-6 transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${arOneSans.className} text-xl ${
                  pathname === link.href
                    ? "text-rccg-yellow font-medium"
                    : "text-rccg-dark-blue hover:text-rccg-yellow"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r text-[#fafafa] from-rccg-yellow to-rccg-gold mt-4 max-w-sm md:w-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
