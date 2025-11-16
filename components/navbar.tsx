"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RccgLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { AR_One_Sans } from "next/font/google";

const arOneSans = AR_One_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: "normal",
});

type NavLink = {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Ministries", href: "/ministries" },
  {
    name: "Resources",
    children: [
      { name: "Sermons", href: "/sermons" },
      { name: "Events", href: "/events" },
      { name: "Gallery", href: "/gallery" },
      { name: "Prayer Requests", href: "/prayer-requests" },
    ],
  },
  { name: "House Fellowship", href: "/house-fellowship" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileDropdownOpen(null);
  }, [pathname]);

  const toggleMobileDropdown = (linkName: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === linkName ? null : linkName);
  };

  return (
    <header className="bg-white py-2 mb-4 sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center z-50">
          <RccgLogo className="rounded-full h-10 w-10 md:h-15 md:w-15" />
        </Link>

        <NavigationMenu className="hidden lg:flex text-lg" viewport={false}>
          <NavigationMenuList className="flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                {link.children ? (
                  // Render dropdown for items with children
                  <>
                    <NavigationMenuTrigger
                      className={`${arOneSans.className} text-base font-normal text-rccg-dark-blue hover:text-rccg-yellow p-0`}
                    >
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border-gray-200">
                      <div className="w-40">
                        {link.children.map((childLink) => (
                          <NavigationMenuLink key={childLink.name} asChild>
                            <Link
                              href={childLink.href}
                              className={`${arOneSans.className} text-base text-rccg-dark-blue hover:text-rccg-yellow hover:bg-gray-50 transition-colors`}
                            >
                              {childLink.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  // Render regular link for items without children
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href!}
                      className={`${arOneSans.className} ${
                        pathname === link.href
                          ? "text-rccg-yellow font-medium"
                          : "text-rccg-dark-blue hover:text-rccg-yellow"
                      }`}
                    >
                      <span className="text-base"> {link.name} </span>
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
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
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.children ? (
                // Render parent with dropdown for mobile
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={() => toggleMobileDropdown(link.name)}
                    className={`${arOneSans.className} text-xl text-rccg-dark-blue font-medium flex items-center justify-between hover:text-rccg-yellow transition-colors`}
                  >
                    {link.name}
                    {mobileDropdownOpen === link.name ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileDropdownOpen === link.name 
                        ? "max-h-96 opacity-100 mt-3" 
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col space-y-2 ml-4 border-l-2 border-gray-200 pl-4">
                      {link.children.map((childLink) => (
                        <Link
                          key={childLink.name}
                          href={childLink.href}
                          className={`${arOneSans.className} text-lg text-rccg-dark-blue hover:text-rccg-yellow transition-colors`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {childLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Render regular link for items without children
                <Link
                  key={link.name}
                  href={link.href!}
                  className={`${arOneSans.className} text-xl ${
                    pathname === link.href
                      ? "text-rccg-yellow font-medium"
                      : "text-rccg-dark-blue hover:text-rccg-yellow"
                  } transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
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
