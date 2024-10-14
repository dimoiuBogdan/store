import dynamic from "next/dynamic";
import AdminService from "../../../../../../common/services/admin/admin.service";
import AdminLatestOrdersSection from "./AdminLatestOrdersSection";
import AdminLatestOrdersSectionError from "./error";

const AdminLatestOrdersDetailsPopup = dynamic(
  () => import("./AdminLatestOrdersDetailsPopup/AdminLatestOrdersDetailsPopup"),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  },
);

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
