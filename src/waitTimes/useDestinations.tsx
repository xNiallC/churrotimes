import {
  useQuery, UseQueryResult
} from "react-query";
import { Destination } from "src/types";

const fetchData = async (): Promise<Destination[]> => {
  const res = await fetch('https://api.themeparks.wiki/v1/destinations');
  const data = await res.json();
  return data.destinations;
};

const useDestinations = (): UseQueryResult<Destination[], Error> => {
  return useQuery<Destination[], Error>('destinations', fetchData);
};

export default useDestinations;