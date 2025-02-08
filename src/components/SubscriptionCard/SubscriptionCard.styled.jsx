import styled from 'styled-components';

export const WrapperSubscription = styled.div`
  width: 355px;
  height: 314px;
  padding: 30px 20px 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors.primary.textDecor};
  border-radius: 8px;

  background: url(${({ $src }) => $src});
`;

export const SubscriptionTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary.bg};
  font-size: 27px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
  letter-spacing: -0.27px;
`;

export const SubscriptionText = styled.p`
  color: ${({ theme }) => theme.colors.primary.bg};
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
  letter-spacing: -0.27px;
`;
