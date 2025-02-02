import React from 'react';
import { SectionEllipse, SectionMain } from './HomePage.styled';
import { EllipseBox } from '../../components/EllipseBox/EllipseBox';

import EllipseImgOne from '../../assets/Ellipse1.png';
import EllipseImgTwo from '../../assets/Ellipse2.png';
import EllipseImgThree from '../../assets/Ellipse3.png';
import EllipseImgFour from '../../assets/Ellipse4.png';
import EllipseImgFive from '../../assets/Ellipse5.png';
import EllipseImgSix from '../../assets/Ellipse6.png';

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
    </SectionMain>
  );
};

export default HomePage;
