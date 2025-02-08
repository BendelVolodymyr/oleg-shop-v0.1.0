import React from 'react';
import {
  ProductImg,
  ProductName,
  ProductNameDecor,
  ProductPrice,
  WrapperCard,
  WrapperContent,
  WrapperIcon,
} from './ProductCard.styled';

import { GrFavorite } from 'react-icons/gr';
import { StatusBadge } from './StatusBadge/StatusBadge';
import testFoto from '../../assets/ab3256067fe494de107bb57d6d2727b2.jpg';

export const ProductCard = () => {
  return (
    <WrapperCard>
      <WrapperIcon>
        <StatusBadge />
        <GrFavorite size="20px" color="0000" />
      </WrapperIcon>
      <WrapperContent>
        <ProductImg src={testFoto} alt="test" />
        <ProductName>
          Кросівки
          <ProductNameDecor>Nike</ProductNameDecor> Jordan
        </ProductName>
        <ProductPrice>300 $</ProductPrice>
      </WrapperContent>
    </WrapperCard>
  );
};
