import { Column, type ColumnProps } from "primereact/column";

export default function PRColumn(props: ColumnProps) {
  return (
    <Column
      showFilterMatchModes={false}
      showFilterOperator={false}
      showFilterMenuOptions={false}
      {...props}
    />
  );
}
