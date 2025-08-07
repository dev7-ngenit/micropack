import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Availability({ stockStatus, handleStockChange }) {
  return (
    <AccordionItem value="availability" className="border-slate-300">
      <AccordionTrigger className="text-xl font-semibold hover:cursor-pointer hover:no-underline">
        Availability
      </AccordionTrigger>

      <AccordionContent>
        <div className="flex items-center space-x-2 pt-1 pl-1">
          <Checkbox
            id="in-stock"
            className="cursor-pointer border-2 border-black/50 focus-visible:ring-[#3EAFE1] data-[state=checked]:border-[#3EAFE1] data-[state=checked]:bg-[#3EAFE1]"
            checked={stockStatus === "in-stock"}
            onCheckedChange={(value) => handleStockChange("in-stock", value)}
          />
          <Label
            htmlFor="in-stock"
            className="flex w-full items-center justify-between peer-has-checked:text-blue-300"
          >
            <span className="text-base">In Stock</span>
            {/* <span className="text-xs text-gray-500">56</span> */}
          </Label>
        </div>

        <div className="mt-1 flex items-center space-x-2 pt-1 pl-1">
          <Checkbox
            id="out-of-stock"
            className="cursor-pointer border-2 border-black/50 focus-visible:ring-[#3EAFE1] data-[state=checked]:border-[#3EAFE1] data-[state=checked]:bg-[#3EAFE1]"
            checked={stockStatus === "out-of-stock"}
            onCheckedChange={(value) =>
              handleStockChange("out-of-stock", value)
            }
          />
          <Label
            htmlFor="out-of-stock"
            className="flex w-full items-center justify-between peer-has-checked:text-blue-300"
          >
            <span className="text-base">Out Of Stock</span>
            {/* <span className="text-xs text-gray-500">6</span> */}
          </Label>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
