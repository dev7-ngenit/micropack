import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export default function Product() {
  const item = {
    id: 1,
    name: "Product Name",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    color: "Red",
    quantity: 1,
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-6">
      <div className="size-[100px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white">
        <Image
          src={"/charger.jpg"}
          alt={item.name}
          width={100}
          height={100}
          className="size-[100px] object-cover object-center"
        />
      </div>

      <div className="ml-4 flex grow items-center justify-between">
        <div className="text-base font-medium text-gray-900">
          <h3>{item.name}</h3>

          {item.color && (
            <p className="mt-1 text-sm text-gray-500">{item.color}</p>
          )}
        </div>

        <p className="ml-4">${item.price.toFixed(2)}</p>

        <div className="ml-6 flex items-center overflow-hidden rounded-full border border-gray-300">
          <button
            type="button"
            className="p-2 transition-colors hover:bg-gray-100"
            //   onClick={handleDecrement}
          >
            <Minus size={16} />
          </button>
          <span className="w-10 px-4 py-1 text-center">{item.quantity}</span>
          <button
            type="button"
            className="p-2 transition-colors hover:bg-gray-100"
            //   onClick={handleIncrement}
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          type="button"
          className="ml-6 p-1 text-gray-400 transition-colors hover:text-gray-600"
          // onClick={() => onRemoveItem(item.id)}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
