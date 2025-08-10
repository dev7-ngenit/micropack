"use client";

import Link from "next/link";
import { useState } from "react";

export default function Subtotal({ cart }) {
  const [specialInstructions, setSpecialInstructions] = useState("");

  const subtotal = cart.reduce((acc, product) => {
    // Calculate the total for the current product
    const productTotal = product.price * product.quantity;

    // Calculate the total for all accessories of the current product
    const accessoriesTotal = product?.accessories?.reduce(
      (accAccessories, accessory) => {
        return accAccessories + accessory.price * accessory.quantity;
      },
      0,
    );

    return acc + productTotal + accessoriesTotal;
  }, 0);

  return (
    <div className="mt-10 h-[21.75rem] w-[19.8rem] rounded-lg bg-white px-9 py-7 shadow-lg md:mt-0 md:w-[16.5rem]">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-lg font-medium text-gray-900">Subtotal</h2>
        <span className="text-lg font-medium text-gray-900">
          ${subtotal.toFixed(2)}
        </span>
      </div>

      <p className="mb-6 text-gray-500">
        Taxes and shipping calculated at checkout
      </p>

      <div className="mb-6">
        <label
          htmlFor="special-instructions"
          className="mb-2 block text-sm font-medium text-gray-700 underline"
        >
          Special order instructions:
        </label>
        <textarea
          id="special-instructions"
          rows={3}
          className="box-border w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-400 focus:outline-none"
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        />
      </div>

      <Link
        href="/checkout"
        className="button-primary box-border w-full cursor-pointer py-3 text-xl font-medium text-white"
      >
        Checkout
      </Link>
    </div>
  );
}
