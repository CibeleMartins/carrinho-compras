import { Button, HStack, Text, Input } from '@chakra-ui/react';

import { useRef } from 'react';

const Product = ({ nameProduct, productPrice, sendProductForCart }) => {

  const refInput = useRef();
  return (
    <HStack
      h="10vh"
      w="100%"
      bg="white"
      pl="5%"
      pr="5%"
      p={5}
      borderRadius={10}
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.25)"
      justifyContent="space-between"
    >
      <HStack w="55%" justifyContent="space-between">
        <Text  whiteSpace="nowrap" letterSpacing={2} fontSize={['65%', 15, 15, 20, 20,20]} >{nameProduct}</Text>
        <Text whiteSpace="nowrap"  fontSize={['65%', 15, 15, 15, 18,18]}>{productPrice}</Text>
      </HStack>

      <HStack justifyContent="flex-end" w={"45%"}>
        <Input
          ref={refInput}
          min="0"
          max="10"
          w="35%"
          h={['25px', '30%', '30%', '30%', '30%','40px']}
          type="number"
          border="1px solid #FF0080"
          borderRadius={10}
          outline="none"
        />
        <Button
          onClick={()=> sendProductForCart(nameProduct, productPrice, refInput.current.value)}
          boxShadow="0 2px 8px rgba(0, 0, 0, 0.25)"
          w="30%"
          h={['25px',"40px", "40px", "40px", "40px", "40px"]}
          outline="none"
          border="none"
          bg="#FF0080"
          color="#FFFFF0"
          borderRadius={10}
          variant="solid"
          fontSize={[10,15,15,15,15,15]}
        >
          Add
        </Button>
      </HStack>
    </HStack>
  );
};

export default Product;
