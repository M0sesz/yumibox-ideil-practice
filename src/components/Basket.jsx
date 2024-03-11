import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToBasket = (price, grams, title, quantity) => {
    const newItem = { price, grams, title, quantity };
    setBasketItems((prevItems) => [...prevItems, newItem]);
    setTotalPrice((prevTotal) => prevTotal + parseFloat(price) * quantity);
  };

  return (
    <BasketContext.Provider value={{ basketItems, totalPrice, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
