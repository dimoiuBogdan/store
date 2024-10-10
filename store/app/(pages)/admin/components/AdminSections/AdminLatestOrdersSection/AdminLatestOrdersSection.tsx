"use client";

import { Check, Info, Truck, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "primereact/badge";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Tooltip } from "primereact/tooltip";
import { OrderStatus } from "../../../../../common/types/enums";
import { AdminLatestOrderModel } from "./types/admin-latest-orders-section.types";

type Props = {
  latestOrdersData: AdminLatestOrderModel[];
};

export default function AdminLatestOrdersSection({ latestOrdersData }: Props) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const statusBodyTemplate = (rowData: AdminLatestOrderModel) => {
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

  const paidBodyTemplate = (rowData: AdminLatestOrderModel) => {
    return (
      <span>
        {rowData.paid ? (
          <Check className="text-secondary h-5 w-5" />
        ) : (
          <X className="h-5 w-5 text-red-500" />
        )}
      </span>
    );
  };

  const totalBodyTemplate = (rowData: AdminLatestOrderModel) => {
    return (
      <span className="truncate font-bold">
        {rowData.total.toLocaleString()} $
      </span>
    );
  };

  const dateBodyTemplate = (rowData: AdminLatestOrderModel) => {
    return (
      <span>
        {new Date(rowData.createdAt).toLocaleDateString()}{" "}
        {new Date(rowData.createdAt).toLocaleTimeString()}
      </span>
    );
  };

  const customerBodyTemplate = (rowData: AdminLatestOrderModel) => {
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

  const handleEditOrder = (id: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("orderToEdit", id.toString());

    replace(`?${params.toString()}`);
  };

  const orderNumberBodyTemplate = (rowData: AdminLatestOrderModel) => {
    return (
      <div
        onClick={() => handleEditOrder(rowData.orderId)}
        className="text-primary cursor-pointer font-bold"
      >
        {rowData.orderId}
      </div>
    );
  };

  const orderNumberHeader = (
    <div className="flex items-center gap-x-2">
      <h2 className="font-medium">Order Number</h2>
      <Info className="order-number text-primary h-5 w-5" />
      <Tooltip target=".order-number" className="text-xs" position="bottom">
        Click on the order number to view details and take actions
      </Tooltip>
    </div>
  );

  return (
    <section className="col-span-2">
      <div className="text-primary mb-4 flex items-center gap-x-4">
        <Truck className="h-5 w-5" />
        <h2 className="font-medium">Latest Orders</h2>
      </div>
      <DataTable
        value={latestOrdersData}
        rows={5}
        scrollable
        className="overflow-hidden overflow-x-auto rounded-lg text-sm shadow-sm"
        tableClassName="h-[400px]"
        emptyMessage="No orders found"
        pt={{
          wrapper: {
            className: "bg-background",
          },
          column: {
            headerCell: {
              className: "bg-zinc-800 text-zinc-200",
            },
            bodyCell: {
              className: "bg-background text-zinc-200",
            },
          },
        }}
      >
        <Column
          field="orderNumber"
          header={orderNumberHeader}
          body={orderNumberBodyTemplate}
        />
        <Column
          field="customer"
          header="Customer"
          body={customerBodyTemplate}
          className="max-w-[150px]"
        />
        <Column field="orderTotal" header="Total" body={totalBodyTemplate} />
        <Column field="orderPaid" header="Paid" body={paidBodyTemplate} />
        <Column field="orderStatus" header="Status" body={statusBodyTemplate} />
        <Column field="createdAt" header="Date" body={dateBodyTemplate} />
      </DataTable>
    </section>
  );
}
