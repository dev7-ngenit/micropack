import CarouselSectionOne from "@/components/home/CarouselSectionOne/CarouselSectionOne";
import Hero from "@/components/home/Hero/Hero";
import MainProductCard from "@/components/home/MainProductCard/MainProductCard";
import ProductCarousel from "@/components/home/ProductCarousel/ProductCarousel";
import ProductCTA from "@/components/home/ProductCTA/ProductCTA";
import ProductCTAOne from "@/components/home/ProductCTAOne/ProductCTAOne";

export default function Home() {
  return (
    <main>
      <Hero />

      <MainProductCard />

      <CarouselSectionOne />

      <ProductCTAOne />

      <ProductCarousel />

      <ProductCTA />
    </main>
  );
}
