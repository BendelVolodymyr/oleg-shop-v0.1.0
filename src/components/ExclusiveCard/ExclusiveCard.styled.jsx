import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperExclusive = styled.div`
  width: 355px;
  height: 534px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 8px;
  border: 1px solid #333;
  background-image: url(${({ $url }) => $url});
`;

export const ExclusiveTitle = styled.span`
  width: 100px;

  color: ${({ theme }) => theme.colors.primary.bg};

  font-size: 20px;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 100%;
  letter-spacing: -0.92px;
  text-transform: uppercase;
  align-self: flex-start;
`;

export const ExclusiveLink = styled(Link)`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.textDecor};
`;
