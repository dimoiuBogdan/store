import AdminService from "../../../../../common/services/admin/admin.service";
import AdminLatestOrdersDetailsPopup from "./AdminLatestOrdersDetailsPopup/AdminLatestOrdersDetailsPopup";
import AdminLatestOrdersSection from "./AdminLatestOrdersSection";
import AdminLatestOrdersSectionError from "./error";

export default async function AdminLatestOrdersSectionDataProvider() {
  try {
    const { getLatestOrders } = AdminService;

    const latestOrders = await getLatestOrders();

    return (
      <>
        <AdminLatestOrdersDetailsPopup />
        <AdminLatestOrdersSection latestOrdersData={latestOrders} />
      </>
    );
  } catch (error) {
    console.error("Failed to fetch latest orders:", error);

    return <AdminLatestOrdersSectionError />;
  }
}
