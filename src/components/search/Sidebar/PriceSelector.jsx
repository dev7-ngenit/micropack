import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

export default function PriceSelector({
  priceValue,
  setPriceValue,
  handleChangePriceRange,
}) {
  return (
    <AccordionItem value="price" className="border-slate-300 last:border-b">
      <AccordionTrigger className="text-xl font-semibold hover:cursor-pointer hover:no-underline">
        Price
      </AccordionTrigger>

      <AccordionContent>
        <div className="space-y-4">
          <output className="flex w-full justify-between text-lg font-medium">
            <span>${priceValue[0]}</span>
            <span>${priceValue[1]}</span>
          </output>

          <Slider
            className="mt-3"
            aria-label="Dual range price slider"
            value={priceValue}
            onValueChange={setPriceValue}
            onValueCommit={handleChangePriceRange}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
