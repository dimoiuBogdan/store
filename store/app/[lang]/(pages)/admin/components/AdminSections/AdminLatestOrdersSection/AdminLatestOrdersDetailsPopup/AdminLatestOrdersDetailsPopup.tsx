"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Dialog } from "primereact/dialog";
import { Suspense } from "react";
import AdminLatestOrdersDetailsPopupContent from "./AdminLatestOrdersDetailsPopupContent";

export default function AdminLatestOrdersDetailsPopup() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const orderToEdit = params.get("orderToEdit");

  return (
    <Dialog
      header="Order Details"
      visible={!!orderToEdit}
      className="w-[75vw] max-w-screen-lg"
      closable
      blockScroll
      dismissableMask
      onHide={() => {
        if (orderToEdit) {
          params.delete("orderToEdit");

          replace(`?${params.toString()}`);
        }
      }}
    >
      <Suspense fallback={<div>Loading order details...</div>}>
        <AdminLatestOrdersDetailsPopupContent />
      </Suspense>
    </Dialog>
  );
}
