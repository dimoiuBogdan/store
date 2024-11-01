"use client";

import type { CategoryModel } from "@/app/common/types/types";
import type { JSX } from "react";

export default function AdminProductsCategoriesColumn({
  categories,
}: {
  categories: CategoryModel[];
}): JSX.Element {
  return <div>{categories.map((category) => category.name).join(" / ")}</div>;
}
