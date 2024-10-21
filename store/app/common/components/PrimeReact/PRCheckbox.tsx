import { Checkbox, type CheckboxProps } from "primereact/checkbox";

type Props = CheckboxProps;

const PRCheckbox = ({ ...props }: Props) => {
  return (
    <Checkbox
      pt={{
        box: {
          className: "bg-zinc-700 shadow-sm shadow-zinc-500",
        },
      }}
      {...props}
    />
  );
};

export default PRCheckbox;
