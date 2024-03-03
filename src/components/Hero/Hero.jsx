import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

import {
  HeroBox,
  TextHero,
  CustomSwiper,
  HeroTextWrap,
  HeroText2,
  HeroButton,
  HeroImage,
} from "./Hero.styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Wrapper } from "../Header/Header.styled";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import hero from "../../assets/hero.png";

export const Hero = () => {
  return (
    <Wrapper>
      <CustomSwiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
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
          <HeroBox>
            <HeroImage src={hero} />
            <TextHero>
              YUM
              <br />
              BOX
            </TextHero>
            <HeroTextWrap>
              <HeroText2>сет 21</HeroText2>
              <HeroButton type="button">934 грн</HeroButton>
            </HeroTextWrap>
          </HeroBox>
        </SwiperSlide>
        <SwiperSlide>
          <HeroBox>
            <HeroImage src={hero} />
            <TextHero>
              YUM
              <br />
              BOX
            </TextHero>
            <HeroTextWrap>
              <HeroText2>сет 21</HeroText2>
              <HeroButton type="button">934 Грн</HeroButton>
            </HeroTextWrap>
          </HeroBox>
        </SwiperSlide>
        <SwiperSlide>
          <HeroBox>
            <HeroImage src={hero} />
            <TextHero>
              YUM
              <br />
              BOX
            </TextHero>
            <HeroTextWrap>
              <HeroText2>сет 21</HeroText2>
              <HeroButton type="button">934 грн</HeroButton>
            </HeroTextWrap>
          </HeroBox>
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
