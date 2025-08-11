"use client";

import DeliveryForm from "@/components/checkout/DeliveryForm";
import ProductSummary from "@/components/checkout/ProductSummary/ProductSummary";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCart from "@/hooks/useCart";
import flattenAccessories from "@/lib/flattenAccessories";
import { cartActions } from "@/reducers/cartReducer";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    addressOne: "",
    addressTwo: "",
    state: "",
    country: "",
    postalCode: "",
    phone: "",
  });
  const axios = useAxiosSecure();
  const { cart, dispatch } = useCart();
  const { user } = useUser();
  const router = useRouter();

  const flattenedCart = flattenAccessories(cart);

  const handleConfirmOrder = async (subtotalPrice, totalPrice) => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "addressOne",
      "state",
      "country",
      "postalCode",
      "phone",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        toast.error(`All required fields have to be filled.`);
        return;
      }
    }

    const orderItems = flattenedCart.map((product) => {
      const orderItem = {
        product_id: product.id,
        qty: product?.quantity || 1,
        price: parseFloat(product.price),
      };

      if (product.color) {
        orderItem.color = product.color;
      }

      return orderItem;
    });

    try {
      const formData = {
        shipping_first_name: data.firstName,
        shipping_last_name: data.lastName,
        shipping_email: data.email,
        shipping_company: data.company,
        shipping_address_1: data.addressOne,
        shipping_address_2: data.addressTwo,
        shipping_state: data.state,
        shipping_country: data.country,
        shipping_postcode: data.postalCode,
        shipping_phone: data.phone,
        sub_total: subtotalPrice,
        total_amount: totalPrice,
        payment_method: "cod",
        user_email: user.emailAddresses[0].emailAddress,
        order_items: orderItems,
      };

      await axios.post("/v1/checkout-store", formData);

      dispatch({ type: cartActions.clearCart });

      router.push("/profile/order-history");
      toast.success("Order confirmed successfully");
    } catch (error) {
      toast.error("An error occurred while confirming the order.");
      console.error("Error confirming order:", JSON.stringify(error, null, 2));
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Forms */}
        <div className="space-8 lg:col-span-2">
          <DeliveryForm data={data} setData={setData} />
          {/* <PaymentSection /> */}
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <ProductSummary handleConfirmOrder={handleConfirmOrder} />
            {/* <OrderTotal /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
