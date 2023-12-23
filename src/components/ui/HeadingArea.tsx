import {
  Flex,
  Heading,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";
import {
  Link,
} from "wouter";

const HeadingArea = ({
  title,
  aboveTitle,
  goBackLink,
} : {
  title: string,
  aboveTitle?: string,
  goBackLink?: string,
}) => (
  <Flex
    direction={{ base: 'row', md: 'row' }}
    justifyContent={{ base: 'space-between', md: 'space-between' }}
    alignItems="center"
    paddingX={2}
  >
    {goBackLink
      ? (
        <IconButton
          icon={<MdArrowBack color="white" />}
          as={Link}
          to={goBackLink}
          aria-label='Go Back'
          backgroundColor="brand.midGray"
        />
      ) : <div />
    }
    <Flex
      direction={{ base: 'column', md: 'column' }}
      justifyContent="center"
      alignItems="center"
      padding={2}
      marginY={2}
      color="white"
    >
      {aboveTitle
        ? <Text color="white">{aboveTitle}</Text> : null
      }
      <Heading size="md" color="white" textAlign="center">
        {title}
      </Heading>
    </Flex>
    <div style={{ width: 40 }} />
  </Flex>

);

export default HeadingArea;