import Title from "@/components/shared/Title/Title";
import Product from "./Product";

export default function MoreSeries() {
  return (
    <section className="mx-3 mt-5 md:mx-0">
      <Title>More Series</Title>

      <div className="mt-3 grid grid-cols-2 gap-y-4 md:grid-cols-4 md:gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <Product key={index} />
        ))}
      </div>
    </section>
  );
}
