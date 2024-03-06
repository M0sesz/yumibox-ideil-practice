import styled from "styled-components";
import { Swiper } from "swiper/react";

export const DishTitle = styled.h3`
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 1100px) {
    padding-bottom: 50px;
  }
`;

export const DishWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SwiperWrap = styled(Swiper)`
  @media (min-width: 1100px) {
    display: none;
  }
`;
export const DishImg = styled.img`
  width: 250px;
  margin: auto;
  padding-bottom: 20px;
  @media (min-width: 1100px) {
    width: 230px;
  }
`;

export const DishTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
`;

export const YumBoxText = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  padding-bottom: 20px;
`;

export const Grams = styled.p`
  color: grey;
  font-size: 15px;
  padding-bottom: 25px;
  text-align: center;

  /* @media (min-width: 1100px) {
    padding-bottom: 25px;
  } */
`;

export const Price = styled.button`
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;

  &::before {
    content: "799 грн";
  }

  /* текст кнопки при наведенні */
  &:hover::before {
    opacity: 0;
  }

  /* текст кнопки при наведенні */
  &::after {
    content: "Добавити в кошик";
    position: absolute;
    font-weight: 500;
    font-size: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 20px 40px;
    border: 2px solid white;
    border-radius: 63px;
    white-space: nowrap;

    @media (max-width: 1100px) {
      padding: 15px 30px;
    }
  }

  /* початковий текст кнопки */
  &:hover::after {
    opacity: 1;
  }
`;

export const DishDesktop = styled.div`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
  }
`;
export const DishDesktopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px;
  justify-content: center;
  padding-bottom: 50px;
  place-items: center;
`;
