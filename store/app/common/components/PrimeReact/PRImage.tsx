import { Image } from "primereact/image";
import type { JSX } from "react";

export default function PRImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}): JSX.Element {
  return (
    <Image
      src={src}
      alt={alt}
      preview
      className="h-20 w-20 overflow-hidden rounded-md shadow"
      pt={{
        toolbar: {
          className: "text-primary",
        },
        image: {
          className: "h-20 w-20 object-cover object-center",
        },
        preview: {
          className: "max-h-[80vh] max-w-[80vw] object-center object-cover",
        },
      }}
    />
  );
}
