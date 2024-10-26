import { User } from "lucide-react";
import Link from "next/link";
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
        <div className="flex w-60 flex-col gap-4 p-4 text-sm">
          <p className="text-xs">
            Access your account so that you can manage your orders
          </p>
          <div className="mx-auto w-full border-b border-primary/40"></div>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="flex-1 rounded-sm bg-zinc-800 py-1.5 text-center font-semibold text-zinc-200 shadow-sm shadow-primary/20 transition-all hover:bg-primary/50"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="flex-1 rounded-sm bg-zinc-800 py-1.5 text-center font-semibold text-zinc-200 shadow-sm shadow-primary/20 transition-all hover:bg-primary/50"
            >
              Register
            </Link>
          </div>
        </div>
      </PROverlayPanel>
    </>
  );
};

export default UserModal;
