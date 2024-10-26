import { OverlayPanel, type OverlayPanelProps } from "primereact/overlaypanel";
import type { FC } from "react";

type Props = {
  children: React.ReactNode;
  ref: React.RefObject<OverlayPanel | null>;
} & OverlayPanelProps;

const PROverlayPanel: FC<Props> = ({ children, ref, ...props }) => {
  return (
    <OverlayPanel
      appendTo="self"
      pt={{
        root: {
          className:
            "mt-12 p-0 transform -translate-x-1/2 rounded-md bg-background shadow shadow-primary/30 overflow-hidden",
        },
        content: {
          className: "bg-background p-0 text-zinc-200",
        },
        ...props.pt,
      }}
      {...props}
      ref={ref}
    >
      {children}
    </OverlayPanel>
  );
};

export default PROverlayPanel;
