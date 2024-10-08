"use server";

import { notFound } from "next/navigation";
import type { AdminBestCategoriesModel } from "./types/admin-best-categories-section.types";

export async function fetchBestCategories(): Promise<
  AdminBestCategoriesModel[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/best-categories`,
    { next: { revalidate: 3600, tags: ["admin-best-categories"] } },
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const bestCategories = await response.json();

  if (!bestCategories || bestCategories.length === 0) {
    return [];
  }

  return bestCategories;
}
