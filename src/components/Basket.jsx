import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedItem, setAddedItem] = useState(null);

  const addToBasket = (price, grams, title, quantity) => {
    setBasketItems((prevItems) => [
      ...prevItems,
      { price, grams, title, quantity },
    ]);
    setTotalPrice((prevTotal) => prevTotal + parseFloat(price));

    setAddedItem({ price, grams, title, quantity });
  };
  return (
    <BasketContext.Provider
      value={{ basketItems, totalPrice, addToBasket, addedItem }}
    >
      {children}
    </BasketContext.Provider>
  );
};
