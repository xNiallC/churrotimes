import {
  Flex,
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
} from '@chakra-ui/react';
import {
  LiveParkData
} from 'src/types';

type ParkEntityItemProps = {
  entity: LiveParkData,
};

const ParkEntityItem = ({
  entity
} : ParkEntityItemProps) => {
  if (entity.entityType === 'ATTRACTION') {
    return (
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
                {entity.queue?.STANDBY
                  ? (
                    <Stat color="white">
                      <StatLabel>Standby</StatLabel>
                      <StatNumber>{entity.queue.STANDBY.waitTime ?? 0}</StatNumber>
                    </Stat>
                  ) : null
                }
              </Box>
            ) : null
          }
        </Stack>
      </Flex>
    )
  }
  return null;
};

export default ParkEntityItem;