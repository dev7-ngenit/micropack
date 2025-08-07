import Accessory from "./Accessory";

export default function Accessories({
  accessories,
  selectedAccessories,
  handleToggleSelectedAccessories,
}) {
  return (
    <div className="mt-6">
      <p className="mb-1 text-lg text-gray-500">Related Accessories: </p>

      <div className="flex flex-wrap gap-2">
        {accessories.map((accessory) => (
          <Accessory
            key={accessory.id}
            accessory={accessory}
            selectedAccessories={selectedAccessories}
            handleToggleSelectedAccessories={handleToggleSelectedAccessories}
          />
        ))}
      </div>
    </div>
  );
}
