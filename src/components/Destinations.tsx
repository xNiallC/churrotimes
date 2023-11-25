import { Destination } from "src/types";
import {
  Flex,
  Stack,
  Button,
  Text,
  Icon,
} from '@chakra-ui/react';
import { MdArrowRight } from "react-icons/md";
import {
  useDestinations,
} from 'src/waitTimes';
import {
  ORLANDO_DESTINATION_SLUGS
} from 'src/constants';

export const DestinationCard = ({ destination }: { destination: Destination }) => (
  <Flex
    direction={{ base: 'row', md: 'row' }}
    borderRadius="md"
    backgroundColor="brand.darkGray"
    paddingY={3}
    paddingX={4}
    justify="space-between"
    align="center"
  >
    <Text color="white">
      {destination.name}
    </Text>
    <Button
      backgroundColor="brand.midGray"
      color="white"
      rightIcon={<Icon as={MdArrowRight} />}
    >
      Wait times
    </Button>
  </Flex>
)


const Destinations = () => {
  const { data = [] } = useDestinations();
  const orlandoDestinations = data.filter((destination) => ORLANDO_DESTINATION_SLUGS.includes(destination.slug));
  
  return (
    <Stack
      background="brand.gray"
      padding={1}
      spacing={1}
    >
      {orlandoDestinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </Stack>
  )
};

export default Destinations;