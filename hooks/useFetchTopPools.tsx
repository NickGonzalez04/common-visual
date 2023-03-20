
import { useEffect, useState } from 'react';
import { execute,
    getTopPoolsByTVLDocument,
    getTopPoolsByTVLQuery } from '../.graphclient';


export function useFetchTopPools() {
  const [topPools, setTopPools] = useState<getTopPoolsByTVLQuery[]>([]);

  useEffect(() => {
     execute(getTopPoolsByTVLDocument, {}).then((response) => {;
      setTopPools(response?.data.pools);
     });
  }, []);

  return topPools;
}