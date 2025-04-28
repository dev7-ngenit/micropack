import Title from "@/components/shared/Title/Title";

export default function page() {
  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">
        Refund Policy
      </Title>

      <section className="mt-10 flex flex-col gap-5 md:mt-16 text-lg">
        <p>
          10-Day Money-Back Guarantee for Any Reason Undamaged products may be
          returned for any reason within 10 days of the date of receipt. Once
          the returned item arrives back in our warehouse for inspection, the
          refund process will begin.
        </p>

        <p>
          Returns must include all accessories Items must include original
          packaging For non-quality related reasons for return, buyer is
          responsible for shipping costs For non-quality related reasons for
          return, refunds the cost of the product itself Returns may be rejected
          if items do not meet the above requirements It is not possible to
          process a request for a refund for non-quality issues for items that
          have expired this 10-day window. For purchases not made directly
          through Micropack’s online stores, please contact retailers for
          refunds.
        </p>

        <p>
          How do I return an item? 1. Please contact us to initiate a return.
          Please state the reason for return and provide an invoice or
          screenshot to confirm the order number. 2. For the refund to be
          processed in a timely manner, please be sure to send a return the
          tracking number
        </p>

        <p>
          How long does it take to get a refund? Refunds will be issued once the
          item arrives at our warehouse. The refund will be credited back using
          the same method as when your initial order was made. Processing time
          typically takes 3-5 working days.
        </p>

        <p>
          Item Warranty Period (Months) Cables 18 Other items 12 This limited
          warranty provided by the manufacturer in no way affects a potential
          statutory warranty provided by law.
        </p>
      </section>
    </main>
  );
}
