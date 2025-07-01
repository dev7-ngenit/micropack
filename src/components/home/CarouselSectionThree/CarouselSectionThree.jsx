import ProductCarousel from "../ProductCarousel/ProductCarousel";

export default async function CarouselSectionThree() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/category/charger`,
  );
  const { data } = await response.json();

  return <ProductCarousel title={data?.name} products={data?.products} />;
}
