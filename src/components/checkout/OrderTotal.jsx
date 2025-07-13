"use client";

import { ArrowRight, ShoppingBag, Truck } from "lucide-react";

export default function OrderTotal() {
  const handlePlaceOrder = () => {
    alert("Order placement functionality would be implemented here!");
  };

  return (
    <div className="space-y-6 rounded-lg bg-white p-6 shadow-md">
      {/* Order Summary */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">
          Order Details
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Items (3)</span>
            <span>$404.97</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping & Handling</span>
            <span>$9.99</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax</span>
            <span>$37.25</span>
          </div>
          <div className="border-t border-gray-200 pt-2">
            <div className="flex justify-between text-lg font-semibold text-gray-900">
              <span>Total</span>
              <span>$452.21</span>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="rounded-lg bg-gray-50 p-4">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-green-100 p-2">
            <Truck className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Free Delivery</p>
            <p className="text-xs text-gray-600">Estimated 3-5 business days</p>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="group flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
      >
        <ShoppingBag className="h-5 w-5" />
        <span>Complete Purchase</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      {/* Security Notice */}
      <div className="text-center text-xs text-gray-500">
        <p>🔒 Your payment information is encrypted and secure</p>
      </div>
    </div>
  );
}
