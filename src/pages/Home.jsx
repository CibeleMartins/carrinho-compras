import { HStack } from '@chakra-ui/react';

import ShoppingCartLottie from '../components/LottieAnimation/ShoppingCartLottie';
import ProductLists from '../components/ProductsList/ProductsList';
import Cart from '../components/Cart/Cart';

const Home = ({ modalIsClosed }) => {


  const getProductForCart = (name, price, amount) => {

    console.log(name, price, amount)
  };

  return (
    <HStack w="100%" h="100vh" bg="#FFFFF0" spacing="10%">
      {modalIsClosed ? <Cart /> : null}
      <ProductLists getProductAdded={getProductForCart} />
      <ShoppingCartLottie />
    </HStack>
  );
};

export default Home;
