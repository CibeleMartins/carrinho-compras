import { HStack } from "@chakra-ui/react"

import ShoppingCartLottie from "../components/LottieAnimation/ShoppingCartLottie";

const Home = ()=> {

    return (
        <HStack
        w="100%"
        h="100vh"
        bg="#FFFFF0">
            <ShoppingCartLottie/>
        </HStack>
    )
}

export default Home;