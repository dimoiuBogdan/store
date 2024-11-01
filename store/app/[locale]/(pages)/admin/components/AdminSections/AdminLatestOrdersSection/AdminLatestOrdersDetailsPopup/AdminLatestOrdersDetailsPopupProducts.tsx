"use client";

import PRColumn from "@/app/common/components/PrimeReact/PRColumn";
import PRDataTable from "@/app/common/components/PrimeReact/PRDataTable";
import PRImage from "@/app/common/components/PrimeReact/PRImage";
import AdminService from "@/app/common/services/admin/admin.service";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import type { JSX } from "react";
import type { AdminOrderedProductModel } from "./types/admin-latest-orders-details-popup.types";

export default function AdminLatestOrdersDetailsPopupProducts(): JSX.Element {
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

  const imageBodyTemplate = (
    rowData: AdminOrderedProductModel,
  ): JSX.Element => {
    return <PRImage src={rowData.productImage} alt={rowData.name} />;
  };

  const totalBodyTemplate = (
    rowData: AdminOrderedProductModel,
  ): JSX.Element => {
    return (
      <div className="font-semibold text-primary">
        {rowData.total.toLocaleString(locale)}
      </div>
    );
  };

  const categoriesBodyTemplate = (
    rowData: AdminOrderedProductModel,
  ): JSX.Element => {
    return (
      <div>
        {rowData.categories.map((category) => category.name).join(" / ")}
      </div>
    );
  };

  const priceBodyTemplate = (
    rowData: AdminOrderedProductModel,
  ): JSX.Element => {
    return <div>{rowData.price.toLocaleString(locale)}</div>;
  };

  return (
    <PRDataTable value={orderedProductsData} className="mt-8" size="small">
      <PRColumn field="productId" header={t("id")} />
      <PRColumn field="name" header={t("name")} />
      <PRColumn field="price" header={t("price")} body={priceBodyTemplate} />
      <PRColumn field="quantity" header={t("quantity")} />
      <PRColumn field="total" header={t("total")} body={totalBodyTemplate} />
      <PRColumn
        field="categories"
        header={t("category")}
        body={categoriesBodyTemplate}
      />
      <PRColumn
        field="productImage"
        header={t("image")}
        body={imageBodyTemplate}
      />
    </PRDataTable>
  );
}
