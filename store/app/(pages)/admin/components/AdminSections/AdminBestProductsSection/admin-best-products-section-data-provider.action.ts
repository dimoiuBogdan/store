"use server";

import { notFound } from "next/navigation";
import { AdminBestProductModel } from "./types/admin-best-products-section.types";

export async function fetchBestProducts(): Promise<AdminBestProductModel[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/best-products`,
    { next: { revalidate: 3600, tags: ["admin-best-products"] } },
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }

    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const bestProducts = await response.json();

  if (!bestProducts || bestProducts.length === 0) {
    return [];
  }

  return bestProducts;
}
