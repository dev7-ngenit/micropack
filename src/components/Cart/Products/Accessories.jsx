import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCart from "@/hooks/useCart";
import { cartActions } from "@/reducers/cartReducer";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Accessories({ accessories, productId }) {
  return (
    <section className="mt-5 ml-auto w-3/4 space-y-2">
      {accessories.map((slug) => (
        <Accessory key={slug} slug={slug} productId={productId} />
      ))}
    </section>
  );
}

function Accessory({ slug, productId }) {
  const [productData, setProductData] = useState({});
  const axios = useAxiosSecure();
  const { dispatch } = useCart();

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
      <div className="mt-4 flex w-full grow flex-wrap items-center justify-between md:mt-0 md:ml-4 md:w-auto">
        <p className="ml-4">${parseFloat(productData?.price).toFixed(2)}</p>

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
