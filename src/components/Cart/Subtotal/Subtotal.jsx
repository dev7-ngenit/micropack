"use client";

import { useState } from "react";

export default function Subtotal() {
  const [specialInstructions, setSpecialInstructions] = useState("");
  const subtotal = 10; // Replace with actual subtotal calculation

  return (
    <div className="h-[21.75rem] w-[16.5rem] rounded-lg bg-white px-9 py-7 shadow-lg">
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
          Order special instructions
        </label>
        <textarea
          id="special-instructions"
          rows={3}
          className="box-border w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-400 focus:outline-none"
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        />
      </div>

      <button className="button-primary box-border w-full py-3 text-xl font-medium text-white">
        Check out
      </button>
    </div>
  );
}
