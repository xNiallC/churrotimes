import {
  Flex,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { MdHome, MdSettings } from "react-icons/md";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={3}
      paddingX={5}
      color="white"
      bg="brand.darkGray"
    >
      <IconButton
        aria-label="Home"
        icon={<MdHome />}
        colorScheme="white"
        size="lg"
      />
      
      <Text
        fontWeight="bold"
        letterSpacing={2}
      >
        churrotimes
      </Text>

      <IconButton
        aria-label="Settings"
        icon={<MdSettings />}
        colorScheme="white"
        size="lg"
      />
    </Flex>
  )
};

export default NavBar;