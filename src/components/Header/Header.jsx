import { HStack, Button, Text } from '@chakra-ui/react';

import cartIcon from '../../assets/cartIcon.svg';
import styles from './Header.module.css';


const Header = () => {
  return (
    <HStack
      bg="transparent"
      alignItems="center"
      h={40}
      p={15}
      justifyContent="flex-end"
    >
      <Button
        w={100}
        h={40}
        border="none"
        boxShadow="0 2px 8px rgba(0, 0, 0, 0.25)"
        bg="#FF0080"
        borderRadius={10}
      >
        <img className={styles.cartIcon} alt="carrinho" src={cartIcon} />
        <Text fontSize={20} color="#FFFFF0">0</Text>
      </Button>
    </HStack>
  );
};

export default Header;