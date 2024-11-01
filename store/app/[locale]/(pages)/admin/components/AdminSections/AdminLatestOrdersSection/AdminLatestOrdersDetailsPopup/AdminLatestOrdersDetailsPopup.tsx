"use client";

import PRDialog from "@/app/common/components/PrimeReact/PRDialog";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, type JSX } from "react";
import AdminLatestOrdersDetailsPopupContent from "./AdminLatestOrdersDetailsPopupContent";

export default function AdminLatestOrdersDetailsPopup(): JSX.Element {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const orderToEdit = params.get("orderToEdit");

  const onHide = (): void => {
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
