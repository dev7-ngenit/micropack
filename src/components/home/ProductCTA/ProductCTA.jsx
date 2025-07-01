import Image from "next/image";
import Link from "next/link";

export default function ProductCTA({ image, alt, href = "/search" }) {
  return (
    <Link href={href} className="container mx-auto block">
      <Image
        src={image}
        alt={alt}
        width={1116}
        height={618}
        className="mx-auto h-[13.25rem] w-[24.063rem] rounded-2xl object-cover md:h-[38.625rem] md:w-full"
      />
    </Link>
  );
}
