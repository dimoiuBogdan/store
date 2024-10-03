import { ShoppingBag } from "lucide-react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export default async function AdminTopCategoriesSection() {
  return (
    <section>
      <div className="mb-4 flex items-center gap-x-4">
        <ShoppingBag className="h-5 w-5" />
        <h2 className="font-medium">Top Categories</h2>
      </div>
      <DataTable
        value={[]}
        rows={5}
        tableClassName="h-[400px] text-sm"
        className="overflow-hidden rounded-lg shadow-sm"
      >
        <Column field="categoryName" header="Category" />
        <Column field="salesCount" header="Sales" />
      </DataTable>
    </section>
  );
}
