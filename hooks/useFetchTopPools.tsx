
import { useEffect, useState } from 'react';
import { execute,
    getTopPoolsByTVLDocument,
    getTopPoolsByTVLQuery } from '../.graphclient';


export interface Pools {
  id: string;
  poolDayData: [
    {
      id: string;
      volumeUSD: string;
    }
  ],
  token0: {
    id: string;
    symbol: string;
    name: string;
  },
  token1: {
    id: string;
    symbol: string;
    name: string;
  },
  totalValueLocked: string;
}

export function useFetchTopPools() {
  const [topPools, setTopPools] = useState<getTopPoolsByTVLQuery[]>([]);
  const [poolsLoading, setPoolsLoading] = useState<boolean>(false);
  const [topPoolsData, setTopPoolsData] = useState<Pools[]>([]);
  // set isLoading state

  useEffect(() => {
    setPoolsLoading(true);
     execute(getTopPoolsByTVLDocument, {}).then((response) => {
        setPoolsLoading(false);
        setTopPools(response?.data.pools);
     }).catch((error) => {
      console.log(error);
      });;
  }, []);

  // topPools?.map((pool: any) => {
  //   console.log(pool);
  //   let poolData = {
  //     id: pool.id,
  //     tvl: pool.totalValueLockedUSD,
  //     volume24Hr: pool.poolDayData[0].volumeUSD
  //   }
  //   setTopPoolsData((topPoolsData: any) => [...topPoolsData, poolData]);
  // })
  // console.log(topPoolsData);

  return {topPools, poolsLoading };
}