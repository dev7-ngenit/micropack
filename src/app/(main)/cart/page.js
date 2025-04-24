import Products from "@/components/Cart/Products/Products";
import Subtotal from "@/components/Cart/Subtotal/Subtotal";

export default function page() {
  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <h1 className="text-4xl font-bold">Your Cart</h1>

      <section className="mt-0 flex flex-col gap-x-16 md:mt-10 md:flex-row">
        <Products />

        <Subtotal />
      </section>
    </main>
  );
}
