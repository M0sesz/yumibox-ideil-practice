import React from "react";
import {
  DishImg,
  DishTextWrap,
  YumBoxText,
  Grams,
  Price,
} from "./Dishes.styled";
import dish from "../../assets/dish.jpg";

export const DishesItem = ({ title, grams }) => {
  return (
    <div>
      <DishImg src={dish} alt="dish" />
      <DishTextWrap>
        <YumBoxText>
          {title} <br /> 21 сет
        </YumBoxText>
        <Grams>{grams}</Grams>
        <Price type="button"></Price>
      </DishTextWrap>
    </div>
  );
};
