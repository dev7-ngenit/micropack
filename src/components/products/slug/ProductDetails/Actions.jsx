"use client";

import useCart from "@/hooks/useCart";
import { cartActions } from "@/reducers/cartReducer";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Actions({
  productData,
  selectedVariant,
  baseVariantOnly,
  selectedAccessories,
}) {
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: cartActions.addToCart,
      payload: {
        id: productData.id,
        slug: productData.slug,
        color: productData?.images?.[selectedVariant.index]?.color,
        price:
          productData.images?.[selectedVariant.index]?.price ||
          productData.price,
        accessories: selectedAccessories,
        quantity,
      },
    });

    toast.success("Product added to cart");
  };

  return (
    <div className="mt-3 w-full">
      <label htmlFor="quantity" className="text-lg text-gray-500">
        Quantity:
      </label>

      <div className="mt-1 flex w-1/2 justify-between divide-x rounded bg-gray-100 text-slate-500">
        <button
          className="flex w-1/3 cursor-pointer items-center justify-center py-2 text-2xl"
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          <FaMinus />
        </button>
        <span className="flex w-1/3 items-center justify-center py-2 text-lg">
          {quantity}
        </span>
        <button
          className="flex w-1/3 cursor-pointer items-center justify-center py-2 text-xl"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <FaPlus />
        </button>
      </div>

      <button
        className="button-primary mt-5 cursor-pointer text-white"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
