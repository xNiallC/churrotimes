import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const HeadingArea = ({
  title,
  aboveTitle,
} : {
  title: string,
  aboveTitle?: string,
}) => (
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
    <Heading size="md" color="white">
      {title}
    </Heading>
  </Flex>
);

export default HeadingArea;