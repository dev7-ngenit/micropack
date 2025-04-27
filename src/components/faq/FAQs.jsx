import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
  {
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function FAQs() {
  return (
    <Accordion type="single" collapsible className="mt-5 w-full">
      {faqs.map((faq, index) => (
        <AccordionItem value={`item-${index + 1}`} key={index}>
          <AccordionTrigger className="cursor-pointer text-lg">
            {faq?.question}
          </AccordionTrigger>
          <AccordionContent className="text-lg">{faq?.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
