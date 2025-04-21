"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const productImages = [
  {
    img: "/mouse.jpg",
  },
  {
    img: "/charger.jpg",
  },
  {
    img: "/mouse.jpg",
  },
  {
    img: "/charger.jpg",
  },
  {
    img: "/mouse.jpg",
  },
  {
    img: "/charger.jpg",
  },
  {
    img: "/mouse.jpg",
  },
  {
    img: "/charger.jpg",
  },
  {
    img: "/mouse.jpg",
  },
  {
    img: "/charger.jpg",
  },
  {
    img: "/mouse.jpg",
  },
  {
    img: "/charger.jpg",
  },
];

export default function ProductCarousel() {
  // State to hold the carousel API instances
  const [mainCarouselApi, setMainCarouselApi] = useState(null);
  const [thumbCarouselApi, setThumbCarouselApi] = useState(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!mainCarouselApi) return;

    const updateThumbCarousel = () => {
      const selectedIndex = mainCarouselApi.selectedScrollSnap();

      setCurrentSlide(selectedIndex);
      thumbCarouselApi.scrollTo(selectedIndex);
    };

    mainCarouselApi.on("select", updateThumbCarousel);

    return () => {
      mainCarouselApi.off("select", updateThumbCarousel);
    };
  }, [mainCarouselApi]);

  const handleSlideChange = (index) => {
    if (!mainCarouselApi || !thumbCarouselApi) return;

    mainCarouselApi.scrollTo(index);
    thumbCarouselApi.scrollTo(index);
    setCurrentSlide(index);
  };

  return (
    <section className="flex gap-x-5">
      {/* Thumbnail Carousel */}
      <Carousel
        orientation="vertical"
        className="h-[37.5rem]"
        opts={{
          containScroll: "keepSnaps",
          dragFree: false,
        }}
        setApi={setThumbCarouselApi}
      >
        <CarouselContent className="mt-0 h-[37.5rem] w-[4.125rem] pr-2">
          {productImages.map((img, index) => (
            <CarouselItem className="size-[4.125rem] basis-[14%] pt-0">
              <Image
                key={index}
                src={img.img}
                alt=""
                width={66}
                height={66}
                className={cn(
                  "box-border-solid size-[4.125rem] cursor-pointer rounded-2xl border-2 object-cover transition-all duration-200 ease-in-out",
                  currentSlide === index
                    ? "border-blue-400 p-0.5"
                    : "border-transparent",
                )}
                onClick={() => handleSlideChange(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Main Carousel */}
      <Carousel
        className="w-full max-w-[37.5rem]"
        key="main-carousel"
        setApi={setMainCarouselApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {productImages.map((img, index) => (
            <CarouselItem
              key={index}
              className="max-h-[37.5rem] max-w-[37.5rem]"
            >
              <Image
                src={img.img}
                alt=""
                width={600}
                height={600}
                className="size-[37.5rem] rounded-2xl object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
