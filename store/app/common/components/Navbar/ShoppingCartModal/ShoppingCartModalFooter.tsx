import PRInputTextarea from "../../PrimeReact/Inputs/PRInputTextarea";

const ShoppingCartModalFooter = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-lg font-medium">
        <p>Subtotal: </p>
        <p>$100</p>
      </div>
      <PRInputTextarea placeholder="Additional notes" />
      <div className="flex flex-col gap-4">
        <button className="w-full rounded-md bg-zinc-200 py-2.5 font-semibold text-zinc-800 shadow-sm shadow-primary/20">
          Finish Order
        </button>
        <button className="w-full rounded-md bg-zinc-800 py-2.5 font-semibold text-zinc-200 shadow-sm shadow-primary/20 transition-all hover:bg-primary/50">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartModalFooter;
