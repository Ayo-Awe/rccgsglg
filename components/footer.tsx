import Link from "next/link";
import Image from "next/image";

const Facebook = () => (
  <Image src="/facebook.svg" alt="Facebook" width={16} height={16} />
);

const Instagram = () => (
  <Image src="/instagram.svg" alt="Instagram" width={16} height={16} />
);

const Youtube = () => (
  <Image src="/fe_youtube.svg" alt="Youtube" width={16} height={16} />
);

const Twitter = () => (
  <Image src="/akar-icons_x-fill.svg" alt="Twitter" width={16} height={16} />
);

export default function Footer() {
  return (
    <footer className="bg-rccg-dark-blue text-near-white px-6  sm:px-[57px] py-[62px] rounded-2xl sm:rounded-3xl mt-6">
      <div className="flex flex-col sm:flex-row justify-between gap-14 sm:gap-8">
        {/*  --------- Logo --------- */}
        <div>
          <Link href="/" className="flex items-center mb-8">
            <Image
              src="/rccg-logo.svg"
              alt="Church Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
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
            <li>
              <Link href="/resources" className="hover:text-white">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/*  --------- Resources --------- */}
        <div className="sm:mx-auto ">
          <h3 className="text-lg font-bold mb-5">Resources</h3>
          <ul className="space-y-5">
            <li>
              <Link href="/programs-events" className="hover:text-white">
                Programs & Events
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className="hover:text-white">
                Volunteer
              </Link>
            </li>
            <li>
              <Link href="/events-calendar" className="hover:text-white">
                Events Calendar
              </Link>
            </li>
            <li>
              <Link href="/prayer-requests" className="hover:text-white">
                Prayer Requests
              </Link>
            </li>
            <li>
              <Link href="/membership-form" className="hover:text-white">
                Membership Form
              </Link>
            </li>
          </ul>
        </div>

        {/*  --------- Contact --------- */}
        <div className="max-w-[322px]">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4">
            <ContatItem
              icon={
                <Image src="/phone.svg" alt="Phone" width={16} height={36} />
              }
              subtext="+44 20 3752 4087"
              title="Call Us"
            />
            <ContatItem
              icon={
                <Image
                  src="/location.svg"
                  alt="Map Pin"
                  width={16}
                  height={32}
                />
              }
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
            <Facebook />
          </Link>
          <Link href="#">
            <Instagram />
          </Link>
          <Link href="#">
            <Youtube />
          </Link>
          <Link href="#">
            <Twitter />
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
