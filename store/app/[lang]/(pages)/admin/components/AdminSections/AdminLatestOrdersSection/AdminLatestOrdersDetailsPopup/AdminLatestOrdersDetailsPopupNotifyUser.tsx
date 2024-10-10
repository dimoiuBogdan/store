"use client";

import { Bell, ChevronDown } from "lucide-react";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Toast } from "primereact/toast";
import { useRef } from "react";

export default function AdminLatestOrdersDetailsPopupNotifyUser() {
  const toast = useRef<Toast>(null);
  const menu = useRef<Menu>(null);

  const items: MenuItem[] = [
    {
      label: "Send Current Status",
    },
    {
      label: "Send Invoice",
    },
    {
      label: "Request Feedback",
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
        <Bell size={16} /> Notify Customer <ChevronDown size={16} />
      </div>
      <div className="text-sm">
        <Menu
          className="text-sm"
          pt={{
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
