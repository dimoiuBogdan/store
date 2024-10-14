"use client";

import { ChevronDown, Edit } from "lucide-react";
import { useTranslations } from "next-intl";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { useRef } from "react";
import PRMenu from "../../../../../../../common/components/PrimeReact/PRMenu";

export default function AdminLatestOrdersDetailsPopupOrderActions() {
  const t = useTranslations("admin.overview.orderDetails.actions");

  const menu = useRef<Menu>(null);

  const items: MenuItem[] = [
    {
      label: t("orderActions.markAsPending"),
    },
    {
      label: t("orderActions.markAsProcessing"),
    },
    {
      label: t("orderActions.markAsShipped"),
    },
    {
      label: t("orderActions.markAsDelivered"),
    },
    {
      label: t("orderActions.markAsRefunded"),
    },
    {
      label: t("orderActions.markAsCancelled"),
    },
  ];

  return (
    <div>
      <div
        onClick={(event) => menu.current?.toggle(event)}
        aria-haspopup
        className="flex cursor-pointer items-center gap-x-2 rounded-md bg-blue-400 p-2 text-white shadow-md transition-all hover:bg-blue-500"
      >
        <Edit size={16} /> {t("orderActions.title")} <ChevronDown size={16} />
      </div>
      <PRMenu items={items} menuRef={menu} />
    </div>
  );
}
