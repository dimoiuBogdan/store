import {
  type InputTextareaProps,
  InputTextarea,
} from "primereact/inputtextarea";
import { cn } from "../../../utils/utils";

type PRInputTextareaProps = InputTextareaProps & {
  error?: boolean;
  label?: string;
};

const PRInputTextarea = ({
  className,
  error,
  label,
  ...props
}: PRInputTextareaProps) => {
  return (
    <>
      {label ? (
        <label className="text-sm text-zinc-300" htmlFor={props.id}>
          {label}
        </label>
      ) : null}
      <InputTextarea
        {...props}
        className={cn("input border-zinc-600", className, {
          "border-red-400": error,
        })}
      />
    </>
  );
};

export default PRInputTextarea;
