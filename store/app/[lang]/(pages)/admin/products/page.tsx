import { PlusIcon } from "lucide-react";
import AdminProductsTable from "./AdminProductsTable";

export default async function AdminProductsPage() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Admin Products</h1>
        <div className="flex cursor-pointer items-center gap-x-1 rounded-md bg-secondary px-2 py-1 font-medium text-white shadow-md transition-all hover:bg-secondary/90">
          <PlusIcon className="h-6 w-6" />
          <div>Add New</div>
        </div>
      </div>
      <AdminProductsTable />
    </div>
  );
}
