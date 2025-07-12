import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductCarousel({
  images,
  alt,
  activeVariant,
  setActiveVariant,
}) {
  // State to hold the carousel API instances
  const [mainCarouselApi, setMainCarouselApi] = useState(null);

  useEffect(() => {
    if (!mainCarouselApi) return;

    const updateActiveVariant = () => {
      const selectedIndex = mainCarouselApi.selectedScrollSnap();

      handleSlideChange(selectedIndex);
    };

    mainCarouselApi.on("select", updateActiveVariant);

    return () => {
      mainCarouselApi.off("select", updateActiveVariant);
    };
  }, [mainCarouselApi]);

  const handleSlideChange = (index) => {
    if (!mainCarouselApi) return;

    mainCarouselApi.scrollTo(index);
    setActiveVariant({ index, color: images[index]?.color });
  };

  useEffect(() => {
    if (!mainCarouselApi) return;

    handleSlideChange(activeVariant?.index);
  }, [activeVariant?.index]);

  return (
    <section className="relative flex flex-none gap-x-5">
      {/* Main Carousel */}
      <Carousel
        className="mx-auto w-full max-w-[360px] drop-shadow-2xl sm:max-w-[385px] md:max-w-[37.5rem]"
        key="main-carousel"
        setApi={setMainCarouselApi}
        opts={{
          loop: false,
        }}
      >
        <CarouselContent>
          {images.map((img, index) => {
            return (
              <CarouselItem
                key={index}
                className="max-h-[360px] max-w-[360px] sm:max-h-[385px] sm:max-w-[385px] md:max-h-[37.5rem] md:max-w-[37.5rem]"
              >
                <Image
                  src={img?.photo}
                  alt={alt}
                  width={600}
                  height={600}
                  className="size-[360px] rounded-2xl object-cover sm:size-[385px] md:size-[37.5rem]"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {!!images?.length && (
        <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center justify-center gap-0.5 p-4 text-white md:hidden">
          {Array.from({ length: images?.length }, (_, i) => (
            <button
              key={i}
              className={cn(
                "relative mx-1 inline-block h-2 w-2 cursor-pointer overflow-hidden rounded-full duration-300",
                i === activeVariant ? "bg-black/70" : "bg-black/15",
              )}
              onClick={() => handleSlideChange(i)}
            >
              {i === activeVariant && (
                <span className="absolute top-0 left-0 inline-block h-full bg-white" />
              )}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
