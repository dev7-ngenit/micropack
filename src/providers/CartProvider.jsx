"use client";

import { CartContext } from "@/contexts";
import cartReducer, { cartActions } from "@/reducers/cartReducer";
import { useEffect, useReducer } from "react";

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      dispatch({ type: cartActions.loadCart, payload: cart });
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
