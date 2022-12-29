import { Box, VStack } from '@chakra-ui/react';

import style from './ProductsList.module.css';

import Product from './Product/Product';

import { listProducts } from '../../data/products';

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
      {listProducts.map((i)=> {
        
        return <Product nameProduct={i.name} productPrice={i.price}/>
      })}


    </VStack>
  
  );
};

export default ProductLists;
