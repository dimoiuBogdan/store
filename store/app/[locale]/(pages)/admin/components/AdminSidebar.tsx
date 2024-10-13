"use client";

import {
  Clipboard,
  HelpCircle,
  Rocket,
  Settings,
  Store,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import LanguageSwitcher from "../../../../common/components/LanguageSwitcher";
import { cn, getCurrentPathWithoutLang } from "../../../../common/utils/utils";

type MenuItemType = {
  name: string;
  icon: ReactNode;
  href: string;
};

export default function AdminSidebar() {
  const t = useTranslations("admin.sidebar");

  const pathname = getCurrentPathWithoutLang(usePathname());

  const MENU_ITEMS: MenuItemType[] = [
    { name: t("overview"), icon: <Rocket />, href: "/admin" },
    { name: t("products"), icon: <Store />, href: "/admin/products" },
    { name: t("orders"), icon: <Clipboard />, href: "/admin/orders" },
    { name: t("customers"), icon: <Users />, href: "/admin/customers" },
    { name: t("settings"), icon: <Settings />, href: "/admin/settings" },
    { name: t("help"), icon: <HelpCircle />, href: "/admin/help" },
  ];

  return (
    <nav className="sticky top-0 flex h-screen flex-col p-2 py-4">
      <h1 className="mb-8 px-4 text-2xl font-bold text-zinc-200">My Store</h1>
      <ul className="flex flex-1 flex-col gap-y-3 overflow-y-auto text-sm font-medium text-zinc-200">
        {MENU_ITEMS.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center rounded-md px-4 py-2.5 transition-all hover:bg-zinc-200/20 hover:shadow-md",
                {
                  "bg-zinc-200/20 text-primary shadow-md":
                    pathname === item.href,
                },
              )}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center gap-y-4">
        <LanguageSwitcher />
        <div className="w-full cursor-pointer rounded bg-zinc-800 py-3 text-center font-medium text-zinc-200 shadow shadow-primary transition-all hover:bg-primary hover:text-zinc-800">
          {t("logout")}
        </div>
      </div>
    </nav>
  );
}
