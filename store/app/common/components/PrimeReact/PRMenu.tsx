import { Menu, type MenuProps } from "primereact/menu";
import type { MenuItem } from "primereact/menuitem";
import type { JSX, RefObject } from "react";

type Props = MenuProps & {
  items: MenuItem[];
  menuRef: RefObject<Menu | null>;
};

export default function PRMenu({ items, menuRef }: Props): JSX.Element {
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
