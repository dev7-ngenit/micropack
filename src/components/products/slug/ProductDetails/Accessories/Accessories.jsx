import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Accessory from "./Accessory";

export default function Accessories({ accessories, handleAddToCart }) {
  return (
    <div className="mt-6">
      <p className="mb-1 text-lg text-gray-500">Related Accessories: </p>

      <Carousel className="-mt-10">
        <CarouselContent>
          {accessories.map((accessory) => (
            <CarouselItem key={accessory.id} className="basis-1/4 h-fit pl-2" >
              <Accessory
                accessory={accessory}
                handleAddToCart={handleAddToCart}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-6 cursor-pointer" />
        <CarouselNext className="-right-6 cursor-pointer" />
      </Carousel>
    </div>
  );
}
