import React from 'react';
import {
  SubscriptionText,
  SubscriptionTitle,
  WrapperSubscription,
} from './SubscriptionCard.styled';

const SubscriptionCard = ({ $bg, children }) => {
  return (
    <>
      <WrapperSubscription $src={$bg}>
        <SubscriptionTitle>Знишка 7%</SubscriptionTitle>
        <SubscriptionText>
          Отримайте знишку 7% на першу покупку при підписці на наші ексклюзивні
          акції, оновлення і новини
        </SubscriptionText>
        {children}
      </WrapperSubscription>
    </>
  );
};

export default SubscriptionCard;
