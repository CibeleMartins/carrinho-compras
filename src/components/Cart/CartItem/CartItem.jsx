import { HStack, VStack, Text } from '@chakra-ui/react';

const CartItem = ({ productName, productAmount, productPrice, priceForAmount }) => {
  return (
    <HStack
      h="10vh"
      w="80%"
      bg="white"
      pl="5%"
      pr="5%"
      borderRadius={10}
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.25)"
      justifyContent="space-between">
      <Text w={100} letterSpacing={2}>{productName}</Text>
      <Text w={50}>{productAmount}</Text>
      <VStack
      alignItems="center"
      justifyContent="center">
        <Text mb={10} w={90} h={5} fontSize={15}>{productPrice}</Text>
        <span style={{marginBottom: 10}}>Unid.</span>
      </VStack>
      <VStack
      alignItems="center"
      justifyContent="center">
        <Text mb={10} w={90} h={5} fontSize={15}>{priceForAmount}</Text>
        <span style={{marginBottom: 10}}>Total</span>
      </VStack>
    </HStack>
  );
};

export default CartItem;
