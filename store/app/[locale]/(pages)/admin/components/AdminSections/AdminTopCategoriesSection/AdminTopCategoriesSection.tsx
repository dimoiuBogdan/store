import PRColumn from "@/app/common/components/PrimeReact/PRColumn";
import PRDataTable from "@/app/common/components/PrimeReact/PRDataTable";
import AdminService from "@/app/common/services/admin/admin.service";
import { ShoppingBag } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { JSX } from "react";
import AdminTopCategoriesSectionError from "./error";

export default async function AdminBestCategoriesSection(): Promise<JSX.Element> {
  try {
    const { getBestCategories } = AdminService;

    const bestCategories = await getBestCategories();

    const t = await getTranslations("admin.overview.topCategories");

    return (
      <section>
        <div className="mb-4 flex items-center gap-x-4 text-primary">
          <ShoppingBag className="h-5 w-5" />
          <h2 className="font-medium">{t("title")}</h2>
        </div>
        <PRDataTable value={bestCategories} rows={5} tableClassName="h-[400px]">
          <PRColumn field="name" header={t("table.category")} />
          <PRColumn field="salesCount" header={t("table.sales")} />
        </PRDataTable>
      </section>
    );
  } catch (error) {
    console.error("Failed to fetch best categories:", error);

    return <AdminTopCategoriesSectionError />;
  }
}
