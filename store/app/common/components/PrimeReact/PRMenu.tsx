import { Menu, type MenuProps } from "primereact/menu";
import type { MenuItem } from "primereact/menuitem";
import type { RefObject } from "react";

type Props = MenuProps & {
  items: MenuItem[];
  menuRef: RefObject<Menu>;
};

export default function PRMenu({ items, menuRef }: Props) {
  return (
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
      ref={menuRef}
    />
  );
}
