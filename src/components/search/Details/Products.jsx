import {
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "@/components/shared/ProductCard/ProductCard";
import PaginationCom from "./PaginationCom";

export default async function Products({ searchParams, total }) {
  return (
    <section>
      <section className="grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-4 mx-auto">
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard
            key={index}
            className="w-[185px] grid-cols-2 bg-white md:w-[13.5rem] md:grid-cols-1"
          >
            <ProductImage className="h-[185px] w-[185px] md:size-[13.5rem]" />
            <ProductDescription className="pt-3 pb-4">
              <ProductTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta explicabo at odio, esse tempore optio modi
                quaerat possimus sunt eaque nostrum ipsa? Temporibus, impedit?
                Laborum fugit non explicabo natus?
              </ProductTitle>
              <ProductPrice price={99.99} />
            </ProductDescription>
          </ProductCard>
        ))}
      </section>

      <PaginationCom searchParams={searchParams} total={total} />
    </section>
  );
}
