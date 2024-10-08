"use client";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import type { AdminBestProductModel } from "../components/AdminSections/AdminBestProductsSection/types/admin-best-products-section.types";
import AdminProductsActionsColumn from "./components/AdminProductsActionsColumn";
import AdminProductsCategoriesColumn from "./components/AdminProductsCategoriesColumn";
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
    productImage: "https://example.com/smartphone-x.jpg",
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
    productImage: "https://example.com/laptop-pro.jpg",
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
    productImage: "https://example.com/wireless-earbuds.jpg",
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
    productImage: "https://example.com/4k-smart-tv.jpg",
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
    productImage: "https://example.com/gaming-console.jpg",
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
    productImage: "https://example.com/digital-camera.jpg",
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
    productImage: "https://example.com/fitness-tracker.jpg",
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
    productImage: "https://example.com/bluetooth-speaker.jpg",
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
    productImage: "https://example.com/tablet-pro.jpg",
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
    productImage: "https://example.com/smart-watch.jpg",
  },
];

export default function AdminProductsTable() {
  const { filters } = useAdminProductTable();

  return (
    <DataTable
      value={DUMMY_PRODUCTS}
      paginator
      rows={10}
      rowsPerPageOptions={[10, 25, 50]}
      removableSort
      dataKey="productId"
      filters={filters}
      filterDisplay="menu"
      globalFilterFields={[
        "productId",
        "name",
        "price",
        "stock",
        "salesCount",
        "categories.name",
      ]}
      header={<AdminProductsTableHeader />}
      emptyMessage="No products found."
      tableStyle={{ minWidth: "50rem" }}
      className="overflow-hidden rounded-lg text-sm shadow-sm"
    >
      <Column
        field="productId"
        header="ID"
        sortable
        filter
        filterPlaceholder="Search by ID"
        style={{ width: "5%" }}
      />
      <Column
        field="productImage"
        header="Image"
        body={AdminProductsImageColumn}
        style={{ width: "10%" }}
      />
      <Column
        field="name"
        header="Name"
        sortable
        filter
        filterPlaceholder="Search by name"
        style={{ width: "20%" }}
      />
      <Column
        field="price"
        header="Price"
        body={AdminProductsPriceColumn}
        sortable
        filter
        filterPlaceholder="Search by price"
        style={{ width: "10%" }}
      />
      <Column
        field="stock"
        header="Stock"
        body={AdminProductsStockColumn}
        sortable
        filter
        filterPlaceholder="Search by stock"
        style={{ width: "10%" }}
      />
      <Column
        field="salesCount"
        header="Sales"
        sortable
        filter
        filterPlaceholder="Search by sales"
        style={{ width: "10%" }}
      />
      <Column
        field="categories.name"
        header="Categories"
        body={AdminProductsCategoriesColumn}
        filter
        filterField="categories.name"
        filterPlaceholder="Search by category"
        style={{ width: "20%" }}
      />
      <Column
        body={AdminProductsActionsColumn}
        exportable={false}
        style={{ width: "15%" }}
      />
    </DataTable>
  );
}
