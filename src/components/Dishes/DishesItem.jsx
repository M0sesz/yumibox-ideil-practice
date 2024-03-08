import React from "react";
import { useBasket } from "../Basket";
import {
  DishImg,
  DishTextWrap,
  YumBoxText,
  Grams,
  Price,
} from "./Dishes.styled";
import dish from "../../assets/dish.jpg";

export const DishesItem = ({ title, grams, price }) => {
  const { addToBasket } = useBasket();

  const handleClick = () => {
    addToBasket(parseInt(price));
  };

  return (
    <div>
      <DishImg src={dish} alt="dish" />
      <DishTextWrap>
        <YumBoxText>
          {title} <br /> 21 сет
        </YumBoxText>
        <Grams>{grams}</Grams>
        <Price type="button" onClick={handleClick}></Price>
      </DishTextWrap>
    </div>
  );
};
