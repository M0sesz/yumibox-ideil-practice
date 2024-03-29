import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const HeroBox = styled.div`
  position: relative;
  background-color: #222222;
  max-width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

export const TextHero = styled.p`
  color: rgb(233, 229, 225);
  font-weight: 600;
  font-size: 130px;
  text-align: center;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroTextWrap = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  z-index: 1;
`;

export const HeroText2 = styled.p`
  color: #fcb852;
  text-transform: uppercase;
  font-size: 30px;
  padding-right: 10px;
  font-weight: 600;
`;

export const HeroButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fcb852;
  text-transform: uppercase;
  font-size: 25px;
  border: 4px solid #fcb852;
  border-radius: 30px;
  padding: 5px 34px;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 30px;
  z-index: 1;
  width: 350px;
  height: 250px;

  @media (min-width: 1100px) {
    top: 10px;
    width: 800px;
    height: 600px;
  }
`;
export const YumBoxImg = styled.img`
  width: 1600px;
  height: 500px;
  display: none;

  @media (min-width: 1100px) {
    display: block;
  }
`;
export const YumBoxImg2 = styled.img`
  position: fixed;
  top: 0;
  left: 170px;
  @media (max-width: 1100px) {
    display: none;
  }
`;
