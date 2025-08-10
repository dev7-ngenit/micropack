import useAxiosSecure from "@/hooks/useAxiosSecure";
import { cartActions } from "@/reducers/cartReducer";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Accessories from "./Accessories";

export default function Product({ product, dispatch }) {
  const axios = useAxiosSecure();

  const [productDetails, setProductDetails] = useState(product);
  const { id, slug, color, price, quantity, accessories } = product || {};

  const increaseQuantity = () => {
    if (quantity >= parseInt(productDetails?.qty)) {
      toast.error("Reached stock quantity");
    } else {
      dispatch({
        type: cartActions.increaseQuantity,
        payload: { id, color },
      });
    }
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) {
      toast.error("Quantity cannot be less than 1");
    } else {
      dispatch({
        type: cartActions.decreaseQuantity,
        payload: { id, color },
      });
    }
  };

  const handleRemoveProductFromCart = () => {
    dispatch({
      type: cartActions.removeFromCart,
      payload: { id },
    });
  };

  useEffect(() => {
    async function fetchProductDetails() {
      const data = await axios.get(`/v1/product/details/${slug}`);

      setProductDetails(data?.data?.data?.product);
    }

    fetchProductDetails();
    return () => {};
  }, []);

  return (
    <div className="border-b border-gray-300 py-6 first-of-type:pt-0">
      <div className="flex w-full flex-col items-center justify-between overflow-hidden md:w-full md:flex-row">
        <div className="flex w-full items-center gap-x-8 md:w-auto">
          <div className="h-[100px] w-[100px]">
            {productDetails?.thumbnail_image && (
              <Image
                src={productDetails?.thumbnail_image}
                alt={productDetails?.name}
                width={100}
                height={100}
                className="size-[100px] rounded-xl object-cover object-center"
              />
            )}
          </div>
          <div className="text-base font-medium text-gray-900">
            <Link
              href={`/products/${slug}`}
              className="line-clamp-2 max-w-[15rem]"
              title={productDetails?.name}
            >
              {productDetails?.name}
            </Link>
            {!!color && (
              <p className="mt-1 text-sm text-gray-500">
                {
                  productDetails?.images?.find(
                    (product) => product.color === color,
                  )?.color_name
                }
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 flex w-full grow flex-wrap items-center justify-between md:mt-0 md:ml-4 md:w-auto">
          <p className="ml-4">
            ${(parseFloat(price).toFixed(2) * quantity).toFixed(2)}
          </p>
          <div className="-order-1 flex items-center overflow-hidden rounded-full border border-gray-300 md:ml-6">
            <button
              type="button"
              className="cursor-pointer p-2 transition-colors hover:bg-gray-100"
              onClick={decreaseQuantity}
            >
              <Minus size={16} />
            </button>
            <span className="w-10 px-4 py-1 text-center">{quantity}</span>
            <button
              type="button"
              className="cursor-pointer p-2 transition-colors hover:bg-gray-100"
              onClick={increaseQuantity}
            >
              <Plus size={16} />
            </button>
          </div>
          <button
            type="button"
            className="ml-6 cursor-pointer p-1 text-gray-400 transition-colors hover:text-gray-600"
            onClick={handleRemoveProductFromCart}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <Accessories productId={id} color={color} accessories={accessories} />
    </div>
  );
}
