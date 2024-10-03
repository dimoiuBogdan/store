import { OrderStatus } from "../../../../../../common/types/enums";

export type AdminLatestOrderModel = {
  id: number;
  orderDate: string;
  orderStatus: OrderStatus;
  orderStatusId: number;
  orderTotal: number;
  customerName: string;
  orderPaid: boolean;
};
