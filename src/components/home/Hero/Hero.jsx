"use client";

import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import useAxiosSecure from "@/app/hooks/useAxiosSecure";

const DELAY = 3000;

export default function Hero() {
  const [api, setApi] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const animationKey = useRef(0);

  const [slides, setSlides] = useState([]);

  const axios = useAxiosSecure();

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCurrentSlide(api.selectedScrollSnap());
      animationKey.current += 1;
    };

    api.on("select", updateState);

    // Initialize with forced update
    updateState();

    return () => {
      api.off("select", updateState);
    };
  }, [api]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get("/home-sliders");
        setSlides(response.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBanner();
  }, []);

  const handleSlideChange = (index) => {
    if (!api) return;
    api.scrollTo(index);
    // Reset autoplay timer
    const autoplay = api.plugins().autoplay;
    if (autoplay) {
      autoplay.reset();
    }
  };

  return (
    <section className="relative">
      <style jsx>{`
        @keyframes grow {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>

      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: DELAY,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-[500px]">
          {slides?.length > 0
            ? slides?.map((slide, index) => (
                <CarouselItem key={index}>
                  <img
                    src={slide?.image}
                    alt=""
                    className="h-[500px] w-full object-cover"
                  />
                </CarouselItem>
              ))
            : null}
        </CarouselContent>
      </Carousel>

      {slides?.length > 0 ? (
        <div className="absolute right-0 bottom-0 left-0 flex items-center justify-center gap-2 p-4 text-white">
          {Array.from({ length: slides?.length }, (_, i) => (
            <button
              key={i}
              className={cn(
                "relative mx-1 inline-block h-3 cursor-pointer overflow-hidden rounded-full bg-white/35 duration-300",
                i === currentSlide ? "w-14" : "w-3",
              )}
              onClick={() => handleSlideChange(i)}
            >
              {i === currentSlide && (
                <span
                  key={`animation-${animationKey.current}`}
                  className="absolute top-0 left-0 inline-block h-full bg-white"
                  style={{
                    animation: `grow ${DELAY}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}
