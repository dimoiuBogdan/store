"use client";

import type { JSX } from "react";

export default function AdminProductsPriceColumn({
  price,
}: {
  price: number;
}): JSX.Element {
  return <span className="font-semibold">${price.toFixed(2)}</span>;
}
