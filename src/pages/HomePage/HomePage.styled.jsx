import styled from 'styled-components';

export const SectionMain = styled.section`
  padding: 20px 0px 20px 0px;
  width: 100%;
`;

export const SectionEllipse = styled.div`
  padding: 20px 20px 40px 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;

  overflow: auto;
`;

export const ProductSection = styled.div`
  width: 100%;
  padding: 0px 10px 62px 10px;
`;

export const SpecialOffersSection = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const TitleAll = styled.h2`
  margin-bottom: 13px;
  text-align: center;

  color: ${props => props.theme.colors.primary.text};
  font-family: Ruberoid;
  font-size: 27.527px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.275px;
`;

export const ProductCardBox = styled.div`
  margin-bottom: 39px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;
