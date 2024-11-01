import AdminService from "@/app/common/services/admin/admin.service";
import type { JSX } from "react";
import AdminLatestOrdersDetailsPopup from "./AdminLatestOrdersDetailsPopup/AdminLatestOrdersDetailsPopup";
import AdminLatestOrdersSection from "./AdminLatestOrdersSection";
import AdminLatestOrdersSectionError from "./error";

export default async function AdminLatestOrdersSectionDataProvider(): Promise<JSX.Element> {
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
