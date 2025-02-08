import { Link } from 'react-router-dom';
import { LiaTelegramPlane, LiaInstagram } from 'react-icons/lia';
import styled from 'styled-components';

export const WrapperFooter = styled.footer`
  width: 100%;
  padding: 20px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.colors.secondary.color1};
`;

export const FooterLogBox = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterBoxTitle = styled.h6`
  color: ${({ theme }) => theme.colors.primary.text};

  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.229px;
`;

export const LogFooterText = styled.p`
  color: ${({ theme }) => theme.colors.secondary.color1};
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.15px;
`;

export const WrapperBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const FooterHelperBox = styled.div`
  min-width: 170px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterInfoBox = styled.div`
  min-width: 170px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.text};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.15px;
`;

export const FooterIconBox = styled.div``;

export const IconTelegram = styled(LiaTelegramPlane)`
  width: 30px;
  height: 30px;
  color: #000;
`;

export const IconInstagram = styled(LiaInstagram)`
  width: 30px;
  height: 30px;
  color: #000;
`;
