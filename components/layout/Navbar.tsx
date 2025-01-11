import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import Forcythelogo from "@/public/assets/hero/forcythelogo.svg";
import Menu from "@/public/menu.svg";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/studio", label: "Studio" },
  { href: "/foundation", label: "Foundation" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 py-7 bg-gradient-to-b from-black/10">
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center sm:gap-20">
            <Link href="/" className="inline-block">
              <Image
                src={Forcythelogo}
                alt="Forcythe Logo"
                width={150}
                height={40}
                priority
                className="w-28 sm:w-32 md:w-auto h-auto"
              />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex">
              Book a Call
            </Button>

            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden p-3 rounded-md hover:bg-white/20 transition-colors"
            >
              <Image
                src={Menu}
                alt=""
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};