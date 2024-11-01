import type { JSX } from "react";
import ShoppingCartModalProduct from "./ShoppingCartModalProduct";

const ShoppingCartModalProducts = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <ShoppingCartModalProduct />
      <ShoppingCartModalProduct />
      <ShoppingCartModalProduct />
    </div>
  );
};

export default ShoppingCartModalProducts;
