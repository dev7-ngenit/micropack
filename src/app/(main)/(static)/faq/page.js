import FAQs from "@/components/faq/FAQs";
import Title from "@/components/shared/Title/Title";

export default function page() {
  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-2xl [background-position-y:60%] md:[background-position-y:70%] md:text-4xl">
        Frequently Asked Questions
      </Title>

      <FAQs />
    </main>
  );
}
