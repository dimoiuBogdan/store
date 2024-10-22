import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductCardVariants from "./ProductCardVariants";

type Props = {
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export default function ProductCard({
  description,
  id,
  imageUrl,
  name,
  price,
}: Props) {
  return (
    <Link
      href={`/products/${id}`}
      className="group block h-fit w-full overflow-hidden rounded-lg bg-zinc-800 text-zinc-200 shadow-sm shadow-primary/30 transition-all hover:shadow-md hover:shadow-primary/40"
    >
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={500}
          className="h-80 w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="flex h-52 flex-1 flex-col justify-between px-2 py-4">
        <div className="mb-2.5">
          <p className="text-xs font-semibold text-primary">NEW</p>
          <h4 className="mb-1.5 mt-1 truncate text-lg font-medium tracking-tight">
            {name}
          </h4>
          <p className="ellipsis-two-lines mb-3 text-sm text-zinc-400">
            {description}
          </p>
          <div className="flex gap-2">
            <ProductCardVariants>7 Colors</ProductCardVariants>
            <ProductCardVariants>2 Sizes</ProductCardVariants>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-green-100">
            {price.toFixed(2)} $
          </span>
          <button
            aria-label="Add to cart"
            className="rounded-full bg-primary/80 p-1.5 text-background transition-all hover:bg-primary/20 hover:text-primary group-hover:rotate-12"
          >
            <ShoppingCart size={22} />
          </button>
        </div>
      </div>
    </Link>
  );
}
