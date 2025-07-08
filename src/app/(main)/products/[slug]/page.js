import MoreProducts from "@/components/products/slug/MoreProducts/MoreProducts";
import ProductDescription from "@/components/products/slug/ProductDescription/ProductDescription";
import ProductDetails from "@/components/products/slug/ProductDetails/ProductDetails";

export default async function page({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/product/details/${slug}`,
    );
    const { data } = await res.json();

    if (data?.product?.id) {
      return (
        <main className="container !my-16 md:min-h-[calc(100dvh-33rem)]">
          <ProductDetails data={data?.product} />

          <ProductDescription description={data?.product?.long_description} />

          <MoreProducts relatedProducts={data?.related_products} />
        </main>
      );
    } else {
      return (
        <main className="container !my-16 md:min-h-[calc(100dvh-33rem)]">
          <h1>Something went wrong</h1>
        </main>
      );
    }
  } catch (error) {
    return (
      <main className="container !my-16 md:min-h-[calc(100dvh-33rem)]">
        <h1>Something went wrong</h1>
      </main>
    );
  }
}
