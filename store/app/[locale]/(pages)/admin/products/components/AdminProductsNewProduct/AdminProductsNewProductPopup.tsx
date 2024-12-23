"use client";

import { useTranslations } from "next-intl";

import { useRouter } from "next/router";

import { useState, type JSX } from "react";

import PRConfirmationDialog from "@/app/common/components/PrimeReact/PRConfirmationDialog";
import PRDialog from "@/app/common/components/PrimeReact/PRDialog";
import AdminProductsNewProductForm from "./AdminProductsNewProductForm/AdminProductsNewProductForm";

type Props = {
  product?: string;
};

export default function AdminProductsNewProductPopup({
  product,
}: Props): JSX.Element {
  const t = useTranslations("admin.products");
  const { replace } = useRouter();
  const params = new URLSearchParams();

  const [showQuitConfirmationModal, setShowQuitConfirmationModal] =
    useState<boolean>(false);

  const handleHideNewProductPopup = (): void => {
    params.delete("product");

    replace(`?${params.toString()}`);
  };

  return (
    <>
      <PRDialog
        onHide={() => setShowQuitConfirmationModal(true)}
        visible={!!product}
        header={product === "new" ? t("addNewProduct") : t("editProduct")}
      >
        <AdminProductsNewProductForm
          product={product}
          onHide={handleHideNewProductPopup}
        />
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
