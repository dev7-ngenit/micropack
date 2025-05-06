import Details from "./Details";
import ProductCarousel from "./ProductCarousel/ProductCarousel";

export default function ProductDetails({ data }) {
  return (
    <section className="flex flex-col gap-x-8 gap-y-10 md:flex-row">
      <ProductCarousel thumbnail_image={data?.thumbnail_image} />

      <Details data={data} />
    </section>
  );
}
