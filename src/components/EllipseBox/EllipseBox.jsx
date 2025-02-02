import React from 'react';
import { EllipseImg, EllipseText, EllipseWrapper } from './EllipseBox.styled';

export const EllipseBox = ({ img, title }) => {
  return (
    <EllipseWrapper>
      <EllipseImg src={img} alt={title} />
      <EllipseText>{title}</EllipseText>
    </EllipseWrapper>
  );
};
