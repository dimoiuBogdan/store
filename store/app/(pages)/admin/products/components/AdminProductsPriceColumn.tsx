"use client";

export default function AdminProductsPriceColumn({ price }: { price: number }) {
  return <span className="font-semibold">${price.toFixed(2)}</span>;
}
