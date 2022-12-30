import { VStack } from '@chakra-ui/react';

import style from './ProductsList.module.css';

import Product from './Product/Product';

import { listProducts } from '../../data/products';

const ProductLists = ({ getProductAdded }) => {
  const getInformationsProductAdded = (name, price, amount) => {
    getProductAdded(name, price, amount);
  };

  return (
    <VStack
      w="35%"
      h="70vh"
      borderRadius={10}
      padding={20}
      className={style.gradient}
      alignItems="center"
      marginLeft={80}
    >
      <VStack
      overflowY={"scroll"}
      w="100%"
      h="65vh"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#FFFFF0',
          borderRadius: '10px',
        },
      }}>
        {listProducts.map(i => {
          return (
            <Product
              key={i.id}
              sendProductForCart={getInformationsProductAdded}
              nameProduct={i.name}
              productPrice={i.price}
            />
          );
        })}
      </VStack>
    </VStack>
  );
};

export default ProductLists;
