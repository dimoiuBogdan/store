import { InputText, type InputTextProps } from "primereact/inputtext";
import { cn } from "../../../utils/utils";

type PRInputTextProps = { error?: boolean; label?: string } & InputTextProps;

const PRInputText = ({
  className,
  error,
  label,
  ...props
}: PRInputTextProps) => {
  return (
    <>
      {label ? (
        <label className="text-sm text-zinc-300" htmlFor={props.id}>
          {label}
        </label>
      ) : null}
      <InputText
        className={cn("input border-zinc-600", className, {
          "border-red-400": error,
        })}
        {...props}
      />
    </>
  );
};

export default PRInputText;
