"use client";

import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Badge } from "primereact/badge";
import AdminService from "../../../../../../../common/services/admin/admin.service";
import {
  OrderStatus,
  PaymentMethod,
} from "../../../../../../../common/types/enums";
import AdminLatestOrdersDetailsPopupDownloadInvoice from "./AdminLatestOrdersDetailsPopupDownloadInvoice";
import AdminLatestOrdersDetailsPopupNotifyUser from "./AdminLatestOrdersDetailsPopupNotifyUser";
import AdminLatestOrdersDetailsPopupOrderActions from "./AdminLatestOrdersDetailsPopupOrderActions";
import AdminLatestOrdersDetailsPopupProducts from "./AdminLatestOrdersDetailsPopupProducts";
import type { AdminOrderDetailsModel } from "./types/admin-latest-orders-details-popup.types";

export default function AdminLatestOrdersDetailsPopupContent() {
  const t = useTranslations("admin.overview.orderDetails");
  const locale = useLocale();

  const searchParams = useSearchParams();
  const orderToEdit = searchParams.get("orderToEdit");

  const response = queryOptions<AdminOrderDetailsModel | null>({
    queryKey: ["admin-order-details", orderToEdit],
    enabled: !!orderToEdit,
    queryFn: async () => {
      if (!orderToEdit) {
        return null;
      }

      const { getLatestOrderDetails } = AdminService;

      const orderDetails = await getLatestOrderDetails(orderToEdit);

      return orderDetails;
    },
  });

  const { data: orderDetailsData } = useSuspenseQuery(response);

  if (!orderDetailsData) {
    return <div>No order details</div>;
  }

  const statusBodyTemplate = (status: OrderStatus) => {
    const statusColor: Record<keyof typeof OrderStatus, string> = {
      PENDING: "bg-yellow-500",
      PROCESSING: "bg-sky-500",
      SHIPPED: "bg-purple-500",
      DELIVERED: "bg-secondary",
      CANCELLED: "bg-red-500",
      REFUNDED: "bg-zinc-500",
    };

    const statusKey = Object.keys(OrderStatus).find(
      (key) => OrderStatus[key as keyof typeof OrderStatus] === status,
    );

    return (
      <Badge
        value={statusKey}
        className={statusColor[statusKey as keyof typeof OrderStatus]}
      />
    );
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex gap-x-2">
          <div>{t("info.orderNumber")}: </div>
          <div className="font-semibold">{orderDetailsData.orderId}</div>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.orderTotal")}: </div>
          <div className="font-semibold">
            {orderDetailsData.total.toLocaleString(locale)}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.paid")}: </div>
          <div className="font-bold">
            {orderDetailsData.paid ? (
              <div className="text-secondary">Yes</div>
            ) : (
              <div className="text-red-500">No</div>
            )}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.status")}: </div>
          <div className="font-semibold">
            {statusBodyTemplate(orderDetailsData.orderStatus)}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.paymentMethod")}: </div>
          <div className="font-semibold">
            {PaymentMethod[orderDetailsData.paymentMethod]}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.date")}: </div>
          <div className="font-semibold">
            {new Date(orderDetailsData.createdAt).toLocaleDateString(locale)}{" "}
            {new Date(orderDetailsData.createdAt).toLocaleTimeString(locale)}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.customer")}: </div>
          <div className="font-semibold">
            {orderDetailsData.user.firstName} {orderDetailsData.user.lastName}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.phoneNumber")}: </div>
          <Link
            href={`tel:${orderDetailsData.user.phoneNumber}`}
            className="font-semibold underline"
          >
            {orderDetailsData.user.phoneNumber}
          </Link>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.email")}: </div>
          <Link
            href={`mailto:${orderDetailsData.user.email}`}
            className="font-semibold underline"
          >
            {orderDetailsData.user.email}
          </Link>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.billingAddress")}: </div>
          <div className="font-semibold">
            <div>{orderDetailsData.billingOrderAddress.street}</div>
            <div>{orderDetailsData.billingOrderAddress.number}</div>
            <div>{orderDetailsData.billingOrderAddress.postcode}</div>
            <div>
              {orderDetailsData.billingOrderAddress.city},{" "}
              {orderDetailsData.billingOrderAddress.county},{" "}
              {orderDetailsData.billingOrderAddress.country}
            </div>
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>{t("info.shippingAddress")}: </div>
          <div className="font-semibold">
            <div>{orderDetailsData.shippingOrderAddress.street}</div>
            <div>{orderDetailsData.shippingOrderAddress.number}</div>
            <div>{orderDetailsData.shippingOrderAddress.postcode}</div>
            <div>
              {orderDetailsData.shippingOrderAddress.city},{" "}
              {orderDetailsData.shippingOrderAddress.county},{" "}
              {orderDetailsData.shippingOrderAddress.country}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="mb-4 text-lg font-semibold">{t("actions.title")}</div>
        <div className="flex flex-wrap items-center gap-x-4 text-sm font-medium">
          <AdminLatestOrdersDetailsPopupDownloadInvoice />
          <AdminLatestOrdersDetailsPopupNotifyUser />
          <AdminLatestOrdersDetailsPopupOrderActions />
        </div>
      </div>
      <AdminLatestOrdersDetailsPopupProducts />
    </div>
  );
}
