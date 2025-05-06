"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

export default function Details({ data }) {
  const [quantity, setQuantity] = useState(1);

  const { name, price } = data || {};

  console.log("🚀 ~ Details ~ data:", data);

  return (
    <div className="px-3">
      <h2 className="text-2xl font-semibold">{name}</h2>

      <p className="mt-5 text-3xl">${price}</p>

      <div className="mt-3">
        <p className="mb-1 text-lg text-gray-500">
          Colors: <span className="text-gray-800">Green</span>
        </p>

        <div className="flex flex-wrap gap-2">
          <div className="flex grow items-center gap-x-2 rounded-xl border bg-gray-100 px-3 py-2">
            <Image
              src="/charger.jpg"
              alt=""
              width={50}
              height={50}
              className="size-[50px]"
            />
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Gray</span>
              <span className="text-base text-gray-700">$30.33</span>
            </div>
          </div>

          <div className="flex grow items-center gap-x-2 rounded-xl border bg-gray-100 px-3 py-2">
            <Image
              src="/charger.jpg"
              alt=""
              width={50}
              height={50}
              className="size-[50px]"
            />
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Gray</span>
              <span className="text-base text-gray-700">$30.33</span>
            </div>
          </div>

          <div className="flex grow items-center gap-x-2 rounded-xl border bg-gray-100 px-3 py-2">
            <Image
              src="/charger.jpg"
              alt=""
              width={50}
              height={50}
              className="size-[50px]"
            />
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Gray</span>
              <span className="text-base text-gray-700">$30.33</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 w-full">
        <label htmlFor="quantity" className="text-gray-500">
          Quantity:
        </label>

        <div className="mt-1 flex w-1/2 justify-between divide-x rounded bg-gray-100 text-slate-500">
          <button className="flex w-1/3 cursor-pointer items-center justify-center py-2 text-2xl">
            <FaMinus />
          </button>
          <span className="flex w-1/3 items-center justify-center py-2 text-lg">
            {quantity}
          </span>
          <button className="flex w-1/3 cursor-pointer items-center justify-center py-2 text-xl">
            <FaPlus />
          </button>
        </div>

        <button className="button-primary mt-5 text-white">Add to Cart</button>
      </div>
    </div>
  );
}
