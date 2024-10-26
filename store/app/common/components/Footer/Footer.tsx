import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-zinc-800 pt-12 text-white">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div>
          <Image src="/logo.svg" alt="Store Logo" width={120} height={40} />
          <p className="mt-4">
            Elevate your style with our curated collection of accessories.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Facebook">
              <i className="pi pi-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="pi pi-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="pi pi-twitter"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping Policy</Link>
            </li>
            <li>
              <Link href="/returns">Returns & Exchanges</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 bg-zinc-700 text-center">
        <p>&copy; 2023 Your Accessory Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
