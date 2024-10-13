import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

const LOCALES = ["en", "ro"];

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: LOCALES[0],
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
