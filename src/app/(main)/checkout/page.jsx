import DeliveryForm from "@/components/checkout/DeliveryForm";
import OrderTotal from "@/components/checkout/OrderTotal";
import ProductSummary from "@/components/checkout/ProductSummary";

export default function CheckoutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Forms */}
        <div className="space-8 lg:col-span-2">
          <DeliveryForm />
          {/* <PaymentSection /> */}
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <ProductSummary />
            <OrderTotal />
          </div>
        </div>
      </div>
    </section>
  );
}
