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

export default function ProductCarousel({ title, products = [] }) {
  // console.log(title, products);

  return (
    <section className="container">
      <Title className="mb-5 ml-3 text-2xl font-semibold">{title}</Title>

      {products.length ? (
        <Carousel className="h-[20rem] pt-0" opts={{ align: "start" }}>
          <CarouselContent className="mt-0 flex h-[19.5rem] gap-2 px-2 pt-4 md:px-0">
            {products.map((product) => {
              const { id } = product;
              console.log(product);

              return (
                <CarouselItem
                  className="basis-[47%] first-of-type:ml-4 md:basis-[18.23%]"
                  key={id}
                >
                  <ProductCard className="h-[17.875rem] w-[207px] bg-white duration-300 hover:shadow-xl md:hover:-translate-y-3">
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
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden cursor-pointer md:inline-flex" />
          <CarouselNext className="hidden cursor-pointer md:inline-flex" />
        </Carousel>
      ) : (
        <p>No Products Found</p>
      )}
    </section>
  );
}
