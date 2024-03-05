import React from "react";
import {
  DishImg,
  DishTextWrap,
  YumBoxText,
  Grams,
  Price,
  DishTitle,
} from "./Dishes.styled";
import dish from "../../assets/dish.jpg";

export const DishesItem = ({ title, grams, price }) => {
  return (
    <div>
      <DishImg src={dish} alt="dish" />
      <DishTextWrap>
        <YumBoxText>
          {title} <br /> 21 сет
        </YumBoxText>
        <Grams>{grams}</Grams>
        <Price type="button">{price}</Price>
      </DishTextWrap>
    </div>
  );
};
