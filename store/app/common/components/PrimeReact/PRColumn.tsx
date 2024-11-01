import { Column, type ColumnProps } from "primereact/column";
import type { JSX } from "react";

export default function PRColumn(props: ColumnProps): JSX.Element {
  return (
    <Column
      showFilterMatchModes={false}
      showFilterOperator={false}
      showFilterMenuOptions={false}
      {...props}
    />
  );
}
