import Image from "next/image";
import ProductDescription from "./components/ProductDescription";
import ProductOrder from "./components/ProductOrder";
import SimilarProducts from "./components/SimilarProducts";

export const dynamic = "force-dynamic";

const ProductPage = async ({ params }: { params: { product: string } }) => {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex items-center gap-8">
        <div className="w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1617719446461-b367b33450f6?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Whey-X5"
            width={500}
            height={500}
            unoptimized
            className="h-[600px] w-full rounded-lg object-cover object-center shadow shadow-zinc-500"
          />
        </div>
        <ProductOrder />
      </div>
      <ProductDescription />
      <SimilarProducts />
    </div>
  );
};

export default ProductPage;
