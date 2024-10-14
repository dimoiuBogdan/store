import {
  type DataTableProps,
  type DataTableValueArray,
  DataTable,
} from "primereact/datatable";
import { cn } from "../../utils/utils";

type Props = DataTableProps<DataTableValueArray> & {
  children: React.ReactNode;
};

export default function PRDataTable({
  children,
  value,
  rows,
  className,
  ...props
}: Props) {
  return (
    <DataTable
      value={value}
      rows={rows}
      removableSort
      scrollable
      filterDisplay="menu"
      className={cn(
        "overflow-hidden overflow-x-auto rounded-lg text-sm shadow shadow-primary/20",
        className,
      )}
      pt={{
        paginator: {
          root: {
            className: "bg-zinc-800 text-primary shadow",
          },
        },
        header: {
          className: "bg-background text-primary",
        },
        wrapper: {
          className: "bg-background",
        },
        column: {
          filterOverlay: {
            className: "bg-zinc-800",
          },
          sortIcon: {
            className: "text-primary",
          },
          headerCell: {
            className: "bg-zinc-800 text-zinc-200",
          },
          footerCell: {
            className: "bg-background text-primary",
          },
          bodyCell: {
            className: "bg-background text-zinc-200",
          },
        },
      }}
      {...props}
    >
      {children}
    </DataTable>
  );
}
