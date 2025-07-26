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
import { Menu, X } from "lucide-react";
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
      { name: "Publications", href: "/publications" },
      { name: "Bible Study", href: "/bible-study" },
      { name: "Prayer Requests", href: "/prayer-requests" },
    ],
  },
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
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) =>
              link.children ? (
                // Render parent with children links for mobile
                <div key={link.name} className="flex flex-col space-y-3">
                  <span
                    className={`${arOneSans.className} text-xl text-rccg-dark-blue font-medium`}
                  >
                    {link.name}
                  </span>
                  <div className="flex flex-col space-y-2 ml-4">
                    {link.children.map((childLink) => (
                      <Link
                        key={childLink.name}
                        href={childLink.href}
                        className={`${arOneSans.className} text-lg text-rccg-dark-blue hover:text-rccg-yellow`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {childLink.name}
                      </Link>
                    ))}
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
                  }`}
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
