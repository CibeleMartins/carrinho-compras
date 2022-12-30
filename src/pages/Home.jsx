import { HStack } from '@chakra-ui/react';

import ShoppingCartLottie from '../components/LottieAnimation/ShoppingCartLottie';
import ProductLists from '../components/ProductsList/ProductsList';
import Cart from '../components/Cart/Cart';

import useClose from '../hook/useClose';

const Home = ({modalIsClosed}) => {
console.log(modalIsClosed)
  return (
    <HStack w="100%" h="100vh" bg="#FFFFF0" spacing="10%">
    {modalIsClosed ? <Cart/> : console.log('fechado')}
      <ProductLists/>
      <ShoppingCartLottie />
    </HStack>
  );
};

export default Home;
