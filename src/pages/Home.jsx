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
    };

    arrayProductsForCart.reduce((acumulo, atual)=> {
      
    })
    const produtoRepetido = arrayProductsForCart.find(elem => elem.productName === productObject.productName)

    if (produtoRepetido) {

      const amountNewProductNumber = parseInt(productObject.productAmount.replace(" x", ""))
      const amountRepetidoProductNumber = parseInt(produtoRepetido.productAmount.replace(" x", ""))

      const newAmount = amountNewProductNumber + amountRepetidoProductNumber

      productObject.productAmount = newAmount

      const indexRepetido = arrayProductsForCart.indexOf(produtoRepetido)

      console.log(indexRepetido)

      arrayProductsForCart.splice(indexRepetido, 1)
    }

      
   

   
    if (parseInt(amount) > 0) {
      totalPriceAllProducts.push(priceProductForAmount);

      products.push(productObject);
    }

    setArray(prevState => [...prevState, ...products]);

    // console.log(products)
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
