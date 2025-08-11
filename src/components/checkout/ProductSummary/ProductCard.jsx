import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  const [productDetails, setProductDetails] = useState(product);
  const { slug, price, quantity = 1 } = product || {};
  const axios = useAxiosSecure();

  useEffect(() => {
    async function fetchProductDetails() {
      const data = await axios.get(`/v1/product/details/${slug}`);

      setProductDetails(data?.data?.data?.product);
    }

    fetchProductDetails();
    return () => {};
  }, []);

  return (
    <div className="flex items-start space-x-4 rounded-lg bg-gray-50 p-4">
      <div className="flex-shrink-0">
        <img
          src={productDetails?.thumbnail_image}
          alt={productDetails?.name}
          className="h-16 w-16 rounded-md object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="mb-1 truncate text-sm font-medium text-gray-900">
          {productDetails?.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Qty: {quantity}</span>
          <div className="text-right">
            <div className="text-sm text-gray-600">
              ${parseFloat(price)?.toFixed(2)} each
            </div>
            <div className="text-sm font-semibold text-gray-900">
              ${(price * quantity)?.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
