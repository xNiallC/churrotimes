import {
  useMemo,
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
import useLivePark from 'src/waitTimes/useLivePark';

const Park = () => {
  const params = useParams();
  const parkId = params.parkId as string;

  const {
    data: park,
    status,
  } = useLivePark(parkId);

  const attractions = useMemo(() => park?.liveData?.filter((entity) => entity.entityType === 'ATTRACTION') || [], [park]);
  const shows = useMemo(() => park?.liveData?.filter((entity) => entity.entityType === 'SHOW') || [], [park]);
  const restaurants = useMemo(() => park?.liveData?.filter((entity) => entity.entityType === 'RESTAURANT') || [], [park]);

  console.log(park);
  
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
      />

      <Tabs
        variant='soft-rounded'
        colorScheme='whiteAlpha'
      >
        <TabList
          color='white'
          marginX={2}

        >
          <Tab color="white">Attractions</Tab>
          <Tab color="white">Shows</Tab>
          <Tab color="white">Restaurants</Tab>
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
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  )
};

export default Park;