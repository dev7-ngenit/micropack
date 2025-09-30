"use client";

import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Actions({
  productData,
  quantity,
  setQuantity,
  selectedVariant,
  handleAddToCart,
}) {
  const onAddToCart = () => {
    const data = {
      id: productData.id,
      slug: productData.slug,
      color: productData?.images?.[selectedVariant.index]?.color,
      price:
        productData.images?.[selectedVariant.index]?.price || productData.price,
    };

    handleAddToCart(data);
  };

  return (
    <div className="mt-3 w-full flex items-center gap-x-10">
      <div>
        <label htmlFor="quantity" className="text-lg text-gray-500">
          Quantity:
        </label>

        <div className="mt-1 flex w-[200px] justify-between divide-x rounded bg-gray-100 text-slate-500">
          <button
            className="flex w-1/4 cursor-pointer items-center justify-center py-2 text-xl"
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            <FaMinus />
          </button>
          <span className="flex w-1/4 grow items-center justify-center py-2 text-xl">
            {quantity}
          </span>
          <button
            className="flex w-1/4 cursor-pointer items-center justify-center py-2 text-xl"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <button
        className="button-primary shrink-0 mt-8 cursor-pointer text-white"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
