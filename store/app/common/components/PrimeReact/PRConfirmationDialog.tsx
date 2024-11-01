import { Button } from "primereact/button";
import {
  ConfirmDialog,
  type ConfirmDialogOptions,
  type ConfirmDialogProps,
} from "primereact/confirmdialog";
import type { FC, JSX } from "react";

type Props = ConfirmDialogProps;

const PRConfirmationDialog: FC<Props> = (props): JSX.Element => {
  return (
    <ConfirmDialog
      dismissableMask
      closable={false}
      resizable={false}
      footer={(options: ConfirmDialogOptions) => {
        return (
          <div className="flex justify-end gap-4">
            <Button
              label="Cancel"
              onClick={options.reject}
              className="text-red-400 transition-all hover:text-red-500 focus:ring-0"
            />
            <Button
              label="Confirm"
              onClick={options.accept}
              className="text-primary transition-all hover:text-primary/80 focus:ring-0"
            />
          </div>
        );
      }}
      {...props}
      pt={{
        header: {
          className: "bg-zinc-800 text-zinc-200 text-center",
        },
        content: {
          className: "bg-zinc-800 text-zinc-200",
        },
        message: {
          className: "m-0",
        },
        footer: {
          className: "bg-zinc-800 text-zinc-200",
        },
        ...props.pt,
      }}
    />
  );
};

export default PRConfirmationDialog;
