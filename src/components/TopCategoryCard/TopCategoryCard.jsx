import React from 'react';
import { TopCardTitle, WrapperTopCard } from './TopCategoryCard.styled';

export const TopCategoryCard = ({ title, src }) => {
  return (
    <>
      <WrapperTopCard $url={src}>
        <TopCardTitle>{title}</TopCardTitle>
      </WrapperTopCard>
    </>
  );
};
