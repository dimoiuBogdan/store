"use client";

import { Check, Info, Truck, X } from "lucide-react";
import { Badge } from "primereact/badge";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Tooltip } from "primereact/tooltip";
import { useState } from "react";
import { OrderStatus } from "../../../../../common/types/enums";
import AdminLatestOrdersDetailsPopup from "./AdminLatestOrdersDetailsPopup/AdminLatestOrdersDetailsPopup";
import { AdminLatestOrderModel } from "./types/admin-latest-orders-section.types";

type Props = {
  latestOrdersData: AdminLatestOrderModel[];
};

export default function AdminLatestOrdersSection({ latestOrdersData }: Props) {
  const [orderToEdit, setOrderToEdit] = useState<number | null>(null);

  const statusBodyTemplate = (rowData: AdminLatestOrderModel) => {
    const statusColor: Record<keyof typeof OrderStatus, string> = {
      PENDING: "bg-yellow-500",
      PROCESSING: "bg-sky-500",
      SHIPPED: "bg-purple-500",
      DELIVERED: "bg-emerald-500",
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
        {rowData.orderPaid ? (
          <Check className="h-5 w-5 text-emerald-500" />
        ) : (
          <X className="h-5 w-5 text-red-500" />
        )}
      </span>
    );
  };

  const totalBodyTemplate = (rowData: AdminLatestOrderModel) => {
    return (
      <span className="truncate font-bold">
        {rowData.orderTotal.toLocaleString()} $
      </span>
    );
  };

  const dateBodyTemplate = (rowData: AdminLatestOrderModel) => {
    return (
      <span>
        {new Date(rowData.orderDate).toLocaleDateString()}{" "}
        {new Date(rowData.orderDate).toLocaleTimeString()}
      </span>
    );
  };

  const customerBodyTemplate = (rowData: AdminLatestOrderModel) => {
    return (
      <div className="truncate">
        <Tooltip
          className="text-xs"
          position="top"
          target={`.customer-tooltip-${rowData.id}`}
        >
          {rowData.customerName}
        </Tooltip>
        <span className={`customer-tooltip-${rowData.id}`}>
          {rowData.customerName}
        </span>
      </div>
    );
  };

  const handleEditOrder = (id: number) => {
    setOrderToEdit(id);
  };

  const orderNumberBodyTemplate = (rowData: AdminLatestOrderModel) => {
    return (
      <div
        onClick={() => handleEditOrder(rowData.id)}
        className="cursor-pointer font-bold text-purple-500"
      >
        {rowData.id}
      </div>
    );
  };

  const orderNumberHeader = (
    <div className="flex items-center gap-x-2">
      <h2 className="font-medium">Order Number</h2>
      <Info className="order-number h-5 w-5 text-purple-500" />
      <Tooltip target=".order-number" className="text-xs" position="bottom">
        Click on the order number to view details and take actions
      </Tooltip>
    </div>
  );

  return (
    <section className="col-span-2">
      <div className="mb-4 flex items-center gap-x-4">
        <Truck className="h-5 w-5" />
        <h2 className="font-medium">Latest Orders</h2>
      </div>
      <DataTable
        value={latestOrdersData}
        rows={5}
        scrollable
        className="overflow-hidden overflow-x-auto rounded-lg text-sm shadow-sm"
        tableClassName="h-[400px]"
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
        <Column field="orderDate" header="Date" body={dateBodyTemplate} />
      </DataTable>
      {orderToEdit ? (
        <AdminLatestOrdersDetailsPopup
          orderToEdit={orderToEdit}
          setOrderToEdit={setOrderToEdit}
        />
      ) : null}
    </section>
  );
}
