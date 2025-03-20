import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About", href: "/about", active: false },
  { name: "Ministries", href: "/ministries", active: false },
  { name: "Resources", href: "/resources", active: false },
  { name: "House Fellowship", href: "/house-fellowship", active: false },
];

export default function Navbar() {
  return (
    <header className="bg-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="Church Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                link.active
                  ? "text-[#9b8334] font-medium"
                  : "text-[#333] hover:text-[#7d6a2a]"
              }
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-[#9b8334] hover:bg-[#7d6a2a]">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={
                    link.active
                      ? "text-[#9b8334] font-medium"
                      : "text-[#333] hover:text-[#7d6a2a]"
                  }
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#9b8334] hover:bg-[#7d6a2a] w-full"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
