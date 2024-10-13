"use client";

import { CategoryModel } from "../../../../../common/types/types";

export default function AdminProductsCategoriesColumn({
  categories,
}: {
  categories: CategoryModel[];
}) {
  return <div>{categories.map((category) => category.name).join(" / ")}</div>;
}
