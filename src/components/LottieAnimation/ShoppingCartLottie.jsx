import React from 'react';
import Lottie from 'react-lottie';
import * as lottieJson from './83548-online-shopping-black-friday.json';

import style from './ShoppingCartLottie.module.css'


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
    <div className={style.lottie}>
      <Lottie options={defaultOptions}/>
    </div>
  );
};

export default ShoppingCartLottie;
