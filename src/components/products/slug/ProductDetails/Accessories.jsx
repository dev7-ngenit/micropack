import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Accessories({
  products,
  selectedAccessories,
  setSelectedAccessories,
}) {
  function doesAccessoriesExist(id) {
    return selectedAccessories.find((accessory) => accessory.id === id);
  }

  const toggleSelectedAccessories = (data) => {
    if (doesAccessoriesExist(data.id)) {
      setSelectedAccessories((prev) =>
        prev.filter((accessory) => accessory.id !== data.id),
      );
    } else {
      setSelectedAccessories((prev) => [...prev, { ...data, quantity: 1 }]);
    }
  };

  return (
    <div className="mt-6">
      <p className="mb-1 text-lg text-gray-500">Related Accessories: </p>

      <div className="flex flex-wrap gap-2">
        {products.map((product) => {
          const { id, name, price, slug, thumbnail_image } = product || {};
          return (
            <button
              key={id}
              className={cn(
                "flex grow cursor-pointer items-center gap-x-2 rounded-xl border bg-gray-100 px-3 py-2",
                doesAccessoriesExist(id) && "border-blue-500 bg-gray-200",
              )}
              onClick={() => toggleSelectedAccessories({ id, slug, price })}
            >
              <Image
                src={thumbnail_image}
                alt={name}
                width={50}
                height={50}
                className="size-[50px]"
              />
              <div className="flex flex-col items-start">
                <span className="line-clamp-1 text-start text-xl font-semibold">
                  {name}
                </span>
                <span className="text-base text-gray-700">${price}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
