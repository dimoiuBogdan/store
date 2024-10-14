"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PRDialog from "../../../../../../../common/components/PrimeReact/PRDialog";
import AdminLatestOrdersDetailsPopupContent from "./AdminLatestOrdersDetailsPopupContent";

export default function AdminLatestOrdersDetailsPopup() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const orderToEdit = params.get("orderToEdit");

  const onHide = () => {
    if (orderToEdit) {
      params.delete("orderToEdit");

      replace(`?${params.toString()}`);
    }
  };

  return (
    <PRDialog visible={!!orderToEdit} onHide={onHide} header="Order Details">
      <Suspense fallback={<div>Loading order details...</div>}>
        <AdminLatestOrdersDetailsPopupContent />
      </Suspense>
    </PRDialog>
  );
}
