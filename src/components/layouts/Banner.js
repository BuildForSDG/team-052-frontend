import React from 'react';
import bannerImage from '../../assets/clean accident image .jpg'
import { Image } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>
      <Image src={bannerImage} alt="" width="100%" height="250"/>
    </div>
  );
};

export default Banner;
