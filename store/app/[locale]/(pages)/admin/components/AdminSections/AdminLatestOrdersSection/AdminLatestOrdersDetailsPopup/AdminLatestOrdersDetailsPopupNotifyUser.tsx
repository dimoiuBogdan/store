"use client";

import PRMenu from "@/app/common/components/PrimeReact/PRMenu";
import { Bell, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Menu } from "primereact/menu";
import type { MenuItem } from "primereact/menuitem";
import { useRef, type JSX } from "react";

export default function AdminLatestOrdersDetailsPopupNotifyUser(): JSX.Element {
  const t = useTranslations("admin.overview.orderDetails.actions");

  const menu = useRef<Menu>(null);

  const items: MenuItem[] = [
    {
      label: t("notifyCustomer.sendCurrentStatus"),
    },
    {
      label: t("notifyCustomer.sendInvoice"),
    },
    {
      label: t("notifyCustomer.requestFeedback"),
    },
  ];
  return (
    <div>
      <div
        onClick={(event) => menu.current?.toggle(event)}
        aria-controls="notify_customer_menu"
        aria-haspopup
        className="flex cursor-pointer items-center gap-x-2 rounded-md bg-orange-400 p-2 text-white shadow-md transition-all hover:bg-orange-500"
      >
        <Bell size={16} /> {t("notifyCustomer.title")} <ChevronDown size={16} />
      </div>
      <PRMenu items={items} menuRef={menu} />
    </div>
  );
}
