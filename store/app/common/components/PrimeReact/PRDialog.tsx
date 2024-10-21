import { Dialog, type DialogProps } from "primereact/dialog";
import { cn } from "../../utils/utils";

type Props = DialogProps;

export default function PRDialog({
  visible,
  onHide,
  header,
  children,
  className,
  ...props
}: Props) {
  return (
    <Dialog
      header={header}
      visible={visible}
      className={cn("w-[75vw] max-w-screen-lg", className)}
      headerClassName="bg-background text-zinc-200"
      contentClassName="bg-background text-zinc-200"
      closable
      blockScroll
      dismissableMask
      onHide={onHide}
      {...props}
    >
      {children}
    </Dialog>
  );
}
