import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState(0);

  const addToBasket = () => {
    setBasketItems((prevItems) => prevItems + 1);
  };

  return (
    <BasketContext.Provider value={{ basketItems, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
