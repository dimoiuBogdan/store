import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import FooterLink from "./FooterLink";
import FooterSocialLink from "./FooterSocialLink";

const Footer: FC = () => {
  return (
    <footer className="mt-20 rounded-t-md bg-zinc-800 py-8 text-zinc-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between md:flex-row">
          {/* Logo & Social Media Section */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="mb-4 flex items-center">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={40}
                height={40}
              />
              <span className="ml-2 text-xl font-bold">Your Company</span>
            </Link>
            <div className="flex space-x-4">
              <FooterSocialLink
                href="https://facebook.com"
                ariaLabel="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </FooterSocialLink>
              <FooterSocialLink href="https://twitter.com" ariaLabel="Twitter">
                <Twitter className="h-6 w-6" />
              </FooterSocialLink>
              <FooterSocialLink
                href="https://instagram.com"
                ariaLabel="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </FooterSocialLink>
              <FooterSocialLink
                href="https://linkedin.com"
                ariaLabel="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </FooterSocialLink>
            </div>
          </div>

          {/* App Pages Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </nav>
          </div>

          {/* Legal Pages Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <nav>
              <ul className="space-y-2">
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-of-service">
                  Terms of Service
                </FooterLink>
                <FooterLink href="/disclaimer">Disclaimer</FooterLink>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
