import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { DishesItem } from "./DishesItem";
import {
  DishTitle,
  DishDesktop,
  SwiperWrap,
  DishDesktopContainer,
} from "./Dishes.styled";
import { Wrapper } from "../Header/Header.styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const setsData = [
  {
    id: 1,
    title: "Yumbox",
    grams: "1500 гр",
  },
  {
    id: 2,
    title: "Yumbox",
    grams: "1500 гр",
  },
  {
    id: 3,
    title: "Yumbox",
    grams: "1500 гр",
  },
  {
    id: 4,
    title: "Yumbox",
    grams: "1500 гр",
  },
  {
    id: 5,
    title: "Yumbox",
    grams: "1500 гр",
  },
  {
    id: 6,
    title: "Yumbox",
    grams: "1500 гр",
  },
  {
    id: 7,
    title: "Yumbox",
    grams: "1500 гр",
  },
  {
    id: 8,
    title: "Yumbox",
    grams: "1500 гр",
  },
];

export const Dishes = () => {
  return (
    <Wrapper>
      <DishTitle>Найчастіше замовляють</DishTitle>
      <SwiperWrap
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={2}
        pagination={{
          el: ".pagination-wrap-dish",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {setsData.map((set) => (
          <SwiperSlide key={set.id}>
            <DishesItem title={set.title} grams={set.grams} price={set.price} />
          </SwiperSlide>
        ))}
        <div className="pagination-wrap-dish"></div>
      </SwiperWrap>
      <DishDesktopContainer>
        {setsData.map((set) => (
          <DishDesktop key={set.id}>
            <DishesItem title={set.title} grams={set.grams} price={set.price} />
          </DishDesktop>
        ))}
      </DishDesktopContainer>
    </Wrapper>
  );
};
