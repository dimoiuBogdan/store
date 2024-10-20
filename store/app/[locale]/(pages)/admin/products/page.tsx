import AdminProductsTable from "./AdminProductsTable";
import AdminProductsNewProduct from "./components/AdminProductsNewProduct/AdminProductsNewProduct";

export default async function AdminProductsPage() {
  return (
    <div className="flex flex-col gap-y-6">
      <AdminProductsNewProduct />
      <AdminProductsTable />
    </div>
  );
}
