"use client";

import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  Column,
  type ColumnBodyOptions,
  type ColumnFilterApplyTemplateOptions,
  type ColumnFilterClearTemplateOptions,
  type ColumnProps,
} from "primereact/column";
import { DataTable } from "primereact/datatable";
import AdminService from "../../../../common/services/admin/admin.service";
import { cn } from "../../../../common/utils/utils";
import type { AdminBestProductModel } from "../components/AdminSections/AdminBestProductsSection/types/admin-best-products-section.types";
import styles from "./AdminProductsTable.module.css";
import AdminProductsActionsColumn from "./components/AdminProductsActionsColumn";
import AdminProductsActiveColumn from "./components/AdminProductsActiveColumn";
import AdminProductsCategoriesColumn from "./components/AdminProductsCategoriesColumn";
import AdminProductsFilterApply from "./components/AdminProductsFilter/AdminProductsFilterApply";
import AdminProductsFilterClear from "./components/AdminProductsFilter/AdminProductsFilterClear";
import AdminProductsImageColumn from "./components/AdminProductsImageColumn";
import AdminProductsPriceColumn from "./components/AdminProductsPriceColumn";
import AdminProductsStockColumn from "./components/AdminProductsStockColumn";
import AdminProductsTableHeader from "./components/AdminProductsTableHeader";
import useAdminProductTable from "./hooks/useAdminProductTable";
import type { AdminProductModel } from "./types/admin-products-table.types";

const COLUMNS: ColumnProps[] = [
  {
    field: "productId",
    header: "ID",
    sortable: true,
    filter: true,
    style: { width: "5%" },
  },
  {
    field: "productImage",
    header: "Image",
    body: (data: AdminProductModel) => (
      <AdminProductsImageColumn rowData={data} />
    ),
    style: { width: "5%" },
  },
  {
    field: "name",
    header: "Name",
    sortable: true,
    filter: true,
    style: { width: "20%" },
  },
  {
    field: "price",
    header: "Price",
    sortable: true,
    filter: true,
    style: { width: "10%" },
    body: (data: AdminProductModel) => (
      <AdminProductsPriceColumn price={data.price} />
    ),
  },
  {
    field: "stock",
    header: "Stock",
    sortable: true,
    filter: true,
    style: { width: "10%" },
    body: (data: AdminProductModel) => (
      <AdminProductsStockColumn stock={data.stock} />
    ),
  },
  {
    field: "salesCount",
    header: "Sales",
    sortable: true,
    filter: true,
    style: { width: "10%" },
  },
  {
    field: "categories.name",
    header: "Categories",
    sortable: false,
    filter: true,
    style: { width: "15%" },
    body: (data: AdminProductModel) => (
      <AdminProductsCategoriesColumn categories={data.categories} />
    ),
  },
  {
    field: "isActive",
    header: "Status",
    sortable: false,
    filter: true,
    style: { width: "10%" },
    body: (data: AdminProductModel) => (
      <AdminProductsActiveColumn isActive={data.isActive} />
    ),
  },
];

export default function AdminProductsTable() {
  const { filters, globalFilterValue, onGlobalFilterChange, clearFilters } =
    useAdminProductTable();

  const response = queryOptions<AdminProductModel[] | null>({
    queryKey: ["admin-products"],
    queryFn: async () => {
      const { getProducts } = AdminService;

      const products = await getProducts();

      return products;
    },
  });

  const { data: productsData } = useSuspenseQuery(response);

  return (
    <DataTable
      value={productsData ?? []}
      paginator
      rows={25}
      removableSort
      scrollable
      dataKey="productId"
      filters={filters}
      filterDisplay="menu"
      scrollHeight="calc(100vh - 20.5rem)"
      tableClassName="h-[calc(100vh-20.5rem)]"
      globalFilterFields={[
        "productId",
        "name",
        "price",
        "stock",
        "salesCount",
        "categories.name",
      ]}
      pt={{
        paginator: {
          root: {
            className: "bg-zinc-800 text-primary shadow-sm",
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
      header={
        <AdminProductsTableHeader
          globalFilterValue={globalFilterValue}
          onGlobalFilterChange={onGlobalFilterChange}
          clearFilters={clearFilters}
        />
      }
      emptyMessage="No products found."
      className="overflow-hidden rounded-lg text-sm shadow-sm shadow-primary/20"
    >
      {COLUMNS.map((column) => (
        <Column
          key={column.field}
          body={(data: AdminBestProductModel, options: ColumnBodyOptions) =>
            typeof column.body === "function" ? (
              column.body(data, options)
            ) : (
              <>{data[column.field as keyof AdminBestProductModel]}</>
            )
          }
          {...column}
          pt={{
            filterButtonbar: { className: "p-4" },
            filterConstraint: {
              className: cn("p-4 pb-0", styles["filter-constraint"]),
            },
          }}
          showFilterMatchModes={false}
          filterApply={(options: ColumnFilterApplyTemplateOptions) => (
            <AdminProductsFilterApply onClick={options.filterApplyCallback} />
          )}
          filterClear={(options: ColumnFilterClearTemplateOptions) => (
            <AdminProductsFilterClear onClick={options.filterClearCallback} />
          )}
        />
      ))}

      <Column
        body={AdminProductsActionsColumn}
        exportable={false}
        style={{ width: "15%" }}
      />
    </DataTable>
  );
}
