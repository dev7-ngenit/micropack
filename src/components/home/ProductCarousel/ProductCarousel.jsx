import {
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "@/components/shared/ProductCard/ProductCard";
import Title from "@/components/shared/Title/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductCarousel() {
  return (
    <section className="container">
      <Title className="mb-5 ml-3 text-lg font-semibold">Computer Mouse</Title>

      <Carousel className="pt-0">
        <CarouselContent className="mt-0 flex gap-2 px-2 md:px-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem
              className="basis-[47%] first-of-type:ml-4 md:basis-[18.23%]"
              key={index}
            >
              <ProductCard className="w-[207px] bg-white duration-300 hover:shadow-2xl md:hover:-translate-y-3">
                <ProductImage
                  width={207}
                  height={207}
                  className="h-[207px] w-[207px]"
                />

                <ProductDescription className="pb-4">
                  <ProductTitle>Product Title</ProductTitle>
                  <ProductPrice price={99.99} className="text-gray-800" />
                </ProductDescription>
              </ProductCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden cursor-pointer md:inline-flex" />
        <CarouselNext className="hidden cursor-pointer md:inline-flex" />
      </Carousel>
    </section>
  );
}
