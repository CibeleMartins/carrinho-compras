import { HStack } from '@chakra-ui/react';

import ShoppingCartLottie from '../components/LottieAnimation/ShoppingCartLottie';
import ProductLists from '../components/ProductsList/ProductsList';
import Cart from '../components/Cart/Cart';
import { useState } from 'react';

const Home = ({ modalIsClosed }) => {
  const [arrayProductsForCart, setArray] = useState([]);

  const getProductForCart = (name, price, amount) => {

    const products = [];

   let priceRemoveSymbol = price.replace("R$ ", "").replace(",", ".")

    const amountNumber = parseInt(amount)
    const priceNumber = parseFloat(priceRemoveSymbol)



    console.log(amountNumber, priceRemoveSymbol, priceNumber)

    if (parseInt(amount) > 0) {

      products.push({
        productName: name,
        productPrice: price,
        productAmount: amount + ' x',
        totalPriceForAmount: parseFloat(amount).toFixed(2) * parseFloat(price.replace('R$', '')).toFixed(2)
      });
    }

    setArray(prevState => [...prevState, ...products]);
  };

  return (
    <HStack w="100%" h="100vh" bg="#FFFFF0" spacing="10%">
      {modalIsClosed ? <Cart productsAdded={arrayProductsForCart} /> : null}
      <ProductLists getProductAdded={getProductForCart} />
      <ShoppingCartLottie />
    </HStack>
  );
};

export default Home;
