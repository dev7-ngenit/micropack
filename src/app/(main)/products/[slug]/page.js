import MoreSeries from "@/components/products/slug/MoreSeries/MoreSeries";
import ProductDescription from "@/components/products/slug/ProductDescription/ProductDescription";
import ProductDetails from "@/components/products/slug/ProductDetails/ProductDetails";

export default function page() {
  return (
    <main className="container !my-16 md:min-h-[calc(100dvh-33rem)]">
      <ProductDetails />

      <ProductDescription />

      <MoreSeries />
    </main>
  );
}
