import Link from "next/link";
import {
  RccgLogo,
  Facebook,
  Instagram,
  FeYoutube,
  AkarIconsXFill,
  Phone,
  Location,
} from "@/components/icons";

const FacebookIcon = () => <Facebook className="w-4 h-4" />;
const InstagramIcon = () => <Instagram className="w-4 h-4" />;
const YoutubeIcon = () => <FeYoutube className="w-4 h-4" />;
const TwitterIcon = () => <AkarIconsXFill className="w-4 h-4" />;

export default function Footer() {
  return (
    <footer className="bg-rccg-dark-blue text-near-white px-6  sm:px-[57px] py-[62px] rounded-2xl sm:rounded-3xl mt-6">
      <div className="flex flex-col sm:flex-row justify-between gap-14 sm:gap-8">
        {/*  --------- Logo --------- */}
        <div>
          <Link href="/" className="flex items-center mb-8">
            <RccgLogo className="rounded-full w-15 h-15" />
          </Link>
          <p className="text-near-white mb-6 text-justify max-w-[474px]">
            Shekinah Glory of the living God is a branch of Redeemed Christian
            Church of God. Our biggest desire is that you grow in the knowledge
            of God and find practical answers to the tough questions of life.
            May God watch over you support you, and enrich your life with
            unspeakable joy.
          </p>
        </div>

        {/*  --------- Links --------- */}
        <div className="sm:mx-auto ">
          <h3 className="text-lg font-bold mb-5">Links</h3>
          <ul className="space-y-5">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/connect" className="hover:text-white">
                Connect
              </Link>
            </li>
          </ul>
        </div>

        {/*  --------- Resources --------- */}
        <div className="sm:mx-auto ">
          <h3 className="text-lg font-bold mb-5">Resources</h3>
          <ul className="space-y-5">
            <li>
              <Link href="/sermons" className="hover:text-white">
                Sermons
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/prayer-requests" className="hover:text-white">
                Prayer Requests
              </Link>
            </li>
            <li>
              <Link href="/#programmes-events" className="hover:text-white">
                Programs & Events
              </Link>
            </li>
          </ul>
        </div>

        {/*  --------- Contact --------- */}
        <div className="max-w-[322px]">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4">
            <ContatItem
              icon={<Phone className="w-4 h-9" />}
              subtext="+44 20 3752 4087"
              title="Call Us"
            />
            <ContatItem
              icon={<Location className="w-10 h-10" />}
              title="Visit Us"
              subtext="L01 -LO2 Studio Hall, Pimlico Academy Lupus Street, London. SW1V 3AT, London, United Kingdom"
            />
          </ul>
        </div>
      </div>

      {/*  --------- Copyright and Socials --------- */}

      <div className="mx-auto mt-10 pt-8 border-t-[0.5px] border-white flex flex-col md:flex-row justify-between gap-6 sm:gap-0">
        <p className="text-grey text-sm">Copyright ©</p>
        <p className="text-grey text-sm">All Rights Reserved 2010 RCCGSLG</p>
        <div className="flex space-x-4">
          <Link href="#">
            <FacebookIcon />
          </Link>
          <Link href="#">
            <InstagramIcon />
          </Link>
          <Link href="#">
            <YoutubeIcon />
          </Link>
          <Link href="#">
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function ContatItem({
  icon,
  title,
  subtext,
}: {
  icon: React.ReactNode;
  title: string;
  subtext: string;
}) {
  return (
    <li className="flex items-start gap-4">
      {icon}
      <div>
        <p className="text-grey mb-1">{title}</p>
        <p className="text-near-white">{subtext}</p>
      </div>
    </li>
  );
}
