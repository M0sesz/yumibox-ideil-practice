import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { DishesItem } from "./DishesItem";
import { DishTitle } from "./Dishes.styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const setsData = [
  {
    id: 1,
    title: "Yumbox ",
    grams: "1500 гр",
    price: "799 грн",
  },
  {
    id: 2,
    title: "Yumbox ",
    grams: "1500 гр",
    price: "799 грн",
  },
  {
    id: 3,
    title: "Yumbox ",
    grams: "1500 гр",
    price: "799 грн",
  },
  {
    id: 4,
    title: "Yumbox ",
    grams: "1500 гр",
    price: "799 грн",
  },
  {
    id: 5,
    title: "Yumbox ",
    grams: "1500 гр",
    price: "799 грн",
  },
  {
    id: 6,
    title: "Yumbox ",
    grams: "1500 гр",
    price: "799 грн",
  },
];

export const Dishes = () => {
  return (
    <>
      <DishTitle>Найчастіше замовляють</DishTitle>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={2}
        loop={true}
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
      </Swiper>
    </>
  );
};
