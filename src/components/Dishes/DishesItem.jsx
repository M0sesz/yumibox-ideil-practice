import React from "react";
import { useBasket } from "../Basket";
import {
  DishImg,
  DishTextWrap,
  YumBoxText,
  Grams,
  Price,
  ItemInBasket,
} from "./Dishes.styled";
import dish from "../../assets/dish.jpg";

export const DishesItem = ({ id, quantity, title, grams, price }) => {
  const { basketItems, addToBasket } = useBasket();

  const isItemInBasket = basketItems.some((item) => item.id === id);
  const addedItem = basketItems.find((item) => item.id === id);

  const handleClick = () => {
    if (!isItemInBasket) {
      addToBasket(id, price, grams, title, quantity);
    }
  };

  return (
    <div>
      <DishImg src={dish} alt="dish" />
      <DishTextWrap>
        <YumBoxText>
          {title} <br /> 21 сет
        </YumBoxText>
        <Grams>{grams}</Grams>
        {isItemInBasket ? (
          <ItemInBasket>
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M12.72 6.66L8.43 10.96L6.77 9.31C6.69 9.2 6.58 9.12 6.45 9.06C6.33 9 6.19 8.96 6.05 8.96C5.92 8.95 5.78 8.98 5.65 9.03C5.52 9.08 5.41 9.15 5.31 9.25C5.21 9.35 5.13 9.46 5.08 9.59C5.03 9.72 5.01 9.86 5.02 10C5.02 10.13 5.06 10.27 5.12 10.39C5.18 10.52 5.26 10.63 5.37 10.72L7.72 13.08C7.81 13.17 7.92 13.24 8.04 13.29C8.16 13.34 8.29 13.37 8.43 13.37C8.69 13.37 8.94 13.26 9.12 13.08L14.12 8.08C14.22 7.98 14.29 7.87 14.34 7.75C14.39 7.63 14.42 7.5 14.42 7.37C14.42 7.23 14.39 7.1 14.34 6.98C14.29 6.86 14.22 6.75 14.12 6.66C13.94 6.47 13.68 6.37 13.42 6.37C13.16 6.37 12.9 6.47 12.72 6.66ZM10 -0.13C8.02 -0.13 6.08 0.45 4.44 1.55C2.79 2.65 1.51 4.21 0.76 6.04C0 7.87 -0.2 9.88 0.19 11.82C0.57 13.76 1.53 15.54 2.92 16.94C4.32 18.34 6.1 19.29 8.04 19.67C9.98 20.06 11.99 19.86 13.82 19.11C15.65 18.35 17.21 17.07 18.31 15.42C19.41 13.78 20 11.84 20 9.87C20 8.55 19.74 7.25 19.23 6.04C18.73 4.83 17.99 3.72 17.07 2.79C16.14 1.87 15.04 1.13 13.82 0.63C12.61 0.12 11.31 -0.13 10 -0.13ZM10 17.87C8.41 17.87 6.87 17.4 5.55 16.52C4.23 15.64 3.21 14.39 2.6 12.93C2 11.47 1.84 9.86 2.15 8.31C2.46 6.75 3.22 5.33 4.34 4.21C5.46 3.09 6.88 2.33 8.43 2.02C9.99 1.71 11.59 1.87 13.06 2.48C14.52 3.08 15.77 4.11 16.65 5.42C17.53 6.74 18 8.28 18 9.87C18 11.99 17.15 14.02 15.65 15.52C14.15 17.02 12.12 17.87 10 17.87Z"
                fill="#52FC96"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
            В кошику <span>{addedItem.quantity} шт</span> за{" "}
            <span>{addedItem.price} ₴</span>
          </ItemInBasket>
        ) : (
          <Price type="button" onClick={handleClick}></Price>
        )}
      </DishTextWrap>
    </div>
  );
};
