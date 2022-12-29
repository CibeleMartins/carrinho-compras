import { VStack } from '@chakra-ui/react';

import style from './ProductsList.module.css';

import Product from './Product/Product';

const ProductLists = () => {
  return (
    <VStack
      w="35%"
      h="80vh"
      borderRadius={10}
      className={style.gradient}>
      <Product/>
    </VStack>
  );
};

export default ProductLists;
