import ProductCarousel from "../ProductCarousel/ProductCarousel";

export default async function CarouselSectionOne() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/category/mobile-computer-accessories`,
  );
  const { data } = await response.json();

  return <ProductCarousel title={data?.name} products={data?.products} />;
}
