import {
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "@/components/shared/ProductCard/ProductCard";
import Link from "next/link";
import NoContent from "./NoContent";

export default async function Products({ products }) {
  return !products?.length ? (
    <NoContent title="No products found" />
  ) : (
    <section className="mx-auto grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-4">
      {products.map((product, index) => {
        const { name, slug, price, thumbnail_image, thumbnail_image_2 } =
          product;

        return (
          <ProductCard
            key={index}
            className="w-[185px] grid-cols-2 bg-white md:w-[13.5rem] md:grid-cols-1"
          >
            <ProductImage
              className="h-[185px] w-[185px] md:size-[13.5rem]"
              src1={thumbnail_image}
              src2={thumbnail_image_2}
              alt={name}
            />
            <ProductDescription className="pt-3 pb-4">
              <Link href={`/products/${slug}`}>
                <ProductTitle>{name}</ProductTitle>
              </Link>
              <ProductPrice className="mt-2 text-lg">${price}</ProductPrice>
            </ProductDescription>
          </ProductCard>
        );
      })}
    </section>
  );
}
