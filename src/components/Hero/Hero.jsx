import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { CustomSwiper } from "./Hero.styled";
import { Wrapper } from "../Header/Header.styled";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HeroItem } from "./HeroItem";

export const Hero = () => {
  return (
    <Wrapper>
      <CustomSwiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
          clickable: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: ".pagination-wrap",
        }}
      >
        <SwiperSlide>
          <HeroItem />
        </SwiperSlide>
        <SwiperSlide>
          <HeroItem />
        </SwiperSlide>
        <SwiperSlide>
          <HeroItem />
        </SwiperSlide>
      </CustomSwiper>
      <div className="button-next-slide">
        <FaArrowRight size="15px" color="white" />
      </div>
      <div className="button-prev-slide">
        <FaArrowLeft size="15px" color="white" />
      </div>
      <div className="pagination-wrap"></div>
    </Wrapper>
  );
};
