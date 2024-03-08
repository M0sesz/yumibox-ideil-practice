import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToBasket = (price) => {
    setBasketItems((prevItems) => prevItems + 1);
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  return (
    <BasketContext.Provider value={{ basketItems, totalPrice, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
