import { HStack } from '@chakra-ui/react';

import ShoppingCartLottie from '../components/LottieAnimation/ShoppingCartLottie';
import ProductLists from '../components/ProductsList/ProductsList';
import Cart from '../components/Cart/Cart';
import { useState } from 'react';

const Home = ({ modalIsClosed }) => {
  const [arrayProductsForCart, setArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  const getProductForCart = (name, price, amount) => {

    const products = [];
    const totalPriceAllProducts = [];

    let priceRemoveSymbol = price.replace('R$ ', '').replace(',', '.');

    const amountNumber = parseInt(amount);
    const priceNumber = parseFloat(priceRemoveSymbol);
    const priceProductForAmount = amountNumber * priceNumber;

    const productObject = {
      productName: name,
      productPrice: price,
      productAmount: amount + ' x',
      totalPriceForAmount:
        'R$ ' + priceProductForAmount.toFixed(2).toString().replace('.', ','),
    }

    console.log(productObject)

    if (parseInt(amount) > 0) {
        
      totalPriceAllProducts.push(priceProductForAmount);

      products.push(productObject)
    }




    
    setArray(prevState => [...prevState, ...products]);



    console.log(products)
    setTotalPrice(prevState => [...prevState, ...totalPriceAllProducts]);
  };

  return (
    <HStack w="100%" h="100%" bg="#FFFFF0" alignItems="center" spacing="10%">
      {modalIsClosed ? (
        <Cart productsAdded={arrayProductsForCart} total={totalPrice} />
      ) : null}
      <ProductLists getProductAdded={getProductForCart} />
      <ShoppingCartLottie />
    </HStack>
  );
};

export default Home;
