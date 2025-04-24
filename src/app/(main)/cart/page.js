import Products from "@/components/Cart/Products/Products";
import Subtotal from "@/components/Cart/Subtotal/Subtotal";

export default function page() {
  return (
    <main className="container !my-16 md:min-h-[calc(100dvh-33rem)]">
      <h1 className="text-4xl font-bold">Your Cart</h1>

      <section className="mt-10 flex gap-x-16">
        <Products />

        <Subtotal />
      </section>
    </main>
  );
}
