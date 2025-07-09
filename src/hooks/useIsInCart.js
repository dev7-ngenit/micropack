import useCart from "@/hooks/useCart";

export default function useIsInCart(productId) {
  const { cart } = useCart();

  return cart.some((item) => item.id === productId);
}
