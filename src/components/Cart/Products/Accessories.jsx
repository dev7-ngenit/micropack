import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCart from "@/hooks/useCart";
import { cartActions } from "@/reducers/cartReducer";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Accessories({ accessories, color, productId }) {
  return (
    <section className="mt-5 ml-auto w-4/5 space-y-2">
      {accessories?.map((accessory) => (
        <Accessory
          key={accessory.slug}
          color={color}
          accessory={accessory}
          productId={productId}
        />
      ))}
    </section>
  );
}

function Accessory({ accessory, color, productId }) {
  const { slug } = accessory;

  const [productData, setProductData] = useState({});
  const axios = useAxiosSecure();
  const { dispatch } = useCart();

  const updateAccessoriesQuantity = (type) => {
    const nextQuantity =
      type === "increment"
        ? (accessory?.quantity || 1) + 1
        : (accessory?.quantity || 1) - 1;

    if (type === "increment" && nextQuantity >= parseInt(productData.qty)) {
      return toast.error("Reached stock quantity");
    } else if (type === "decrement" && nextQuantity === 0) {
      return toast.error("Quantity cannot be less than 1");
    }

    dispatch({
      type: cartActions.updateProductAccessoryQuantity,
      payload: {
        slug,
        color,
        id: productId,
        quantity: nextQuantity,
      },
    });
  };

  const handleRemoveProductAccessories = () => {
    dispatch({
      type: cartActions.removeProductAccessories,
      payload: { id: productId, slug },
    });
  };

  useEffect(() => {
    async function fetchProductData() {
      const data = await axios.get(`/v1/product/details/${slug}`);

      setProductData(data?.data?.data?.product);
    }

    fetchProductData();

    return () => {};
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-between overflow-hidden border-b border-gray-300 pb-2 last-of-type:border-b-0 md:w-full md:flex-row">
      <div className="flex w-full items-center gap-x-8 md:w-auto">
        <div className="h-[50px] w-[50px]">
          {productData?.thumbnail_image && (
            <Image
              src={productData?.thumbnail_image}
              alt={productData?.name}
              width={50}
              height={50}
              className="size-[50px] rounded object-cover object-center"
            />
          )}
        </div>
        <div className="text-base font-medium text-gray-900">
          <Link
            href={`/products/${slug}`}
            className="line-clamp-2 max-w-[15rem]"
            title={productData?.name}
          >
            {productData?.name}
          </Link>
        </div>
      </div>
      <div className="flex items-center overflow-hidden rounded-full border border-gray-300">
        <button
          type="button"
          className="cursor-pointer p-2 transition-colors hover:bg-gray-100"
          onClick={() => updateAccessoriesQuantity("decrement")}
        >
          <Minus size={16} />
        </button>
        <span className="w-4 px-4 py-1 text-center">
          {accessory?.quantity || 1}
        </span>
        <button
          type="button"
          className="cursor-pointer p-2 transition-colors hover:bg-gray-100"
          onClick={() => updateAccessoriesQuantity("increment")}
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="mt-4 flex w-full max-w-[150px] grow flex-wrap items-center justify-between md:mt-0 md:w-auto">
        <p className="ml-4">
          $
          {(
            (accessory?.quantity || 1) * parseFloat(productData?.price)
          ).toFixed(2)}
        </p>

        <button
          type="button"
          className="ml-6 cursor-pointer p-1 text-gray-400 transition-colors hover:text-gray-600"
          onClick={handleRemoveProductAccessories}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
