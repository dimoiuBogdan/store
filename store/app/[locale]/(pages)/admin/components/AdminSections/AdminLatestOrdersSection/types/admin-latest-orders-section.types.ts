import type { OrderStatus, PaymentMethod } from "@/app/common/types/enums";

export type AdminLatestOrderModel = {
  orderId: number;
  createdAt: string;
  total: number;
  orderStatus: OrderStatus;
  user: AdminLatestOrdersUserModel;
  shippingOrderAddressId: number;
  billingOrderAddressId: number;
  paymentMethodId: PaymentMethod;
  paid: boolean;
  customerName: string;
};

type AdminLatestOrdersUserModel = {
  userId: number;
  firstName: string;
  lastName: string;
};
