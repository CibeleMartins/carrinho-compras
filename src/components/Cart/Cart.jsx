import { VStack, HStack, Text } from '@chakra-ui/react';

import Modal from './Modal/Modal';

import CartItem from './CartItem/CartItem';

const Cart = ({ productsAdded, total }) => {
  console.log(productsAdded, total);

  const priceTotal = total.reduce((actual, acumulator)=> actual + acumulator)

  return (
    <Modal>
      <VStack>
        {productsAdded.map((p)=> {
            return <CartItem productName={p.productName} productAmount={p.productAmount} productPrice={p.productPrice} priceForAmount={p.totalPriceForAmount} />
        })}
      </VStack>

      <HStack
        w="100%"
        position="fixed"
        right={20}
        top="400px"
        h={50}
        justifyContent="flex-end"
        alignItems="flex-end">
          <Text letterSpacing={2}>Total {'R$' + priceTotal} </Text>
        </HStack>
    </Modal>
  );
};

export default Cart;
