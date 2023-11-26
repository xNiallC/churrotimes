import {
  useQuery, UseQueryResult
} from "react-query";
import { LiveThemeParkEntity } from "src/types";

const fetchData = async (entityId: string): Promise<LiveThemeParkEntity> => {
    const res = await fetch(`https://api.themeparks.wiki/v1/entity/${entityId}/live`);
    const data = await res.json();
    return data;
  };

const useLivePark = (entityId: string): UseQueryResult<LiveThemeParkEntity, Error> => {
  return useQuery<LiveThemeParkEntity, Error>(`liveThemeParkEntity-${entityId}`, () => fetchData(entityId));
};

export default useLivePark;