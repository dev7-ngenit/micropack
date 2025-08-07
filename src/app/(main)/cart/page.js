"use client";

import Products from "@/components/Cart/Products/Products";
import Subtotal from "@/components/Cart/Subtotal/Subtotal";
import useCart from "@/hooks/useCart";

export default function CartPage() {
  const { cart, dispatch } = useCart();

  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <h1 className="text-4xl font-bold">Your Cart</h1>

      <section className="mt-0 flex flex-col gap-x-16 md:mt-10 md:flex-row">
        <Products cart={cart} dispatch={dispatch} />

        {!!cart?.length && <Subtotal cart={cart} />}
      </section>
    </main>
  );
}
