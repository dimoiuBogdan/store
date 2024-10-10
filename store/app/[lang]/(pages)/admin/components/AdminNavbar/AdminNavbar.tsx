"use client";

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import AdminNavbarHelper from "./helpers/admin-navbar.helper";

export default function AdminNavbar() {
  const pathname = usePathname();

  const { getPageTitle } = AdminNavbarHelper;

  return (
    <div className="text-primary flex h-16 w-full items-center px-2">
      <div className="flex items-center gap-x-2">
        <ChevronRight className="cursor-pointer" />
        <h1 className="text-2xl font-medium">{getPageTitle(pathname)}</h1>
      </div>
    </div>
  );
}
