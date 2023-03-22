import { useEffect, useState } from "react";
import {
  execute,
  getTopPoolsByTVLDocument,
  getTopPoolsByTVLQuery,
} from "../.graphclient";

export interface Pools {
  id: string;
  poolDayData: [
    {
      id: string;
      volumeUSD: string;
    }
  ];
  token0: {
    id: string;
    symbol: string;
    name: string;
  };
  token1: {
    id: string;
    symbol: string;
    name: string;
  };
  totalValueLocked: string;
}

export function useFetchTopPools() {
  const [topPools, setTopPools] = useState<getTopPoolsByTVLQuery[]>([]);
  const [poolsLoading, setPoolsLoading] = useState<boolean>(false);
  const [topPoolsData, setTopPoolsData] = useState<Pools[]>([]);

  useEffect(() => {
    setPoolsLoading(true);
    execute(getTopPoolsByTVLDocument, {})
      .then((response) => {
        setPoolsLoading(false);
        setTopPools(response?.data.pools);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const refetchTopPools = () => {
    setPoolsLoading(true);
    execute(getTopPoolsByTVLDocument, {})
      .then((response) => {
        setPoolsLoading(false);
        setTopPools(response?.data.pools);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { topPools, poolsLoading, refetchTopPools };
}
