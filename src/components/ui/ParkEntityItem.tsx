import {
  Flex,
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
  FlexProps,
} from '@chakra-ui/react';
import {
  LiveParkData
} from 'src/types';
import moment from 'moment';

const ParkEntityWrapper = ({ children, ...rest } : { children: React.ReactNode } & FlexProps) => (
  <Flex
    direction={{ base: 'row', md: 'row' }}
    borderRadius="md"
    backgroundColor="brand.darkGray"
    paddingY={3}
    paddingX={4}
    justify="space-between"
    align="center"
    wrap="wrap"
    {...rest}
  >
    {children}
  </Flex>
)

type ParkEntityItemProps = {
  entity: LiveParkData,
};

const ParkEntityItem = ({
  entity
} : ParkEntityItemProps) => {
  if (entity.entityType === 'ATTRACTION') {
    return (
      <ParkEntityWrapper>
        <Text color="white" flex={1}>
          {entity.name}
        </Text>
        <Stack
          spacing={1}
          backgroundColor="brand.midGray"
          padding={1}
          borderRadius="md"
        >
          {entity.queue
            ? (
              <Box
                padding={1}
                borderRadius="md"
              >
                {entity.status === 'CLOSED'
                  ? (
                    <Stat color="white">
                      <StatLabel>Closed</StatLabel>
                    </Stat>
                  ) : (
                    entity.queue?.STANDBY
                      ? (
                      <Stat color="white">
                        <StatLabel>Standby</StatLabel>
                        <StatNumber>{entity.queue.STANDBY.waitTime ?? 0}</StatNumber>
                      </Stat>
                      ) : null
                  )
                }

              </Box>
            ) : null
          }
        </Stack>
      </ParkEntityWrapper>
    )
  }
  if (entity.entityType === 'SHOW') {
    return (
      <ParkEntityWrapper
        direction={{ base: 'column', md: 'column' }}
        align="flex-start"
        gap={1}
      >
        <Text color="white" flex={1}>
          {entity.name}
        </Text>
        {entity.showtimes?.length
          ? (
            <Stack
              direction={{ base: 'row', md: 'row' }}
              spacing={1}
              overflowX="scroll"
              maxWidth="100%"
              paddingBottom={2}
            >
              {entity.showtimes.map((showtime) => (
                <Stack
                  spacing={1}
                  backgroundColor="brand.midGray"
                  padding={1}
                  borderRadius="md"
                >
                  <Box
                    key={showtime.startTime}
                    padding={1}
                    borderRadius="md"
                  >
                    <Stat color="white">
                      <StatLabel>{moment(showtime.startTime).format('HH:mm')}</StatLabel>
                    </Stat>
                  </Box>
                </Stack>
              ))}
            </Stack>
          ) : (
            <Box
              padding = { 1 }
              borderRadius = "md"
            >
            </Box>
          )}
      </ParkEntityWrapper>
    );
  }

  if (entity.entityType === 'RESTAURANT') {
    return (
      <ParkEntityWrapper>
        <Text color="white" flex={1}>
          {entity.name}
        </Text>
        <Stack
          spacing={1}
          backgroundColor="brand.midGray"
          padding={1}
          borderRadius="md"
        >
          <Box
            padding={1}
            borderRadius="md"
          >
            <Stat color="white">
              <StatLabel>{entity.status === 'OPERATING' ? 'Open' : 'Closed'}</StatLabel>
            </Stat>
          </Box>
        </Stack>
      </ParkEntityWrapper>
    )
  }

  return null;
};

export default ParkEntityItem;