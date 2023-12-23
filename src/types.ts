export type Destination = {
  id: string,
  name: string,
  parks: Park[],
  slug: string,
}

export type Park = {
  id: string,
  name: string,
}

export type ThemeParkEntity = {
  id: string,
  name: string,
  entityType: string,
  parentId: string,
}

export type LiveThemeParkEntity = {
  id: string;
  name: string;
  entityType: 'DESTINATION';
  timezone: string;
  liveData: LiveParkData[];
};

export type ThemeParkEntityTypes = 'DESTINATION' | 'PARK' | 'SHOW' | 'ATTRACTION' | 'RESTAURANT' | 'RESORT';

export type LiveParkData = {
  id: string;
  name: string;
  entityType: ThemeParkEntityTypes;
  status: 'OPERATING' | 'DOWN' | 'CLOSED';
  lastUpdated: string;
  queue: {
    STANDBY: { waitTime: number };
    SINGLE_RIDER: { waitTime: number };
    RETURN_TIME: {
      state: 'AVAILABLE';
      returnStart: string;
      returnEnd: string;
    };
    PAID_RETURN_TIME?: {
      state: 'AVAILABLE';
      returnStart: string;
      returnEnd: string;
      price: {
        amount: number;
        currency: string;
      };
    };
    BOARDING_GROUP: {
      allocationStatus: 'AVAILABLE';
      currentGroupStart: string;
      currentGroupEnd: string;
      nextAllocationTime: string;
      estimatedWait: number;
    };
  };
  showtimes: {
    type: string;
    startTime: string;
    endTime: string;
  }[];
  operatingHours: {
    type: string;
    startTime: string;
    endTime: string;
  }[];
  diningAvailability: {
    partySize: number;
    waitTime: number;
  }[];
};