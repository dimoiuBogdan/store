"use client";

import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import PRImage from "../../../../../../../common/components/PrimeReact/PRImage";
import AdminService from "../../../../../../../common/services/admin/admin.service";
import type { AdminOrderedProductModel } from "./types/admin-latest-orders-details-popup.types";

export default function AdminLatestOrdersDetailsPopupProducts() {
  const t = useTranslations("admin.overview.orderDetails.table");
  const locale = useLocale();

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
        {rowData.total.toLocaleString(locale)}
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
    return <div>{rowData.price.toLocaleString(locale)}</div>;
  };

  return (
    <DataTable
      value={orderedProductsData}
      className="mt-8 overflow-hidden overflow-x-auto rounded-lg text-sm shadow shadow-primary/20"
      size="small"
      scrollable
      scrollHeight="40vh"
      pt={{
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
    >
      <Column field="productId" header={t("id")} />
      <Column field="name" header={t("name")} />
      <Column field="price" header={t("price")} body={priceBodyTemplate} />
      <Column field="quantity" header={t("quantity")} />
      <Column field="total" header={t("total")} body={totalBodyTemplate} />
      <Column
        field="categories"
        header={t("category")}
        body={categoriesBodyTemplate}
      />
      <Column
        field="productImage"
        header={t("image")}
        body={imageBodyTemplate}
      />
    </DataTable>
  );
}
