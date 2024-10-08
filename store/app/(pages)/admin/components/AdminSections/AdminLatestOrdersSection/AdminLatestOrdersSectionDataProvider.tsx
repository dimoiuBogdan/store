import { fetchLatestOrders } from "./admin-latest-orders-section-data-provider.action";
import AdminLatestOrdersSection from "./AdminLatestOrdersSection";
import AdminLatestOrdersSectionError from "./error";

export default async function AdminLatestOrdersSectionDataProvider() {
  try {
    const latestOrders = await fetchLatestOrders();

    return <AdminLatestOrdersSection latestOrdersData={latestOrders} />;
  } catch (error) {
    console.error("Failed to fetch latest orders:", error);

    return <AdminLatestOrdersSectionError />;
  }
}
