import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export default function ProductCard({ id, name, price, imageUrl }: Props) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white">
      <Link
        href={`/products/${id}`}
        className="relative block h-80 overflow-hidden rounded-md shadow-sm"
      >
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={500}
          className="w-full overflow-hidden rounded-md object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </Link>
      <div className="flex items-center justify-between py-2">
        <Link href={`/products/${id}`}>
          <h2 className="text-2xl font-medium tracking-tight text-gray-700">
            {name}
          </h2>
          <span className="text-xl font-semibold text-gray-600">
            ${price.toFixed(2)}
          </span>
        </Link>
        <button
          aria-label="Add to cart"
          className="rounded-full bg-purple-600 p-2 text-white transition-colors duration-200 hover:bg-purple-700"
        >
          <ShoppingCart size={24} />
        </button>
      </div>
    </div>
  );
}
