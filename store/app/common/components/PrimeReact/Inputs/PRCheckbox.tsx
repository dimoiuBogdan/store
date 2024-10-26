import { cn } from "@/app/common/utils/utils";
import { Checkbox, type CheckboxProps } from "primereact/checkbox";

type Props = CheckboxProps & {
  label: string;
  error?: boolean;
};

const PRCheckbox = ({ label, error, ...props }: Props) => {
  return (
    <div className="flex items-center">
      <Checkbox
        pt={{
          box: {
            className: cn("bg-zinc-700 shadow-sm shadow-zinc-500", {
              "border-red-400 border-2": error,
            }),
          },
        }}
        {...props}
      />
      <label
        htmlFor={props.inputId}
        className={cn("ml-2 cursor-pointer transition-all hover:text-primary", {
          "text-red-400": error,
        })}
      >
        {label}
      </label>
    </div>
  );
};

export default PRCheckbox;
