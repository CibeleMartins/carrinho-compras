import { VStack, HStack, Text } from '@chakra-ui/react';

import Modal from './Modal/Modal';

import CartItem from './CartItem/CartItem';

const Cart = ({ productsAdded, total }) => {
  // console.log(productsAdded, total);

  const priceTotal =
    total.length > 0
      ? total.reduce((actual, acumulator) => actual + acumulator)
      : 0;

  console.log(priceTotal)

  return (
    <Modal>
      <HStack
        w="100%"
        position="fixed"
        left="5%"
        h={50}
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <Text fontSize={20} color="#FFFFF0" letterSpacing={2}>
          Cart
        </Text>
      </HStack>
      <VStack
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
        }}
        borderRadius={10}
        overflowY={'scroll'}
        h="40vh"
        p="8%"
      >
        {productsAdded.map(p => {
          return (
            <CartItem
              productName={p.productName}
              productAmount={p.productAmount}
              productPrice={p.productPrice}
              priceForAmount={p.totalPriceForAmount}
            />
          );
        })}
      </VStack>

      <HStack
        w="100%"
        position="fixed"
        right={20}
        top="90%"
        h={50}
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Text fontSize={20} color="#FFFFF0" letterSpacing={2}>
          Total {'R$' + parseFloat(priceTotal).toFixed(2)}{' '}
        </Text>
      </HStack>
    </Modal>
  );
};

export default Cart;
