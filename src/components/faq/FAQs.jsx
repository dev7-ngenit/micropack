import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "Are Micropack power products certified?",
    answer:
      "Yes, all of our products are certified and have the appropriate markings.",
  },
  {
    question:
      "Do power banks automatically turn on when they are plugged into a device?",
    answer:
      "Yes, most of our power banks will begin charging as soon as it is plugged into the device.",
  },
  {
    question: "What does the power bank capacity mean?",
    answer:
      "Capacity is measured in milliamperes (mAh) on power banks. As a general rule, the more mAh in the power bank, the more times you will be able to charge your device before having to charge the power bank again.",
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
