"use client";

import { Dialog } from "primereact/dialog";
import { Suspense } from "react";
import AdminLatestOrdersDetailsPopupContent from "./AdminLatestOrdersDetailsPopupContent";

type Props = {
  orderToEdit: number | null;
  setOrderToEdit: (orderToEdit: number | null) => void;
};

export default function AdminLatestOrdersDetailsPopup({
  orderToEdit,
  setOrderToEdit,
}: Props) {
  if (!orderToEdit) return null;

  return (
    <Dialog
      header="Order Details"
      visible={!!orderToEdit}
      className="w-[75vw] max-w-screen-lg"
      closable
      blockScroll
      dismissableMask
      onHide={() => {
        setOrderToEdit(null);
      }}
    >
      <Suspense fallback={<div>Loading order details...</div>}>
        <AdminLatestOrdersDetailsPopupContent />
      </Suspense>
    </Dialog>
  );
}
