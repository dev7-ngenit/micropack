"use client";

import { useState } from "react";
import Details from "./Details";
import ProductCarousel from "./ProductCarousel/ProductCarousel";

export default function ProductDetails({ data }) {
  const [activeVariant, setActiveVariant] = useState({
    color: "",
    index: 0,
  });

  const carouselImages =
    data?.images?.length > 0
      ? data.images
      : [{ photo: data?.thumbnail_image }, { photo: data?.thumbnail_image_2 }];

  const baseVariantOnly = data?.images?.length === 0;

  return (
    <section className="flex flex-col gap-x-8 gap-y-10 md:flex-row">
      <ProductCarousel
        images={carouselImages}
        alt={data?.name}
        baseVariantOnly={baseVariantOnly}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
      />

      <Details
        data={data}
        activeVariant={activeVariant}
        baseVariantOnly={baseVariantOnly}
        setActiveVariant={setActiveVariant}
      />
    </section>
  );
}
