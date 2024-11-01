import { useLocale } from "next-intl";
import type { JSX } from "react";

export default function AdminProductsDateColumn({
  createdAt,
}: {
  createdAt: string;
}): JSX.Element {
  const locale = useLocale();

  return <div>{new Date(createdAt).toLocaleString(locale)}</div>;
}
