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
      justifyContent="space-between"
    >
      <Text w={100} letterSpacing={2}>{productName}</Text>
      <Text w={50}>{productAmount}</Text>
      <Text w={90} fontSize={15}>{productPrice}</Text>
    </HStack>
  );
};

export default CartItem;
