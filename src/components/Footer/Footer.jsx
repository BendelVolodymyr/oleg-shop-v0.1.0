import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';

import {
  FooterBoxTitle,
  FooterHelperBox,
  FooterIconBox,
  FooterInfoBox,
  FooterLink,
  FooterLogBox,
  IconInstagram,
  IconTelegram,
  LogFooterText,
  WrapperBox,
  WrapperFooter,
} from './Footer.styled';
import { LogoText } from '../Header/Header.styled';

export const Footer = () => {
  return (
    <WrapperFooter>
      <FooterLogBox>
        <LogoText $color={true}>oleg shop</LogoText>
        <LogFooterText>
          Ваш поставщик в мир лимитированного ассортимента с доставкой по всему
          миру
        </LogFooterText>
      </FooterLogBox>
      <WrapperBox>
        <FooterHelperBox>
          <FooterBoxTitle>Підтримка</FooterBoxTitle>
          <FooterLink to="==">Доставка</FooterLink>
          <FooterLink to="==">Оплата</FooterLink>
          <FooterLink to="==">Відслідкувати посилку</FooterLink>
          <FooterLink to="==">Кліенський бот АІ</FooterLink>
        </FooterHelperBox>
        <FooterInfoBox>
          <FooterBoxTitle>Інформація</FooterBoxTitle>
          <FooterLink to="==">Про нас</FooterLink>
          <FooterLink to="==">Часті запитання</FooterLink>
          <FooterIconBox>
            <FooterLink to="==">
              <IconTelegram />
            </FooterLink>
            <FooterLink to="==">
              <IconInstagram />
            </FooterLink>
          </FooterIconBox>
        </FooterInfoBox>
      </WrapperBox>
    </WrapperFooter>
  );
};
