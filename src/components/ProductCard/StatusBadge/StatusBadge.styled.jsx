import styled from 'styled-components';

export const WrapperStatus = styled.div`
  width: 40px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary.bgHot};
  border-radius: 8px;
`;

export const TitleStatus = styled.span`
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.mediumPlus};
  color: ${({ theme }) => theme.colors.primary.textStatus};
`;
