"use client";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Image } from "primereact/image";
import type { AdminOrderDetailsProductModel } from "./types/admin-latest-orders-details-popup.types";

export default function AdminLatestOrdersDetailsPopupProducts() {
  const DATA: AdminOrderDetailsProductModel[] = [
    {
      productId: 1,
      productName: "Product 1",
      productPrice: 100,
      quantity: 1,
      total: 100,
      category: "Category 1",
      image:
        "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      productId: 2,
      productName: "Product 2",
      productPrice: 200,
      quantity: 1,
      total: 100,
      category: "Category 2",
      image:
        "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      productId: 3,
      productName: "Product 3",
      productPrice: 300,
      quantity: 1,
      total: 100,
      category: "Category 3",
      image:
        "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      productId: 4,
      productName: "Product 4",
      productPrice: 400,
      quantity: 1,
      total: 100,
      category: "Category 4",
      image:
        "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      productId: 5,
      productName: "Product 5",
      productPrice: 500,
      quantity: 3,
      total: 1500,
      category: "Category 5",
      image:
        "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      productId: 6,
      productName: "Product 6",
      productPrice: 600,
      quantity: 2,
      total: 1200,
      category: "Category 6",
      image:
        "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const imageBodyTemplate = (rowData: AdminOrderDetailsProductModel) => {
    return (
      <Image
        src={rowData.image}
        alt={rowData.productName}
        className="h-14 w-14 overflow-hidden rounded-md shadow-sm"
        pt={{
          toolbar: {
            className: "text-purple-500",
          },
          image: {
            className: "h-20 w-20 object-cover object-center",
          },
          preview: {
            className: "max-h-[80vh] max-w-[80vw] object-center object-cover",
          },
        }}
        preview
      />
    );
  };

  const totalBodyTemplate = (rowData: AdminOrderDetailsProductModel) => {
    return (
      <div className="font-semibold text-purple-500">
        {rowData.total.toLocaleString()} $
      </div>
    );
  };

  return (
    <DataTable
      value={DATA}
      className="mt-8 overflow-hidden overflow-x-auto rounded-lg text-sm shadow-sm"
      size="small"
      scrollable
      scrollHeight="40vh"
    >
      <Column field="productId" header="ID" />
      <Column field="productName" header="Name" />
      <Column field="productPrice" header="Price" />
      <Column field="quantity" header="Quantity" />
      <Column field="total" header="Total" body={totalBodyTemplate} />
      <Column field="category" header="Category" />
      <Column field="image" header="Image" body={imageBodyTemplate} />
    </DataTable>
  );
}
