import React from 'react';
import Lottie from 'react-lottie';
import * as lottieJson from './83548-online-shopping-black-friday.json';

const ShoppingCartLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={400} width={500} />
    </>
  );
};

export default ShoppingCartLottie;
