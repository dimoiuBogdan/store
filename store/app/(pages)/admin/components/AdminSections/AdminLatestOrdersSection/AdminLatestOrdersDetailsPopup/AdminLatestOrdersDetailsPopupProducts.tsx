"use client";

import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Image } from "primereact/image";
import type { AdminOrderedProductModel } from "./types/admin-latest-orders-details-popup.types";

type Props = {
  orderToEdit: number;
};

export default function AdminLatestOrdersDetailsPopupProducts({
  orderToEdit,
}: Props) {
  const response = queryOptions<AdminOrderedProductModel[]>({
    queryKey: ["admin-order-products", orderToEdit],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/order-products/${orderToEdit}`,
      );

      return response.json();
    },
  });

  const { data: orderedProductsData } = useSuspenseQuery(response);

  const imageBodyTemplate = (rowData: AdminOrderedProductModel) => {
    return (
      <Image
        src={rowData.productImage}
        alt={rowData.name}
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

  const totalBodyTemplate = (rowData: AdminOrderedProductModel) => {
    return (
      <div className="font-semibold text-purple-500">
        {rowData.total.toLocaleString()} $
      </div>
    );
  };

  const categoriesBodyTemplate = (rowData: AdminOrderedProductModel) => {
    return (
      <div>
        {rowData.categories.map((category) => category.name).join(" / ")}
      </div>
    );
  };

  const priceBodyTemplate = (rowData: AdminOrderedProductModel) => {
    return <div>{rowData.price.toLocaleString()} $</div>;
  };

  return (
    <DataTable
      value={orderedProductsData}
      className="mt-8 overflow-hidden overflow-x-auto rounded-lg text-sm shadow-sm"
      size="small"
      scrollable
      scrollHeight="40vh"
    >
      <Column field="productId" header="ID" />
      <Column field="name" header="Name" />
      <Column field="price" header="Price" body={priceBodyTemplate} />
      <Column field="quantity" header="Quantity" />
      <Column field="total" header="Total" body={totalBodyTemplate} />
      <Column
        field="categories"
        header="Category"
        body={categoriesBodyTemplate}
      />
      <Column field="productImage" header="Image" body={imageBodyTemplate} />
    </DataTable>
  );
}
