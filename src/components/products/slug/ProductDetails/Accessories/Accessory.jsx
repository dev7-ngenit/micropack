import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Accessory({
  accessory,
  selectedAccessories,
  handleToggleSelectedAccessories,
}) {
  const { id, name, price, slug, thumbnail_image } = accessory || {};

  const exists = !!selectedAccessories?.find((accessory) => accessory.id === id)
    ?.id;

  return (
    <button
      className={cn(
        "flex grow cursor-pointer items-center gap-x-2 rounded-xl border bg-gray-100 px-3 py-2",
        exists && "border-blue-500 bg-gray-200",
      )}
      onClick={() => handleToggleSelectedAccessories({ id, slug, price })}
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
}
