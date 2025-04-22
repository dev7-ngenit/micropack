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
    <section className="relative flex flex-none gap-x-5">
      {/* Thumbnail Carousel */}
      <Carousel
        orientation="vertical"
        className="hidden h-[37.5rem] md:block"
        opts={{
          containScroll: "keepSnaps",
          dragFree: false,
        }}
        setApi={setThumbCarouselApi}
      >
        <CarouselContent className="mt-0 h-[37.5rem] w-[4.125rem] pr-2">
          {productImages.map((img, index) => (
            <CarouselItem
              className="size-[4.125rem] basis-[14%] pt-0"
              key={index}
            >
              <Image
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
        className="mx-auto w-full max-w-[360px] drop-shadow-2xl sm:max-w-[385px] md:max-w-[37.5rem]"
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
              className="max-h-[360px] max-w-[360px] sm:max-h-[385px] sm:max-w-[385px] md:max-h-[37.5rem] md:max-w-[37.5rem]"
            >
              <Image
                src={img.img}
                alt=""
                width={600}
                height={600}
                className="size-[360px] rounded-2xl object-cover sm:size-[385px] md:size-[37.5rem]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {productImages?.length > 0 ? (
        <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center justify-center gap-0.5 p-4 text-white md:hidden">
          {Array.from({ length: productImages?.length }, (_, i) => (
            <button
              key={i}
              className={cn(
                "relative mx-1 inline-block h-2 w-2 cursor-pointer overflow-hidden rounded-full duration-300",
                i === currentSlide ? "bg-black/70" : "bg-black/15",
              )}
              onClick={() => handleSlideChange(i)}
            >
              {i === currentSlide && (
                <span className="absolute top-0 left-0 inline-block h-full bg-white" />
              )}
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}
