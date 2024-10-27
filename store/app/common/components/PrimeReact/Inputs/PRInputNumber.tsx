import { cn } from "@/app/common/utils/utils";
import { InputNumber, type InputNumberProps } from "primereact/inputnumber";

type PRInputNumberProps = {
  className?: string;
  error?: boolean;
  label?: string;
} & InputNumberProps;

export default function PRInputNumber({
  className,
  error,
  label,
  ...props
}: PRInputNumberProps) {
  return (
    <>
      {label ? (
        <label className="text-sm text-zinc-300" htmlFor={props.id}>
          {label}
        </label>
      ) : null}
      <InputNumber
        className={cn("input border-zinc-600", className, {
          "border-red-400": error,
        })}
        {...props}
        pt={{
          input: {
            root: {
              className: "bg-zinc-700 shadow-none",
            },
          },
        }}
      />
    </>
  );
}
