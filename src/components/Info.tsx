import {
  Stack,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';

const Info = () => (
  <Stack
    background="brand.gray"
    spacing={0}
    align="center"
    padding={4}
    gap={8}
  >
    <Stack
      align="center"
      gap={2}
    >
      <Heading size="md" color="white" textAlign="center">
        churrotimes - Florida Wait Times
      </Heading>
      <Text color="white">
        Created by Niall Curtis
      </Text>
      <Link isExternal href="https://github.com/xNiallC" color="white" textDecorationLine="underline">
        View my GitHub!
      </Link>
    </Stack>

    <Text color="white">
      Wait times information provided by <Link isExternal textDecorationLine="underline" href="https://themeparks.wiki">ThemeParksWiki</Link>
    </Text>

    <Text color="white">
      This web application is open source! Feel free to view and download the source code <Link isExternal textDecorationLine="underline" href="https://github.com/xNiallC/churrotimes">here</Link>.
    </Text>
  </Stack>
);

export default Info;