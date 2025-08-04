import ProductCTA from "../ProductCTA/ProductCTA";

export default async function ProductCTAOne() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/category/mobile-computer-accessories`,
  );
  const { data } = await response.json();
  const { banner_image, name } = data || {};

  return <ProductCTA alt={name} image={banner_image} />;
}
