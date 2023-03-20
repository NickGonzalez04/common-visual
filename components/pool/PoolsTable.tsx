import { VStack } from "@chakra-ui/react"
import PoolCard from "./PoolCard";


const PoolsTable = ({topPools}: any) => {

    const formatLiquidity = (liquidity: number) => {
        return new Intl.NumberFormat("en-US",{ style: 'currency', currency: 'USD', maximumFractionDigits: 0, }).format(liquidity);
    }
   
    return (
        <VStack>
           {topPools.map((pool: any, index: number) => {
            return (
                <PoolCard key={index} id={pool.id} tvl={formatLiquidity(pool.totalValueLockedUSD)} />
           );
           })}
        </VStack>
    );
};

export default PoolsTable;