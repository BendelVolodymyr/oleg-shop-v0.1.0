import styled from 'styled-components';

import backgroundImagesOne from '../../assets/Rectangle_1.webp';

import { Link } from 'react-router-dom';

export const HeaderBox = styled.header`
  min-width: 375px;
  min-height: 718px;
  padding: 20px 20px 30px 20px;

  background: rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${backgroundImagesOne});
  background-position-x: -840px;
  background-position-y: -20px;
  background-repeat: no-repeat;
`;

export const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 294px;
`;

export const HamburgerMenuButton = styled.button`
  width: 29px;
  height: 16px;
  margin-right: 80px;
  flex-shrink: 0;

  border: none;
  background: none;
`;

export const MenuBox = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-600px')};
  width: 100vh;
  height: 100vh;

  background-color: #6cfc76;

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 1;
`;

export const LogoText = styled.span`
  height: 15px;
  width: auto;
  margin-right: 50px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const HelperBox = styled.div`
  width: 50px;
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
  width: 380.093px;

  font-family: Ruberoid;
  font-size: 29.389px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 29.389px */
  letter-spacing: 0.294px;
  text-transform: uppercase;

  background: linear-gradient(92deg, #fff 0.16%, #fff 96.85%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleSave = styled.span`
  width: 155px;
  margin-bottom: 33px;
  display: inline-flex;
  transform: rotate(3.814deg);
  padding: 10.991px 21.982px;
  justify-content: center;
  align-items: center;
  gap: 10.991px;

  border-radius: 14.289px;
  background: #000;
`;

export const CatalogLink = styled(Link)`
  width: 210px;
  height: 57px;

  display: inline-flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #5e5e5e;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;

  border-radius: 13px;
  border: 1px solid #b3b3b3;
  background: linear-gradient(89deg, #f9f8f7 0.53%, #fff 99.49%),
    rgba(255, 255, 255, 0.6);
`;
