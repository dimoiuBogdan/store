"use client";

import { CarTaxiFront, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type FC } from "react";
import { cn, getCurrentPathWithoutLang } from "../../utils/utils";
import NavbarIcons from "./NavbarIcons";
import NavbarMobileMenu from "./NavbarMobileMenu";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentPath = getCurrentPathWithoutLang(pathname);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-zinc-800 px-2 shadow-md transition-all">
      <div className="container mx-auto">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <CarTaxiFront className="h-8 w-8 text-primary" />
            </Link>
          </div>

          {/* Mid */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium",
                    "text-zinc-200 hover:text-primary",
                    item.href === currentPath && "text-primary",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:block">
            <NavbarIcons />
          </div>

          {/* Hamburger Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <NavbarIcons />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:hover:bg-gray-700"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <NavbarMobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={NAV_ITEMS}
      />
    </nav>
  );
};

export default Navbar;
