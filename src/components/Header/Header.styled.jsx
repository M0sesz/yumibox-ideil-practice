import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
  margin: 0 20px;

  @media (min-width: 768px) {
    padding-top: 25px;
    margin: 0 30px;
  }

  @media (min-width: 1110px) {
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
  z-index: 10;

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
  z-index: 10;
  width: 75px;
  height: auto;

  @media (min-width: 1120px) {
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
`;

export const ModalContent = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding-left: 20px;
  align-items: center;
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

  @media (min-width: 1110px) {
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
  gap: 20px;
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

export const BasketDesk = styled.button`
  @media (max-width: 768px) {
    display: none;
  }
`;
