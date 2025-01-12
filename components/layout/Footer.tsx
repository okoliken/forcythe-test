"use client";

import Image from "next/image";
import Link from "next/link";
import Forcythelogo from "@/public/assets/hero/forcythelogo.svg";
import { socialIons } from "@/lib/footer";

const socialLinks = [
  {
    href: "https://www.facebook.com/forcythe/",
    icon:  socialIons.Facebook,
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/forcythe",
    icon:  socialIons.Instagram,
    alt: "Instagram",
  },
  {
    href: "https://twitter.com/forcythe_",
    icon:  socialIons.Twitter,
    alt: "Twitter",
  },
  {
    href: "https://www.linkedin.com/company/forcythe/",
    icon:  socialIons.Linkedin,
    alt: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@forcythe",
    icon:  socialIons.Youtube,
    alt: "YouTube",
  },
  {
    href: "https://podcasters.spotify.com/pod/show/the-future-insight",
    icon:  socialIons.Spotify,
    alt: "Spotify",
  },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services#portfolio", label: "Portfolio" },
  { href: "/studio", label: "Studio" },
  { href: "/foundation", label: "Foundation" },
  { href: "/career", label: "Careers" },
  { href: "/blog", label: "Blog" },
];

const Footer = () => {
  return (
    <div
    className="bg-[#071626] py-10"
    >
      <div className="lg:grid lg:grid-cols-3 my-10 py-10 place-content-center container mx-auto px-4 md:px-5">
        <div className="max-w-lg mb-10 lg:mb-0">
          <div className="w-full grid grid-cols-4">
            <input
              className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
              placeholder="Your Email Address"
              type="text"
            />
            <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3 mt-5 items-center">
            <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
              <input
                className="hidden"
                id="agreement"
                type="checkbox"
                name="agreement"
              />
            </div>
            <label htmlFor="agreement" className="text-sm cursor-pointer">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
          <div className="lg:pl-14 md:col-span-2 md:pr-10">
            <Image
              src={Forcythelogo}
              alt="Forcythe logo"
              width={130}
              height={9}
              priority
              className="mb-5 md:mb-8"
            />
            <p className="text-base text-white/60 leadin font-normal">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 hidden md:flex items-center gap-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                >
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:pl-10">
            <h3 className="mb-8 text-2xl font-bold">Company</h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link, index) => (
                <li key={index} className="text-base text-[#B3D0F2] font-medium">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                >
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright border-t-[1px] border-accent">
        <p className="text-accent2 text-sm mt-5 text-center md:text-left">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
