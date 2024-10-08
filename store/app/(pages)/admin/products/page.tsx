import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";
import AdminProductsTable from "./AdminProductsTable";

const fetchProducts = async () => {
  // Simulate API call with 2 second delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return []; // Return empty array, actual data will be fetched on the client
};

export default async function AdminProductsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="text-2xl font-semibold">Admin Products</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading products...</div>}>
          <AdminProductsTable />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
