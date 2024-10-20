"use client";

import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import PRConfirmationDialog from "../../../../../../common/components/PrimeReact/PRConfirmationDialog";
import PRDialog from "../../../../../../common/components/PrimeReact/PRDialog";
import AdminProductsNewProductForm from "./AdminProductsNewProductForm/AdminProductsNewProductForm";

export default function AdminProductsNewProductPopup() {
  const t = useTranslations("admin.products");
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const [showQuitConfirmationModal, setShowQuitConfirmationModal] =
    useState<boolean>(false);

  const productId = params.get("product");

  const handleHideNewProductPopup = () => {
    params.delete("product");

    replace(`?${params.toString()}`);
  };

  return (
    <>
      <PRDialog
        onHide={() => setShowQuitConfirmationModal(true)}
        visible={!!productId}
        header={productId === "new" ? t("addNewProduct") : t("editProduct")}
      >
        <AdminProductsNewProductForm onHide={handleHideNewProductPopup} />
      </PRDialog>

      <PRConfirmationDialog
        visible={showQuitConfirmationModal}
        onHide={() => setShowQuitConfirmationModal(false)}
        message="Are you sure you want to quit?"
        accept={handleHideNewProductPopup}
        header="Close without saving"
      />
    </>
  );
}
