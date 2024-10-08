"use server";

import { notFound } from "next/navigation";
import type { AdminOverviewModel } from "./types/admin-overview-section.types";

export async function fetchOverview(): Promise<AdminOverviewModel | null> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/overview`,
    { next: { revalidate: 3600, tags: ["admin-overview"] } },
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }

    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const overview = await response.json();

  if (!overview) {
    return null;
  }

  return overview;
}
