"use client";

import { cn } from "@/app/common/utils/utils";
import type { JSX } from "react";

export default function AdminProductsStockColumn({
  stock,
}: {
  stock: number;
}): JSX.Element {
  return (
    <span className={cn("font-semibold", stock <= 10 ? "text-red-500" : "")}>
      {stock}
    </span>
  );
}
