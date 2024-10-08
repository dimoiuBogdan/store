import { ShoppingBag } from "lucide-react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { fetchBestCategories } from "./admin-top-categories-section.action";
import AdminTopCategoriesSectionError from "./error";

export default async function AdminBestCategoriesSection() {
  try {
    const bestCategories = await fetchBestCategories();

    return (
      <section>
        <div className="mb-4 flex items-center gap-x-4">
          <ShoppingBag className="h-5 w-5" />
          <h2 className="font-medium">Top Categories</h2>
        </div>
        <DataTable
          value={bestCategories}
          rows={5}
          tableClassName="h-[400px] text-sm"
          className="overflow-hidden rounded-lg shadow-sm"
        >
          <Column field="name" header="Category" />
          <Column field="salesCount" header="Sales" />
        </DataTable>
      </section>
    );
  } catch (error) {
    console.error("Failed to fetch best categories:", error);

    return <AdminTopCategoriesSectionError />;
  }
}
