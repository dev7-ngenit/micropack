import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <div className="w-full">
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.thumbnail_image}
          alt={product.name}
          width={258}
          height={258}
          className="size-[11.5rem] rounded-2xl md:size-[16.125rem]"
        />
      </Link>

      <Link
        href={`/products/${product.slug}`}
        className="mt-2 line-clamp-2 text-center text-lg font-semibold"
      >
        {product.name}
      </Link>
    </div>
  );
}
