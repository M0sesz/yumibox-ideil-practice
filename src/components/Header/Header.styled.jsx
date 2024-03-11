import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
  margin: 0 20px;

  @media (min-width: 768px) and (max-width: 1100px) {
    padding-top: 25px;
    margin: 0 30px;
  }

  @media (min-width: 1100px) {
    padding-top: 32px;
    margin: 0 82px;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextMenu = styled.p`
  padding: 0;
  margin: 0;
  margin-right: 7px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 16px;
  color: white;
  z-index: 11;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const LogoHeader = styled.svg`
  z-index: 11;
  width: 75px;
  height: auto;

  @media (min-width: 1110px) {
    width: 114px;
  }
`;

export const ButtonMenu = styled.button`
  padding-top: 10px;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ModalBasket = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
  color: white;
`;

export const ModalContent = styled.div`
  width: auto;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding-left: 50px;
  align-items: center;
`;

export const ModalContentBasket = styled.div`
  width: auto;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 100px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const CloseButton = styled.button`
  padding-top: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const HeaderMobileNav = styled.nav`
  padding-right: 66px;
  margin-bottom: 22px;
`;

export const HeaderNavList = styled.li`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.02em;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const HeaderNavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 24px;
  line-height: 39px;

  @media (min-width: 1100px) {
    font-weight: 500;
  }
`;
export const ListSocial = styled.ul`
  display: flex;
  gap: 44px;
  margin: 0;
`;
export const ListAddress = styled.li`
  padding-bottom: 10px;
`;
export const HeaderEmail = styled.a`
  text-decoration: none;
  color: #f3ba4f;
  font-weight: 600;
  font-size: 18px;
  font-style: normal;
`;

export const HeaderPhone = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 18px;
  font-style: normal;
`;

export const UlAddress = styled.ul`
  margin: 0;
  padding-bottom: 75px;
`;
export const HeaderMobileNavUl = styled.ul`
  margin: 0;
`;

export const HeaderDesktopNav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const HeaderDesktopNavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;
export const HeaderNavListDesktop = styled.li``;

export const HeaderNavLinkDesktop = styled.a`
  font-weight: 500;
  color: white;
  text-decoration: none;
  line-height: 19px;
  font-size: 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #fcb852;
  }
`;

export const HeaderBasketWrapper = styled.div`
  display: flex;
  border: 2px solid white;
  border-radius: 21px;
  color: white;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 110px;
  margin-bottom: 40px;
  margin-top: 60px;
`;

export const HeaderBasketWrapperDesktop = styled.div`
  display: flex;
  border: 2px solid white;
  border-radius: 21px;
  color: white;
  padding-top: 4px;
  padding-bottom: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BasketDesk = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-size: 13px;

  padding: 0 10px;
`;

export const AmountBasket = styled.button`
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background: red;
  cursor: pointer;
  border: 2px solid red;
  border-radius: 50%;
  margin-left: 5px;
  color: white;
`;

export const BasketDish = styled.div`
  background-color: rgb(34, 34, 34);
  width: 411px;
  height: 151px;
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 18px 16px 14px 18px;
  overflow: auto;
`;

export const DishBasketImg = styled.div`
  background: rgb(48, 48, 48);
  width: 44px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4.26px;
`;

export const DeleteDish = styled.button``;

export const BasketPrice = styled.p`
  font-weight: 600;
  font-size: 26px;
`;
export const DownContentDish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
export const AmountBasketDish = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 22.8px;
  padding: 10px 11px 8px 11px;
`;

export const Quantity = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
`;

export const MinusButton = styled.button`
  margin-right: 7px;
  font-weight: 600;
  font-size: 15px;
`;
export const PlusButton = styled.button`
  margin-left: 7px;
  font-weight: 600;
  font-size: 15px;
`;

export const DeliveryInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  text-align: center;
  border-radius: 31px 31px 0px 0px;
  background: rgb(34, 34, 34);
  width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 600;

  div {
    display: flex;
    justify-content: space-between;
    width: 85%;
  }

  p {
    font-size: 18px;
    font-weight: 600;
  }

  p:nth-child(1) {
    font-size: 18px;
  }

  p:nth-child(2) {
    font-size: 26px;
  }
`;

export const DeliveryButton = styled.button`
  border-radius: 63px;
  background: rgb(252, 184, 82);
  font-size: 18px;
  font-weight: 600;
  color: black;
  padding: 24px 114px;
  line-height: 100%;
  margin-top: 20px;
`;
