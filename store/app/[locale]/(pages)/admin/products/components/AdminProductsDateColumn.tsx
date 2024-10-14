import { useLocale } from "next-intl";

export default function AdminProductsDateColumn({
  createdAt,
}: {
  createdAt: string;
}) {
  const locale = useLocale();

  return <div>{new Date(createdAt).toLocaleString(locale)}</div>;
}
