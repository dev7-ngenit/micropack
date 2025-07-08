export const cartAction = {
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
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem?.id) {
        return state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state.cart, { ...action.payload }];
    }

    case "DECREASE_QUANTITY": {
      return state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - action.payload?.quantity || 1 }
          : item,
      );
    }

    case "REMOVE_FROM_CART": {
      return state.cart.filter((item) => item.id !== action.payload.id);
    }

    default: {
      return state;
    }
  }
}
