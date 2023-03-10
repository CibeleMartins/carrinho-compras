import { HStack } from '@chakra-ui/react';

import ShoppingCartLottie from '../components/LottieAnimation/ShoppingCartLottie';
import ProductLists from '../components/ProductsList/ProductsList';
import Cart from '../components/Cart/Cart';
import { useState } from 'react';

const Home = ({ modalIsClosed, breakpointHeader }) => {
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
    };

    let copyStateArrayProducts = [...arrayProductsForCart]
    console.log(copyStateArrayProducts)
    let produtoRepetido = copyStateArrayProducts.find(elem => elem.productName === productObject.productName)  
    console.log(produtoRepetido)

    if (parseInt(amount) > 0 && !produtoRepetido) {
      totalPriceAllProducts.push(priceProductForAmount);

      products.push(productObject);
    } else {

      produtoRepetido.productAmount = parseInt(produtoRepetido.productAmount.replace(' x', '') ) + parseInt(productObject.productAmount.replace(' x', '')) + ' x'
    }

    setArray(prevState =>[...prevState, ...products])

    // console.log(products)
    setTotalPrice(prevState => [...prevState, ...totalPriceAllProducts]);
  };

  return (
    <HStack w="100%" h="100%" bg="#FFFFF0" alignItems="center" justifyContent={breakpointHeader === '100' ? 'center' : null} spacing="10%">
      {modalIsClosed ? (
        <Cart productsAdded={arrayProductsForCart} total={totalPrice} />
      ) : null}
      <ProductLists breakpoint={breakpointHeader} getProductAdded={getProductForCart} />
      <ShoppingCartLottie receiveHeaderBreakpoint={breakpointHeader}/>
    </HStack>
  );
};

export default Home;
