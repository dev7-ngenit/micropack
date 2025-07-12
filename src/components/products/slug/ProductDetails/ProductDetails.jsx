"use client";

import { useState } from "react";
import Details from "./Details";
import ProductCarousel from "./ProductCarousel/ProductCarousel";

export default function ProductDetails({ data }) {
  const [activeVariant, setActiveVariant] = useState({
    color: "",
    index: 0,
  });

  return (
    <section className="flex flex-col gap-x-8 gap-y-10 md:flex-row">
      <ProductCarousel
        images={data?.images}
        alt={data?.name}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
      />

      <Details
        data={data}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
      />
    </section>
  );
}
