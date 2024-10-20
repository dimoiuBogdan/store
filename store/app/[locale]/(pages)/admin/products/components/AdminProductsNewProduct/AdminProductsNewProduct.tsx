"use client";

import { PlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import AdminProductsNewProductPopup from "./AdminProductsNewProductPopup";

export default function AdminProductsNewProduct() {
  const router = useRouter();
  const t = useTranslations("admin.products");

  const showNewProductPopup = () => {
    const params = new URLSearchParams();
    params.set("product", "new");

    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <div
        className="flex w-fit cursor-pointer items-center gap-x-1 rounded-md bg-secondary px-2 py-1 font-medium text-white shadow-md transition-all hover:bg-secondary/90"
        onClick={showNewProductPopup}
      >
        <PlusIcon className="h-6 w-6" />
        <div>{t("addNewProduct")}</div>
      </div>
      <AdminProductsNewProductPopup />
    </div>
  );
}
