import ProductCard from "./components/productCard/ProductCard";

export default function ProductsPage() {
  return (
    <div>
      <ProductCard
        id={1}
        name="Product 1"
        price={100}
        imageUrl="https://img.kwcdn.com/product/open/2023-06-02/1685670738188-7c95f67ad79449d08f22dea5a9bc8690-goods.jpeg?imageView2/2/w/800/q/70/format/webp"
      />
    </div>
  );
}
