"use client";

import {
  Column,
  type ColumnBodyOptions,
  type ColumnFilterApplyTemplateOptions,
  type ColumnFilterClearTemplateOptions,
  type ColumnProps,
} from "primereact/column";
import { DataTable } from "primereact/datatable";
import { cn } from "../../../../common/utils/utils";
import type { AdminBestProductModel } from "../components/AdminSections/AdminBestProductsSection/types/admin-best-products-section.types";
import styles from "./AdminProductsTable.module.css";
import AdminProductsActionsColumn from "./components/AdminProductsActionsColumn";
import AdminProductsCategoriesColumn from "./components/AdminProductsCategoriesColumn";
import AdminProductsFilterApply from "./components/AdminProductsFilter/AdminProductsFilterApply";
import AdminProductsFilterClear from "./components/AdminProductsFilter/AdminProductsFilterClear";
import AdminProductsImageColumn from "./components/AdminProductsImageColumn";
import AdminProductsPriceColumn from "./components/AdminProductsPriceColumn";
import AdminProductsStockColumn from "./components/AdminProductsStockColumn";
import AdminProductsTableHeader from "./components/AdminProductsTableHeader";
import useAdminProductTable from "./hooks/useAdminProductTable";

const DUMMY_PRODUCTS: AdminBestProductModel[] = [
  {
    productId: 1,
    name: "Smartphone X",
    price: 699.99,
    stock: 50,
    salesCount: 1000,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 2, name: "Phones" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 2,
    name: "Laptop Pro",
    price: 1299.99,
    stock: 30,
    salesCount: 500,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 3, name: "Computers" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 3,
    name: "Wireless Earbuds",
    price: 129.99,
    stock: 100,
    salesCount: 2000,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 4, name: "Audio" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 4,
    name: "4K Smart TV",
    price: 799.99,
    stock: 20,
    salesCount: 300,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 5, name: "TVs" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 5,
    name: "Gaming Console",
    price: 499.99,
    stock: 40,
    salesCount: 800,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 6, name: "Gaming" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 6,
    name: "Digital Camera",
    price: 599.99,
    stock: 25,
    salesCount: 400,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 7, name: "Cameras" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 7,
    name: "Fitness Tracker",
    price: 79.99,
    stock: 150,
    salesCount: 1500,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 8, name: "Wearables" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 8,
    name: "Bluetooth Speaker",
    price: 89.99,
    stock: 75,
    salesCount: 900,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 4, name: "Audio" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 9,
    name: "Tablet Pro",
    price: 449.99,
    stock: 60,
    salesCount: 700,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 9, name: "Tablets" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 10,
    name: "Smart Watch",
    price: 199.99,
    stock: 90,
    salesCount: 1200,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 8, name: "Wearables" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    productId: 11,
    name: "Smart Watch",
    price: 199.99,
    stock: 90,
    salesCount: 1200,
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 8, name: "Wearables" },
    ],
    productImage:
      "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
  },
];

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
    body: (data: AdminBestProductModel) => (
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
    body: (data: AdminBestProductModel) => (
      <AdminProductsPriceColumn price={data.price} />
    ),
  },
  {
    field: "stock",
    header: "Stock",
    sortable: true,
    filter: true,
    style: { width: "10%" },
    body: (data: AdminBestProductModel) => (
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
    body: (data: AdminBestProductModel) => (
      <AdminProductsCategoriesColumn categories={data.categories} />
    ),
  },
];

export default function AdminProductsTable() {
  const { filters, globalFilterValue, onGlobalFilterChange, clearFilters } =
    useAdminProductTable();

  return (
    <DataTable
      value={DUMMY_PRODUCTS}
      paginator
      rows={25}
      removableSort
      scrollable
      dataKey="productId"
      filters={filters}
      filterDisplay="menu"
      scrollHeight="calc(100vh - 20.5rem)"
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
            className: "bg-zinc-800 text-primary",
          },
        },
        header: {
          className: "bg-background text-primary",
        },
        wrapper: {
          className: "bg-background",
        },
        column: {
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
      className="overflow-hidden rounded-lg text-sm shadow-sm"
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
