import styled from 'styled-components';

export const WrapperTopCard = styled.div`
  width: 170px;
  height: 245px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

  border-radius: 8px;

  background: url(${({ $url }) => $url});
`;

export const TopCardTitle = styled.span``;
