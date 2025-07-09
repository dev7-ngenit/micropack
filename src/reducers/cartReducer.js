export const cartActions = {
  loadCart: "LOAD_CART",
  addToCart: "ADD_TO_CART",
  decreaseQuantity: "DECREASE_QUANTITY",
  removeFromCart: "REMOVE_FROM_CART",
};

export default function cartReducer(state, action) {
  switch (action.type) {
    case "LOAD_CART": {
      return [...action.payload];
    }

    case "ADD_TO_CART": {
      console.log("from reducer", state);
      const existingItem = state.find((item) => item.id === action.payload.id);

      let nextState;

      console.log("from reducer", existingItem);

      if (existingItem?.id) {
        nextState = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        nextState = [...state, { ...action.payload }];
      }

      localStorage.setItem("cart", JSON.stringify(nextState));
      return nextState;
    }

    case "DECREASE_QUANTITY": {
      const nextState = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - action.payload?.quantity || 1 }
          : item,
      );

      localStorage.setItem("cart", JSON.stringify(nextState));
      return nextState;
    }

    case "REMOVE_FROM_CART": {
      const nextState = state.filter((item) => item.id !== action.payload.id);

      localStorage.setItem("cart", JSON.stringify(nextState));
      return nextState;
    }

    default: {
      return state;
    }
  }
}
