import { InputNumber, type InputNumberProps } from "primereact/inputnumber";

export default function PRInputNumber({ ...props }: InputNumberProps) {
  return (
    <InputNumber
      {...props}
      pt={{
        input: {
          root: {
            className: "bg-zinc-700 w-24 shadow-sm shadow-zinc-500 py-0.5 px-2",
          },
        },
      }}
    />
  );
}
