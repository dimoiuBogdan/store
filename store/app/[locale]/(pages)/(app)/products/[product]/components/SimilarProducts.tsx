import type { JSX } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const SimilarProducts = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="mb-12 text-center text-4xl font-semibold">
        Similar Products
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard
            key={index}
            id={index}
            name={`Product ${index + 1}`}
            price={100}
            imageUrl={
              "https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp"
            }
            description={`Description of Product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
