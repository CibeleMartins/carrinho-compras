import { Button, HStack, Text, VStack, Input } from '@chakra-ui/react';

const Product = ({ nameProduct, productPrice }) => {
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
      <HStack w={400} justifyContent="space-between">
        <Text>{nameProduct}</Text>
        <Text>{productPrice}</Text>
      </HStack>

      <HStack justifyContent="flex-end" w={300}>
        <Input 
        min={0} 
        max={10} 
        w="25%" 
        p={6} 
        h={10} 
        type="number"
        border="1px solid #FF0080"
        borderRadius={10}
        outline="none" />
        <Button
         boxShadow="0 2px 8px rgba(0, 0, 0, 0.25)"
          w="30%"
          h={25}
          outline="none"
          border="none"
          bg="#FF0080"
          color="#FFFFF0"
          borderRadius={10}>
          Add
        </Button>
      </HStack>
    </HStack>
  );
};

export default Product;
