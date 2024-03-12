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

  const removeItemFromBasket = (index) => {
    const updatedBasketItems = [...basketItems];
    const removedItem = updatedBasketItems.splice(index, 1)[0];
    const removedItemTotalPrice =
      parseFloat(removedItem.price) * removedItem.quantity;
    setBasketItems(updatedBasketItems);
    setTotalPrice((prevTotal) => prevTotal - removedItemTotalPrice);
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        totalPrice,
        addToBasket,
        removeItemFromBasket,
        setTotalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
