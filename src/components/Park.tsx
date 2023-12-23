import {
  useMemo, useState,
} from 'react';
import {
  Stack,
  Tabs,
  TabPanel,
  TabPanels,
  Tab,
  TabList,
} from '@chakra-ui/react';
import {
  useParams,
} from "wouter";
import {
  LoadingBox, ErrorBox, ParkEntityItem, HeadingArea,
} from 'src/components/ui';
import { useDestinations } from 'src/waitTimes';
import useLivePark from 'src/waitTimes/useLivePark';
import {
  LiveParkData, ThemeParkEntityTypes,
} from 'types';
import moment from 'moment';

// In order to exclude limited time events e.g. Halloween Horror Nights, filter out anything not updated in the last 48 hours
const getActiveEntities = (liveData: LiveParkData[], entityType: ThemeParkEntityTypes) => {
  const filteredLiveData = liveData.filter((entity) => {
    if (entity.entityType !== entityType) {
      return false;
    }
    const lastUpdated = moment(entity.lastUpdated);
    const now = moment();
    const diff = now.diff(lastUpdated, 'hours');
    return diff < 48;
  });

  if (entityType === 'ATTRACTION') {
    // By default, sort attractions by highest wait time, then by open attractions first
    return filteredLiveData.sort((a, b) => {
      if (a.status === 'CLOSED' && b.status === 'OPERATING') {
        return 1;
      }
      if (a.status === 'OPERATING' && b.status === 'CLOSED') {
        return -1;
      }
      return (
        (b.queue?.STANDBY?.waitTime ?? 0) - (a.queue?.STANDBY?.waitTime ?? 0)
      )
    });
  }

  if (entityType === 'RESTAURANT') {
    // By default, sort restaurants by open first
    return filteredLiveData.sort((a, b) => {
      if (a.status === 'CLOSED' && b.status === 'OPERATING') {
        return 1;
      }
      if (a.status === 'OPERATING' && b.status === 'CLOSED') {
        return -1;
      }
      return 0;
    });
  }

  if (entityType === 'SHOW') {
    return filteredLiveData.filter((entity) => entity.showtimes?.length);
  }

  return filteredLiveData;
}

const Park = () => {
  const params = useParams();
  const parkId = params.parkId as string;

  const [tabIndex, setTabIndex] = useState(0);

  const {
    data: park = {
      liveData: [],
      name: '',
    },
    status,
  } = useLivePark(parkId);
  const { liveData } = park;

  const {
    data: destinations = [],
  } = useDestinations();

  const parentDestination = useMemo(() => destinations.find((destination) => destination.parks?.length && destination.parks.map((park) => park.id).includes(parkId)), [destinations, parkId]);

  const attractions = useMemo(() => getActiveEntities(liveData, 'ATTRACTION'), [liveData]);
  const shows = useMemo(() => getActiveEntities(liveData, 'SHOW'), [liveData]);
  const restaurants = useMemo(() => getActiveEntities(liveData, 'RESTAURANT'), [liveData]);

  console.log(restaurants);

  if (status === 'loading') {
    return (
      <LoadingBox text="Loading park..." />
    );
  }
  if (status === 'error' || !park) {
    return (
      <ErrorBox text="Error loading park." />
    );
  }
  return (
    <Stack
      background="brand.gray"
      spacing={0}
    >
      <HeadingArea
        aboveTitle='PARK'
        title={park.name}
        goBackLink={parentDestination ? `/destinations/${parentDestination.id}` : '/'}
      />

      <Tabs
        variant='soft-rounded'
        colorScheme='whiteAlpha'
        index={tabIndex}
      >
        <TabList
          color='white'
          marginX={2}

        >
          {attractions.length
            ? (
              <Tab color="white" onClick={() => setTabIndex(0)}>Attractions</Tab>
            ) : null
          }
          {shows.length
            ? (
              <Tab color="white" onClick={() => setTabIndex(1)}>Shows</Tab>
            ) : null
          }
          {restaurants.length
            ? (
              <Tab color="white" onClick={() => setTabIndex(2)}>Restaurants</Tab>
            ) : null
          }
        </TabList>

        <TabPanels padding={0}>
          <TabPanel padding={1}>
            <Stack
              background="brand.gray"
              padding={1}
              spacing={1}
            >
              {attractions.map((entity) => (
                <ParkEntityItem key={entity.id} entity={entity} />
              ))}
            </Stack>
          </TabPanel>
          <TabPanel padding={1}>
            <Stack
              background="brand.gray"
              padding={1}
              spacing={1}
            >
              {shows.map((entity) => (
                <ParkEntityItem key={entity.id} entity={entity} />
              ))}
            </Stack>
          </TabPanel>
          <TabPanel padding={1}>
            <Stack
              background="brand.gray"
              padding={1}
              spacing={1}
            >
              {restaurants.map((entity) => (
                <ParkEntityItem key={entity.id} entity={entity} />
              ))}
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  )
};

export default Park;