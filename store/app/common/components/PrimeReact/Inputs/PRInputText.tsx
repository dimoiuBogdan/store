import { InputText, type InputTextProps } from "primereact/inputtext";
import { cn } from "../../../utils/utils";

type PRInputTextProps = { error?: boolean } & InputTextProps;

const PRInputText = ({ className, error, ...props }: PRInputTextProps) => {
  return (
    <InputText
      className={cn("input border-zinc-600", className, {
        "border-red-400": error,
      })}
      {...props}
    />
  );
};

export default PRInputText;
