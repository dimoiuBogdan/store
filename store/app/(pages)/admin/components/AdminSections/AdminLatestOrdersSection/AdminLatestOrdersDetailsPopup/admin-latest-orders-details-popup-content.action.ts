"use server";

import { notFound } from "next/navigation";

export async function fetchOrderDetails(
  orderToEdit: number,
): Promise<Response> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/latest-orders/${orderToEdit}`,
    { next: { revalidate: 3600, tags: [`admin-latest-order-${orderToEdit}`] } },
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }

    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
}
