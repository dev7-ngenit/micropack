import Hero from "@/components/home/Hero/Hero";
import MainProductCard from "@/components/home/MainProductCard/MainProductCard";
import ProductCarousel from "@/components/home/ProductCarousel/ProductCarousel";
import ProductCTA from "@/components/home/ProductCTA/ProductCTA";

export default function Home() {
  return (
    <main>
      <Hero />

      <MainProductCard />

      <ProductCarousel />

      <ProductCTA />
    </main>
  );
}
