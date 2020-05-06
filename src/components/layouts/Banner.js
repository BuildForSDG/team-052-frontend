import React from 'react';
import { Image } from 'react-bootstrap';
import bannerImage from '../../assets/clean accident image .jpg';

const Banner = () => {
  return (
    <div>
      <Image src={bannerImage} alt="" width="100%" height="250" />
    </div>
  );
};

export default Banner;
