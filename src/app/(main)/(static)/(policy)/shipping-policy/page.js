import Title from "@/components/shared/Title/Title";

export default function page() {
  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">
        Shipping Policy
      </Title>

      <section className="mt-10 flex flex-col gap-5 md:mt-16">
        <h2 className="text-2xl font-bold">
          Delivery Time=Processing Time+Shipping Time
        </h2>

        <p className="text-lg">
          Our estimated delivery dates are based on several factors, including
          the destination address and how quickly we can assemble and prepare
          your items for shipment. (There is different processing time for
          different item. You can check the processing time from product page.
          Once your order is placed, you can check order shipping info from the
          online order status page. We will also inform you through your
          registered email.) Shipping countries: Except the British Indian Ocean
          Territory, the outlying islands of the United States, Indonesia,
          India, and China, most countries can deliver, The delivery country and
          region will be adjusted according to the logistics company. Shipping
          fee: Starting from $4, shipping fees are calculated based on package
          weight and destination. Prepare orders for dispatch: 1-3 days,
          shipping time: 5-12 days.
        </p>

        <h2 className="text-2xl font-bold">Note for taxes:</h2>

        <p className="text-lg">
          For most of the countries, our customers do not need to pay for
          importing fees, duties or VAT(Valued Additional Tax).
        </p>
      </section>
    </main>
  );
}
