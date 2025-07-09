import { CartContext } from "@/contexts";
import { useContext } from "react";

export default function useCart() {
  const props = useContext(CartContext);
  return props;
}
