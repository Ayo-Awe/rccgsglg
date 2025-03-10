import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center mb-6">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Church Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <p className="text-gray-300 mb-6">
            Shekinah Glory of the living God is a branch of Redeemed Christian Church of God. Our biggest desire is that
            you grow in the knowledge of God and find practical answers to the tough questions of life. May God bless
            you and enrich your life with His presence and unspeakable joy.
          </p>
        </div>
        <div className="md:ml-auto">
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/connect" className="text-gray-300 hover:text-white">
                Connect
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-gray-300 hover:text-white">
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone className="mr-2 mt-1 h-5 w-5" />
              <span>+44 20 3752 4087</span>
            </li>
            <li className="flex items-start">
              <MapPin className="mr-2 mt-1 h-5 w-5" />
              <div>
                <p>Visit Us</p>
                <p className="text-gray-400 text-sm">
                  LG1, LG2 Studio Hall, Profico Academy, Grange Street, London, SW1V 3AT, London, United Kingdom
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">Copyright © All Rights Reserved 2010 RCCGSLG</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Youtube className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

