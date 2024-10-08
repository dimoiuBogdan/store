"use client";

import { Search, X } from "lucide-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable, type DataTableFilterMeta } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import React, { useCallback, useMemo, useState } from "react";
import { AdminBestProductModel } from "../(components)/AdminSections/AdminBestProductsSection/types/admin-best-products-section.types";
import AdminProductsActionsColumn from "./components/AdminProductsActionsColumn";
import AdminProductsCategoriesColumn from "./components/AdminProductsCategoriesColumn";
import AdminProductsImageColumn from "./components/AdminProductsImageColumn";
import AdminProductsPriceColumn from "./components/AdminProductsPriceColumn";
import AdminProductsStockColumn from "./components/AdminProductsStockColumn";

const dummyProducts: AdminBestProductModel[] = [
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

const MemoizedImageColumn = React.memo(AdminProductsImageColumn);
const MemoizedPriceColumn = React.memo(AdminProductsPriceColumn);
const MemoizedStockColumn = React.memo(AdminProductsStockColumn);
const MemoizedCategoriesColumn = React.memo(AdminProductsCategoriesColumn);
const MemoizedActionsColumn = React.memo(AdminProductsActionsColumn);

export default function AdminProductsTable() {
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: "contains" },
    productId: { value: null, matchMode: "equals" },
    name: { value: null, matchMode: "startsWith" },
    price: { value: null, matchMode: "equals" },
    stock: { value: null, matchMode: "equals" },
    salesCount: { value: null, matchMode: "equals" },
    "categories.name": { value: null, matchMode: "contains" },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState<string | null>(
    null,
  );

  const onGlobalFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFilters((prevFilters) => ({
        ...prevFilters,
        global: { value, matchMode: "contains" },
      }));
      setGlobalFilterValue(value);
    },
    [],
  );

  const clearFilters = useCallback(() => {
    setFilters({
      global: { value: null, matchMode: "contains" },
      productId: { value: null, matchMode: "equals" },
      name: { value: null, matchMode: "startsWith" },
      price: { value: null, matchMode: "equals" },
      stock: { value: null, matchMode: "equals" },
      salesCount: { value: null, matchMode: "equals" },
      "categories.name": { value: null, matchMode: "contains" },
    });
    setGlobalFilterValue(null);
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <div className="flex items-center justify-between">
        <span className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
            className="pl-10"
            pt={{
              root: { className: "p-inputtext-sm" },
            }}
          />
        </span>
        <Button
          type="button"
          icon={<X className="h-4 w-4" />}
          label="Clear Filters"
          severity="secondary"
          text
          size="small"
          onClick={clearFilters}
        />
      </div>
    );
  }, [globalFilterValue, onGlobalFilterChange, clearFilters]);

  const header = useMemo(() => renderHeader(), [renderHeader]);

  const imageBodyTemplate = useCallback(
    (rowData: AdminBestProductModel) => (
      <MemoizedImageColumn rowData={rowData} />
    ),
    [],
  );

  const priceBodyTemplate = useCallback(
    (rowData: AdminBestProductModel) => (
      <MemoizedPriceColumn price={rowData.price} />
    ),
    [],
  );

  const stockBodyTemplate = useCallback(
    (rowData: AdminBestProductModel) => (
      <MemoizedStockColumn stock={rowData.stock} />
    ),
    [],
  );

  const categoriesBodyTemplate = useCallback(
    (rowData: AdminBestProductModel) => (
      <MemoizedCategoriesColumn categories={rowData.categories} />
    ),
    [],
  );

  const actionsBodyTemplate = useCallback(() => <MemoizedActionsColumn />, []);

  return (
    <DataTable
      value={dummyProducts}
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
      header={header}
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
        body={imageBodyTemplate}
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
        body={priceBodyTemplate}
        sortable
        filter
        filterPlaceholder="Search by price"
        style={{ width: "10%" }}
      />
      <Column
        field="stock"
        header="Stock"
        body={stockBodyTemplate}
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
        body={categoriesBodyTemplate}
        filter
        filterField="categories.name"
        filterPlaceholder="Search by category"
        style={{ width: "20%" }}
      />
      <Column
        body={actionsBodyTemplate}
        exportable={false}
        style={{ width: "15%" }}
      />
    </DataTable>
  );
}
