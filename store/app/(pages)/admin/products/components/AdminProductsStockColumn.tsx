"use client";

import { cn } from "../../../../common/utils/utils";

export default function AdminProductsStockColumn({ stock }: { stock: number }) {
  return (
    <span className={cn("font-semibold", stock <= 10 ? "text-red-500" : "")}>
      {stock}
    </span>
  );
}
