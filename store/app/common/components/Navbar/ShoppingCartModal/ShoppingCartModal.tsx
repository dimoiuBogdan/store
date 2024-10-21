"use client";

import { ShoppingBasket } from "lucide-react";
import { useState } from "react";
import PRDialog from "../../PrimeReact/PRDialog";
import ShoppingCartModalFooter from "./ShoppingCartModalFooter";
import ShoppingCartModalProducts from "./ShoppingCartModalProducts";

const ShoppingCartModal = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <>
      <ShoppingBasket
        className="h-8 w-8 cursor-pointer rounded-full bg-background p-1.5 text-zinc-200 transition-all hover:bg-primary/10 hover:text-primary"
        onClick={handleShowCart}
      />
      <PRDialog
        position="right"
        header="Shopping Cart"
        draggable={false}
        className="min-h-screen w-full max-w-sm sm:w-[20vw] sm:min-w-80"
        visible={showCart}
        onHide={() => setShowCart(false)}
      >
        <div className="mb-4 flex flex-col gap-4 text-zinc-400">
          Shipping is free for orders over $50
        </div>
        <div className="flex h-full flex-col justify-between gap-y-8">
          <ShoppingCartModalProducts />
          <ShoppingCartModalFooter />
        </div>
      </PRDialog>
    </>
  );
};

export default ShoppingCartModal;
