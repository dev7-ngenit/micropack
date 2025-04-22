import Details from "./Details";
import ProductCarousel from "./ProductCarousel/ProductCarousel";

export default function ProductDetails() {
  return (
    <section className="flex gap-x-8">
      <ProductCarousel />

      <Details />
    </section>
  );
}
