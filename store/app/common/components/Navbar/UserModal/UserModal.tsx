import { User } from "lucide-react";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
import PROverlayPanel from "../../PrimeReact/PROverlayPanel";

const UserModal = () => {
  const op = useRef<OverlayPanel>(null);

  return (
    <>
      <User
        onClick={(e) => op.current?.toggle(e)}
        className="h-8 w-8 cursor-pointer rounded-full bg-background p-1.5 text-zinc-200 transition-all hover:bg-primary/10 hover:text-primary"
      />
      <PROverlayPanel ref={op}>
        <div className="flex max-w-64 flex-col gap-4 p-4 text-sm">
          <p className="text-xs">
            Access your account so that you can manage your orders
          </p>
          <div className="mx-auto w-full border-b border-primary/40"></div>
          <div className="flex gap-4">
            <button className="w-full rounded-sm bg-zinc-800 py-1.5 font-semibold text-zinc-200 shadow-sm shadow-primary/20 transition-all hover:bg-primary/50">
              Login
            </button>
            <button className="w-full rounded-sm bg-zinc-800 py-1.5 font-semibold text-zinc-200 shadow-sm shadow-primary/20 transition-all hover:bg-primary/50">
              Register
            </button>
          </div>
        </div>
      </PROverlayPanel>
    </>
  );
};

export default UserModal;
