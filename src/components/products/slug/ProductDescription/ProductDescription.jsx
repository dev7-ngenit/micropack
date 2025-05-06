import Title from "@/components/shared/Title/Title";

export default function ProductDescription({ description }) {
  return (
    <section className="mx-3 mt-14 min-h-40 md:mx-0">
      <Title>Description</Title>

      <div className="mt-2">{description}</div>
    </section>
  );
}
