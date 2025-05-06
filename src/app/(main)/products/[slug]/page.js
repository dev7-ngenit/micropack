import MoreSeries from "@/components/products/slug/MoreSeries/MoreSeries";
import NoContent from "@/components/products/slug/NoContent/NoContent";
import ProductDescription from "@/components/products/slug/ProductDescription/ProductDescription";
import ProductDetails from "@/components/products/slug/ProductDetails/ProductDetails";

export default async function page({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/product/details/${slug}`,
    );
    const { data } = await res.json();

    if (data?.id) {
      return (
        <main className="container !my-16 md:min-h-[calc(100dvh-33rem)]">
          <ProductDetails data={data} />

          <ProductDescription description={data?.long_description} />

          <MoreSeries />
        </main>
      );
    } else {
      return (
        <main className="container !my-16 md:min-h-[calc(100dvh-33rem)]">
          <NoContent
            title="Product not found"
            subtitle={`The product with name ${slug} was not found`}
          />
        </main>
      );
    }
  } catch (error) {
    console.log("🚀 ~ page ~ error:", error);
    return (
      <main className="container !my-16 md:min-h-[calc(100dvh-33rem)]">
        <h1>Something went wrong</h1>
      </main>
    );
  }
}
