import { PlusIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import AdminProductsTable from "./AdminProductsTable";

export default async function AdminProductsPage() {
  const t = await getTranslations("admin.products");

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center justify-between">
        <div className="flex cursor-pointer items-center gap-x-1 rounded-md bg-secondary px-2 py-1 font-medium text-white shadow-md transition-all hover:bg-secondary/90">
          <PlusIcon className="h-6 w-6" />
          <div>{t("addNewProduct")}</div>
        </div>
      </div>
      <AdminProductsTable />
    </div>
  );
}
