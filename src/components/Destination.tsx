import {
  Stack,
  Icon,
} from '@chakra-ui/react';
import { MdArrowRight } from "react-icons/md";
import {
  useDestinations,
} from 'src/waitTimes';
import { Park as ParkType } from "src/types";
import {
  Link, useParams,
} from "wouter";
import {
  LoadingBox, ErrorBox, ListItem, HeadingArea,
} from 'src/components/ui';

const Park = ({ park }: { park: ParkType }) => (
  <ListItem
    title={park.name}
    buttonText="Wait Times"
    buttonProps={{
      as: Link,
      href: `/parks/${park.id}`,
      rightIcon: <Icon as={MdArrowRight} />,
    }}
  />
)

const Destination = () => {
  const params = useParams();
  const destinationId = params.destinationId as string;


  const {
    data: destinations = [],
    status,
  } = useDestinations();

  const currDestination = destinations.find((destination) => destination.id === destinationId);

  if (status === 'loading') {
    return (
      <LoadingBox text="Loading destination..." />
    );
  }
  if (status === 'error' || !currDestination) {
    return (
      <ErrorBox text="Error loading destination." />
    );
  }
  return (
    <Stack
      background="brand.gray"
      spacing={0}
    >
      <HeadingArea
        aboveTitle='DESTINATION'
        title={currDestination.name}
      />
      <Stack
        background="brand.gray"
        padding={1}
        spacing={1}
      >
        {currDestination.parks.map((park) => (
          <Park key={park.id} park={park} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Destination;