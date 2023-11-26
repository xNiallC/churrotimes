import {
  Flex,
  Spinner,
  Text,
} from '@chakra-ui/react';

const LoadingBox = ({
  text
} : {
  text?: string,
}) => (
  <Flex
    direction={{ base: 'column', md: 'column' }}
    justifyContent="center"
    alignItems="center"
    paddingY={6}
    color="white"
  >
    <Spinner />
    {text
      ? <Text color="white" marginTop={2}>{text}</Text> : null
    }
  </Flex>
);

export default LoadingBox;