"use client";

import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import PRImage from "../../../../../../../common/components/PRImage";
import AdminService from "../../../../../../../common/services/admin/admin.service";
import type { AdminOrderedProductModel } from "./types/admin-latest-orders-details-popup.types";

export default function AdminLatestOrdersDetailsPopupProducts() {
  const searchParams = useSearchParams();
  const orderToEdit = searchParams.get("orderToEdit");

  const response = queryOptions<AdminOrderedProductModel[]>({
    queryKey: ["admin-order-products", orderToEdit],
    enabled: !!orderToEdit,
    queryFn: async () => {
      if (!orderToEdit) {
        return [];
      }

      const { getLatestOrderProducts } = AdminService;

      const orderedProducts = await getLatestOrderProducts(orderToEdit);

      return orderedProducts;
    },
  });

  const { data: orderedProductsData } = useSuspenseQuery(response);

  if (!orderedProductsData) {
    return <div>No data</div>;
  }

  const imageBodyTemplate = (rowData: AdminOrderedProductModel) => {
    return <PRImage src={rowData.productImage} alt={rowData.name} />;
  };

  const totalBodyTemplate = (rowData: AdminOrderedProductModel) => {
    return (
      <div className="font-semibold text-primary">
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
