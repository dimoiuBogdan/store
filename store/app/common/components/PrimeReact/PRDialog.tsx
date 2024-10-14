import { Dialog, type DialogProps } from "primereact/dialog";

type Props = DialogProps;

export default function PRDialog({ visible, onHide, header, children }: Props) {
  return (
    <Dialog
      header={header}
      visible={visible}
      className="w-[75vw] max-w-screen-lg"
      headerClassName="bg-background text-zinc-200"
      contentClassName="bg-background text-zinc-200"
      closable
      blockScroll
      dismissableMask
      onHide={onHide}
    >
      {children}
    </Dialog>
  );
}
