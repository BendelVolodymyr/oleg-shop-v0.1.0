import React from 'react';

import { FaAngleRight } from 'react-icons/fa6';

import {
  ExclusiveLink,
  ExclusiveTitle,
  WrapperExclusive,
} from './ExclusiveCard.styled';

export const ExclusiveCard = ({ $bg }) => {
  return (
    <>
      <WrapperExclusive $url={$bg}>
        <ExclusiveLink>
          <FaAngleRight />
        </ExclusiveLink>
        <ExclusiveTitle>bred Fr mixer </ExclusiveTitle>
      </WrapperExclusive>
    </>
  );
};
