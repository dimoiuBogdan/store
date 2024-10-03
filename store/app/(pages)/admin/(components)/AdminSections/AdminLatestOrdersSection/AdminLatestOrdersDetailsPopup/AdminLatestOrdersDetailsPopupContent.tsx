import { Badge } from "primereact/badge";
import { OrderStatus } from "../../../../../../common/types/enums";
import AdminLatestOrdersDetailsPopupDownloadInvoice from "./AdminLatestOrdersDetailsPopupDownloadInvoice";
import AdminLatestOrdersDetailsPopupNotifyUser from "./AdminLatestOrdersDetailsPopupNotifyUser";
import AdminLatestOrdersDetailsPopupOrderActions from "./AdminLatestOrdersDetailsPopupOrderActions";
import AdminLatestOrdersDetailsPopupProducts from "./AdminLatestOrdersDetailsPopupProducts";

export default function AdminLatestOrdersDetailsPopupContent() {
  // const response = queryOptions<AdminOrderDetailsModel>({
  //   queryKey: ["orderDetails", orderToEdit],
  //   queryFn: async () => {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/admin/order-details/${orderToEdit}`,
  //     );

  //     return response.json();
  //   },
  // });

  // const { data: orderDetailsData } = useSuspenseQuery(response);

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
          <div className="font-semibold">123456</div>
        </div>
        <div className="flex gap-x-2">
          <div>Total: </div>
          <div className="font-semibold">123456</div>
        </div>
        <div className="flex gap-x-2">
          <div>Paid: </div>
          <div className="font-semibold">Yes</div>
        </div>
        <div className="flex gap-x-2">
          <div>Status: </div>
          <div className="font-semibold">
            {statusBodyTemplate(OrderStatus.DELIVERED)}
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>Payment Method: </div>
          <div className="font-semibold">Cash on Delivery</div>
        </div>
        <div className="flex gap-x-2">
          <div>Date: </div>
          <div className="font-semibold">123456</div>
        </div>
        <div className="flex gap-x-2">
          <div>Customer: </div>
          <div className="font-semibold">John Doe</div>
        </div>
        <div className="flex gap-x-2">
          <div>Phone Number: </div>
          <div className="font-semibold">123456</div>
        </div>
        <div className="flex gap-x-2">
          <div>Email: </div>
          <div className="font-semibold">johndoe@gmail.com</div>
        </div>
        <div className="flex gap-x-2">
          <div>Billing Address: </div>
          <div className="font-semibold">
            <div>123456</div>
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>Shipping Address: </div>
          <div className="font-semibold">
            <div>123456</div>
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
      <AdminLatestOrdersDetailsPopupProducts />
    </div>
  );
}
