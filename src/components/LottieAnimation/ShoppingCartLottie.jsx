import React from 'react';
import Lottie from 'react-lottie';
import * as lottieJson from './83548-online-shopping-black-friday.json';

import { Box } from '@chakra-ui/react';

import style from './ShoppingCartLottie.module.css';

const ShoppingCartLottie = ({ receiveHeaderBreakpoint, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (receiveHeaderBreakpoint === '100') {
    return null;
  } else {
    return (
      <Box w={width} h={height} className={style.lottie}>
        <Lottie options={defaultOptions} />
      </Box>
    );
  }
};

export default ShoppingCartLottie;
