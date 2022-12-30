import { HStack, Text } from '@chakra-ui/react';


const CartItem = ({ productName, productAmount, productPrice }) => {
  
  return (
    <HStack>
      <Text>{productName}</Text>
      <Text>{productAmount}</Text>
      <Text>{productPrice}</Text>
    </HStack>
  );
};

export default CartItem;
