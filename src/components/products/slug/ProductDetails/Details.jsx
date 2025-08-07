"use client";

import useCart from "@/hooks/useCart";
import { cn } from "@/lib/utils";
import { cartActions } from "@/reducers/cartReducer";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Accessories from "./Accessories/Accessories";
import Actions from "./Actions";

export default function Details({
  data,
  activeVariant,
  setActiveVariant,
  baseVariantOnly,
}) {
  const { id, name, images, price } = data || {};

  const { cart, dispatch } = useCart();
  const existedProduct = cart.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(existedProduct?.quantity || 1);
  const [selectedAccessories, setSelectedAccessories] = useState(
    existedProduct?.accessories || [],
  );

  const handleToggleSelectedAccessories = (data) => {
    const exists = !!selectedAccessories?.find(
      (accessory) => accessory.id === data.id,
    );

    if (exists) {
      setSelectedAccessories(
        selectedAccessories.filter((accessory) => accessory.id !== data.id),
      );
    } else {
      setSelectedAccessories([...selectedAccessories, data]);
    }
  };

  const handleAddToCart = (data) => {
    const payload = {
      ...data,
      quantity,
      accessories: selectedAccessories,
    };

    dispatch({
      type: cartActions.addToCart,
      payload,
    });

    toast.success("Product added to cart");
  };

  return (
    <div className="px-3">
      <h2 className="text-2xl font-semibold">{name}</h2>

      <p className="mt-5 text-3xl">
        ${baseVariantOnly ? price : images[activeVariant.index]?.price}
      </p>

      {!baseVariantOnly && (
        <div className="mt-3">
          <p className="mb-1 text-lg text-gray-500">
            Colors:{" "}
            <span className="text-gray-800">
              {images[activeVariant.index]?.color_name}
            </span>
          </p>

          <div className="flex flex-wrap gap-2">
            {images.map((img, index) => (
              <button
                key={index}
                className={cn(
                  "flex grow cursor-pointer items-center gap-x-2 rounded-xl border bg-gray-100 px-3 py-2",
                  activeVariant.index === index &&
                    "border-blue-500 bg-gray-200",
                )}
                onClick={() =>
                  setActiveVariant({
                    color: img.color,
                    index,
                  })
                }
              >
                <Image
                  src={img?.photo}
                  alt={img?.color_name}
                  width={50}
                  height={50}
                  className="size-[50px]"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">
                    {img?.color_name}
                  </span>
                  <span className="text-base text-gray-700">${img?.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <Actions
        productData={data}
        quantity={quantity}
        setQuantity={setQuantity}
        selectedVariant={activeVariant}
        handleAddToCart={handleAddToCart}
      />

      {data?.accessories?.length > 0 && (
        <Accessories
          accessories={data?.accessories}
          selectedAccessories={selectedAccessories}
          handleToggleSelectedAccessories={handleToggleSelectedAccessories}
        />
      )}
    </div>
  );
}
