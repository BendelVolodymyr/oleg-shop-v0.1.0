import React, { useState } from 'react';
import {
  CatalogLink,
  HamburgerMenuButton,
  HeaderBox,
  HelperBox,
  LogoText,
  MenuBox,
  NavBox,
  Title,
  TitleBox,
  TitleSave,
} from './Header.styled';
import { ReactComponent as HamburgerSvg } from '../../assets/svg/Group_25.svg';
import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';
import { ReactComponent as FavoriteSvg } from '../../assets/svg/favorite.svg';
import { ReactComponent as SearchSvg } from '../../assets/svg/search.svg';
import { Link } from 'react-router-dom';

export const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderBox>
        <NavBox>
          <HamburgerMenuButton onClick={() => setIsOpen(!isOpen)}>
            <HamburgerSvg />
          </HamburgerMenuButton>
          <LogoText>Oleg Shop</LogoText>
          <HelperBox>
            <Link to="/favorite">
              <FavoriteSvg />
            </Link>
            <Link to="/cart">
              <CartSvg />
            </Link>
            <Link to="/search">
              <SearchSvg />
            </Link>
          </HelperBox>
        </NavBox>
        <TitleBox>
          <Title>Розпродаж товарів для неї</Title>
          <TitleSave>Скидки до 90%</TitleSave>
          <CatalogLink to="/catalog">Перейти в каталог</CatalogLink>
        </TitleBox>
        <MenuBox $isOpen={isOpen}>{children}</MenuBox>
      </HeaderBox>
    </>
  );
};
