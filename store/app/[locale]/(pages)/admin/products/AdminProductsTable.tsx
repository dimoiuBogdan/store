"use client";

import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import {
  type ColumnBodyOptions,
  type ColumnFilterApplyTemplateOptions,
  type ColumnFilterClearTemplateOptions,
  type ColumnProps,
} from "primereact/column";
import type { DataTableFilterMeta } from "primereact/datatable";
import PRColumn from "../../../../common/components/PrimeReact/PRColumn";
import PRDataTable from "../../../../common/components/PrimeReact/PRDataTable";
import AdminService from "../../../../common/services/admin/admin.service";
import { cn } from "../../../../common/utils/utils";
import styles from "./AdminProductsTable.module.css";
import AdminProductsActionsColumn from "./components/AdminProductsActionsColumn";
import AdminProductsActiveColumn from "./components/AdminProductsActiveColumn";
import AdminProductsCategoriesColumn from "./components/AdminProductsCategoriesColumn";
import AdminProductsDateColumn from "./components/AdminProductsDateColumn";
import AdminProductsFilterApply from "./components/AdminProductsFilter/AdminProductsFilterApply";
import AdminProductsFilterClear from "./components/AdminProductsFilter/AdminProductsFilterClear";
import AdminProductsImageColumn from "./components/AdminProductsImageColumn";
import AdminProductsPriceColumn from "./components/AdminProductsPriceColumn";
import AdminProductsStockColumn from "./components/AdminProductsStockColumn";
import type { AdminProductModel } from "./types/admin-products-table.types";

export default function AdminProductsTable() {
  const t = useTranslations("admin.products.table");

  const FILTERS: DataTableFilterMeta = {
    productId: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    name: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
    categories: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
    },
  };

  const COLUMNS: ColumnProps[] = [
    {
      field: "productId",
      header: t("id"),
      sortable: true,
      style: { width: "5%" },
    },
    {
      field: "productImage",
      header: t("image"),
      body: (data: AdminProductModel) => (
        <AdminProductsImageColumn rowData={data} />
      ),
      style: { width: "5%" },
    },
    {
      field: "name",
      header: t("name"),
      sortable: true,
      style: { width: "20%" },
    },
    {
      field: "price",
      header: t("price"),
      sortable: true,
      style: { width: "10%" },
      body: (data: AdminProductModel) => (
        <AdminProductsPriceColumn price={data.price} />
      ),
    },
    {
      field: "stock",
      header: t("stock"),
      sortable: true,
      style: { width: "10%" },
      body: (data: AdminProductModel) => (
        <AdminProductsStockColumn stock={data.stock} />
      ),
    },
    {
      field: "salesCount",
      header: t("sales"),
      sortable: true,
      style: { width: "10%" },
    },
    {
      field: "categories.name",
      header: t("category"),
      sortable: false,
      style: { width: "15%" },
      body: (data: AdminProductModel) => (
        <AdminProductsCategoriesColumn categories={data.categories} />
      ),
    },
    {
      field: "isActive",
      header: t("isActive"),
      sortable: true,
      style: { width: "10%" },
      body: (data: AdminProductModel) => (
        <AdminProductsActiveColumn isActive={data.isActive} />
      ),
    },
    {
      field: "createdAt",
      header: t("createdAt"),
      sortable: true,
      dataType: "date",
      style: { width: "10%" },
      body: (data: AdminProductModel) => (
        <AdminProductsDateColumn createdAt={data.createdAt} />
      ),
    },
  ];

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
    <PRDataTable
      value={productsData ?? []}
      rows={25}
      filters={FILTERS}
      dataKey="productId"
      scrollHeight="calc(100vh - 20.5rem)"
      tableClassName="h-[calc(100vh-20.5rem)]"
      emptyMessage="No products found."
      className="overflow-hidden rounded-lg text-sm shadow shadow-primary/20"
    >
      {COLUMNS.map((column) => (
        <PRColumn
          key={column.field}
          body={(data: AdminProductModel, options: ColumnBodyOptions) =>
            typeof column.body === "function" ? (
              column.body(data, options)
            ) : (
              <>{data[column.field as keyof AdminProductModel]}</>
            )
          }
          pt={{
            filterButtonbar: { className: "p-4" },
            filterConstraint: {
              className: cn("p-4 pb-0", styles["filter-constraint"]),
            },
          }}
          showFilterMatchModes={false}
          showFilterOperator={false}
          showFilterMenuOptions={false}
          {...column}
          filter={!!FILTERS[column.field as keyof typeof FILTERS]}
          filterApply={(options: ColumnFilterApplyTemplateOptions) => (
            <AdminProductsFilterApply options={options} />
          )}
          filterClear={(options: ColumnFilterClearTemplateOptions) => (
            <AdminProductsFilterClear onClick={options.filterClearCallback} />
          )}
        />
      ))}
      <PRColumn
        body={AdminProductsActionsColumn}
        exportable={false}
        style={{ width: "15%" }}
      />
    </PRDataTable>
  );
}
