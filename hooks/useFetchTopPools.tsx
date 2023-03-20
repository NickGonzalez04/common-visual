
import { useEffect, useState } from 'react';
import { execute,
    TopPoolByTVLDocument,
    TopPoolByTVLQuery } from '../.graphclient';


export function useFetchTopPools() {
  const [topPools, setTopPools] = useState<TopPoolByTVLQuery[]>([]);

  useEffect(() => {
     execute(TopPoolByTVLDocument, {}).then((response) => {;
      setTopPools(response?.data.pools);
     });
  }, []);

  return topPools;
}