import {
  type InputTextareaProps,
  InputTextarea,
} from "primereact/inputtextarea";
import { cn } from "../../../utils/utils";

type PRInputTextareaProps = InputTextareaProps & { error?: boolean };

const PRInputTextarea = ({
  className,
  error,
  ...props
}: PRInputTextareaProps) => {
  return (
    <InputTextarea
      {...props}
      className={cn("input border-zinc-600", className, {
        "border-red-400": error,
      })}
    />
  );
};

export default PRInputTextarea;
