"use client";

import Link from "next/link";

export default function Subtotal({ cart }) {
  const subtotal = cart.reduce((acc, product) => {
    // Calculate the total for the current product
    const productTotal = product.price * product.quantity;

    // Calculate the total for all accessories of the current product
    const accessoriesTotal = product?.accessories?.reduce(
      (accAccessories, accessory) => {
        return accAccessories + accessory.price * (accessory.quantity || 1);
      },
      0,
    );

    return acc + productTotal + accessoriesTotal;
  }, 0);

  const tax = subtotal * 0.05;
  const shipping = 9.99;

  return (
    <section className="mt-10 w-[19.8rem] rounded-md bg-white px-9 py-7 shadow-lg md:mt-0 md:w-[16.5rem]">
      <div className="mb-2 flex items-baseline justify-between">
        <h2 className="text-lg font-medium text-gray-900">Subtotal</h2>
        <span className="text-lg font-medium text-gray-900">
          ${subtotal.toFixed(2)}
        </span>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="mb-2 flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="mb-4 flex justify-between text-sm text-gray-600">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-200 pt-2">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>${(subtotal + shipping + tax).toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Link
        href="/checkout"
        className="button-primary mt-10 block w-fit box-border cursor-pointer py-3 mx-auto text-xl font-medium text-white"
      >
        Checkout
      </Link>
    </section>
  );
}
