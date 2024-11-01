"use client";

import { PlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import type { JSX } from "react";
import AdminProductsNewProductPopup from "./AdminProductsNewProductPopup";

type Props = {
  product?: string;
};

export default function AdminProductsNewProduct({
  product,
}: Props): JSX.Element {
  const router = useRouter();
  const t = useTranslations("admin.products");

  const showNewProductPopup = (): void => {
    const params = new URLSearchParams();
    params.set("product", "new");

    router.replace(`?${params.toString()}`);
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
      <AdminProductsNewProductPopup product={product} />
    </div>
  );
}
