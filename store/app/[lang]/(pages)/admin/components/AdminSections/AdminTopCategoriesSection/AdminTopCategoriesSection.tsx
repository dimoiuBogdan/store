import { ShoppingBag } from "lucide-react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import AdminService from "../../../../../../common/services/admin/admin.service";
import AdminTopCategoriesSectionError from "./error";

export default async function AdminBestCategoriesSection() {
  try {
    const { getBestCategories } = AdminService;

    const bestCategories = await getBestCategories();

    return (
      <section>
        <div className="mb-4 flex items-center gap-x-4">
          <ShoppingBag className="h-5 w-5" />
          <h2 className="font-medium">Top Categories</h2>
        </div>
        <DataTable
          value={bestCategories}
          rows={5}
          tableClassName="h-[400px]"
          className="overflow-hidden rounded-lg shadow-sm shadow-primary/20"
          pt={{
            wrapper: {
              className: "bg-background",
            },
            column: {
              headerCell: {
                className: "bg-zinc-800 text-zinc-200",
              },
              bodyCell: {
                className: "bg-background text-zinc-200",
              },
            },
          }}
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
