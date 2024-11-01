"use client";

import PRColumn from "@/app/common/components/PrimeReact/PRColumn";
import PRDataTable from "@/app/common/components/PrimeReact/PRDataTable";
import { OrderStatus } from "@/app/common/types/enums";
import { Check, Info, Truck, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "primereact/badge";
import { Tooltip } from "primereact/tooltip";
import type { JSX } from "react";
import type { AdminLatestOrderModel } from "./types/admin-latest-orders-section.types";

type Props = {
  latestOrdersData: AdminLatestOrderModel[];
};

export default function AdminLatestOrdersSection({
  latestOrdersData,
}: Props): JSX.Element {
  const t = useTranslations("admin.overview");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const statusBodyTemplate = (rowData: AdminLatestOrderModel): JSX.Element => {
    const statusColor: Record<keyof typeof OrderStatus, string> = {
      PENDING: "bg-yellow-500",
      PROCESSING: "bg-sky-500",
      SHIPPED: "bg-purple-500",
      DELIVERED: "bg-secondary",
      CANCELLED: "bg-red-500",
      REFUNDED: "bg-zinc-500",
    };

    const statusKey = Object.keys(OrderStatus).find(
      (key) =>
        OrderStatus[key as keyof typeof OrderStatus] === rowData.orderStatus,
    );

    return (
      <Badge
        value={statusKey}
        className={statusColor[statusKey as keyof typeof OrderStatus]}
      />
    );
  };

  const paidBodyTemplate = (rowData: AdminLatestOrderModel): JSX.Element => {
    return (
      <span>
        {rowData.paid ? (
          <Check className="h-5 w-5 text-secondary" />
        ) : (
          <X className="h-5 w-5 text-red-500" />
        )}
      </span>
    );
  };

  const totalBodyTemplate = (rowData: AdminLatestOrderModel): JSX.Element => {
    return (
      <span className="truncate font-bold">
        {rowData.total.toLocaleString(locale)}
      </span>
    );
  };

  const dateBodyTemplate = (rowData: AdminLatestOrderModel): JSX.Element => {
    return (
      <span>
        {new Date(rowData.createdAt).toLocaleDateString(locale)}{" "}
        {new Date(rowData.createdAt).toLocaleTimeString(locale)}
      </span>
    );
  };

  const customerBodyTemplate = (
    rowData: AdminLatestOrderModel,
  ): JSX.Element => {
    return (
      <div className="truncate">
        <Tooltip
          className="text-xs"
          position="top"
          target={`.customer-tooltip-${rowData.orderId}`}
        >
          {rowData.user.firstName} {rowData.user.lastName}
        </Tooltip>
        <span className={`customer-tooltip-${rowData.orderId}`}>
          {rowData.user.firstName} {rowData.user.lastName}
        </span>
      </div>
    );
  };

  const handleEditOrder = (id: number): void => {
    const params = new URLSearchParams(searchParams);

    params.set("orderToEdit", id.toString());

    replace(`?${params.toString()}`);
  };

  const orderNumberBodyTemplate = (
    rowData: AdminLatestOrderModel,
  ): JSX.Element => {
    return (
      <div
        onClick={() => handleEditOrder(rowData.orderId)}
        className="cursor-pointer font-bold text-primary"
      >
        {rowData.orderId}
      </div>
    );
  };

  const orderNumberHeader = (
    <div className="flex items-center gap-x-2">
      <h2 className="font-medium">
        {t("latestOrders.table.orderNumber.title")}
      </h2>
      <Info className="order-number h-5 w-5 text-primary" />
      <Tooltip target=".order-number" className="text-xs" position="bottom">
        {t("latestOrders.table.orderNumber.tooltip")}
      </Tooltip>
    </div>
  );

  return (
    <section className="col-span-2">
      <div className="mb-4 flex items-center gap-x-4 text-primary">
        <Truck className="h-5 w-5" />
        <h2 className="font-medium">{t("latestOrders.title")}</h2>
      </div>
      <PRDataTable
        value={latestOrdersData}
        rows={5}
        tableClassName="h-[400px]"
        emptyMessage={t("latestOrders.empty")}
      >
        <PRColumn
          field="orderNumber"
          header={orderNumberHeader}
          body={orderNumberBodyTemplate}
        />
        <PRColumn
          field="customer"
          header={t("latestOrders.table.customer")}
          body={customerBodyTemplate}
          className="max-w-[150px]"
        />
        <PRColumn
          field="orderTotal"
          header={t("latestOrders.table.total")}
          body={totalBodyTemplate}
        />
        <PRColumn
          field="orderPaid"
          header={t("latestOrders.table.paid")}
          body={paidBodyTemplate}
        />
        <PRColumn
          field="orderStatus"
          header={t("latestOrders.table.status")}
          body={statusBodyTemplate}
        />
        <PRColumn
          field="createdAt"
          header={t("latestOrders.table.date")}
          body={dateBodyTemplate}
        />
      </PRDataTable>
    </section>
  );
}
