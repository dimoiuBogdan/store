"use client";

import {
  Clipboard,
  HelpCircle,
  Rocket,
  Settings,
  Store,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "../../../common/utils/utils";

type MenuItemType = {
  name: string;
  icon: ReactNode;
  href: string;
};

const MENU_ITEMS: MenuItemType[] = [
  { name: "Overview", icon: <Rocket />, href: "/admin" },
  { name: "Products", icon: <Store />, href: "/admin/products" },
  { name: "Orders", icon: <Clipboard />, href: "/admin/orders" },
  { name: "Customers", icon: <Users />, href: "/admin/customers" },
  { name: "Settings", icon: <Settings />, href: "/admin/settings" },
  { name: "Help", icon: <HelpCircle />, href: "/admin/help" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex h-screen flex-col bg-white p-2 py-4">
      <h1 className="mb-8 px-4 text-2xl font-bold text-zinc-800">My Store</h1>
      <ul className="flex flex-1 flex-col gap-y-3 overflow-y-auto text-sm font-medium text-zinc-700">
        {MENU_ITEMS.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center rounded-md px-4 py-2.5 transition-all hover:bg-zinc-200/30 hover:shadow-md",
                {
                  "bg-zinc-200/30 shadow-md": pathname === item.href,
                },
              )}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
