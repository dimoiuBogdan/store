import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Badge } from "primereact/badge";
import {
  OrderStatus,
  PaymentMethod,
} from "../../../../../../common/types/enums";
import AdminLatestOrdersDetailsPopupDownloadInvoice from "./AdminLatestOrdersDetailsPopupDownloadInvoice";
import AdminLatestOrdersDetailsPopupNotifyUser from "./AdminLatestOrdersDetailsPopupNotifyUser";
import AdminLatestOrdersDetailsPopupOrderActions from "./AdminLatestOrdersDetailsPopupOrderActions";
import AdminLatestOrdersDetailsPopupProducts from "./AdminLatestOrdersDetailsPopupProducts";
import type { AdminOrderDetailsModel } from "./types/admin-latest-orders-details-popup.types";

type Props = {
  orderToEdit: number;
};

export default function AdminLatestOrdersDetailsPopupContent({
  orderToEdit,
}: Props) {
  const response = queryOptions<AdminOrderDetailsModel>({
    queryKey: ["orderDetails", orderToEdit],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/latest-orders/${orderToEdit}`,
      );

      return response.json();
    },
  });

  const { data: orderDetailsData } = useSuspenseQuery(response);

  const statusBodyTemplate = (status: OrderStatus) => {
    const statusColor: Record<keyof typeof OrderStatus, string> = {
      PENDING: "bg-yellow-500",
      PROCESSING: "bg-sky-500",
      SHIPPED: "bg-purple-500",
      DELIVERED: "bg-emerald-500",
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
          <div>Order Number: </div>
          <div className="font-semibold">{orderDetailsData.orderId}</div>
        </div>
        <div className="flex gap-x-2">
          <div>Total: </div>
          <div className="font-semibold">
            {orderDetailsData.total.toLocaleString()} $
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>Paid: </div>
          <div className="font-bold">
            {orderDetailsData.paid ? (
              <div className="text-emerald-500">Yes</div>
            ) : (
              <div className="text-red-500">No</div>
            )}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>Status: </div>
          <div className="font-semibold">
            {statusBodyTemplate(orderDetailsData.orderStatus)}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>Payment Method: </div>
          <div className="font-semibold">
            {PaymentMethod[orderDetailsData.paymentMethod]}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>Date: </div>
          <div className="font-semibold">
            {new Date(orderDetailsData.createdAt).toLocaleDateString()}{" "}
            {new Date(orderDetailsData.createdAt).toLocaleTimeString()}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>Customer: </div>
          <div className="font-semibold">
            {orderDetailsData.user.firstName} {orderDetailsData.user.lastName}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>Phone Number: </div>
          <Link
            href={`tel:${orderDetailsData.user.phoneNumber}`}
            className="font-semibold underline"
          >
            {orderDetailsData.user.phoneNumber}
          </Link>
        </div>
        <div className="flex gap-x-2">
          <div>Email: </div>
          <Link
            href={`mailto:${orderDetailsData.user.email}`}
            className="font-semibold underline"
          >
            {orderDetailsData.user.email}
          </Link>
        </div>
        <div className="flex gap-x-2">
          <div>Billing Address: </div>
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
          <div>Shipping Address: </div>
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
        <div className="mb-4 text-lg font-semibold">Actions</div>
        <div className="flex flex-wrap items-center gap-x-4 text-sm font-medium">
          <AdminLatestOrdersDetailsPopupDownloadInvoice />
          <AdminLatestOrdersDetailsPopupNotifyUser />
          <AdminLatestOrdersDetailsPopupOrderActions />
        </div>
      </div>
      <AdminLatestOrdersDetailsPopupProducts orderToEdit={orderToEdit} />
    </div>
  );
}
