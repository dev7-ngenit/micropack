import { FaArrowLeft } from "react-icons/fa6";

import Product from "./Product";
import Link from "next/link";

export default function Products() {
  return (
    <section className="grow">
      {Array.from({ length: 3 }).map((_, index) => (
        <Product key={index} />
      ))}

      <div className="mt-6">
        <Link
          href="/"
          className="flex items-center gap-x-2 text-xl font-medium text-gray-500 transition-colors hover:text-gray-700"
        >
          <FaArrowLeft />
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
