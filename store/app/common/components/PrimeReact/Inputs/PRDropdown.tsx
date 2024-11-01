import { cn } from "@/app/common/utils/utils";
import { Dropdown, type DropdownProps } from "primereact/dropdown";
import type { JSX } from "react";

type PRDropdownProps = {
  className?: string;
  error?: boolean;
  label?: string;
} & DropdownProps;

const PRDropdown = ({
  className,
  error,
  label,
  ...props
}: PRDropdownProps): JSX.Element => {
  return (
    <>
      {label ? (
        <label className="text-sm text-zinc-300" htmlFor={props.id}>
          {label}
        </label>
      ) : null}
      <Dropdown
        pt={{
          input: { className: "p-0 text-zinc-200" },
          item: {
            className:
              "text-zinc-200 hover:bg-zinc-700 focus:bg-zinc-700 active:bg-zinc-700 bg-zinc-800 font-medium",
          },
        }}
        panelClassName="overflow-hidden text-sm mt-2 shadow shadow-zinc-600 dropdown-panel"
        className={cn(
          "input border-zinc-600",
          error && "border-red-400",
          className,
        )}
        {...props}
      />
    </>
  );
};

export default PRDropdown;
