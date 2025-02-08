import styled from 'styled-components';

export const WrapperCard = styled.div`
  width: 170px;
  height: 205px;
  padding: 8px 12px 8px 12px;
  display: flex;

  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid #d6d6d6;

  background: ${({ theme }) => theme.colors.primary.bg};
`;

export const WrapperIcon = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100px;
`;

export const ProductName = styled.p`
  color: ${({ theme }) => theme.colors.primary.text};
  font-size: 12px;
  line-height: normal;
`;

export const ProductNameDecor = styled.span`
  color: ${({ theme }) => theme.colors.primary.textDecor};
  font-size: 15px;
  font-weight: 700;
  margin: 0px 4px 0px 5px;
`;

export const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary.text};
`;
