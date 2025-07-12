import Title from "@/components/shared/Title/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Product from "./Product";

export default function MoreProducts({ relatedProducts }) {
  return (
    !!relatedProducts?.length && (
      <section className="mx-3 mt-10 md:mx-0">
        <Title>More Series</Title>

        {/* <div className="mt-3 grid grid-cols-2 gap-y-4 md:grid-cols-4 md:gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <Product key={index} />
        ))}
      </div> */}
        <Carousel className="mt-3">
          <CarouselContent>
            {relatedProducts.map((product) => (
              <CarouselItem key={product.id} className="basis-1/4">
                <Product product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    )
  );
}
