export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (itemId) => ({
  type: ADD_TO_CART,
  payload: {
    id: itemId,
  },
});

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id: itemId,
  },
});
