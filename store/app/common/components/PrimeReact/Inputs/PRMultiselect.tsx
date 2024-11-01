import { cn } from "@/app/common/utils/utils";
import { MultiSelect, type MultiSelectProps } from "primereact/multiselect";
import type { FC } from "react";

type Props = {
  error?: boolean;
  label?: string;
} & MultiSelectProps;

const PRMultiselect: FC<Props> = ({ error, className, label, ...props }) => {
  return (
    <>
      {label ? (
        <label className="text-sm text-zinc-300" htmlFor={props.id}>
          {label}
        </label>
      ) : null}
      <MultiSelect
        panelHeaderTemplate={<div />}
        pt={{
          checkboxContainer: { className: "h-6" },
          checkbox: {
            root: { className: "h-4 w-4" },
            box: { className: "w-4 h-4" },
          },
          label: { className: "p-0" },
          item: {
            className:
              "text-zinc-200 hover:bg-zinc-700 focus:bg-zinc-700 active:bg-zinc-700 bg-zinc-800 font-medium text-sm",
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

export default PRMultiselect;
