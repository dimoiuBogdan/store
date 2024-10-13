"use client";

import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import AdminNavbarHelper from "./helpers/admin-navbar.helper";

export default function AdminNavbar() {
  const t = useTranslations("admin");
  const pathname = usePathname();
  const { getTranslatedTitle } = AdminNavbarHelper;

  return (
    <div className="flex h-16 w-full items-center px-2 text-primary">
      <div className="flex items-center gap-x-2">
        <ChevronRight className="cursor-pointer" />
        <h1 className="text-2xl font-medium">
          {getTranslatedTitle(pathname, t)}
        </h1>
      </div>
    </div>
  );
}
