import { HStack } from '@chakra-ui/react';

import ShoppingCartLottie from '../components/LottieAnimation/ShoppingCartLottie';
import ProductLists from '../components/ProductsList/ProductsList';
import Cart from '../components/Cart/Cart';

const Home = () => {

  return (
    <HStack w="100%" h="100vh" bg="#FFFFF0" spacing="10%">
      <Cart/>
      <ProductLists/>
      <ShoppingCartLottie />
    </HStack>
  );
};

export default Home;
