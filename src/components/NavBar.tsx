import {
  Flex,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { MdHome, MdArrowBack } from "react-icons/md";
import {
  Link, useLocation,
} from "wouter";

const NavBar = () => {
  const [location] = useLocation();
  console.log(location);
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
      {location.indexOf('/park/') === 0
        ? (
          <IconButton
            aria-label="Home"
            icon={<MdHome />}
            colorScheme="white"
            size="lg"
            as={Link}
            href="/"
          />
        ) : (
          <IconButton
            aria-label="Home"
            icon={<MdHome />}
            colorScheme="white"
            size="lg"
            as={Link}
            href="/"
          />
        )
      }

      
      <Text
        fontWeight="bold"
        letterSpacing={2}
      >
        churrotimes
      </Text>

      {/* <IconButton
        aria-label="Settings"
        icon={<MdSettings />}
        colorScheme="white"
        size="lg"
      /> */}
      <div style={{ width: 48 }} />
    </Flex>
  )
};

export default NavBar;