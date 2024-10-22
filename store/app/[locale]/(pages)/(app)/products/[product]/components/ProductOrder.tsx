import { Box, Minus, Plus, Star, Truck } from "lucide-react";
import { InputNumber } from "primereact/inputnumber";
import PRDropdown from "../../../../../../common/components/PrimeReact/PRDropdown";

const ProductOrder = () => {
  return (
    <div className="w-1/2">
      <h1 className="text-3xl font-bold tracking-wide">
        Whey-X5 900g / 27serv
      </h1>
      <div className="my-2 flex items-center">
        <Star className="text-yellow-500" size={16} />
        <Star className="text-yellow-500" size={16} />
        <Star className="text-yellow-500" size={16} />
        <Star className="text-yellow-500" size={16} />
        <Star className="text-yellow-500" size={16} />
        <p className="ml-2 text-sm text-zinc-300">340 reviews</p>
      </div>
      <p className="mb-4 text-sm text-zinc-500">My Store</p>
      <h2 className="mb-2 text-2xl font-bold">$146,00</h2>
      <p className="mb-8 text-sm font-medium text-zinc-400">
        Taxes included. Shipping calculated at checkout.
      </p>
      <div className="mb-6 flex gap-4">
        <div className="flex-1">
          <label htmlFor="size">Size</label>
          <PRDropdown
            options={[
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" },
            ]}
            id="size"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="color">Color</label>
          <PRDropdown
            options={[
              { label: "Red", value: "red" },
              { label: "Blue", value: "blue" },
              { label: "Green", value: "green" },
            ]}
            id="color"
          />
        </div>
      </div>
      <div className="mb-10 flex items-center gap-6 rounded-lg bg-zinc-800 p-4 shadow-sm shadow-zinc-500">
        <div>Quantity: </div>
        <div className="flex items-center gap-3">
          <Minus className="h-6 w-6 cursor-pointer rounded-full bg-primary p-1 text-background transition-all hover:bg-primary/20 hover:text-primary" />
          <InputNumber
            max={10}
            min={1}
            pt={{
              input: {
                root: {
                  className:
                    "bg-zinc-700 w-24 shadow-sm shadow-zinc-500 py-0.5 px-2",
                },
              },
            }}
            id="quantity"
          />
          <Plus className="h-6 w-6 cursor-pointer rounded-full bg-primary p-1 text-background transition-all hover:bg-primary/20 hover:text-primary" />
        </div>
      </div>
      <div className="mb-10 flex items-center gap-2 text-zinc-300">
        <Truck className="animate-bounce text-primary" size={28} />
        <p>In stock and ready to ship</p>
      </div>
      <button className="flex items-center justify-center gap-4 rounded-lg bg-primary px-8 py-2 text-center text-lg font-semibold text-background transition-all hover:bg-primary/20 hover:text-primary">
        Add to Cart <Box />
      </button>
    </div>
  );
};

export default ProductOrder;
