import { Image } from "primereact/image";

export default function PRImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      preview
      className="h-20 w-20 overflow-hidden rounded-md shadow-sm"
      pt={{
        toolbar: {
          className: "text-purple-500",
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
