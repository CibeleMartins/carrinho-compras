import { HStack, Text } from '@chakra-ui/react';

const CartItem = ({ productName, productAmount, productPrice }) => {
  return (
    <HStack
      h="10vh"
      w="80%"
      bg="white"
      pl="5%"
      pr="5%"
      borderRadius={10}
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.25)"
    >
      <Text>{productName}</Text>
      <Text>{productAmount}</Text>
      <Text>{productPrice}</Text>
    </HStack>
  );
};

export default CartItem;
