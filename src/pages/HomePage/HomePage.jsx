import React from 'react';
import {
  ProductCardBox,
  ProductSection,
  SectionEllipse,
  SectionMain,
  SpecialOffersSection,
  TitleAll,
} from './HomePage.styled';
import { EllipseBox } from '../../components/EllipseBox/EllipseBox';

import EllipseImgOne from '../../assets/Ellipse1.png'; // буде з бекенду
import EllipseImgTwo from '../../assets/Ellipse2.png'; // буде з бекенду
import EllipseImgThree from '../../assets/Ellipse3.png'; // буде з бекенду
import EllipseImgFour from '../../assets/Ellipse4.png'; // буде з бекенду
import EllipseImgFive from '../../assets/Ellipse5.png'; // буде з бекенду
import EllipseImgSix from '../../assets/Ellipse6.png'; // буде з бекенду
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { TopCategoryCard } from '../../components/TopCategoryCard/TopCategoryCard';

import BagTop from '../../assets/bag_test.jpg'; // буде з бекенду
import AccessoriesTop from '../../assets/accessories_test.jpg'; // буде з бекенду
import ShoesTop from '../../assets/shoes_test.jpg'; // буде з бекенду
import CoatTop from '../../assets/coat_test.jpg'; // буде з бекенду
import ExclusiveBg from '../../assets/exclusive_bg.jpg'; // буде з бекенду
import SubscriptionBg from '../../assets/subscription.jpg'; // буде з бекенду

import { ExclusiveCard } from '../../components/ExclusiveCard/ExclusiveCard';
import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard';
import { SubscriptionForm } from '../../components/SubscriptionForm/SubscriptionForm';

const HomePage = () => {
  return (
    <SectionMain>
      <SectionEllipse>
        <EllipseBox img={EllipseImgOne} title="Купівля" />
        <EllipseBox img={EllipseImgTwo} title="Доставка" />
        <EllipseBox img={EllipseImgThree} title="pre-loved" />
        <EllipseBox img={EllipseImgFour} title="Custom" />
        <EllipseBox img={EllipseImgFive} title="Custom" />
        <EllipseBox img={EllipseImgSix} title="Констерж" />
      </SectionEllipse>
      <ProductSection>
        <TitleAll>Саме популярне зараз</TitleAll>
        <ProductCardBox>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductCardBox>
        <TitleAll>Новинки</TitleAll>
        <ProductCardBox>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductCardBox>
        <TitleAll>Топ Категорій Каталогу</TitleAll>
        <ProductCardBox>
          <TopCategoryCard src={BagTop} title="Bag" />
          <TopCategoryCard src={CoatTop} title="Coat" />
          <TopCategoryCard src={ShoesTop} title="Shoes" />
          <TopCategoryCard src={AccessoriesTop} title="Аксесуари" />
        </ProductCardBox>
        <TitleAll>Для вечірніх прогулянок</TitleAll>
        <ProductCardBox>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductCardBox>
      </ProductSection>
      <SpecialOffersSection>
        <TitleAll>Cпеціальні пропозиції</TitleAll>
        <ExclusiveCard $bg={ExclusiveBg} />
        <SubscriptionCard $bg={SubscriptionBg}>
          <SubscriptionForm />
        </SubscriptionCard>
      </SpecialOffersSection>
    </SectionMain>
  );
};

export default HomePage;
