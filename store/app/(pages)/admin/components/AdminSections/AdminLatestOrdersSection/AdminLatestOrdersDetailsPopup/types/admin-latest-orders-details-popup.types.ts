import { OrderStatus, type PaymentMethod } from "../../../../../../../common/types/enums";
import type { AddressModel, CategoryModel, UserModel } from "../../../../../../../common/types/types";

export type AdminOrderedProductModel = {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  categories: CategoryModel[];
  productImage: string;
};

export type AdminOrderDetailsModel = {
  orderId: number;
  user: UserModel;
  total: number;
  paid: boolean;
  orderStatus: OrderStatus;
  createdAt: string;
  shippingOrderAddress: AddressModel;
  billingOrderAddress: AddressModel;
  paymentMethod: PaymentMethod;
};

