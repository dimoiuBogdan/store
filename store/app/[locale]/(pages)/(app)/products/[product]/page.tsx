import Image from "next/image";
import type { JSX } from "react";
import ProductDescription from "./components/ProductDescription";
import ProductOrder from "./components/ProductOrder";
import SimilarProducts from "./components/SimilarProducts";

const ProductPage = async (): Promise<JSX.Element> => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="items-center gap-8 md:flex">
        <Image
          src="https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Whey-X5"
          width={500}
          height={500}
          className="mb-6 h-[70vh] w-full rounded-lg object-cover object-center shadow shadow-zinc-500 md:mb-0 md:w-1/2"
        />
        <ProductOrder />
      </div>
      <ProductDescription />
      <SimilarProducts />
    </div>
  );
};

export default ProductPage;
