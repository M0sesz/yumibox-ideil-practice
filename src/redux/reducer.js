import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
  cartItems: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { id, quantity: 1 }],
        };
      }
    }

    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      const updatedCartItems = state.cartItems.filter((item) => item.id !== id);

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
