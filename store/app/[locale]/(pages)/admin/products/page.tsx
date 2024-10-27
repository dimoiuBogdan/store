import AdminProductsTable from "./AdminProductsTable";
import AdminProductsNewProduct from "./components/AdminProductsNewProduct/AdminProductsNewProduct";

type SearchParams = Promise<{ product?: string }>;

export default async function AdminProductsPage(props: {
  searchParams: SearchParams;
}) {
  const params = await props.searchParams;
  const product = params.product;

  return (
    <div className="flex flex-col gap-y-6">
      <AdminProductsNewProduct product={product} />
      <AdminProductsTable />
    </div>
  );
}
