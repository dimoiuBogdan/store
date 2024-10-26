import { Dropdown, type DropdownProps } from "primereact/dropdown";
import { cn } from "../../utils/utils";

type PRDropdownProps = {
  className?: string;
} & DropdownProps;

const PRDropdown = ({ className, ...props }: PRDropdownProps) => {
  return (
    <Dropdown
      pt={{
        input: { className: "p-0 text-zinc-200" },
        item: {
          className:
            "text-zinc-200 hover:bg-zinc-700 focus:bg-zinc-700 active:bg-zinc-700 bg-zinc-800 font-medium",
        },
      }}
      panelClassName="overflow-hidden text-sm mt-2 shadow shadow-zinc-600 dropdown-panel"
      className={cn("input border-zinc-600", className)}
      {...props}
    />
  );
};

export default PRDropdown;
