import { useId } from "react";
import { FaArrowLeft } from "react-icons/fa6";

import Link from "next/link";
import Product from "./Product";

export default function Products({ cart, dispatch }) {
  return (
    <section className="mt-5 box-border grow md:mt-0">
      {cart?.length ? (
        cart.map((product) => {
          const key = useId();
          return <Product key={key} product={product} dispatch={dispatch} />;
        })
      ) : (
        <p>No products found in cart</p>
      )}

      <div className="mt-6">
        <Link
          href="/search"
          className="flex items-center gap-x-2 text-xl font-medium text-gray-500 transition-colors hover:text-gray-700"
        >
          <FaArrowLeft />
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
