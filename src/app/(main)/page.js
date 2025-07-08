import CarouselSectionOne from "@/components/home/CarouselSectionOne/CarouselSectionOne";
import CarouselSectionThree from "@/components/home/CarouselSectionThree/CarouselSectionThree";
import CarouselSectionTwo from "@/components/home/CarouselSectionTwo/CarouselSectionTwo";
import Hero from "@/components/home/Hero/Hero";
import MainProductCard from "@/components/home/MainProductCard/MainProductCard";
import ProductCTAOne from "@/components/home/ProductCTAOne/ProductCTAOne";
import ProductCTATwo from "@/components/home/ProductCTATwo/ProductCTATwo";

export default function Home() {
  return (
    <main className="md:min-h-[calc(100dvh-33rem)]">
      <Hero />
      <MainProductCard />
      <CarouselSectionOne />
      <ProductCTAOne />
      <CarouselSectionTwo />
      <ProductCTATwo />
      <CarouselSectionThree />
    </main>
  );
}
