import { OrderStatus } from "../../../../../../../common/types/enums";

export type AdminOrderDetailsProductModel = {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
  total: number;
  category: string;
  image: string;
};

export type AdminOrderDetailsModel = {
  orderNumber: number;
  customer: string;
  total: number;
  paid: boolean;
  status: OrderStatus;
  date: string;
  phoneNumber: string;
  email: string;
  shippingAddress: string;
  billingAddress: string;
  paymentMethod: string;
};
