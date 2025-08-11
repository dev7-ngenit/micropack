"use client";

import useCart from "@/hooks/useCart";
import flattenAccessories from "@/lib/flattenAccessories";
import { ArrowRight, ShoppingBag, Truck } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductSummary({ handleConfirmOrder }) {
  const { cart } = useCart();

  const flattenedCart = flattenAccessories(cart);

  const subtotal = cart.reduce((acc, product) => {
    // Calculate the total for the current product
    const productTotal = parseFloat(product.price) * product.quantity;

    // Calculate the total for all accessories of the current product
    const accessoriesTotal = product?.accessories?.reduce(
      (accAccessories, accessory) => {
        return (
          accAccessories +
          parseFloat(accessory.price) * (accessory.quantity || 1)
        );
      },
      0,
    );

    return acc + productTotal + accessoriesTotal;
  }, 0);

  const tax = subtotal * 0.05;
  const shipping = 9.99;

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Order Summary
      </h2>

      <div className="space-y-4">
        {flattenedCart.map((product) => (
          <ProductCard
            key={`${product.id}-${product.color}`}
            product={product}
          />
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="mb-2 flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
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

      {/* Delivery Info */}
      <div className="mt-2 rounded-lg bg-gray-50 p-4">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-green-100 p-2">
            <Truck className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              Express Delivery
            </p>
            <p className="text-xs text-gray-600">Estimated 3-5 business days</p>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          handleConfirmOrder(subtotal, (subtotal + shipping + tax).toFixed(2))
        }
        className="group mt-4 flex w-[85%] cursor-pointer items-center justify-center space-x-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
      >
        <ShoppingBag className="h-5 w-5" />
        <span>Complete Purchase</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
}
