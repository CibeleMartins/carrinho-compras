import { memo  } from 'react';

import { HStack, VStack, Text } from '@chakra-ui/react';

const CartItem = ({ productName, productAmount, productPrice, priceForAmount }) => {
  return (
    <HStack
      h="10vh"
      w="80%"
      bg="white"
      p="5%"
      borderRadius={10}
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.25)"
      justifyContent="space-between">
      <Text w={100} letterSpacing={2}>{productName}</Text>
      <Text w={50}>{productAmount}</Text>
      <VStack
      alignItems="center"
      justifyContent="center">
        <Text w={90} h={5} fontSize={15}>{productPrice}</Text>
        <span >Unid.</span>
      </VStack>
      <VStack
      alignItems="center"
      justifyContent="center">
        <Text w={90} h={5} fontSize={15}>{priceForAmount}</Text>
        <span>Total</span>
      </VStack>
    </HStack>
  );
};

export default memo(CartItem);
