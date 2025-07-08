"use client";

import { CartContext } from "@/contexts";
import cartReducer from "@/reducers/cartReducer";
import { useReducer } from "react";

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
