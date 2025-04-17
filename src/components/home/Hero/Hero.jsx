"use client";

import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const DELAY = 3000;

export default function Hero() {
  const [api, setApi] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const animationKey = useRef(0);

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
        <CarouselContent>
          <CarouselItem>
            <img
              src="https://images.unsplash.com/photo-1561112077-7b6f1d8cc0e9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-[500px] w-full object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-[500px] w-full object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://images.unsplash.com/photo-1561112078-7d24e04c3407?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-[500px] w-full object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-[500px] w-full object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="absolute right-0 bottom-0 left-0 flex items-center justify-center gap-2 p-4 text-white">
        {Array.from({ length: 4 }, (_, i) => (
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
                  animationPlayState: api?.plugins().autoplay.isPlaying()
                    ? "running"
                    : "paused",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
