import {
  HeroBox,
  TextHero,
  HeroTextWrap,
  HeroText2,
  HeroButton,
  HeroImage,
  YumBoxImg,
} from "./Hero.styled";

import hero from "../../assets/hero.png";
import yumbox from "../../assets/yumbox.png";

export const HeroItem = () => {
  return (
    <HeroBox>
      <YumBoxImg src={yumbox} alt="logo hero" />
      <HeroImage src={hero} />
      <TextHero>
        YUM
        <br />
        BOX
      </TextHero>
      <HeroTextWrap>
        <HeroText2>Cет 21</HeroText2>
        <HeroButton type="button">934 грн</HeroButton>
      </HeroTextWrap>
    </HeroBox>
  );
};
