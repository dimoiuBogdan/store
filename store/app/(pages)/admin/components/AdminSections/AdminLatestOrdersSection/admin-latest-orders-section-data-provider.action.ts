"use server";

import { notFound } from "next/navigation";
import type { AdminLatestOrderModel } from "./types/admin-latest-orders-section.types";

export async function fetchLatestOrders(): Promise<AdminLatestOrderModel[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/latest-orders`,
    { next: { revalidate: 3600, tags: ["admin-latest-orders"] } },
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }

    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const latestOrders = await response.json();

  if (!latestOrders || latestOrders.length === 0) {
    return [];
  }

  return latestOrders;
}
