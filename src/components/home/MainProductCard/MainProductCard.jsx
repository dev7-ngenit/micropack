import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function MainProductCard() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/product/details/baseus-peas-cable-clip-black`,
  );
  const { data } = await res.json();

  const { thumbnail_image, name, meta_description, slug } = data?.product || {};

  return (
    <div className="container my-20 box-border flex flex-col px-5 md:mx-auto md:flex-row md:px-0">
      <Image
        src={thumbnail_image}
        alt={name}
        width={560}
        height={420}
        className="h-[420px] w-[560px] rounded-t-xl md:rounded-xl"
      />

      <div className="mt-3 md:mx-auto md:flex md:w-1/3 md:flex-col md:justify-center">
        <h2 className="text-center text-[1.6rem] font-bold">{name}</h2>

        <p className="line-clamp-6 text-center font-semibold">
          {meta_description}
        </p>

        <Link href={`/products/${slug}`}>
          <Button className="button-primary mx-auto mt-3 block cursor-pointer !px-10 text-base">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
