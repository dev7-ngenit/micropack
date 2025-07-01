import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProductCard({ children, className }) {
  return (
    <div
      className={cn(
        "h-full max-h-[23.25rem] w-full max-w-[16.75rem] rounded-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ProductImage({
  src1 = "/charger.jpg",
  alt = "product 1",
  src2 = "/mouse.jpg",
  width = 268,
  height = 268,
  className,
}) {
  const imageSize = `w-[${width}px] h-[${height}px]`;

  return (
    <div className="group relative h-fit w-fit overflow-hidden rounded-3xl">
      <Image
        src={src1}
        alt={alt}
        width={width}
        height={height}
        className={cn(imageSize, className)}
      />
      <Image
        src={src2}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "absolute inset-0 z-10 hidden group-hover:block",
          className,
        )}
      />
    </div>
  );
}

export function ProductDescription({ children, className }) {
  return <div className={cn("mt-3 px-5", className)}>{children}</div>;
}

export function ProductTitle({ children, className }) {
  return (
    <h2 className={cn("line-clamp-2 text-[1.15rem] text-gray-800", className)}>
      {children}
    </h2>
  );
}

export function ProductPrice({ children, className }) {
  return <p className={cn("font-bold text-gray-800", className)}>{children}</p>;
}
