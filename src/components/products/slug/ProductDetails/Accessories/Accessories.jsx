import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function Accessories({ accessories }) {
  return (
    <div className="mt-6">
      <p className="mb-1 text-lg text-gray-500">Related Accessories: </p>

      <Carousel>
        <CarouselContent>
          {accessories.map((accessory) => (
            <CarouselItem className="basis-1/4">
              <Link
                href={`/products/${accessory?.slug}`}
                className="border border-gray-200"
              >
                <Image
                  src={accessory?.thumbnail_image}
                  alt={accessory?.name}
                  width={150}
                  height={150}
                  className="mx-auto size-[150px]"
                />
                <div className="p-2">
                  <p className="mt-1 line-clamp-1">{accessory?.name}</p>
                  <span className="text-sm text-gray-500">
                    Price: ${accessory?.price}
                  </span>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-6 cursor-pointer" />
        <CarouselNext className="-right-6 cursor-pointer" />
      </Carousel>
    </div>
  );
}
