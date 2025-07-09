import Image from "next/image";
import Actions from "./Actions";

export default function Details({ data }) {
  const { name, price } = data || {};

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

      <Actions productData={data} />
    </div>
  );
}
