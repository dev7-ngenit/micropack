"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const [value, setValue] = useState([0, 699]);
  const [stockStatus, setStockStatus] = useState(null);

  const queryParams = useSearchParams();
  const router = useRouter();

  const handleStockChange = (type, value) => {
    const params = new URLSearchParams(queryParams.toString());

    if (value) {
      setStockStatus(type);
      params.set("stock", type === "in-stock" ? 1 : 0);
    } else {
      setStockStatus(null);
      params.delete("stock");
    }

    router.push(`/search?${params.toString()}`);
  };

  const handleChangePriceRange = (value) => {
    const params = new URLSearchParams(queryParams.toString());

    params.set("price_min", value[0]);
    params.set("price_max", value[1]);

    router.push(`/search?${params.toString()}`);
  };

  return (
    <section className="hidden w-[10.375rem] shrink-0 md:block">
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={["availability", "price"]}
      >
        <AccordionItem value="availability" className="border-slate-300">
          <AccordionTrigger className="pt-0 text-xl font-semibold hover:cursor-pointer hover:no-underline">
            Availability
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex items-center space-x-2 pt-1 pl-1">
              <Checkbox
                id="in-stock"
                className="cursor-pointer border-2 border-black/50 focus-visible:ring-[#3EAFE1] data-[state=checked]:border-[#3EAFE1] data-[state=checked]:bg-[#3EAFE1]"
                checked={stockStatus === "in-stock"}
                onCheckedChange={(value) =>
                  handleStockChange("in-stock", value)
                }
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

        <AccordionItem value="price" className="border-slate-300 last:border-b">
          <AccordionTrigger className="text-xl font-semibold hover:cursor-pointer hover:no-underline">
            Price
          </AccordionTrigger>

          <AccordionContent>
            <div className="space-y-4">
              <output className="flex w-full justify-between text-lg font-medium">
                <span>${value[0]}</span>
                <span>${value[1]}</span>
              </output>

              <Slider
                className="mt-3"
                aria-label="Dual range price slider"
                value={value}
                onValueChange={setValue}
                onValueCommit={handleChangePriceRange}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
