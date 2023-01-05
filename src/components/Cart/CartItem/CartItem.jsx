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
      <Text fontSize={[10, 15, 15,15,15,15]} whiteSpace="nowrap" letterSpacing={2}>{productName}</Text>
      <Text fontSize={[10, 15, 15,15,15,15]} whiteSpace="nowrap" w={50}>{productAmount}</Text>
      <VStack
      w="30%"
      alignItems="center"
      justifyContent="center">
        <Text whiteSpace="nowrap" h={[2,5,5,5,5,5]} fontSize={[10, 15, 15,15,15,15]}>{productPrice}</Text>
        <Text fontSize={[10, 15, 15,15,15,15]}>Unid.</Text>
      </VStack>
      <VStack
      w="25%"
      alignItems="center"
      justifyContent="center">
        <Text fontSize={[10, 15, 15,15,15,15]} w="100%" whiteSpace="nowrap" h={[2,5,5,5,5,5]}>{priceForAmount}</Text>
        <Text fontSize={[10, 15, 15,15,15,15]}>Total</Text>
      </VStack>
    </HStack>
  );
};

export default CartItem;
