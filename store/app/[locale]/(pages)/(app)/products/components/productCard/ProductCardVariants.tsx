import type { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const ProductCardVariants: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
        {children}
      </span>
    </div>
  );
};

export default ProductCardVariants;
