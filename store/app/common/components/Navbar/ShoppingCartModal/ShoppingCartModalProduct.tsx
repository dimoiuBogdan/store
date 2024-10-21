import { MinusCircle, PlusCircle, TrashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ShoppingCartModalProduct = () => {
  const handleRemoveProduct = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    e.preventDefault();

    console.log("remove product");
  };

  return (
    <Link href="/products/1" className="flex items-center gap-4 transition-all">
      <Image
        unoptimized
        src="https://images.unsplash.com/photo-1617719445949-8955477042b8?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Product"
        width={100}
        height={100}
        className="h-24 w-24 rounded-md object-cover object-center shadow"
      />
      <div className="flex w-full flex-col gap-2">
        <p className="flex items-center justify-between font-medium">
          Whey-X5 900g/27serv
          <TrashIcon
            className="h-6 w-6 cursor-pointer rounded-full bg-primary p-1 text-background transition-all hover:bg-primary/20 hover:text-primary"
            onClick={handleRemoveProduct}
          />
        </p>
        <p className="text-sm text-zinc-400">900 g / Vanilla-Chocolate</p>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MinusCircle className="h-4 w-4 cursor-pointer text-zinc-200 transition-all hover:text-primary" />
            <p>2</p>
            <PlusCircle className="h-4 w-4 cursor-pointer text-zinc-200 transition-all hover:text-primary" />
          </div>
          <p className="font-medium">$100</p>
        </div>
      </div>
    </Link>
  );
};

export default ShoppingCartModalProduct;
