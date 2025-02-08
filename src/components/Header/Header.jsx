import React, { useState } from 'react';

import { CiMenuBurger } from 'react-icons/ci';
import { GrFavorite } from 'react-icons/gr';
import { FaCartPlus } from 'react-icons/fa6';
import { VscSearch } from 'react-icons/vsc';

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
  TitleSale,
} from './Header.styled';

import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderBox>
        <NavBox>
          <HamburgerMenuButton onClick={() => setIsOpen(!isOpen)}>
            <CiMenuBurger size="26px" color="fff" />
          </HamburgerMenuButton>
          <LogoText $color={false}>Oleg Shop</LogoText>
          <HelperBox>
            <Link to="/favorite">
              <GrFavorite size="26px" color="fff" />
            </Link>
            <Link to="/cart">
              <FaCartPlus size="26px" color="fff" />
            </Link>
            <Link to="/search">
              <VscSearch size="26px" color="fff" />
            </Link>
          </HelperBox>
        </NavBox>
        <TitleBox>
          <Title>Розпродажа товарів для неї</Title>
          <TitleSale>Скидки до 50%</TitleSale>
          <CatalogLink to="/catalog">Перейти в каталог</CatalogLink>
        </TitleBox>
        <MenuBox $isOpen={isOpen}></MenuBox>
      </HeaderBox>
    </>
  );
};
