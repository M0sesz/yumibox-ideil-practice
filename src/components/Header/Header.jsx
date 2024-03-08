import React, { useState, useEffect } from "react";
import { useBasket } from "../Basket";
import {
  TextMenu,
  Wrapper,
  ButtonMenu,
  HeaderWrapper,
  MenuButton,
  Modal,
  ModalContent,
  CloseButton,
  LogoHeader,
  HeaderMobileNav,
  HeaderNavList,
  HeaderNavLink,
  HeaderEmail,
  HeaderPhone,
  ListSocial,
  ListAddress,
  UlAddress,
  HeaderMobileNavUl,
  HeaderDesktopNav,
  HeaderDesktopNavUl,
  HeaderNavListDesktop,
  HeaderNavLinkDesktop,
  BasketDesk,
  HeaderBasketWrapper,
  HeaderBasketWrapperDesktop,
  AmountBasket,
} from "./Header.styled";

import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { basketItems, totalPrice } = useBasket();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <LogoHeader
          width="75"
          height="48"
          viewBox="0 0 114 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H73.1549V19.7565H69.956V3.16651H3.19892V69.2472H69.954L69.9284 48.2023L73.1273 48.1985L73.1568 72.4137H0V0Z"
            fill="white"
          />
          <path
            d="M100.073 42.6565L105.02 35.8741L100.68 29.4986H104.566L107.041 33.1023L109.415 29.4986H113.298L109.004 35.8741L114 42.6565H109.863L107.038 38.3849L104.21 42.6565H100.073ZM93.2669 32.1824C92.7303 32.18 92.1986 32.2832 91.7027 32.486C91.2097 32.6838 90.7622 32.9781 90.3869 33.3512C90.0091 33.7079 89.7122 34.14 89.516 34.619C89.3198 35.0979 89.2288 35.6127 89.2491 36.1291C89.2488 36.8058 89.431 37.4702 89.7766 38.0539C90.1251 38.6493 90.6267 39.1427 91.2304 39.4839C91.8545 39.8383 92.5627 40.0217 93.2822 40.0152C93.8221 40.0323 94.3599 39.9417 94.8637 39.7487C95.3674 39.5557 95.8268 39.2643 96.2143 38.8919C96.5916 38.5367 96.8898 38.1076 97.0899 37.6319C97.2901 37.1562 97.3878 36.6444 97.3767 36.1291C97.3805 35.4322 97.194 34.7473 96.8369 34.1467C96.4839 33.5467 95.9743 33.0517 95.3617 32.7137C94.7237 32.3549 94.0005 32.1715 93.2669 32.1824ZM93.4233 29.1009C94.7125 29.0912 95.9816 29.4167 97.1037 30.0451C98.2067 30.6546 99.1264 31.5431 99.769 32.6196C100.414 33.6783 100.75 34.8929 100.741 36.1291C100.749 37.3664 100.399 38.5799 99.7322 39.6266C99.0624 40.6956 98.1198 41.571 96.9995 42.1646C95.8552 42.7834 94.5708 43.1042 93.2669 43.0967C91.9783 43.1016 90.7104 42.7764 89.5864 42.1525C88.4661 41.5476 87.5251 40.6632 86.8568 39.5871C86.1997 38.5512 85.852 37.3524 85.8539 36.1291C85.8463 34.8782 86.1973 33.6507 86.866 32.5892C87.5406 31.5105 88.4934 30.6292 89.6263 30.036C90.7917 29.4101 92.0974 29.0844 93.4233 29.0888V29.1009ZM77.2876 32.1824C76.5709 32.1813 75.864 32.3466 75.2235 32.6651C74.6013 32.9715 74.0722 33.4356 73.69 34.01C73.3046 34.5776 73.1034 35.248 73.1134 35.9318C73.1052 36.6542 73.2859 37.3664 73.6379 37.9993C73.9833 38.617 74.495 39.1278 75.1162 39.4748C75.7841 39.8399 76.537 40.0252 77.2999 40.0121C78.0277 40.0235 78.7458 39.8455 79.3824 39.496C79.9844 39.169 80.4833 38.6836 80.8239 38.0934C81.1688 37.4943 81.3476 36.8156 81.3423 36.1261C81.3497 35.4288 81.1742 34.7416 80.8331 34.1315C80.5012 33.5337 80.0072 33.0396 79.407 32.7046C78.76 32.347 78.0284 32.1668 77.2876 32.1824ZM69.9268 42.6686V25.1025H73.1502V30.9771C73.513 30.532 73.956 30.1574 74.4568 29.872C74.9347 29.5955 75.4515 29.3909 75.9903 29.2648C76.5273 29.1412 77.0767 29.0781 77.6281 29.0766C78.5862 29.0689 79.5355 29.2581 80.416 29.6322C81.2595 29.9844 82.0229 30.5006 82.6611 31.1502C83.2927 31.797 83.7898 32.5603 84.1241 33.3968C84.4646 34.2355 84.6395 35.1311 84.6393 36.035V36.2293C84.6347 36.7728 84.5605 37.3134 84.4185 37.8384C84.2732 38.3999 84.0676 38.9445 83.8051 39.4626C83.5575 39.9554 83.2484 40.4154 82.885 40.8318C82.4672 41.3067 81.9791 41.7161 81.4373 42.0462C80.8882 42.3803 80.2946 42.6368 79.6738 42.8083C79.0424 42.986 78.3888 43.0749 77.7324 43.0724C75.6253 43.0724 74.2114 42.3529 73.1563 40.8683V42.6534L69.9268 42.6686Z"
            fill="white"
          />
          <path
            d="M47.2308 42.6378V28.724H50.3285V29.9809C50.6511 29.3818 51.1865 28.9221 51.8313 28.6906C52.5303 28.4123 53.277 28.27 54.0304 28.2716C54.7707 28.266 55.5034 28.4204 56.1773 28.724C56.818 28.9998 57.3773 29.4323 57.8028 29.9809C57.9355 30.1181 58.0546 30.2675 58.1586 30.4272C58.2386 30.251 58.362 30.0976 58.5174 29.9809C58.9959 29.4141 59.6123 28.9774 60.3086 28.7119C61.0443 28.4177 61.8308 28.2682 62.6242 28.2716C64.4501 28.2716 65.8691 28.8424 66.8812 29.9839C67.4506 30.5636 67.8595 31.2788 68.0682 32.0605C68.2747 32.9565 68.3715 33.8739 68.3565 34.7929V42.6287H64.9582V35.2179C64.9582 33.9124 64.7865 33.0199 64.4491 32.5523C64.244 32.2256 63.9434 31.9684 63.5872 31.8146C63.2027 31.6388 62.784 31.5486 62.3604 31.5505C61.897 31.5236 61.435 31.6225 61.0242 31.8365C60.6134 32.0505 60.2695 32.3715 60.0295 32.7649C59.6246 33.372 59.4161 34.3253 59.4161 35.6278C59.4181 35.7022 59.4263 35.7763 59.4406 35.8494C59.4547 35.9103 59.4639 35.9722 59.4682 36.0346V42.6651H56.1252V35.2179C56.1316 34.7296 56.1019 34.2416 56.0362 33.7576C55.9648 33.3602 55.8045 32.9837 55.5669 32.6556C55.3427 32.3049 55.024 32.0232 54.6468 31.8419C54.257 31.643 53.8249 31.539 53.3863 31.5383C52.5684 31.5383 51.955 31.7579 51.5461 32.1971C51.1421 32.635 50.8803 33.1829 50.7946 33.7698C50.6887 34.5118 50.6405 35.2609 50.6505 36.0103V42.6408L47.2308 42.6378ZM42.2407 28.724H45.639V42.6378H42.5443V41.1198C41.8082 42.4253 40.5906 43.078 38.8915 43.078C38.0542 43.0955 37.2235 42.9283 36.4596 42.5885C35.6957 42.2488 35.0178 41.745 34.475 41.1137C34.0978 40.7323 33.7943 40.2857 33.5794 39.7961C33.3802 39.3354 33.249 38.8487 33.1899 38.351C33.1284 37.7519 33.0997 37.1499 33.104 36.5477V28.724H36.5053V35.5549C36.5053 36.8998 36.6403 37.8379 36.9163 38.3723C37.1369 38.8156 37.4819 39.1866 37.91 39.4409C38.3442 39.696 38.8406 39.8283 39.3454 39.8235C40.4843 39.8235 41.25 39.4237 41.6426 38.6243C42.0747 37.6593 42.2792 36.6097 42.2407 35.5549V28.724ZM19.7409 47.3101L22.3295 41.3323L17.1738 28.724H21.026L24.228 37.6133L27.6263 28.724H31.4386L23.3662 47.3101H19.7409Z"
            fill="#FCB852"
          />
        </LogoHeader>
        <MenuButton>
          <TextMenu>Меню</TextMenu>
          <ButtonMenu onClick={handleOpenModal}>
            <IoMdMenu color="white" size="30px" />
          </ButtonMenu>
        </MenuButton>
        <HeaderDesktopNav>
          <HeaderDesktopNavUl>
            <HeaderNavListDesktop>
              <HeaderNavLinkDesktop href="#">Каталог</HeaderNavLinkDesktop>
            </HeaderNavListDesktop>
            <HeaderNavListDesktop>
              <HeaderNavLinkDesktop href="#">Кейтеринг</HeaderNavLinkDesktop>
            </HeaderNavListDesktop>
            <HeaderNavListDesktop>
              <HeaderNavLinkDesktop href="#">Про нас</HeaderNavLinkDesktop>
            </HeaderNavListDesktop>
            <HeaderNavListDesktop>
              <HeaderNavLinkDesktop href="#">Контакти</HeaderNavLinkDesktop>
            </HeaderNavListDesktop>
          </HeaderDesktopNavUl>
        </HeaderDesktopNav>
        <HeaderBasketWrapperDesktop>
          <AmountBasket type="button">{basketItems}</AmountBasket>
          <BasketDesk type="button">{totalPrice}&nbsp;грн</BasketDesk>
        </HeaderBasketWrapperDesktop>
      </HeaderWrapper>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>
              <IoClose size="30px" color="white" />
            </CloseButton>
            <div>
              <HeaderBasketWrapper>
                <AmountBasket type="button">{basketItems}</AmountBasket>
                <BasketDesk type="button">{totalPrice}&nbsp;грн</BasketDesk>
              </HeaderBasketWrapper>
              <HeaderMobileNav>
                <HeaderMobileNavUl>
                  <HeaderNavList>
                    <HeaderNavLink href="#">Каталог</HeaderNavLink>
                  </HeaderNavList>
                  <HeaderNavList>
                    <HeaderNavLink href="#">Кейтеринг</HeaderNavLink>
                  </HeaderNavList>
                  <HeaderNavList>
                    <HeaderNavLink href="#">Про нас</HeaderNavLink>
                  </HeaderNavList>
                  <HeaderNavList>
                    <HeaderNavLink href="#">Контакти</HeaderNavLink>
                  </HeaderNavList>
                </HeaderMobileNavUl>
              </HeaderMobileNav>

              <UlAddress>
                <address>
                  <ListAddress>
                    <HeaderEmail href="mailto:yumbox.lutsk@gmail.com">
                      yumbox.lutsk@gmail.com
                    </HeaderEmail>
                  </ListAddress>
                  <li>
                    <HeaderPhone href="tel:+380938239293">
                      +380 93 823 92 93
                    </HeaderPhone>
                  </li>
                </address>
              </UlAddress>
              <ListSocial>
                <li>
                  <ImLinkedin2 color="white" size={24} />
                </li>
                <li>
                  <FaInstagram color="white" size={24} />
                </li>
                <li>
                  <FaFacebookF color="white" size={24} />
                </li>
              </ListSocial>
            </div>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};
