import AdminProductsTable from "./AdminProductsTable";

export default async function AdminProductsPage() {
  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="text-2xl font-semibold">Admin Products</h1>
      <AdminProductsTable />
    </div>
  );
}
