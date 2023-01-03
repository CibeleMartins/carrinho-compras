import { HStack, Button, Text } from '@chakra-ui/react';

import cartIcon from '../../assets/cartIcon.svg';
import styles from './Header.module.css';

import ShoppingCartLottie from '../LottieAnimation/ShoppingCartLottie';

import { useState} from 'react';
import { useBreakpointValue } from '@chakra-ui/react'

const Header = ({ getDisplay, getBreakpoint }) => {

  const [displayModal, setDisplayModal] = useState(false);
  const [showLogoLottie, setLogoLottie] =useState(false)

  const breakpoint = useBreakpointValue({
    sm: '100',
    md: '100',
    lg: '100%',
    xl: '100%',
    '2xl': '100%',
  })

  setTimeout(()=> getBreakpoint(breakpoint))

  setTimeout(() => getDisplay(displayModal), 0);

  return (
    <HStack
      bg="transparent"
      alignItems="center"
      h="65px"
      p="35px"
      w={breakpoint}
      justifyContent={breakpoint !== '100' ? 'flex-end' : 'space-between'}
    >

      {breakpoint === '100' ? <ShoppingCartLottie width={20} height={58}/> : null}

      <Button
        onClick={() =>
          displayModal ? setDisplayModal(false) : setDisplayModal(true)
        }
        w={100}
        h="40px"
        border="none"
        boxShadow="0 2px 8px rgba(0, 0, 0, 0.25)"
        bg="#FF0080"
        borderRadius={10}
      >
        <img className={styles.cartIcon} alt="carrinho" src={cartIcon} />
        <Text fontSize={20} color="#FFFFF0">
          0
        </Text>
      </Button>
    </HStack>
  );
};

export default Header;
