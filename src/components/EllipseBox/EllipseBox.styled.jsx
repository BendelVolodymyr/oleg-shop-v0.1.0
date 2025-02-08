import styled from 'styled-components';

export const EllipseWrapper = styled.div`
  width: 82px;
  height: 102px;
`;

export const EllipseImg = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  border: 2px solid #7659e0;
`;

export const EllipseText = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.primary.text};
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 100%;
  letter-spacing: 0.15px;
`;
