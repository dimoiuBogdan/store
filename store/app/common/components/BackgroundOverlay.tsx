import type { JSX } from "react";
import { cn } from "../utils/utils";

type Props = {
  onClick?: () => void;
  className?: string;
};

const BackgroundOverlay = ({ onClick, className }: Props): JSX.Element => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-10 h-full w-full bg-zinc-800/50 backdrop-blur-sm",
        className,
      )}
      onClick={onClick}
    />
  );
};

export default BackgroundOverlay;
