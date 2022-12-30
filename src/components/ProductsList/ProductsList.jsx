import { VStack } from '@chakra-ui/react';

import style from './ProductsList.module.css';

import Product from './Product/Product';

import { listProducts } from '../../data/products';

const ProductLists = ({getProductAdded}) => {

  const getInformationsProductAdded = (name, price, amount) => {

    getProductAdded(name, price, amount)
  }

  return (

    <VStack
      w="35%"
      h="100%"
      borderRadius={10}
      padding={20}
      className={style.gradient}
      alignItems="center"
      marginLeft={80}>
      {listProducts.map((i)=> {
        return <Product sendProductForCart={getInformationsProductAdded} nameProduct={i.name} productPrice={i.price}/>
      })}


    </VStack>
  
  );
};

export default ProductLists;
