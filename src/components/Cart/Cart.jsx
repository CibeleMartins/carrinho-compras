import { VStack } from '@chakra-ui/react';

import Modal from './Modal/Modal';

import CartItem from './CartItem/CartItem';

const Cart = ({ productsAdded }) => {
  console.log(productsAdded);

  return (
    <Modal>
      <VStack>
        {productsAdded.map((p)=> {
            return <CartItem productName={p.productName} productAmount={p.productAmount} productPrice={p.productPrice} />
        })}
      </VStack>
    </Modal>
  );
};

export default Cart;
