import { Box, VStack } from '@chakra-ui/react';

import style from './ProductsList.module.css';

import Product from './Product/Product';

const ProductLists = () => {
  return (

    <VStack
      w="35%"
      h="80vh"
      borderRadius={10}
      padding={20}
      className={style.gradient}
      alignItems="center"
      marginLeft={80}>
      <Product/>
    </VStack>
  
  );
};

export default ProductLists;
