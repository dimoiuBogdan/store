import { notFound } from "next/navigation";
import AdminLatestOrdersSection from "./AdminLatestOrdersSection";
import AdminLatestOrdersSectionError from "./error";
import type { AdminLatestOrderModel } from "./types/admin-latest-orders-section.types";

export default async function AdminLatestOrdersSectionDataProvider() {
  let latestOrders: AdminLatestOrderModel[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/latest-orders`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    latestOrders = await response.json();

    if (!latestOrders || latestOrders.length === 0) {
      return <p>No latest orders found.</p>;
    }
  } catch (error) {
    console.error("Failed to fetch latest orders:", error);

    return <AdminLatestOrdersSectionError />;
  }

  return <AdminLatestOrdersSection latestOrdersData={latestOrders} />;
}
