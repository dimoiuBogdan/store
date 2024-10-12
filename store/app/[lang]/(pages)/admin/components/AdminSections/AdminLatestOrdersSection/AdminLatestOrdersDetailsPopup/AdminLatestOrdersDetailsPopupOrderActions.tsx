"use client";

import { ChevronDown, Edit } from "lucide-react";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Toast } from "primereact/toast";
import { useRef } from "react";

export default function AdminLatestOrdersDetailsPopupOrderActions() {
  const toast = useRef<Toast>(null);
  const menu = useRef<Menu>(null);

  const items: MenuItem[] = [
    {
      label: "Mark as Pending",
    },
    {
      label: "Mark as Processing",
    },
    {
      label: "Mark as Shipped",
    },
    {
      label: "Mark as Delivered",
    },
    {
      label: "Mark as Refunded",
    },
    {
      label: "Mark as Cancelled",
    },
    {
      label: "Delete Order",
    },
  ];

  return (
    <div>
      <div
        onClick={(event) => menu.current?.toggle(event)}
        aria-controls="notify_customer_menu"
        aria-haspopup
        className="flex cursor-pointer items-center gap-x-2 rounded-md bg-blue-400 p-2 text-white shadow-md transition-all hover:bg-blue-500"
      >
        <Edit size={16} /> Order Actions <ChevronDown size={16} />
      </div>
      <div className="text-sm">
        <Menu
          className="bg-background text-sm"
          pt={{
            label: {
              className: "text-zinc-200",
            },
            action: {
              className: "bg-background hover:bg-background/90",
            },
            submenuHeader: {
              className: "p-0",
            },
          }}
          model={items}
          popup
          ref={menu}
          id="notify_customer_menu"
          popupAlignment="left"
        />
        <Toast ref={toast}></Toast>
      </div>
    </div>
  );
}

// TODO: Component cleanup ( Primereact ) | Primereact custom theme | Translations | rerendering table
