import { Check, X } from "lucide-react";
import type { JSX } from "react";

type Props = {
  isActive: boolean;
};

export default function AdminProductsActiveColumn({
  isActive,
}: Props): JSX.Element {
  return isActive ? (
    <Check className="h-5 w-5 text-secondary" />
  ) : (
    <X className="h-5 w-5 text-red-500" />
  );
}
