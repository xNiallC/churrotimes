import { Destination } from "src/types";
import {
  Stack,
  Icon,
} from '@chakra-ui/react';
import { MdArrowRight } from "react-icons/md";
import {
  useDestinations,
} from 'src/waitTimes';
import {
  ORLANDO_DESTINATION_SLUGS
} from 'src/constants';
import {
  Link
} from "wouter";
import {
  ListItem
} from 'src/components/ui';

export const DestinationCard = ({ destination }: { destination: Destination }) => (
  <ListItem
    title={destination.name}
    buttonText="Parks"
    buttonProps={{
      as: Link,
      href: `/destinations/${destination.id}`,
      rightIcon: <Icon as={MdArrowRight} />,
    }}
  />
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