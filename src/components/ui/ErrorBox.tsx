import {
  Flex,
  Text,
  Icon,
} from '@chakra-ui/react';
import { MdError } from "react-icons/md";

const ErrorBox = ({
  text
}: {
  text?: string,
}) => (
  <Flex
    direction={{ base: 'column', md: 'column' }}
    justifyContent="center"
    alignItems="center"
    paddingY={6}
    color="white"
  >
    <Icon
      as={MdError}
      boxSize={6}
      color="white"
    />
    {text
      ? <Text color="white" marginTop={2}>{text}</Text> : null
    }
  </Flex>
);

export default ErrorBox;