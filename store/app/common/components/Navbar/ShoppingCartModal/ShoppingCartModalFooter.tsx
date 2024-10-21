import { InputTextarea } from "primereact/inputtextarea";
import { cn } from "../../../utils/utils";

const ShoppingCartModalFooter = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-lg font-medium">
        <p>Subtotal: </p>
        <p>$100</p>
      </div>
      <InputTextarea
        placeholder="Additional notes"
        rows={4}
        className={cn(
          "mb-4 w-full rounded-md border border-zinc-600 bg-zinc-800 px-2 py-1 shadow-sm",
        )}
      />
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
