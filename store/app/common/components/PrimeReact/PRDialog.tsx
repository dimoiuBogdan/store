import { Dialog, type DialogProps } from "primereact/dialog";
import type { JSX } from "react";
import { cn } from "../../utils/utils";

type Props = DialogProps;

export default function PRDialog({
  visible,
  onHide,
  header,
  children,
  className,
  ...props
}: Props): JSX.Element {
  return (
    <Dialog
      header={header}
      visible={visible}
      className={cn("w-[75vw] max-w-screen-md", className)}
      headerClassName="bg-background text-zinc-200"
      contentClassName="bg-background text-zinc-200"
      closable
      dismissableMask
      onHide={onHide}
      {...props}
    >
      {children}
    </Dialog>
  );
}
