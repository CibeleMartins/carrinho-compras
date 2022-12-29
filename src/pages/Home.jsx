import { HStack } from '@chakra-ui/react';

import ShoppingCartLottie from '../components/LottieAnimation/ShoppingCartLottie';
import ProductLists from '../components/ProductsList/ProductsList';

const Home = () => {
  return (
    <HStack w="100%" h="100vh" bg="#FFFFF0" alignItems="center" spacing="10%">
      <ProductLists/>
      <ShoppingCartLottie />
    </HStack>
  );
};

export default Home;
