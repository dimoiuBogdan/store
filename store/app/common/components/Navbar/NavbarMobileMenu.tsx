import { X } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import { cn } from "../../utils/utils";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: { name: string; href: string }[];
};

const NavbarMobileMenu: FC<Props> = ({ isOpen, setIsOpen, navItems }) => {
  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 right-0 top-0 z-50 w-64 transform bg-zinc-800 shadow-lg transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay to close the mobile menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default NavbarMobileMenu;
