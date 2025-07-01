import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default async function FAQs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/faq`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  );

  const { data: faqs } = await response.json();

  // Decide what to render
  let content;
  if (faqs?.length === 0) {
    content = <p>No Content Found.</p>;
  } else {
    content = (
      <Accordion type="single" collapsible className="mt-5 w-full">
        {faqs.map((faq) => (
          <AccordionItem value={`item-${faq?.id}`} key={faq?.id}>
            <AccordionTrigger className="cursor-pointer text-lg">
              {faq?.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {faq?.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return content;
}
