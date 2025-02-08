import styled from 'styled-components';

import backgroundImagesOne from '../../assets/Rectangle_1.webp';

import { Link } from 'react-router-dom';

export const HeaderBox = styled.header`
  margin: 0 auto;
  width: 100%;
  height: 718px;
  padding: 20px 20px 30px 20px;

  background: rgba(0, 0, 0, 0.2);
  background-image: url(${backgroundImagesOne});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: right;
  background-repeat: no-repeat;
`;

export const NavBox = styled.div`
  margin-bottom: 294px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const HamburgerMenuButton = styled.button`
  border: none;
  background: none;
`;

export const MenuBox = styled.div`
  width: 100vh;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-600px')};

  background-color: ${({ theme }) => theme.colors.primary.bg};

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 1;
`;

export const LogoText = styled.span`
  display: block;
  margin: auto 0;

  text-transform: uppercase;
  font-weight: 500;
  color: ${({ $color, theme }) =>
    $color !== true ? theme.colors.primary.bg : theme.colors.primary.text};
`;

export const HelperBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TitleBox = styled.div`
  width: 100%;
  margin-bottom: 167px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  width: 100%;

  font-size: 29.389px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35px;
  letter-spacing: 0.294px;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme.colors.primary.bg};

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleSale = styled.span`
  padding: 10px 20px;
  width: 170px;
  margin-bottom: 33px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  transform: rotate(3.814deg);

  background: ${({ theme }) => theme.colors.primary.bgDark};
  border-radius: 15px;
`;

export const CatalogLink = styled(Link)`
  width: 212px;
  height: 57px;

  display: inline-flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #5e5e5e;

  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: 0.14px;

  border-radius: 15px;
  border: 1px solid #b3b3b3;
  background: linear-gradient(89deg, #f9f8f7 0.53%, #fff 99.49%),
    rgba(255, 255, 255, 0.6);
`;
