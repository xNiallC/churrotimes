import {
  Flex,
  Button,
  Text,
  ButtonProps,
} from '@chakra-ui/react';

type ItemListProps = {
  title: string,
  buttonText: string,
  buttonProps?: ButtonProps & { href?: string },
}

const ListItem = ({
  title,
  buttonText,
  buttonProps = {},
} : ItemListProps) => (
  <Flex
    direction={{ base: 'row', md: 'row' }}
    borderRadius="md"
    backgroundColor="brand.darkGray"
    paddingY={3}
    paddingX={4}
    justify="space-between"
    align="center"
  >
    <Text color="white" flex={1}>
      {title}
    </Text>
    <Button
      backgroundColor="brand.midGray"
      color="white"
      {...buttonProps}
    >
      {buttonText}
    </Button>
  </Flex>
);

export default ListItem;
