"use client";

import { Accordion } from "@/components/ui/accordion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Availability from "./Availability";
import Categories from "./Categories";
import PriceSelector from "./PriceSelector";

export default function Sidebar() {
  const [priceValue, setPriceValue] = useState([0, 699]);
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
    <section className="hidden w-[13rem] shrink-0 bg-white p-4 md:block">
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={["category", "availability", "price"]}
      >
        <Categories />

        <Availability
          stockStatus={stockStatus}
          handleStockChange={handleStockChange}
        />

        <PriceSelector
          priceValue={priceValue}
          setPriceValue={setPriceValue}
          handleChangePriceRange={handleChangePriceRange}
        />
      </Accordion>
    </section>
  );
}
